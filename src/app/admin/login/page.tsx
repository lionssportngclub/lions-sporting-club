"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage("Login failed. Please check your email and password.");
      return;
    }

    window.location.href = "/admin";
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <form
        onSubmit={handleLogin}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-green-900 text-center">
          Admin Login
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Lion's Sporting Club
        </p>

        <label className="block font-semibold mb-2">Email Address</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg p-3 mb-5"
          placeholder="Admin email"
        />

        <label className="block font-semibold mb-2">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg p-3 mb-5"
          placeholder="Password"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-800 text-white rounded-lg p-3 font-bold"
        >
          {loading ? "Please wait..." : "Sign In"}
        </button>

        {message && (
          <p className="text-red-600 text-center mt-4">{message}</p>
        )}
      </form>
    </main>
  );
}
