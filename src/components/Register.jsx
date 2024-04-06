import React, { useState, useEffect } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./signup.svg";

// Styled components
const SignUpForm = styled.form`
  /* display: flex;
  flex-direction: column; */
  /* align-items: center;
  justify-content: center; */
  /* width: 100%;
  height: 100vh; */
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 150px;
  top: auto;
  bottom: auto;
  &.innerBox {
    @media only screen and (max-width: 800px) {
      right: 0;
      left: 0;
    }
  }
`;

const Body = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  min-height: 100vh;
  font-family: "Jost", sans-serif;
  background-color: #b49f8b;
  background-image: url("${backgroundImage}");
  &.OuterBox {
    @media only screen and (max-width: 800px) {
      background-image: none;
    }
  }
`;

const StyledTextField = styled(TextField)`
  width: 300px;
  margin: 7px auto !important;
  padding: 10px;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin: 10px auto !important;
  font-size: 2.3em;
  font-weight: bold;
  cursor: pointer;
  width: 300px;
`;

const schema = yup.object().shape({
  loginIdentifier: yup.string().required("Email or Username is required"),
  password: yup
    .string()
    .matches(/^[a-zA-Z0-9@_!$&\-.]{3,30}$/, "Invalid password")
    .required("Password is required"),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists, redirect if necessary
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      navigate("/");
    }
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      if (isRegister) {
        const response = await axios.post("/auth/register", {
          username: data.username,
          email: data.loginIdentifier,
          password: data.password,
          fullname: data.fullname,
        });

        console.log(response);
        const { status, message } = response.data;

        if (status === 1) {
          toast.success(message);
        } else {
          console.log(message);
          toast.error(message);
        }
      } else {
        // Login logic here
        const response = await axios.post("/auth/login", {
          username: data.loginIdentifier,
          email: data.loginIdentifier,
          password: data.password,
        });

        console.log(response);
        const { status, message, token } = response.data;
        console.log(token);
        if (status === 1) {
          localStorage.setItem("jwtToken", token);
          toast.success(message);
          navigate("/profile");
        } else {
          console.log(message);
          toast.error(message);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Some issue occurred during registration.");
    }
  };

  const toggleMode = () => {
    setIsRegister((prev) => !prev);
  };

  return (
    <Body className="OuterBox">
      <SignUpForm className="innerBox" onSubmit={handleSubmit(onSubmit)}>
        {isRegister && (
          <StyledTextField
            variant="filled"
            placeholder="Name"
            name="fullname"
            {...register("fullname")}
            error={!!errors.fullname}
            helperText={errors.fullname?.message}
          />
        )}
        <StyledTextField
          variant="filled"
          placeholder="Email or Username"
          name="loginIdentifier"
          {...register("loginIdentifier")}
          error={!!errors.loginIdentifier}
          helperText={errors.loginIdentifier?.message}
        />
        {isRegister && (
          <StyledTextField
            variant="filled"
            placeholder="Username"
            name="username"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        )}
        <StyledTextField
          variant="filled"
          placeholder="Password"
          name="password"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        {isRegister && (
          <StyledTextField
            variant="filled"
            placeholder="Confirm Password"
            name="ConfirmPassword"
            type="password"
            {...register("ConfirmPassword")}
            error={!!errors.ConfirmPassword}
            helperText={errors.ConfirmPassword?.message}
          />
        )}
        <StyledButton type="submit" variant="contained">
          {!isRegister ? "Login" : "Sign Up"}
        </StyledButton>
        <StyledButton onClick={toggleMode} variant="contained">
          {!isRegister ? "Switch to Sign Up" : "Switch to Login"}
        </StyledButton>
      </SignUpForm>
    </Body>
  );
}

export default Login;
