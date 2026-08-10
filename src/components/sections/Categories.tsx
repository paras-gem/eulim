import { categories } from "@/lib/content";

export default function Categories() {
  return (
    <section className="section categories" id="categories" data-reveal>
      <div className="container">
        <div className="categoriesHead">
          <div>
            <p className="eyebrow">Choose your arena</p>
            <h2 className="sectionTitle">
              Four ways to make an <em>impression.</em>
            </h2>
          </div>
          <p className="sectionLead">
            Find the format that gives your idea its strongest voice—then make it impossible to ignore.
          </p>
        </div>

        <div className="categoryGrid">
          {categories.map(({ number, title, description, detail, icon: Icon, accent }) => (
            <article className={`categoryCard ${accent}`} key={title}>
              <div className="categoryTop">
                <span>{number}</span>
                <Icon size={24} strokeWidth={1.6} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="categoryDetail">{detail}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
