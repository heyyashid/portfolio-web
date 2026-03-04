export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">

      {/* MAIN HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden">

        {/* Background Image/Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl w-full">

          {/* Top Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm">
              SOCIAL MEDIA DESIGN
            </div>
            <div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm">
              PITCH DECK DESIGN
            </div>
            <div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm">
              BRANDING
            </div>
            <div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm">
              WEB DESIGN
            </div>
            <div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm">
              AMAZON LISTING IMAGE & EBC CONTENT DESIGN
            </div>
          </div>

          {/* Main Content - Single Column with Overlapping Image */}
          <div className="relative">

            {/* Name and Tagline */}
            <div className="text mb-8 mt-50 pl-5 ">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-[family-name:var(--font-montserrat)]">
                ASHID KV
              </h1>
              <p className="text-lg text-gray-300">
                Flutter Developer
              </p>
            </div>

            {/* Large DEVELOPER Text with Image Overlay */}
            <div className="relative flex justify-center items-center -mt-60 mb-10 h-[40rem]">
              {/* Profile Image - Now in the background */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <img
                  src="/image/profile.png"
                  alt="Profile"
                  className="w-96 h-[45rem] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Foreground Selective Outlined Text */}
              <div className="relative z-10 flex justify-center">
                <h2
                  className="text-8xl md:text-9xl lg:text-[12rem] font-black select-none flex"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  <span className="text-transparent bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-300 bg-clip-text">
                    DEV
                  </span>
                  <span
                    style={{
                      WebkitTextStroke: "2px #fbbf24",
                      color: "transparent"
                    }}
                  >
                    ELO
                  </span>
                  <span className="text-transparent bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-300 bg-clip-text">
                    PER
                  </span>
                </h2>
              </div>
            </div>

            {/* Visual Designer Title */}
            <div className="text-center mb-8 mt-40">
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text font-[family-name:var(--font-montserrat)]">
                VISUAL DESIGNER
              </h3>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-sm">
                <span className="w-4 h-4 bg-white rounded-sm flex items-center justify-center text-blue-600 text-xs font-bold">in</span>
                Lens And Layers
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg text-sm">
                <span className="w-4 h-4 bg-white rounded-sm flex items-center justify-center text-pink-600 text-xs font-bold">@</span>
                Lens_Layers
              </div>
            </div>

            {/* Description */}
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-300 leading-relaxed text-lg">
                Between creativity and strategy lies the space where I design. From building identities to shaping digital presence, my work revolves around clarity, structure, and visual storytelling. Through Lens & Layers, I help brands express who they are with purpose, precision, and personality.
              </p>
            </div>

            {/* Side Text Elements */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center">
              {/* <p className="text-sm text-gray-400 whitespace-nowrap">Design that speaks.</p> */}
            </div>

            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 origin-center">
              {/* <p className="text-sm text-gray-400 whitespace-nowrap">Visuals that convert.</p> */}
            </div>

          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text mb-8 font-[family-name:var(--font-montserrat)]">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I'm a visual designer passionate about creating meaningful brand experiences.
            My work spans across digital and print media, focusing on clean aesthetics and strategic thinking.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-center mb-12 font-[family-name:var(--font-montserrat)]">
            Featured Work
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition">
              <h3 className="text-2xl font-bold text-white mb-3">Brand Identity</h3>
              <p className="text-gray-400">Complete visual identity systems for modern brands.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition">
              <h3 className="text-2xl font-bold text-white mb-3">Digital Design</h3>
              <p className="text-gray-400">Web interfaces and digital experiences that engage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-amber-200 to-yellow-300 text-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-[family-name:var(--font-montserrat)]">Let's Create Together</h2>
          <p className="mb-8 text-lg">Ready to bring your vision to life?</p>
          <a
            href="mailto:your@email.com"
            className="inline-block px-8 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-black">
        © {new Date().getFullYear()} Ashid KV - All rights reserved
      </footer>

    </main>
  );
}