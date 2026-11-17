"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkLogin() {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        router.replace("/admin/login");
        return;
      }

      setEmail(data.user.email || "");
      setLoading(false);
    }

    checkLogin();
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  if (loading) {
    return <main className="p-10 text-center">Loading...</main>;
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
        <button onClick={handleLogout} className="bg-white text-green-900 px-4 py-2 rounded-lg">
          Logout
        </button>
      </header>

      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Welcome, Admin</h2>
        <p className="text-gray-600 mb-7">{email}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sections.map((section) => (
            <div key={section} className="bg-white rounded-xl shadow p-6">
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
