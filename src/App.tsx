import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/SignIn';
import SignupPage from './pages/SignUp';

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
