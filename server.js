import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const port = process.env.PORT || 8080
const buildPath = path.join(__dirname, 'build')

// Serve os arquivos estáticos gerados pelo build do Vite
app.use(express.static(buildPath))

// Fallback para SPA: qualquer rota retorna o index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
