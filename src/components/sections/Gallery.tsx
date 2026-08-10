import Image from "next/image";

const images = [
  { src: "/13.png", alt: "Science Exhibition group photo", wide: true },
  { src: "/IMG_20260314_121742.jpg", alt: "Quantum Quest treasure hunt" },
  { src: "/IMG_20260314_125015.jpg", alt: "Quantum Quest participants" },
  { src: "/IMG_20260314_130104.jpg", alt: "Quantum Quest event action", wide: true },
];

export default function Gallery() {
  return (
    <section className="section container" id="gallery" data-reveal>
      <p className="eyebrow">Event gallery</p>
      <h2 className="sectionTitle">
        Moments from the <em>exhibition floor.</em>
      </h2>

      <div className="galleryGrid">
        <div className="galleryCaption">
          <p className="eyebrow" style={{ margin: 0 }}>
            Quantum Quest
          </p>
          <p>
            These images capture the energy of our science exhibition—the team spirit, the crowd, and the hands-on
            action that made every moment memorable.
          </p>
        </div>
        {images.map((img) => (
          <figure className={img.wide ? "galleryItem wide" : "galleryItem"} key={img.src}>
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 820px) 100vw, 25vw" />
          </figure>
        ))}
      </div>
    </section>
  );
}
