import { CssBaseline } from "@mui/material";
import { AuthGithubProvider } from "./contexts/GitHubAuth";
import { AuthGoogleProvider } from "./contexts/GoogleAuth";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <>
      <CssBaseline />
      <AuthGithubProvider>
        <AuthGoogleProvider>
          <AppRoutes></AppRoutes>
        </AuthGoogleProvider>
      </AuthGithubProvider>
    </>
  );
}

export default App;
