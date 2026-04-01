interface SectionTitleProps {
  eyebrow: string;
  title: string;
  kicker: string;
}

const SectionTitle = ({ eyebrow, title, kicker }: SectionTitleProps) => {
  return (
    <div className="mb-10 max-w-3xl space-y-4">
      <span className="eyebrow-label">{eyebrow}</span>
      <h2 className="headline-display text-4xl leading-tight sm:text-5xl">{title}</h2>
      <p className="text-lg text-muted-foreground">{kicker}</p>
    </div>
  );
};

export default SectionTitle;