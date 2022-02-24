import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import TaskContainer from "./TaskContainer";
import SvgComponent from "./Vector1";
import SvgComponent2 from "./Vector2";

const Login = () => {
  const [token, setToken] = useState("");
  const { isAuthenticated } = false;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(`https://tasks-crud.academlo.com/api/auth/login`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        setToken(response.data);
        isAuthenticated = true;
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  return (
    <div className="father-form">
      <SvgComponent />

      {token ? (
        <TaskContainer token={token} />
      ) : (
        <form
          className="card-form margin-top-middle son-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <span className="font-face-body padding-8px margin-bottom">
            Inicio de sesión:
          </span>
          <br></br>
          <label className="font-face-form">
            Correo electronico:
            <input
              className="input-width"
              type="text"
              placeholder="Escribe correo electronico"
              name="email"
              {...register("email")}
            />
          </label>
          <label className="font-face-form">
            Contraseña:
            <input
              className="input-width"
              type="text"
              placeholder="Al menos 8 caracteres"
              name="password"
              {...register("password")}
            />
          </label>
          <button type="submit">Aceptar</button>
        </form>
      )}
      <SvgComponent2 />
    </div>
  );
};

export default Login;
