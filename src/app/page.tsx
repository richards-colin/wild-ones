import Header from "@/components/Header";
import HeroHeader from "../components/HeroHeader";
import Gallery from "@/components/Gallery";

const images = [
  { src: "/photos/headshot1.jpg", alt: "Portrait shot" },
  { src: "/photos/headshot2.jpg", alt: "Portrait shot" },
  { src: "/photos/headshot3.jpg", alt: "Portrait shot" },
];

export default function HomePage() {
  return (
    <main className="relative">
      {/* Header at the very top */}
      <Header />

      {/* Sections with IDs so nav links work */}
      <section id="home" className="min-h-screen">
        <HeroHeader />
      </section>

      <section id="gallery" className="min-h-screen bg-gray-50">
        {/* Pass images as prop here */}
        <Gallery images={images} />
      </section>

      <section id="about" className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-3xl text-center px-6">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600">
            I’m a passionate photographer capturing wildlife and landscapes from around the world. My goal is to
            preserve the beauty of nature through each photo I take.
          </p>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-3xl text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-gray-600 mb-6">
            Have a project in mind or want to purchase prints? Let’s connect.
          </p>
          <a
            href="mailto:youremail@example.com"
            className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}
