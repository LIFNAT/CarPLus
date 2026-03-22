import { useState } from "react";
import { supabase } from "./supabase"; // เช็ค Path ไฟล์ supabase.js ให้ถูกนะ
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      alert("Login Error: " + error.message);
    } else {
      
      
      navigate("/homead"); // ไปหน้า Home
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="p-8 bg-white shadow-xl rounded-2xl border border-gray-100">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          Login
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg w-72 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg w-72 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 shadow-lg shadow-blue-200 transition-all"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <button 
            onClick={() => navigate("/register")} 
            className="text-blue-600 hover:underline font-medium"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;