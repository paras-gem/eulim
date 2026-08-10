import { ArrowRight, CalendarDays, Clock3, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="heroGrid" aria-hidden="true" />
        <div className="container heroInner">
          <div className="heroCopy">
            <span className="heroBadge">
              <Sparkles size={13} /> School of Sciences · CHRIST Delhi NCR
            </span>
            <p className="heroEdition">EULIM SCIENCE CLUB · 2025</p>
            <h1 className="heroTitle">
              Where curiosity <em>becomes impact.</em>
            </h1>
            <p className="heroLead">
              A celebration of bold questions, bright ideas, and the students shaping what comes next.
            </p>
            <div className="heroActions">
              <a className="btn btnPrimary" href="#categories">
                Explore categories <ArrowRight size={17} />
              </a>
              <a className="btn btnGhost" href="#registration">
                Register
              </a>
            </div>
          </div>

          <aside className="eventCard" aria-label="Event details">
            <div className="eventDate">
              <b>09</b>
              <span>OCT 2025</span>
            </div>
            <div className="eventMeta">
              <div>
                <CalendarDays size={17} />
                <span>Thursday, 2025</span>
              </div>
              <div>
                <Clock3 size={17} />
                <span>11:15 am onwards</span>
              </div>
              <div>
                <MapPin size={17} />
                <span>Synergy Square, CHRIST Delhi NCR</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div>
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              IMAGINE <i>✦</i> INVESTIGATE <i>✦</i> INVENT <i>✦</i> INSPIRE <i>✦</i>{" "}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
