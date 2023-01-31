import { FormControlLabel, Checkbox, useScrollTrigger } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../components/FormInput";
import { ReactComponent as GoogleLogo } from "../../assets/google.svg";
import { ReactComponent as GitHubLogo } from "../../assets/github.svg";
import { LinkItem, OauthMuiLink } from "../../shared/styled";
import LoadingButtonMui from "../../components/LoadingButtom";
import { loginSchema } from "../../schemas/SignIn";
import { useNavigate } from "react-router-dom";

import {
  BottomLoginContainer,
  LeftBox,
  LinkText,
  LoginBorder,
  LoginCard,
  LoginGrid,
  LoginInsideGrid,
  LoginOutsideContainer,
  LoginText,
  RightBox,
  TrustDeviceText,
} from "./style";
import styled from "styled-components";
import { AuthGoogleContext } from "../../contexts/GoogleAuth";
import { AuthGithubContext } from "../../contexts/GitHubAuth";
import { IRegisterLogin } from "../SignUp";
import { AuthEmailAndPasswordContext } from "../../contexts/EmailAndPasswordAuth";

// 👇 Infer the Schema to get the TS Type
type ILogin = TypeOf<typeof loginSchema>;

const LoginPage: FC = () => {

  const navigate = useNavigate();

  const { signInGoogle, signedGoogle } = useContext(AuthGoogleContext);
  const { signInGithub, signedGithub } = useContext(AuthGithubContext);
  const { signInEmail, signedEmailAndPassword, loading } = useContext(AuthEmailAndPasswordContext);

  async function loginGoogle() {
    await signInGoogle();
  }
  async function loginGithub() {
    await signInGithub();
  }
  const loginEmailAndPassword = async (RegisterLogin: IRegisterLogin) => {
    const { email, password } = RegisterLogin;
    await signInEmail(email, password);
  }
  if (signedGithub || signedGoogle || signedEmailAndPassword) {
    console.log("teste")
    navigate("/home");
  }

  // 👇 Default Values
  const defaultValues: ILogin = {
    email: "",
    password: "",
  };

  // 👇 The object returned from useForm Hook
  const methods = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  // 👇 Submit Handler
  const onSubmitHandler: SubmitHandler<ILogin> = (values: ILogin) => {
    const email = values?.email;
    const password = values?.password;
    loginEmailAndPassword({ email, password });
  };

  const LeftBoxContainer = styled.div`
    width: 100%;
    @media (min-width: 600px) {
      width: 50%;
      border-right: 1px solid #ddd;
    }
  `;

  const RightBoxContainer = styled.div`
    width: 100%;
    margin-top: 10px;
    @media (min-width: 600px) {
      width: 50%;
    }
  `;

  // 👇 JSX to be rendered
  return (
    <LoginOutsideContainer>
      <LoginGrid>
        <LoginCard>
          <FormProvider {...methods}>
            <LoginBorder>
              <LoginInsideGrid>
                <LeftBoxContainer>
                  <LeftBox
                    noValidate
                    autoComplete="off"
                    onSubmit={methods.handleSubmit(onSubmitHandler)}
                  >
                    <LoginText>Log into your account</LoginText>

                    <FormInput
                      label="Enter your email"
                      type="email"
                      name="email"
                      focused
                      required
                    />
                    <FormInput
                      type="password"
                      label="Password"
                      name="password"
                      required
                      focused
                    />
{/* 
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          aria-label="trust this device checkbox"
                          required
                          {...methods.register("persistUser")}
                        />
                      }
                      label={
                        <TrustDeviceText>Trust this device</TrustDeviceText>
                      }
                    /> */}

                    <LoadingButtonMui
                      loading={loading}
                      type="submit"
                      variant="contained"
                      sx={{
                        py: "0.8rem",
                        mt: 2,
                        width: "80%",
                        marginInline: "auto",
                      }}
                    >
                      Login
                    </LoadingButtonMui>
                  </LeftBox>
                </LeftBoxContainer>
                <RightBoxContainer>
                  <LoginText>Log in with another provider:</LoginText>
                  <RightBox>
                    <OauthMuiLink onClick={() => loginGoogle()}>
                      <GoogleLogo style={{ height: "2rem" }} />
                      Google
                    </OauthMuiLink>
                    <OauthMuiLink onClick={() => loginGithub()}>
                      <GitHubLogo style={{ height: "2rem" }} />
                      GitHub
                    </OauthMuiLink>
                  </RightBox>
                </RightBoxContainer>
              </LoginInsideGrid>
              <BottomLoginContainer>
                <LinkText margin="1rem">
                  Need an account?{" "}
                  <LinkItem to="/signup">Sign up here</LinkItem>
                </LinkText>
                <LinkText>
                  Forgot your{" "}
                  <LinkItem to="/forgotPassword">password?</LinkItem>
                </LinkText>
              </BottomLoginContainer>
            </LoginBorder>
          </FormProvider>
        </LoginCard>
      </LoginGrid>
    </LoginOutsideContainer>
  );
};

export default LoginPage;
