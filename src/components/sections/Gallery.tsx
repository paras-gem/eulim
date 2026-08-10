"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { gallery, galleryFilters } from "@/lib/content";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<(typeof galleryFilters)[number]>("All");

  const visible = useMemo(
    () => (activeFilter === "All" ? gallery : gallery.filter((item) => item.tag === activeFilter)),
    [activeFilter],
  );

  return (
    <section className="section gallerySection" id="gallery" data-reveal>
      <div className="container">
        <div className="galleryHead">
          <div>
            <p className="eyebrow">Event gallery</p>
            <h2 className="sectionTitle">
              Moments from the <em>exhibition floor.</em>
            </h2>
          </div>
          <p className="sectionLead">
            The energy, the crowd, and the hands-on action that made every moment memorable.
          </p>
        </div>

        <div className="galleryFilters" role="tablist" aria-label="Gallery filters">
          {galleryFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              className={activeFilter === filter ? "active" : undefined}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="galleryMasonry">
          {visible.map((img, index) => (
            <figure className={index === 0 ? "galleryTile featured" : "galleryTile"} key={img.src}>
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 820px) 100vw, 33vw" />
              <figcaption>{img.tag}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
