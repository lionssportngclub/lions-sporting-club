"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    async function checkAdmin() {
      const { data: authData, error: authError } =
        await supabase.auth.getUser();

      if (authError || !authData.user) {
        router.replace("/admin/login");
        return;
      }

      const { data: profile, error } = await supabase
        .from("admin_profiles")
        .select("role")
        .eq("id", authData.user.id)
        .maybeSingle();

      if (error || !profile || profile.role !== "admin") {
        setStatus("denied");
        return;
      }

      setEmail(authData.user.email || "");
      setStatus("allowed");
    }

    checkAdmin();
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  if (status === "checking") {
    return (
      <main className="p-10 text-center">
        Checking admin access...
      </main>
    );
  }

  if (status === "denied") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold text-red-700">
          Access Denied
        </h1>
        <p className="mt-3">You are not an authorized administrator.</p>
        <button
          onClick={handleLogout}
          className="mt-5 bg-green-900 text-white px-6 py-3 rounded-lg"
        >
          Logout
        </button>
      </main>
    );
  }

  const sections = [
    "Committee Management",
    "News Management",
    "Events Management",
    "Photo Gallery",
    "Website Settings",
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-green-900 text-white p-5 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <p className="text-sm">Lion's Sporting Club</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-white text-green-900 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </header>

      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Welcome, Admin</h2>
        <p className="text-gray-600 mb-7">{email}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sections.map((section) => (
            <div
              key={section}
              className="bg-white rounded-xl shadow p-6"
            >
              <h3 className="font-bold text-lg text-green-900">
                {section}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Management section coming soon.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
