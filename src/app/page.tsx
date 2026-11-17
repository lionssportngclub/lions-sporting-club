export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-green-900 text-white px-6 py-5">
        <h1 className="text-2xl font-bold">
          Lion&apos;s Sporting Club
        </h1>
        <p className="text-sm mt-1">
          Established in 2012
        </p>
      </header>

      <nav className="flex flex-wrap gap-5 px-6 py-4 bg-gray-100 text-sm font-semibold">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#committee">Committee</a>
        <a href="#activities">Activities</a>
        <a href="#contact">Contact</a>
      </nav>

      <section
        id="home"
        className="bg-green-800 text-white text-center px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-5">
          Welcome to Lion&apos;s Sporting Club
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Building Unity, Building Community.
          A journey of sports, friendship and social responsibility
          since 2012.
        </p>
      </section>

      <section id="about" className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-5">
          About Our Club
        </h2>
        <p className="max-w-2xl mx-auto leading-8">
          Lion&apos;s Sporting Club was founded in 2012.
          We are committed to sporting activities,
          social work and community development.
        </p>
      </section>

      <section id="activities" className="bg-gray-100 px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
          Our Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold mb-3">Sports</h3>
            <p>Promoting sports and teamwork.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold mb-3">Social Work</h3>
            <p>Working together for society.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold mb-3">Community</h3>
            <p>Building unity and friendship.</p>
          </div>
        </div>
      </section>

      <section id="committee" className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-4">
          Committee 2026–27
        </h2>
        <p>Meet the leadership and members of our club.</p>
      </section>

      <section id="contact" className="bg-green-900 text-white text-center px-6 py-12">
        <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
        <p>Follow Lion&apos;s Sporting Club on Facebook.</p>
        <a
          href="https://www.facebook.com/share/14zxHhQYh4G/"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 underline"
        >
          Visit our Facebook Page
        </a>
      </section>

      <footer className="bg-gray-950 text-white text-center p-5">
        <p>© 2026 Lion&apos;s Sporting Club. All rights reserved.</p>
      </footer>
    </main>
  );
      }
