export default function About() {
  return (
    <section className="section container" id="about" data-reveal>
      <div className="aboutGrid">
        <div>
          <p className="eyebrow">The Eulim experience</p>
          <h2 className="sectionTitle">
            A platform for the <em>next great question.</em>
          </h2>
        </div>
        <div>
          <p className="sectionLead">
            The Science Exhibition brings together students, creators, and curious minds for an immersive look at the
            ideas transforming science and technology.
          </p>
          <p className="sectionLead">
            From hands-on models to research posters and start-up visions, every exhibit is an invitation to explore,
            connect, and imagine further.
          </p>
        </div>
      </div>

      <div className="factStrip">
        <div className="fact">
          <b>04</b>
          <span>Ways to showcase</span>
        </div>
        <div className="fact">
          <b>01</b>
          <span>Day of discovery</span>
        </div>
        <div className="fact">
          <b>∞</b>
          <span>Possibilities ahead</span>
        </div>
      </div>

      <blockquote className="factQuote">
        “Science is not only a discipline of reason but, also, one of romance and passion.”
        <span>— Stephen Hawking</span>
      </blockquote>
    </section>
  );
}
