import { Check } from "lucide-react";
import { guidelines } from "@/lib/content";

export default function Guidelines() {
  return (
    <section className="section container" id="guidelines" data-reveal>
      <div className="guidelineGrid">
        <div className="guidelineVisual">
          <span className="mark" aria-hidden="true">
            E
          </span>
          <p>
            Original ideas.
            <br />
            Responsible science.
          </p>
        </div>

        <div>
          <p className="eyebrow">Exhibit with intention</p>
          <h2 className="sectionTitle">
            The essential <em>ground rules.</em>
          </h2>

          <div className="guidelineList">
            {guidelines.map((guide, index) => (
              <div key={guide}>
                <span className="num">0{index + 1}</span>
                <p>{guide}</p>
                <Check size={18} />
              </div>
            ))}
          </div>

          <p className="finePrint">
            Projects are assessed on scientific method, creativity, presentation, and subject knowledge. The decisions
            of the judges are final.
          </p>
        </div>
      </div>
    </section>
  );
}
