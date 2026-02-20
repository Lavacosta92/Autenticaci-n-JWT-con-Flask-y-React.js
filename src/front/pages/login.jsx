import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
           
            sessionStorage.setItem("token", data.access_token);
            navigate("/private");
        } else {
            alert("Credenciales incorrectas");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "400px" }}>
            <h2 className="text-center">Iniciar Sesión</h2>
            <form onSubmit={handleLogin} className="border p-4 shadow-sm bg-light rounded">
                <input type="email" className="form-control mb-2" placeholder="Email"
                    onChange={e => setEmail(e.target.value)} required />
                <input type="password" className="form-control mb-2" placeholder="Contraseña"
                    onChange={e => setPassword(e.target.value)} required />
                <button type="submit" className="btn btn-primary w-100">Entrar</button>
            </form>
        </div>
    );
};