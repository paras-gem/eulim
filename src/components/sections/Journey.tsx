import { steps } from "@/lib/content";

export default function Journey() {
  return (
    <section className="section journey" id="journey" data-reveal>
      <div className="container">
        <div className="journeyHead">
          <p className="eyebrow">Your path to the floor</p>
          <h2 className="sectionTitle">
            Four steps from <em>idea to exhibit.</em>
          </h2>
          <p className="sectionLead">
            Whether you&apos;re building a model or pitching a vision, this is how you go from registration to
            recognition.
          </p>
        </div>

        <ol className="journeyTrack">
          {steps.map(({ number, title, body, icon: Icon }) => (
            <li className="journeyStep" key={number}>
              <div className="journeyMarker">
                <Icon size={20} strokeWidth={1.6} />
                <span>{number}</span>
              </div>
              <div className="journeyBody">
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
