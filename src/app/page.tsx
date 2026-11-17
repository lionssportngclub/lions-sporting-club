export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="bg-green-900 text-white px-6 py-5">
        <h1 className="text-3xl font-bold">
          Lion's Sporting Club
        </h1>
        <p className="mt-2 text-green-100">
          Building Unity, Building Community
        </p>
        <p className="text-sm mt-1">
          Established in 2012
        </p>
      </header>

      <nav className="bg-green-800 text-white px-6 py-3 flex flex-wrap gap-6">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#activities">Activities</a>
        <a href="#committee">Committee</a>
        <a href="#contact">Contact</a>
      </nav>

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

      <section id="activities" className="bg-gray-50 px-6 py-14">
        <h2 className="text-2xl font-bold text-green-900 text-center mb-8">
          Our Activities | আমাদের কার্যক্রম
        </h2>
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl">Sports</h3>
            <p className="mt-2">Sports events and tournaments.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl">Social Work</h3>
            <p className="mt-2">Community support and social initiatives.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl">Community</h3>
            <p className="mt-2">Unity, friendship and development.</p>
          </div>
        </div>
      </section>

      <section id="committee" className="px-6 py-14 text-center">
        <h2 className="text-2xl font-bold text-green-900">
          Our Committee 2026–27
        </h2>
        <p className="mt-4">
          Meet the leadership of Lion's Sporting Club.
        </p>
      </section>

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

      <footer className="bg-green-950 text-white text-center p-6">
        <p>Lion's Sporting Club © 2026</p>
        <p className="text-sm mt-2">
          Building Unity, Building Community
        </p>
      </footer>
    </main>
  );
}
