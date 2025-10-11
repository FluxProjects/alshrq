import { useState } from "react";
import Navbar from "@/components/Navbar";
import AdminLogin from "@/components/AdminLogin";
import ProductManagement from "@/components/ProductManagement";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username: string, password: string) => {
    console.log("Login attempt:", username);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    console.log("Logout");
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      {isAuthenticated ? (
        <ProductManagement onLogout={handleLogout} />
      ) : (
        <AdminLogin onLogin={handleLogin} />
      )}
    </div>
  );
}
