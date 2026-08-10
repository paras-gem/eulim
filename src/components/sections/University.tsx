import { ArrowRight } from "lucide-react";
import { campuses, milestones } from "@/lib/content";

export default function University() {
  return (
    <section className="section container" data-reveal>
      <div className="uniGrid">
        <div>
          <p className="eyebrow">CHRIST (Deemed to be University)</p>
          <h2 className="sectionTitle">
            Excellence and service, <em>across India.</em>
          </h2>
        </div>
        <div>
          <p className="sectionLead">
            CHRIST (Deemed to be University) is a community shaped by academic excellence, service, and a commitment to
            developing thoughtful, responsible citizens—creating space for students to learn deeply and contribute
            meaningfully to the world.
          </p>
          <a className="uniLink" href="https://www.christuniversity.in/" target="_blank" rel="noreferrer">
            Visit the official university website <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="campusList">
        {campuses.map((c) => (
          <span key={c.name} className={c.primary ? "primary" : undefined}>
            {c.name}
          </span>
        ))}
      </div>

      <div className="milestoneGrid">
        {milestones.map(({ number, title, body, icon: Icon }) => (
          <article className="milestoneCard" key={number}>
            <div className="msTop">
              <span>{number}</span>
              <Icon size={22} strokeWidth={1.6} />
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
