import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page from "./app/dashboard/page";
import LoginPage from "./app/login/page";
import SignupPage from "./app/signup/page";
import { Toaster } from "sonner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import BoardsPage from "./app/Boards/BoardsPage";

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/sign-up"
            element={
              <PublicRoute>
                <SignupPage />
              </PublicRoute>
            }
          />

          

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Page />
              </ProtectedRoute>
            }
          >
            <Route path="/boards" element={<BoardsPage/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
