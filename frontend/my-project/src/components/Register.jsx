import { useState } from "react";
import { supabase } from "./supabase"; // เช็คว่าไฟล์ supabase.js อยู่โฟลเดอร์เดียวกันนะ

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // แก้คำผิดจาก passowrd
  const [loading, setLoading] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      alert(error.message);
    } else {
      // data.user.id คือ UUID ที่เราจะเอาไปใส่ในตาราง profiles
      console.log("User created with ID:", data.user?.id);
      alert("Check Your Email for verification!");

      // ตรงนี้คุณสามารถยิง API ไปที่ Backend (index.ts ที่เราแก้กันตะกี้)
      // เพื่อทำการบันทึก profiles ลง database ได้ทันทีครับ
    }
    setLoading(false);
  };

  // ต้องเอา return มาไว้ข้างในปีกกาของฟังก์ชัน Register
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            className="border p-2 rounded w-64"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="border p-2 rounded w-64"
            type="password"
            placeholder="Password"
            value={password} // แก้ให้ตรงกับ State
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
