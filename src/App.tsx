import { CssBaseline } from "@mui/material";
import { AuthEmailAndPasswordProvider } from "./contexts/EmailAndPasswordAuth";
import { AuthGithubProvider } from "./contexts/GitHubAuth";
import { AuthGoogleProvider } from "./contexts/GoogleAuth";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <>
      <CssBaseline />
      <AuthEmailAndPasswordProvider>
        <AuthGithubProvider>
          <AuthGoogleProvider>
            <AppRoutes></AppRoutes>
          </AuthGoogleProvider>
        </AuthGithubProvider>
      </AuthEmailAndPasswordProvider>
    </>
  );
}

export default App;
