export default function About() {
  return (
    <section className="section aboutSection" id="about" data-reveal>
      <div className="container aboutLayout">
        <div className="aboutIntro">
          <p className="eyebrow">The Eulim experience</p>
          <h2 className="sectionTitle">
            A platform for the <em>next great question.</em>
          </h2>
          <p className="sectionLead">
            The Science Exhibition brings together students, creators, and curious minds for an immersive look at the
            ideas transforming science and technology.
          </p>
        </div>

        <div className="aboutPanels">
          <article className="aboutPanel">
            <span className="aboutPanelLabel">Showcase</span>
            <h3>Hands-on models, research posters, and start-up visions</h3>
            <p>Every exhibit is an invitation to explore, connect, and imagine further.</p>
          </article>
          <article className="aboutPanel">
            <span className="aboutPanelLabel">Community</span>
            <h3>Peers, faculty, and visiting judges on one floor</h3>
            <p>A shared space where curiosity turns into conversation and collaboration.</p>
          </article>
          <blockquote className="factQuote">
            “Science is not only a discipline of reason but, also, one of romance and passion.”
            <span>— Stephen Hawking</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
