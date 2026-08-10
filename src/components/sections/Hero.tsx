import { ArrowRight, CalendarDays, Clock3, MapPin, Sparkles } from "lucide-react";
import HeroScienceVisual from "@/components/HeroScienceVisual";
import { eventDate, eventMeta, stats } from "@/lib/content";

const event = new Date(eventDate);
const eventDay = String(event.getDate()).padStart(2, "0");
const eventMonthYear = event
  .toLocaleDateString("en-GB", { month: "short", year: "numeric" })
  .replace(" ", " ")
  .toUpperCase();

const tickerItems = [
  "Discovery Constructs",
  "Insight Showcase",
  "Visionary Concepts",
  "Future Ventures",
  "Science Exhibition 2026",
  "CHRIST University Delhi NCR",
];

export default function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="heroStars" aria-hidden="true" />
        <div className="heroGrid" aria-hidden="true" />
        <HeroScienceVisual />

        <div className="container heroInner">
          <div className="heroCopy">
            <span className="heroBadge">
              <Sparkles size={13} /> {eventMeta.club} · {eventMeta.venue.split(",")[0]}
            </span>
            <p className="heroEdition">{eventMeta.title}</p>
            <h1 className="heroTitle">
              Science lives
              <span className="heroTitleAccent"> in every question.</span>
            </h1>
            <p className="heroLead">
              Join students, creators, and curious minds at the annual exhibition where models, research, and bold ideas
              take centre stage.
            </p>
            <div className="heroActions">
              <a className="btn btnPrimary" href="#categories">
                Explore categories <ArrowRight size={17} />
              </a>
              <a className="btn btnGhost" href="#participate">
                Register now
              </a>
            </div>

            <div className="heroStats">
              {stats.map(({ value, suffix, label }) => (
                <div className="heroStat" key={label}>
                  <b>
                    {value}
                    {suffix}
                  </b>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="eventCard" aria-label="Event details">
            <div className="eventCardGlow" aria-hidden="true" />
            <div className="eventDate">
              <b>{eventDay}</b>
              <span>{eventMonthYear}</span>
            </div>
            <div className="eventMeta">
              <div>
                <CalendarDays size={17} />
                <span>{eventMeta.dateLabel}</span>
              </div>
              <div>
                <Clock3 size={17} />
                <span>{eventMeta.timeLabel}</span>
              </div>
              <div>
                <MapPin size={17} />
                <span>{eventMeta.venue}</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <div className="scienceTicker" aria-hidden="true">
        <div className="scienceTickerTrack">
          {Array.from({ length: 2 }).map((_, copy) => (
            <div className="scienceTickerGroup" key={copy}>
              {tickerItems.map((item) => (
                <span className="scienceTickerItem" key={`${copy}-${item}`}>
                  {item}
                  <i aria-hidden="true">◆</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
