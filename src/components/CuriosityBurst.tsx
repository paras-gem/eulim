"use client";

import { Atom, Sparkles } from "lucide-react";
import { useState } from "react";

const notes = ["Curiosity looks good on you.", "That was scientifically delightful.", "New idea unlocked!", "Keep asking the wonderful questions.", "A tiny celebration of big thinking."];

export default function CuriosityBurst() {
  const [count, setCount] = useState(0);
  const celebrate = () => setCount((current) => current + 1);
  return (
    <section className="burstSection" aria-labelledby="burst-title">
      <div className="burstCopy"><p className="sectionEyebrow">A LITTLE MOMENT FOR YOU</p><h2 id="burst-title">Celebrate<br /><em>curiosity.</em></h2><p>Every discovery starts with a little joy. Tap the orbit and send some good energy into the universe.</p><div className="burstNote" key={count}>{count ? notes[(count - 1) % notes.length] : "Ready when you are."}</div></div>
      <div className="burstStage">
        <button type="button" className={`burstOrb ${count ? "bursting" : ""}`} onClick={celebrate} aria-label="Celebrate curiosity"><Atom size={72} strokeWidth={1.1} /><span className="burstCore" /></button>
        {Array.from({ length: 18 }).map((_, index) => <i key={`${count}-${index}`} className={`burstParticle particle${index + 1}`} />)}
        <div className="burstHint"><Sparkles size={15} /> TAP THE ORBIT</div>
      </div>
    </section>
  );
}
