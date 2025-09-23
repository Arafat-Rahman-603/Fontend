import React from "react";

const siteName = "Chatterly";
const tagline = "Where conversations grow.";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h1 className="text-3xl font-extrabold">{siteName}</h1>
          <p className="mt-2 text-sm opacity-90">{tagline}</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <section>
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            {siteName} exists to bring people together in meaningful ways. We
            make it simple to share ideas, start conversations, and discover
            communities where you belong.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="Share"
            desc="Post updates, photos, and short notes."
            icon="📝"
          />
          <FeatureCard
            title="Chat"
            desc="One-on-one and group conversations."
            icon="💬"
          />
          <FeatureCard
            title="Discover"
            desc="Find people and groups who share your interests."
            icon="🔍"
          />
        </section>

        <section>
          <h3 className="text-2xl font-bold">Community Guidelines</h3>
          <ul className="mt-4 space-y-3 text-gray-600">
            <li>✅ Be respectful and kind</li>
            <li>🚫 No spam or fake accounts</li>
            <li>🔒 Protect your privacy</li>
          </ul>
        </section>
      </main>

      <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {siteName}. All rights reserved.
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc, icon }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <div className="text-3xl">{icon}</div>
      <h4 className="font-semibold mt-3">{title}</h4>
      <p className="text-sm text-gray-500 mt-1">{desc}</p>
    </div>
  );
}
