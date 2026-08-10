import Image from "next/image";
import { Check } from "lucide-react";
import { eventMeta, guidelines } from "@/lib/content";

export default function Participate() {
  return (
    <section className="section participate" id="participate" data-reveal>
      <div className="container participateGrid">
        <div className="participateRules">
          <p className="eyebrow">Exhibit with intention</p>
          <h2 className="sectionTitle">
            Ground rules for a <em>standout project.</em>
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

        <aside className="participateRegister">
          <div className="registerCard">
            <p className="eyebrow">Registration</p>
            <h3>
              Ready to put your <em>idea in motion?</em>
            </h3>
            <p>
              Scan the QR code to register for {eventMeta.title}. For any difficulty, reach our event coordinators
              directly.
            </p>

            <div className="qrCard">
              <span className="qrBadge">REGISTRATION OPEN</span>
              <Image src="/79.png" alt="Science Exhibition registration QR code" width={200} height={200} />
              <b>SCAN TO REGISTER</b>
              <small>Open your camera and point it here</small>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
