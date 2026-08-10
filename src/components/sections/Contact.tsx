import { ArrowRight, AtSign, Mail, Send } from "lucide-react";
import { contacts } from "@/lib/content";

const socials = [
  { icon: AtSign, label: "@schoolofsciences_christ", href: "https://www.instagram.com/schoolofsciences_christ" },
  { icon: AtSign, label: "@eulimscienceclub_official", href: "https://www.instagram.com/eulimscienceclub_official" },
  { icon: Mail, label: "Write to Eulim", href: "mailto:eulimscienceclub@gmail.com" },
  { icon: Send, label: "CHRIST Delhi NCR", href: "https://ncr.christuniversity.in/" },
];

export default function Contact() {
  return (
    <section className="section container" id="contact" data-reveal>
      <p className="eyebrow">Let&apos;s make it happen</p>
      <h2 className="sectionTitle">
        Let&apos;s turn your <em>questions into action.</em>
      </h2>

      <div className="contactGrid">
        {contacts.map((contact) => (
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="contactCard" key={contact.phone}>
            <span>{contact.label}</span>
            <strong>{contact.name}</strong>
            <p>
              {contact.phone} <ArrowRight size={15} />
            </p>
          </a>
        ))}
      </div>

      <div className="socialBar">
        <p>FOLLOW THE SPARK</p>
        {socials.map(({ icon: Icon, label, href }) => (
          <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
            <Icon size={17} /> {label}
          </a>
        ))}
      </div>
    </section>
  );
}
