import React, { useState } from "react"
import "./Contacts.css"

export default function Contacts() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    // Atualiza o estado com os valores dos inputs
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    // Função para lidar com a submissão do formulário
    const handleSubmit = async (e) => {
        e.preventDefault() // Previne o comportamento padrão do formulário

        try {
            // Submete os dados do formulário usando Fetch API
            const response = await fetch("http://localhost:3000/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                // Redireciona para matheustorres.com após sucesso
                window.location.href =
                    "https://jositorresnaildesigner.com/#contact"
            } else {
                // Trata respostas de erro
                alert("Houve um problema com o envio do formulário.")
            }
        } catch (error) {
            console.error("Erro ao enviar formulário:", error)
            alert("Erro ao enviar o formulário.")
        }
    }

    return (
        <section className="contact" id="contact">
            <h1 className="title">Contato</h1>
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        name="name"
                        className="input"
                        type="text"
                        placeholder="Digite seu nome"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <input
                        name="email"
                        className="input"
                        type="text"
                        placeholder="Digite seu email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <textarea
                        name="message"
                        className="textarea"
                        placeholder="Digite sua mensagem..."
                        value={formData.message}
                        onChange={handleChange}
                    />

                    <input className="button" type="submit" value="Enviar" />
                </form>
            </div>
        </section>
    )
}
