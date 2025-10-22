import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered successfully as ${username}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-80"
      >
        <h2 className="text-2xl font-pacifico text-pink-500 mb-6 text-center">
          Create Account ♡
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-pink-400 text-white p-2 rounded-lg hover:bg-pink-500 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
