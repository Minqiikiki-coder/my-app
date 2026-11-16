export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d1a] text-white font-sans overflow-x-hidden">
      {/* Stars background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-70"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: Math.random() * 3 + "s",
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          from { opacity: 0.2; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes tail-wag {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }
        @keyframes glow-blue {
          0%, 100% { box-shadow: 0 0 20px #60a5fa, 0 0 40px #3b82f6; }
          50% { box-shadow: 0 0 40px #93c5fd, 0 0 80px #60a5fa; }
        }
        @keyframes glow-pink {
          0%, 100% { box-shadow: 0 0 20px #e879f9, 0 0 40px #a855f7; }
          50% { box-shadow: 0 0 40px #f0abfc, 0 0 80px #e879f9; }
        }
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        .float-chris { animation: float 3s ease-in-out infinite; }
        .float-kiki { animation: float-delayed 3.5s ease-in-out infinite; }
        .tail { animation: tail-wag 1.5s ease-in-out infinite; }
        .glow-blue { animation: glow-blue 2s ease-in-out infinite; }
        .glow-pink { animation: glow-pink 2s ease-in-out infinite; }
        .blink { animation: blink 4s ease-in-out infinite; }
      `}</style>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-purple-400 text-sm tracking-widest uppercase mb-2">👻 Welcome to our world</p>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Chris & Kiki
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Two spooky little creatures on a mission. Say hi. We don&apos;t bite. (Much.)
          </p>
        </div>

        {/* Characters */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">

          {/* Chris */}
          <div className="flex flex-col items-center text-center group">
            <div className="float-chris glow-blue rounded-full p-2 mb-6">
              <svg width="160" height="200" viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ghost body */}
                <path d="M20 90 Q20 30 80 30 Q140 30 140 90 L140 160 Q120 145 100 160 Q80 175 60 160 Q40 145 20 160 Z"
                  fill="#93c5fd" opacity="0.9"/>
                {/* Inner glow */}
                <path d="M30 95 Q30 45 80 45 Q130 45 130 95 L130 150 Q115 138 100 150 Q80 162 60 150 Q45 138 30 150 Z"
                  fill="#bfdbfe" opacity="0.5"/>
                {/* Eyes */}
                <g className="blink" style={{transformOrigin: "60px 95px"}}>
                  <ellipse cx="60" cy="95" rx="10" ry="12" fill="#1e3a5f"/>
                  <circle cx="63" cy="91" r="3" fill="white" opacity="0.8"/>
                </g>
                <g className="blink" style={{transformOrigin: "100px 95px", animationDelay: "0.3s"}}>
                  <ellipse cx="100" cy="95" rx="10" ry="12" fill="#1e3a5f"/>
                  <circle cx="103" cy="91" r="3" fill="white" opacity="0.8"/>
                </g>
                {/* Smile */}
                <path d="M68 118 Q80 128 92 118" stroke="#1e3a5f" strokeWidth="3" strokeLinecap="round" fill="none"/>
                {/* Blush */}
                <ellipse cx="48" cy="108" rx="8" ry="5" fill="#93c5fd" opacity="0.6"/>
                <ellipse cx="112" cy="108" rx="8" ry="5" fill="#93c5fd" opacity="0.6"/>
                {/* Little arms */}
                <ellipse cx="22" cy="110" rx="10" ry="6" fill="#93c5fd" opacity="0.8" transform="rotate(-20 22 110)"/>
                <ellipse cx="138" cy="110" rx="10" ry="6" fill="#93c5fd" opacity="0.8" transform="rotate(20 138 110)"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-blue-300 mb-1">Chris</h2>
            <p className="text-blue-400 text-sm mb-3 tracking-wide">The Chill Ghost ✦</p>
            <p className="text-gray-400 text-sm max-w-xs">
              Floats through problems like they&apos;re nothing. Cool-headed, creative, and always glowing blue.
            </p>
          </div>

          {/* Kiki */}
          <div className="flex flex-col items-center text-center group">
            <div className="float-kiki glow-pink rounded-full p-2 mb-6">
              <svg width="160" height="220" viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Devil ears / horns */}
                <path d="M50 55 L38 25 L62 48 Z" fill="#c026d3"/>
                <path d="M110 55 L122 25 L98 48 Z" fill="#c026d3"/>
                <circle cx="44" cy="35" r="6" fill="#f0abfc" opacity="0.7"/>
                <circle cx="116" cy="35" r="6" fill="#f0abfc" opacity="0.7"/>
                {/* Head */}
                <ellipse cx="80" cy="90" rx="52" ry="50" fill="#e879f9" opacity="0.9"/>
                <ellipse cx="80" cy="90" rx="42" ry="40" fill="#f0abfc" opacity="0.5"/>
                {/* Cute bow on top */}
                <path d="M68 42 Q80 36 92 42 Q80 50 68 42 Z" fill="#ffffff" opacity="0.9"/>
                <circle cx="80" cy="44" r="4" fill="#c026d3"/>
                {/* Eyes - cute X style */}
                <text x="55" y="96" fontSize="18" fill="#581c87" fontWeight="bold" fontFamily="Arial">✕</text>
                <text x="90" y="96" fontSize="18" fill="#581c87" fontWeight="bold" fontFamily="Arial">✕</text>
                {/* Rosy cheeks */}
                <ellipse cx="52" cy="102" rx="10" ry="7" fill="#f472b6" opacity="0.5"/>
                <ellipse cx="108" cy="102" rx="10" ry="7" fill="#f472b6" opacity="0.5"/>
                {/* Little fangs smile */}
                <path d="M66 112 Q80 124 94 112" stroke="#581c87" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <path d="M74 112 L71 119" stroke="#581c87" strokeWidth="2" strokeLinecap="round"/>
                <path d="M86 112 L89 119" stroke="#581c87" strokeWidth="2" strokeLinecap="round"/>
                {/* Body */}
                <path d="M36 135 Q28 160 32 185 Q56 195 80 193 Q104 195 128 185 Q132 160 124 135 Q104 128 80 128 Q56 128 36 135 Z"
                  fill="#c026d3" opacity="0.85"/>
                {/* Dress detail */}
                <path d="M50 155 Q80 165 110 155 Q104 185 80 188 Q56 185 50 155 Z" fill="#e879f9" opacity="0.6"/>
                {/* Devil tail */}
                <path className="tail" style={{transformOrigin: "128px 170px"}}
                  d="M128 160 Q148 155 150 170 Q152 185 138 182 Q132 180 136 172 Q140 165 128 160 Z"
                  fill="#c026d3"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-pink-300 mb-1">Kiki</h2>
            <p className="text-pink-400 text-sm mb-3 tracking-wide">The Kuromi Devil 🎀</p>
            <p className="text-gray-400 text-sm max-w-xs">
              Mischievous, bold, and impossibly cute. Kiki brings the chaos — and the charm.
            </p>
          </div>
        </section>

        {/* Purpose */}
        <section className="mb-16 rounded-2xl border border-purple-800 bg-purple-950/30 p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🌙</span>
            <h2 className="text-xl font-bold text-purple-300">Our Purpose</h2>
          </div>
          <p className="text-gray-500 italic text-sm leading-relaxed">
            ✏️ &nbsp;Purpose coming soon — check back once we figure out what we&apos;re doing here.
          </p>
        </section>

        {/* Project Recap */}
        <section className="rounded-2xl border border-blue-800 bg-blue-950/30 p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📖</span>
            <h2 className="text-xl font-bold text-blue-300">The Project</h2>
          </div>
          <p className="text-gray-500 italic text-sm leading-relaxed">
            ✏️ &nbsp;Project recap coming soon — the story so far, in progress.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center mt-20 text-gray-600 text-xs">
          Made with 👻 by Chris & Kiki · MIT License
        </footer>
      </div>
    </main>
  );
}
