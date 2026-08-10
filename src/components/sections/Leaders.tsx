import { leaders } from "@/lib/content";

export default function Leaders() {
  return (
    <section className="section leaders" id="leaders" data-reveal>
      <div className="container">
        <p className="eyebrow">Message from our leaders</p>
        <h2 className="sectionTitle">
          Words that <em>light the way.</em>
        </h2>

        <div className="leaderGrid">
          {leaders.map((leader, index) => (
            <article className="leaderCard" key={leader.name}>
              <span className="idx">0{index + 1}</span>
              <blockquote>“{leader.quote}”</blockquote>
              <footer className="leaderMeta">
                <h3>{leader.name}</h3>
                <p className="role">{leader.role}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
