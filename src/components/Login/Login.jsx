import { useState } from "react"
import { FaUser, FaLock } from "react-icons/fa"


const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")



    const handleSubmit = (event) => {
        event.preventDefault()

        alert("Enviando os dados:" + username + "-" + password)

    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o Sistema</h1>
                <div className="input-field">
                    <input
                        type="email"
                        placeholder="E-mail"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input
                        type="password"
                        placeholder="Senha"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <FaLock className="icon" />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de min
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <button>Entrar</button>

                <div className="signup-link">
                    <p>Nâo tem uma conta?
                        <a href="#"> Resgistar</a>
                    </p>
                </div>

            </form>
        </div>
    )
}

export default Login