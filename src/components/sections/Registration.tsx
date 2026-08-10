import Image from "next/image";

export default function Registration() {
  return (
    <section className="section registration" id="registration" data-reveal>
      <div className="container regGrid">
        <div>
          <p className="eyebrow">Registration</p>
          <h2>
            Ready to put your <em>idea in motion?</em>
          </h2>
          <p>
            Scan the QR code to register for Science Exhibition 2025. For any difficulty, reach our event coordinators
            directly.
          </p>
        </div>

        <div className="qrCard">
          <span className="qrBadge">REGISTRATION OPEN</span>
          <Image src="/79.png" alt="Science Exhibition registration QR code" width={200} height={200} />
          <b>SCAN TO REGISTER</b>
          <small>Open your camera and point it here</small>
        </div>
      </div>
    </section>
  );
}
