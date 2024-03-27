const express = require("express")
const bodyParser = require("body-parser")
const axios = require("axios")
const cors = require("cors") // Importa o pacote CORS
require("dotenv").config()

const app = express()
const PORT = 3000

// Configura o CORS
app.use(
    cors({
        origin: "http://localhost:5173", // Permite requisições apenas deste origin
    })
)

app.use(bodyParser.json())

// Rota para receber solicitações do frontend
app.post("/submit-form", async (req, res) => {
    try {
        const response = await axios.post(
            "https://api.staticforms.xyz/submit",
            {
                ...req.body,
                accessKey: process.env.ACCESS_KEY,
            }
        )
        // Aqui você pode decidir o que fazer após o envio ser bem-sucedido
        // Por exemplo, enviar uma resposta JSON indicando sucesso
        res.status(200).json({ message: "Formulário enviado com sucesso!" })
    } catch (error) {
        console.error("Erro ao submeter o formulário:", error)
        res.status(500).send("Erro no servidor")
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
