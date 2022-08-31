import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home/Home";
import { Login } from "./components/Pages/Login/Login";
import { Register } from "./components/Pages/Register/Register";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <div className="bg-slate-300 h-screen text-white flex">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
