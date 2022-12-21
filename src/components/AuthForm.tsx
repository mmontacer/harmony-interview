import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import cross from "../assets/cross.svg";
import eye from "../assets/eye.svg";
import crossedEye from "../assets/eye-crossed.svg";

type Props = {};
export default function AuthForm({}: Props) {
  interface User {
    username: string;
    password: string;
  }
  const [credentials, setCredentials] = useState<User>({
    username: "",
    password: "",
  });
  const [passwordState, setPasswordState] = useState({
    isEyeCrossed: false,
    showPassword: "",
  });
  const [showError, setShowError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(credentials).some((value) => value === "")) return;
    credentials.password === "password"
      ? navigate("/protected")
      : setShowError(true);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (showError) {
      setShowError(false);
      setCredentials({ ...credentials, password: "" });
    }
  };
  return (
    <form action="submit" className="auth-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        onChange={handleChange}
        name="username"
        required
      />
      <div></div>
      <input
        type={passwordState.showPassword}
        placeholder="Mot de passe"
        onChange={handleChange}
        name="password"
        onClick={handleClick}
        value={credentials.password}
      ></input>
      {passwordState.isEyeCrossed ? (
        <img
          src={crossedEye}
          alt="Crossed eye"
          height={30}
          width={30}
          className="eye"
          onClick={() => {
            setPasswordState({
              showPassword: "null",
              isEyeCrossed: !passwordState.isEyeCrossed,
            });
          }}
        />
      ) : (
        <img
          src={eye}
          alt="Eye"
          height={30}
          width={30}
          className="eye"
          onClick={() => {
            setPasswordState({
              showPassword: "password",
              isEyeCrossed: !passwordState.isEyeCrossed,
            });
          }}
        />
      )}
      <div className="error-wrapper">
        {showError ? (
          <ErrorComponent errorMsg={"Mot de passe incorrect"} icon={cross} />
        ) : null}
      </div>
      <button type="submit" className="submit-btn">
        Se connecter
      </button>
    </form>
  );
}
