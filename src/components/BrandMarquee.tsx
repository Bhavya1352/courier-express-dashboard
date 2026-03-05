const brands = ["DHL EXPRESS", "FEDEX", "UPS", "BLUEDART", "DELHIVERY", "ECOM EXPRESS"];

const BrandMarquee = () => (
  <section className="py-8 border-y border-border overflow-hidden">
    <div className="flex marquee">
      {[...brands, ...brands].map((b, i) => (
        <span
          key={i}
          className="text-muted-foreground/40 text-sm font-display font-semibold tracking-[0.2em] uppercase whitespace-nowrap mx-12"
        >
          {b}
        </span>
      ))}
    </div>
  </section>
);

export default BrandMarquee;
