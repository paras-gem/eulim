import Image from "next/image";
import { ArrowRight, AtSign, Atom, CalendarDays, Check, Clock3, FlaskConical, Lightbulb, Mail, MapPin, Rocket, Send, Sparkles, Trophy, Users } from "lucide-react";

const categories = [
  {
    number: "01",
    title: "Discovery\nConstructs",
    description: "Bring a working science and technology model to life.",
    detail: "Team of 2–4 · Working model",
    icon: FlaskConical,
    tone: "violet",
  },
  {
    number: "02",
    title: "Insight\nShowcase",
    description: "Turn rigorous research into a compelling visual story.",
    detail: "Team of 2–3 · A3 portrait poster",
    icon: Atom,
    tone: "cyan",
  },
  {
    number: "03",
    title: "Visionary\nConcepts",
    description: "Pitch a science-led idea with the power to move forward.",
    detail: "Individual or team of 2–3 · Start-up idea",
    icon: Lightbulb,
    tone: "orange",
  },
  {
    number: "04",
    title: "Future\nVentures",
    description: "Make something original, thoughtful, and entirely by hand.",
    detail: "Individual or team of 2–3 · Handmade project",
    icon: Rocket,
    tone: "pink",
  },
];

const guidelines = [
  "Keep every project original, ethical, and rooted in science & technology.",
  "Build for clarity: label your exhibit well and make the story easy to follow.",
  "Prioritise safety—no hazardous, toxic, flammable, or corrosive materials.",
  "Prepare to explain your process, evidence, and ideas with confidence.",
];

const contacts = [
  { label: "Event coordination", name: "Mr. Shayan Azmi", phone: "+91 62041 39749" },
  { label: "Event coordination", name: "Mr. Aryan Soman", phone: "+91 88514 08313" },
  { label: "General coordination", name: "Mr. Aryan Manna", phone: "+91 98746 99768" },
  { label: "General coordination", name: "Mr. Aryan Garg", phone: "+91 93197 00172" },
];

const leaders = [
  { name: "Dr. Fr. Peter M.V.", role: "Campus Administrator", image: "/47.jpg", quote: "The exhibition is a celebration of the relentless curiosity that propels us forward and the boundless innovation that defines our academic community." },
  { name: "Dr. Jeanne Poulose", role: "Dean", image: "/48.jpg", quote: "Your work has the potential to serve, solve, and inspire—reshaping lives in meaningful ways beyond the laboratory." },
  { name: "Dr. Bosco Paul Alapatt", role: "Associate Dean & Head of Department", image: "/49.jpg", quote: "Every project and presentation is a beacon of inspiration, inviting us to question, explore, and imagine new horizons." },
  { name: "Prof. Vandana Mehndiratta", role: "Academic Coordinator", image: "/50.jpg", quote: "Together, we can foster a spirit of scientific inquiry, discovery, and collaboration that pushes knowledge forward." },
  { name: "Prof. Amrit Kaur Saggu", role: "Faculty Coordinator, Eulim Science Club", image: "/51.jpg", quote: "Let us expand the horizons of possibility and kindle the flame of discovery in every curious mind." },
];

export default function Home() {
  return (
    <>
      <section className="eventHero" id="home">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />
        <div className="heroGrid" />
        <div className="heroInner">
          <div className="heroContent">
            <p className="heroKicker"><span /> CHRIST (Deemed to be University) School of Sciences presents</p>
            <p className="eventEdition">EULIM SCIENCE CLUB · 2025</p>
            <h1>Where curiosity<br /><em>becomes impact.</em></h1>
            <p className="heroLead">A celebration of bold questions, bright ideas, and the students shaping what comes next.</p>
            <div className="heroActions">
              <a className="primaryAction" href="#categories">Explore categories <ArrowRight size={18} /></a>
              <a className="textAction" href="#contact">Get in touch <span>↓</span></a>
            </div>
            <div className="heroMicrocopy"><Sparkles size={15} /> IDEAS HAVE ENERGY. LET YOURS MOVE THE ROOM.</div>
          </div>
          <div className="heroOrb" aria-hidden="true">
            <div className="orbRing ringOne" /><div className="orbRing ringTwo" /><div className="orbRing ringThree" />
            <div className="orbCore"><Atom size={84} strokeWidth={1.1} /></div>
            <span className="orbitDot dotOne" /><span className="orbitDot dotTwo" /><span className="orbitDot dotThree" />
          </div>
          <aside className="eventCard" aria-label="Event details">
            <p>Save the date</p>
            <strong>09<span>OCT</span></strong>
            <div><CalendarDays size={17} /><span>Thursday, 2025</span></div>
            <div><Clock3 size={17} /><span>11:15 am onwards</span></div>
            <div><MapPin size={17} /><span>Synergy Square, CHRIST Delhi NCR</span></div>
          </aside>
        </div>
        <div className="scrollHint">SCROLL TO DISCOVER <span /></div>
      </section>
      <div className="kineticMarquee" aria-hidden="true"><div>IMAGINE <i>✦</i> INVESTIGATE <i>✦</i> INVENT <i>✦</i> INSPIRE <i>✦</i> IMAGINE <i>✦</i> INVESTIGATE <i>✦</i> INVENT <i>✦</i> INSPIRE <i>✦</i></div></div>

      <section className="universitySection" data-reveal>
        <div><p className="sectionEyebrow">CHRIST (DEEMED TO BE UNIVERSITY)</p><h2>Excellence and service,<br /><em>across India.</em></h2></div>
        <div className="universityCopy"><p>CHRIST (Deemed to be University) is a community shaped by academic excellence, service, and a commitment to developing thoughtful, responsible citizens. Its campuses create space for students to learn deeply, pursue ideas with purpose, and contribute meaningfully to the world around them.</p><a href="https://www.christuniversity.in/" target="_blank" rel="noreferrer">Visit the official university website <ArrowRight size={17} /></a></div>
        <div className="campusList"><span>Bangalore Central</span><span>Bangalore Bannerghatta</span><span>Bangalore Kengeri</span><span>Bangalore Yeshwanthpur</span><strong>Delhi NCR</strong><span>Pune Lavasa</span></div>
      </section>

      <section className="introSection" id="about" data-reveal>
        <div className="sectionEyebrow">THE EULIM EXPERIENCE</div>
        <div className="introGrid">
          <h2>A platform for the<br /><span>next great question.</span></h2>
          <div className="introCopy">
            <p>The Science Exhibition brings together students, creators, and curious minds for an immersive look at the ideas transforming science and technology.</p>
            <p>From hands-on models to research posters and start-up visions, every exhibit is an invitation to explore, connect, and imagine further.</p>
          </div>
        </div>
        <div className="factStrip">
          <div><strong>04</strong><span>Ways to showcase</span></div>
          <div><strong>01</strong><span>Day of discovery</span></div>
          <div><strong>∞</strong><span>Possibilities ahead</span></div>
          <div className="factQuote">“Science is not only a discipline of reason but, also, one of romance and passion.” <span>— Stephen Hawking</span></div>
        </div>
      </section>

      <section className="categoriesSection" id="categories" data-reveal>
        <div className="categoriesHeading">
          <div><div className="sectionEyebrow">CHOOSE YOUR ARENA</div><h2>Four ways to<br />make an <em>impression.</em></h2></div>
          <p>Find the format that gives your idea its strongest voice—then make it impossible to ignore.</p>
        </div>
        <div className="categoryGrid">
          {categories.map(({ number, title, description, detail, icon: Icon, tone }) => (
            <article className={`categoryCard ${tone}`} key={title}>
              <div className="categoryTop"><span>{number}</span><Icon size={28} strokeWidth={1.5} /></div>
              <h3>{title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
              <p>{description}</p>
              <div className="categoryDetail">{detail}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="registrationSection" id="registration" data-reveal>
        <div><p className="sectionEyebrow">REGISTRATION</p><h2>Ready to put your<br /><em>idea in motion?</em></h2><p>Scan the QR code to register for Science Exhibition 2025. For any difficulty, reach our event coordinators directly.</p></div>
        <div className="qrCard"><span className="qrBadge">REGISTRATION OPEN</span><Image src="/79.png" alt="Science Exhibition registration QR code" width={210} height={210} /><span>SCAN TO REGISTER</span><small>Open your camera and point it here</small></div>
      </section>

      <section className="milestonesSection" data-reveal>
        <div><div className="sectionEyebrow">A CLUB IN MOTION</div><h2>Curiosity has a<br /><em>history here.</em></h2></div>
        <div className="milestoneRail">
          <article><span>01</span><Users size={28} /><h3>A vibrant community</h3><p>Eulim brings together students who care deeply about science, ideas, and each other.</p></article>
          <article><span>02</span><Trophy size={28} /><h3>Ideas on stage</h3><p>From industry talks to exhibitions, every gathering turns learning into a shared experience.</p></article>
          <article><span>03</span><Sparkles size={28} /><h3>What&apos;s next</h3><p>New questions, wider collaborations, and a culture built for thoughtful innovation.</p></article>
        </div>
      </section>

      <section className="quantumSection exploreSection" data-reveal>
        <div className="quantumHeading"><div><p className="sectionEyebrow">EXPLORE EVENTS</p><h2>Quantum Quest</h2></div><p>Quantum Quest brought together teams for a high-energy treasure hunt where strategy, observation, and collaboration unlocked every next clue.</p></div>
      </section>

      <section className="editorialGallery mergedGallery" id="gallery">
        <figure className="galleryText">
          <span>Event gallery</span>
          <p>These images capture the energy of our science exhibition — the team spirit, the crowd, and the hands-on action that made every moment memorable.</p>
          <div className="galleryStamp"><span>Event highlights</span></div>
        </figure>
        <figure className="galleryImage imageWide"><Image src="/13.png" alt="Science Exhibition group photo" fill quality={90} sizes="(max-width: 980px) 100vw, 52vw" /></figure>
        <figure className="galleryImage galleryThird"><Image src="/IMG_20260314_121742.jpg" alt="Quantum Quest treasure hunt 2026" fill quality={90} sizes="(max-width: 980px) 100vw, 26vw" /></figure>
        <figure className="galleryImage galleryFourth"><Image src="/IMG_20260314_125015.jpg" alt="Quantum Quest participants" fill quality={90} sizes="(max-width: 980px) 100vw, 26vw" /></figure>
        <figure className="galleryImage galleryFifth"><Image src="/IMG_20260314_130104.jpg" alt="Quantum Quest event action" fill quality={90} sizes="(max-width: 980px) 100vw, 52vw" /></figure>
      </section>

      

      <section className="leaderMessageSection" data-reveal>
        <div className="leaderHeader">
          <div>
            <div className="sectionEyebrow">MESSAGE FROM OUR LEADERS</div>
            <h2>Message from our leaders</h2>
          </div>
          {/* attached image removed per request to avoid duplication */}
        </div>
        <div className="messageGrid">{leaders.map((leader, index) => <article className="messageCard" key={leader.name}><span>0{index + 1}</span><p>“{leader.quote}”</p><footer><strong>{leader.name}</strong><small>{leader.role}</small></footer></article>)}</div>
      </section>

      <section className="guidelinesSection" id="guidelines" data-reveal>
        <div className="guidelineVisual"><div className="visualHalo" /><div className="visualMark">E</div><p>Original ideas.<br />Responsible science.</p></div>
        <div className="guidelinesContent">
          <div className="sectionEyebrow">EXHIBIT WITH INTENTION</div>
          <h2>The essential<br /><em>ground rules.</em></h2>
          <div className="guidelineList">{guidelines.map((guide, index) => <div key={guide}><span>0{index + 1}</span><p>{guide}</p><Check size={18} /></div>)}</div>
          <p className="finePrint">Projects are assessed on scientific method, creativity, presentation, and subject knowledge. The decisions of the judges are final.</p>
        </div>
      </section>

      <section className="stellarLaunch" data-reveal>
        <div className="launchStars" aria-hidden="true" />
        <div><p className="sectionEyebrow">NEW · NIGHT SKY PROTOCOL</p><h2>A puzzle hidden<br />among the <em>stars.</em></h2></div>
        <div className="launchAction"><p>Follow the constellation, ask for hints when you need them, and race the clock to reveal the hidden message.</p><a href="/stellar-cipher">Enter Star Cipher <ArrowRight size={18} /></a></div>
      </section>

      <section className="contactSection" id="contact" data-reveal>
        <div className="contactTop"><div className="sectionEyebrow">LET&apos;S MAKE IT HAPPEN</div><h2>Let&apos;s turn your<br /><em>questions into action.</em></h2></div>
        <div className="contactGrid">
          {contacts.map((contact) => <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="contactCard" key={contact.phone}><span>{contact.label}</span><strong>{contact.name}</strong><p>{contact.phone} <ArrowRight size={16} /></p></a>)}
        </div>
        <div className="socialBar"><p>FOLLOW THE SPARK</p><a href="https://www.instagram.com/schoolofsciences_christ" target="_blank" rel="noreferrer"><AtSign size={19} /> @schoolofsciences_christ</a><a href="https://www.instagram.com/eulimscienceclub_official" target="_blank" rel="noreferrer"><AtSign size={19} /> @eulimscienceclub_official</a><a href="mailto:eulimscienceclub@gmail.com"><Mail size={19} /> Write to Eulim</a><a href="https://ncr.christuniversity.in/" target="_blank" rel="noreferrer"><Send size={19} /> CHRIST Delhi NCR</a></div>
      </section>
    </>
  );
}
