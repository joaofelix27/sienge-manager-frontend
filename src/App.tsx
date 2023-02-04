import { CssBaseline } from "@mui/material";
import { AuthEmailAndPasswordProvider } from "./contexts/EmailAndPasswordAuth";
import { AuthProvidersProvider } from "./contexts/ProvidersAuth";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <>
      <CssBaseline />
      <AuthProvidersProvider>
        <AuthEmailAndPasswordProvider>
              <AppRoutes></AppRoutes>
        </AuthEmailAndPasswordProvider>
      </AuthProvidersProvider>
    </>
  );
}

export default App;
