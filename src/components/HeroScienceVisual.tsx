"use client";

export default function HeroScienceVisual() {
  return (
    <div className="heroScienceVisual" aria-hidden="true">
      <div className="scienceOrbitField">
        <svg className="scienceAtom" viewBox="0 0 320 320" fill="none">
          <circle className="atomCore" cx="160" cy="160" r="14" />
          <g className="orbit orbitA">
            <ellipse cx="160" cy="160" rx="110" ry="44" />
            <circle className="electron" cx="270" cy="160" r="5" />
          </g>
          <g className="orbit orbitB">
            <ellipse cx="160" cy="160" rx="110" ry="44" transform="rotate(60 160 160)" />
            <circle className="electron" cx="215" cy="65" r="5" />
          </g>
          <g className="orbit orbitC">
            <ellipse cx="160" cy="160" rx="110" ry="44" transform="rotate(120 160 160)" />
            <circle className="electron" cx="105" cy="65" r="5" />
          </g>
        </svg>

        <svg className="scienceDna" viewBox="0 0 80 200" fill="none">
          {Array.from({ length: 10 }).map((_, i) => {
            const y = 10 + i * 20;
            const offset = i % 2 === 0 ? 0 : 1;
            return (
              <g key={i} className="dnaRung" style={{ animationDelay: `${i * 0.15}s` }}>
                <path d={`M${20 + offset * 8} ${y} Q40 ${y + 6} ${60 - offset * 8} ${y}`} />
                <circle cx={20 + offset * 8} cy={y} r="2.5" />
                <circle cx={60 - offset * 8} cy={y} r="2.5" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="scienceParticles">
        {[
          { top: "12%", left: "8%", delay: "0s" },
          { top: "28%", left: "82%", delay: "1.2s" },
          { top: "62%", left: "6%", delay: "2.4s" },
          { top: "78%", left: "88%", delay: "0.8s" },
          { top: "44%", left: "92%", delay: "1.8s" },
          { top: "18%", left: "58%", delay: "3s" },
        ].map((p, i) => (
          <span key={i} className="scienceParticle" style={{ top: p.top, left: p.left, animationDelay: p.delay }} />
        ))}
      </div>

      <div className="scienceLabels">
        <span className="scienceLabel" style={{ top: "14%", right: "6%", animationDelay: "0s" }}>
          H₂O
        </span>
        <span className="scienceLabel" style={{ bottom: "22%", left: "4%", animationDelay: "1.5s" }}>
          DNA
        </span>
        <span className="scienceLabel" style={{ top: "52%", right: "2%", animationDelay: "2.8s" }}>
          E=mc²
        </span>
      </div>
    </div>
  );
}
