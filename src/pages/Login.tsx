import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  // Fungsi untuk menangani input
  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi login
  const handleLogin = (e:any) => {
    e.preventDefault();

    // Contoh validasi sederhana
    const { username, password } = formData;
    if (username === "admin" && password === "admin") {
      // Simpan status login ke localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);

      // Redirect ke halaman dashboard atau home
      navigate("/");
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <div className="h-[100vh] flex items-center">
      <form className="w-1/4 mx-auto" onSubmit={handleLogin}>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Username"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </form>
    </div>
  );
}
