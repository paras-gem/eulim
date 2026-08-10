import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StellarCta() {
  return (
    <section className="section stellarCta" data-reveal>
      <div className="container inner">
        <p className="eyebrow center">New · Night sky protocol</p>
        <h2>
          A puzzle hidden among the <em>stars.</em>
        </h2>
        <p>
          Follow the constellation, ask for hints when you need them, and race the clock to reveal the hidden message.
        </p>
        <Link className="btn btnPrimary" href="/stellar-cipher">
          Enter Star Cipher <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}
