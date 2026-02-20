import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Private = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container text-center mt-5">
      <h1>Bienvenido a tu zona privada 😎</h1>
      <p className="lead mt-4">
        Solo tú puedes ver esto porque estás autenticado.
      </p>
      <button onClick={handleLogout} className="btn btn-danger mt-3">
        Cerrar Sesión
      </button>
    </div>
  );
};
