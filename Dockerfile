# --- Estágio 1: Build do Aplicativo React ---
# Usa uma imagem Node.js para construir o app
FROM node:18-alpine AS builder

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código-fonte
COPY . .

# Constrói a versão de produção do aplicativo React
RUN npm run build

# --- Estágio 2: Servir com Express ---
# Usa uma imagem Node.js leve para servir os arquivos estáticos
FROM node:18-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia package.json para instalar dependências
COPY package*.json ./

# Instala apenas as dependências de produção
RUN npm install --production

# Copia o servidor Express
COPY server.js .

# Copia os arquivos de build do estágio anterior
COPY --from=builder /app/build ./build

# Expõe a porta 8080 (necessária para Google Cloud Run)
EXPOSE 8080

# Define a variável de ambiente PORT para 8080
ENV PORT=8080

# Comando para iniciar o servidor Express
CMD ["node", "server.js"]
