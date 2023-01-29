import {
  Container,
  Grid,
  Box,
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



const LoginContainer = styled.div`
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
  padding: 6rem 1rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-right: 3rem;
`;

const LoginTitle = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const LoginTrustCheckbox = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 400;
  color: #5e5b5d;
`;

const LoginButton = styled(LoadingButtonMui)`
  width: 80%;
  margin: auto;
  margin-top: 2rem;
`;

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

  // 👇 JSX to be rendered
  return (
    <LoginContainer
    >
      <LoginGrid
      >
        <LoginCard
        >
          <FormProvider {...methods}>
            <Grid
              container
              sx={{
                boxShadow: { sm: "0 0 5px #ddd" },
                py: "6rem",
                px: "1rem",
              }}
            >
              <Grid
                item
                container
                justifyContent="space-between"
                rowSpacing={5}
                sx={{
                  maxWidth: { sm: "45rem" },
                  marginInline: "auto",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ borderRight: { sm: "1px solid #ddd" } }}
                >
          <LoginForm
            onSubmit={methods.handleSubmit(onSubmitHandler)}
            noValidate
            autoComplete="off"
          >
                 <LoginTitle>Log into your account</LoginTitle>

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
                  </LoginForm>
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
                  <Box
                    display="flex"
                    flexDirection="column"
                    sx={{ paddingLeft: { sm: "3rem" }, rowGap: "1rem" }}
                  >
                    <OauthMuiLink href="">
                      <GoogleLogo style={{ height: "2rem" }} />
                      Google
                    </OauthMuiLink>
                    <OauthMuiLink href="">
                      <GitHubLogo style={{ height: "2rem" }} />
                      GitHub
                    </OauthMuiLink>
                  </Box>
                </Grid>
              </Grid>
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
            </Grid>
          </FormProvider>
        </LoginCard>
      </LoginGrid>
    </LoginContainer>
  );
};

export default LoginPage;
