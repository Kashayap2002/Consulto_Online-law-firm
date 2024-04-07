import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ServicesPage from "./components/ServicesPage";
// import SignUpPage from "./components/SignUpPage";
// import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/MainProfile";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./components/Register";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material";

import "./App.css";

const MUItheme = createTheme({
  typography: {},
  palette: {
    primary: {
      main: "#927b67",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <MUIThemeProvider theme={MUItheme}>
      <Toaster />
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            {/* <Route path="/signup" element={<SignUpPage />} /> */}
            <Route path="/signup" element={<Register />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </MUIThemeProvider>
  );
}

export default App;
