import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./app/Firebase"
import store from "./app/store";
import Header from "./Components/Header";
import AuthContextProvider from "./Context/AuthContext";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import GoogleAuth from "./features/auth/GoogleAuth";

export default function App() {
  console.log("App");
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthContextProvider>
          <Header />
          <main className="bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-50">
            <Routes>
              <Route path="/login" element={<GoogleAuth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<h1>Home</h1>} />
            </Routes>
          </main>
        </AuthContextProvider>
      </BrowserRouter>
    </Provider>
  )
}
