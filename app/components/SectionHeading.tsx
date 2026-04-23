type SectionHeadingProps = {
  index: string;
  title: string;
  kicker?: string;
};

export default function SectionHeading({
  index,
  title,
  kicker,
}: SectionHeadingProps) {
  return (
    <div className="mb-6 md:mb-10" data-reveal>
      <p className="eyebrow mb-4">{index}</p>
      <h2 className="display text-balance leading-[0.92] text-[2.2rem] md:text-[3.8rem]">
        {title}
      </h2>
      {kicker ? (
        <p className="mt-3 max-w-3xl text-[0.98rem] leading-relaxed text-neutral-400 md:text-[1.08rem]">
          {kicker}
        </p>
      ) : null}
    </div>
  );
}
