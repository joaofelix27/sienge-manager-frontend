import { CssBaseline } from "@mui/material";
import { AuthEmailAndPasswordProvider } from "./contexts/EmailAndPasswordAuth";
import { AuthFacebookProvider } from "./contexts/FacebookAuth";
import { AuthGithubProvider } from "./contexts/GitHubAuth";
import { AuthGoogleProvider } from "./contexts/GoogleAuth";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <>
      <CssBaseline />
      <AuthFacebookProvider>
        <AuthEmailAndPasswordProvider>
          <AuthGithubProvider>
            <AuthGoogleProvider>
              <AppRoutes></AppRoutes>
            </AuthGoogleProvider>
          </AuthGithubProvider>
        </AuthEmailAndPasswordProvider>
      </AuthFacebookProvider>
    </>
  );
}

export default App;
