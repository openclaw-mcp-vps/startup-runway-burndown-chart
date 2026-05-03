export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Startup Finance
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Know Your Runway.<br />
          <span className="text-[#58a6ff]">Before It's Too Late.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          RunwayRadar connects to your bank accounts and shows exactly how long your startup can survive — with automated alerts when it's time to freeze hiring or cut costs.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $49/mo
        </a>
        <p className="mt-4 text-xs text-[#8b949e]">No credit card required for 14-day trial. Cancel anytime.</p>
        {/* Fake chart preview */}
        <div className="mt-12 bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <div className="flex items-end justify-between gap-2 h-28">
            {[90,82,74,65,55,44,32,20,10].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`w-full rounded-sm ${
                    h > 50 ? "bg-[#238636]" : h > 25 ? "bg-[#d29922]" : "bg-[#da3633]"
                  }`}
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3 text-xs text-[#8b949e]">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
          </div>
          <p className="text-xs text-[#8b949e] mt-3 text-center">Runway burndown — alert triggered at 3 months</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$49</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Plaid bank account sync",
              "Real-time runway burndown chart",
              "Hiring freeze & cost-cut alerts",
              "Scenario planning (best/worst case)",
              "Unlimited team members",
              "CSV & PDF export"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does RunwayRadar connect to my bank?",
              a: "We use Plaid, the industry-standard bank connectivity layer trusted by thousands of fintechs. Your credentials are never stored on our servers."
            },
            {
              q: "When will I get a hiring freeze alert?",
              a: "You set your own thresholds. By default, RunwayRadar alerts you when projected runway drops below 6 months, 3 months, and 1 month — via email and Slack."
            },
            {
              q: "Can I model different spending scenarios?",
              a: "Yes. The scenario planner lets you simulate hiring freezes, layoffs, or new revenue to see how each decision extends or shortens your runway in real time."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} RunwayRadar. All rights reserved.
      </footer>
    </main>
  );
}
