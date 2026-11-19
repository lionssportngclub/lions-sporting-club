"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Member = {
  id: string;
  name_bn: string | null;
  name_en: string | null;
  designation_bn: string | null;
};

export default function Home() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCommittee() {
      const { data, error } = await supabase
        .from("committee_members")
        .select("id, name_bn, name_en, designation_bn");

      if (!error && data) {
        setMembers(data as Member[]);
      }

      setLoading(false);
    }

    loadCommittee();
  }, []);

  const advisors = [
    "Abdul Mannan Khan (Kuwait Probashi)",
    "Moslem Uddin Khan",
    "Babul Kazi",
    "Shahjahan Khan",
    "Abdul Mannan Khan",
    "Md Mamun Sardar",
    "Amir Kazi",
    "Asad Khan",
    "Engineer Rubel Khan",
    "Engineer Kazi Toslim",
    "Sidiuqe Rari",
    "Moyna Khanum",
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* HEADER */}
      <header className="Amir900 text-white px-6 py-5">
        <h1 className="text-3xl font-bold">Lion's Sporting Club</h1>
        <p className="mt-2 text-green-100">
          Building Unity, Building Community
        </p>
        <p className="text-sm mt-1">Established in 2012</p>
      </header>

      {/* NAVIGATION */}
      <nav className="bg-green-800 text-white px-6 py-3 flex flex-wrap gap-6">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#activities">Activities</a>
        <a href="#tournament-history">Tournament History</a>
        <a href="#advisory">Advisory Council</a>
        <a href="#committee">Committee</a>
        <a href="#teams">Teams</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* HOME */}
      <section id="home" className="bg-green-50 px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-green-900">
          Welcome to Lion's Sporting Club
        </h2>
        <p className="mt-5 text-lg">
          Sports, Social Work & Community Development
        </p>
        <p className="mt-3 text-gray-600">
          ঐক্য গড়ি, সম্প্রীতি গড়ি, সমাজ গড়ি।
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-14 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-green-900 mb-4">
          About Our Club | আমাদের সম্পর্কে
        </h2>
        <p className="leading-8">
          Lion's Sporting Club was established in 2012.
          We are committed to promoting sports, social activities,
          unity and community development.
        </p>
      </section>

      {/* ACTIVITIES */}
      <section id="activities" className="bg-gray-50 px-6 py-14">
        <h2 className="text-2xl font-bold text-green-900 text-center mb-8">
          Our Activities | আমাদের কার্যক্রম
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl">Sports</h3>
            <p className="mt-2">Sports events and tournaments.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl">Social Work</h3>
            <p className="mt-2">
              Community support and social initiatives.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl">Community</h3>
            <p className="mt-2">
              Unity, friendship and development.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl text-green-800">
              Achievement
            </h3>
            <p className="mt-2">
              Our club achievements, awards and recognitions.
            </p>
          </div>

        </div>
      </section>

      {/* TOURNAMENT HISTORY */}
      <section id="tournament-history" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-800">
              Tournament History
            </h2>
            <p className="text-gray-600 mt-2">
              Lion's Sporting Club — Our Cricket Journey
            </p>
          </div>

          {/* SEASON 01 */}
          <div className="max-w-2xl mx-auto bg-green-50 rounded-2xl shadow-md p-6 border-l-4 border-green-600">
            <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
              <h3 className="text-xl font-bold text-green-800">
                Lion's Sporting Club Cricket Tournament
              </h3>
              <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Season – 01
              </span>
            </div>

            <p className="text-gray-600 mb-4">2023</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-gray-500">Champion</p>
                <p className="font-bold text-green-800">
                  Lion's Sporting Club
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-gray-500">Runner-up</p>
                <p className="font-bold text-gray-800">
                  Chirakhola Young Star Sporting Club
                </p>
              </div>
            </div>
          </div>

          {/* SEASON 02 */}
          <div className="max-w-2xl mx-auto bg-green-50 rounded-2xl shadow-md p-6 border-l-4 border-green-600 mt-6">
            <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
              <h3 className="text-xl font-bold text-green-800">
                Lion's Sporting Club Cricket Tournament
              </h3>
              <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Season – 02
              </span>
            </div>

            <p className="text-gray-600 mb-4">2024</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-gray-500">Champion</p>
                <p className="font-bold text-green-800">
                  Unlimited Friendship
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-gray-500">Runner-up</p>
                <p className="font-bold text-gray-800">
                  Lion's Sporting Club
                </p>
              </div>
            </div>

            {/* SEASON 02 SPONSORS */}
            <div className="bg-white rounded-xl p-4 mt-4">
              <h4 className="text-sm font-bold text-green-700 mb-3">
                SEASON 02 SPONSORS
              </h4>

              <div className="space-y-2">
                <p className="font-semibold text-gray-800">
                  মাশরাফি মেডিকেল হল
                </p>
                <p className="font-semibold text-gray-800">
                  T24 Technology
                </p>
                <p className="font-semibold text-gray-800">
                  আবদুল মন্নান খান (কুয়েত প্রবাসী)
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ADVISORY COUNCIL */}
      <section id="advisory" className="px-6 py-14 bg-green-50">
        <h2 className="text-2xl font-bold text-green-900 text-center">
          Advisory Council | উপদেষ্টা পরিষদ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto mt-10">
          {advisors.map((name, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 text-center shadow-sm border border-green-100"
            >
              <h3 className="font-bold text-green-900">{name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* EXECUTIVE COMMITTEE */}
      <section id="committee" className="px-6 py-14 bg-white">
        <h2 className="text-2xl font-bold text-green-900 text-center">
          Our Committee 2026–27
        </h2>
        <p className="mt-3 text-center text-gray-600">
          Lion's Sporting Club-এর কার্যনির্বাহী কমিটি
        </p>

        {loading ? (
          <p className="text-center mt-8">Loading Committee...</p>
        ) : members.length === 0 ? (
          <p className="text-center mt-8 text-gray-500">
            Committee members will be published soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto mt-10">
            {members.map((member) => (
              <div
                key={member.id}
                className="bg-green-50 border border-green-100 rounded-xl p-6 text-center shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-green-800 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {(member.name_bn || member.name_en || "L").charAt(0)}
                </div>

                <h3 className="font-bold text-lg text-green-900">
                  {member.name_bn || member.name_en}
                </h3>

                {member.name_en && member.name_bn && (
                  <p className="text-sm text-gray-500 mt-1">
                    {member.name_en}
                  </p>
                )}

                <p className="mt-2 text-green-800">
                  {member.designation_bn}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* TEAMS */}
      <section id="teams" className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-800">
              Our Teams
            </h2>
            <p className="text-gray-600 mt-2">
              Lion's Sporting Club — 4 Teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-green-600">
              <h3 className="text-xl font-bold text-green-800 mb-3">Lion's Zenith</h3>
              <div className="space-y-1">
                {["Nazrul (C)", "Habib", "Rayhan Jr", "Johirul", "Imran", "Sohag", "Rayhan", "Sohrab"].map((name, i) => (
                  <p key={i}>{i + 1}. {name}</p>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500">Ex: Khoka</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-green-600">
              <h3 className="text-xl font-bold text-green-800 mb-3">Lion's Dominion</h3>
              <div className="space-y-1">
                {["Ismail (C)", "Abubakar", "Shakib", "Alamin Rari", "Nahid", "Hasan", "Imam", "Joynal Jr"].map((name, i) => (
                  <p key={i}>{i + 1}. {name}</p>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500">Extra: Mamun</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-green-600">
              <h3 className="text-xl font-bold text-green-800 mb-3">Lion's Vanguard</h3>
              <div className="space-y-1">
                {["Mohasin", "Rifat", "Shakirul", "Alamin", "Sofikul", "Asraf", "Jahid", "Sojib"].map((name, i) => (
                  <p key={i}>{i + 1}. {name}</p>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500">Ex: Sabbir</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-green-600">
              <h3 className="text-xl font-bold text-green-800 mb-3">Lion's Future Inferno</h3>
              <div className="space-y-1">
                {["Mahbub", "Mahim", "Siyam (C)", "Sabbir", "Solaiman", "Ajijul", "Shahin", "Rayhan"].map((name, i) => (
                  <p key={i}>{i + 1}. {name}</p>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500">Ex: Jihad</p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-green-50 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-green-900">
          Contact Us
        </h2>
        <a
          href="https://www.facebook.com/share/14zxHhQYh4G/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 bg-green-800 text-white px-6 py-3 rounded-lg"
        >
          Visit Our Facebook Page
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-950 text-white text-center p-6">
        <p>Lion's Sporting Club © 2026</p>
        <p className="text-sm mt-2">
          Building Unity, Building Community
        </p>
      </footer>

    </main>
  );
      }
