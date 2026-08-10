import Image from "next/image";
import { leaders } from "@/lib/content";

export default function Leaders() {
  return (
    <section className="section leaders" data-reveal>
      <div className="container">
        <p className="eyebrow">Message from our leaders</p>
        <h2 className="sectionTitle">
          Words that <em>light the way.</em>
        </h2>

        <div className="leaderGrid">
          {leaders.map((leader, index) => (
            <article className="leaderCard" key={leader.name}>
              <div className="leaderPhoto">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                />
              </div>
              <div className="leaderBody">
                <span className="idx">0{index + 1}</span>
                <h3>{leader.name}</h3>
                <p className="role">{leader.role}</p>
                <blockquote>“{leader.quote}”</blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
