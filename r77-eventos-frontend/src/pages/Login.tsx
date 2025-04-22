import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import styles from '../styles/pages/Login.module.css';

export default function Login() {
  // Verificando se o token já está armazenado no localStorage
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enviando requisição de login...");
    try {
      const response = await api.post("/auth/login", { email, password });
      console.log(response);
      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      navigate("/");
    } catch (err: any) {
      console.error("Erro ao fazer login:", err);
  
      // Se o backend retornar um erro com message, exibe ela:
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Erro inesperado. Tente novamente mais tarde.");
      }
    }
  };
  
  

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Login</h2>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Entrar</button>
      </form>
    </div>
  );
}
