# --- Estágio 1: Build do Aplicativo React + Vite ---
FROM node:20-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm ci

# Copia o código-fonte
COPY . .

# Constrói a aplicação (sem variáveis de ambiente, serão injetadas em runtime)
RUN npm run build

# --- Estágio 2: Servir com Express ---
FROM node:20-alpine

WORKDIR /app

# Copia o package.json para manter "type": "module" e instala apenas o Express
COPY package.json ./
RUN npm install --omit=dev --ignore-scripts express

# Copia o servidor Express
COPY server.js .

# Copia os arquivos de build do estágio anterior (pasta dist do Vite)
COPY --from=builder /app/dist ./dist

# Expõe a porta 8080 (padrão do Cloud Run)
EXPOSE 8080

# Define a variável de ambiente PORT
ENV PORT=8080

# Comando para iniciar o servidor
CMD ["node", "server.js"]

