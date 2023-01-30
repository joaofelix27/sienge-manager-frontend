import { CssBaseline } from '@mui/material';
import { AuthGoogleProvider } from './contexts/GoogleAuth';
import AppRoutes from './routes/routes';

function App() {
  return (
    <>
      <CssBaseline />
      <AuthGoogleProvider>
      <AppRoutes></AppRoutes>
      </AuthGoogleProvider>
    </>
  );
}

export default App;
