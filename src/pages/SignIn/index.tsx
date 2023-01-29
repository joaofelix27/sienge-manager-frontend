import {
  Grid,
  Typography,
  Stack,
  Link as MuiLink,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { FC } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../components/FormInput";
import { ReactComponent as GoogleLogo } from "../../assets/google.svg";
import { ReactComponent as GitHubLogo } from "../../assets/github.svg";
import { LinkItem, OauthMuiLink } from "../../shared/styled";
import LoadingButtonMui from "../../components/LoadingButtom";
import { loginSchema } from "../../schemas/SignIn";
import styled from "styled-components";

// 👇 Infer the Schema to get the TS Type
type ILogin = TypeOf<typeof loginSchema>;

const LoginPage: FC = () => {
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
    console.log(values);
  };

  const LoginOutsideContainer = styled.div`
  height: 100vh;
  background-color: #f4f4f4;
`;

const LoginGrid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginCard = styled.div`
  max-width: 70rem;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 5px #ddd;
`;

const LoginBorder = styled.div`
  box-shadow: 0 0 5px #ddd;
  padding: 6rem 1rem;
`;

const LoginInsideGrid = styled.div`
  display:flex;
  justify-content:space-between;
  row-gap: 10;
  max-width:45rem;
  margin-inline:auto;
`;

const LeftBox = styled.form`
  display:flex;
  flex-direction:column;
  width:360px;
  padding-right:3rem;
`;

const RightBox = styled.div`
  display:flex;
  flex-direction:column;
  width:360px;
  padding-left:3rem;
  row-gap:1rem;
`;

  // 👇 JSX to be rendered
  return (
    <LoginOutsideContainer
    >
      <LoginGrid
      >
        <LoginCard
        >
          <FormProvider {...methods}>
            <LoginBorder
            >
              <LoginInsideGrid
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ borderRight: { sm: "1px solid #ddd" } }}
                >
                  <LeftBox
                    noValidate
                    autoComplete="off"
                    onSubmit={methods.handleSubmit(onSubmitHandler)}
                  >
                    <Typography
                      variant="h6"
                      component="h1"
                      sx={{ textAlign: "center", mb: "1.5rem" }}
                    >
                      Log into your account
                    </Typography>

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
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "0.8rem",
                            fontWeight: 400,
                            color: "#5e5b5d",
                          }}
                        >
                          Trust this device
                        </Typography>
                      }
                    />

                    <LoadingButtonMui
                      loading={false}
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
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h6"
                    component="p"
                    sx={{
                      paddingLeft: { sm: "3rem" },
                      mb: "1.5rem",
                      textAlign: "center",
                    }}
                  >
                    Log in with another provider:
                  </Typography>
                  <RightBox
                  >
                    <OauthMuiLink href="">
                      <GoogleLogo style={{ height: "2rem" }} />
                      Google
                    </OauthMuiLink>
                    <OauthMuiLink href="">
                      <GitHubLogo style={{ height: "2rem" }} />
                      GitHub
                    </OauthMuiLink>
                  </RightBox>
                </Grid>
              </LoginInsideGrid>
              <Grid container justifyContent="center">
                <Stack sx={{ mt: "3rem", textAlign: "center" }}>
                  <Typography sx={{ fontSize: "0.9rem", mb: "1rem" }}>
                    Need an account?{" "}
                    <LinkItem to="/signup">Sign up here</LinkItem>
                  </Typography>
                  <Typography sx={{ fontSize: "0.9rem" }}>
                    Forgot your{" "}
                    <LinkItem to="/forgotPassword">password?</LinkItem>
                  </Typography>
                </Stack>
              </Grid>
            </LoginBorder>
          </FormProvider>
        </LoginCard>
      </LoginGrid>
    </LoginOutsideContainer>
  );
};

export default LoginPage;
