import { processSteps } from "@/lib/home-content"

export function HomeProcess() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8">
        <p className="index-no">A more useful first step</p>
        <h2 className="heading-section mt-2 max-w-xl text-navy">Good coverage questions start with real life.</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-navy/70">
          We keep the starting point focused on your priorities—not a long list of jargon.
        </p>
        <ol className="mt-10 grid border-t border-line md:grid-cols-3">
          {processSteps.map((step) => (
            <li key={step.index} className="border-t-2 border-sky px-0 py-6 md:border-r md:border-line md:border-t-sky md:px-6 md:first:pl-0 md:last:border-r-0">
              <p className="index-no">{step.index}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
