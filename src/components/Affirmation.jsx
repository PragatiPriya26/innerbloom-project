import { motion } from "framer-motion";

const affirmations = [
  "I am strong and capable of everything that comes my way.",
  "Everything is in my control. I am grateful for this moment.",
  "I am worthy of love, kindness, and all good things.",
  "Even though I fail, I am happy that I tried and will try again.",
  "I choose positivity above everything else today.",
];

const borderColors = [
  "border-l-sage",
  "border-l-blush",
  "border-l-lavender",
  "border-l-gold",
  "border-l-sage-dark",
];

function AffirmationsSection() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-20 bg-lavender-light">
      <p className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.12em] uppercase text-sage-dark mb-2.5 before:content-[''] before:w-5 before:h-[1.5px] before:bg-sage-dark before:block">
        Words & Writing
      </p>

      <h2 className="font-display text-[clamp(26px,4vw,38px)] text-ink leading-tight mb-2.5">
        Affirmations & <em className="text-sage-dark italic">Your Journal</em>
      </h2>

      <p className="text-[15px] text-mid max-w-[520px] leading-relaxed mb-10">
        Words have weight. Speak kindness to yourself daily, and let the journal hold what you can't say aloud.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Section */}
        <div>
          <h3 className="font-display text-lg mb-4 text-ink">
            Words of Affirmation
          </h3>

          <div className="flex flex-col gap-3">
            {affirmations.map((a, i) => (
              <motion.div
                key={i}
                className={`bg-card border-l-4 ${borderColors[i]} rounded-r-lg p-4 text-[15px] leading-relaxed text-ink shadow-sm hover:translate-x-1 transition-transform`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {a}
              </motion.div>
            ))}
          </div>

          <button className="mt-4 px-6 py-3 bg-card border-[1.5px] border-lavender rounded-full text-[13px] font-medium text-mid hover:text-sage-dark hover:border-sage transition-colors">
            🔀 Shuffle Affirmations
          </button>
        </div>

        {/* Right Section */}
        <motion.div
          className="bg-[#FFFDF8] border-[1.5px] border-blush-light rounded-xl p-7 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-display text-[22px] text-ink mb-1.5">
            📖 Your Journal
          </p>

          <p className="text-xs text-light italic mb-4">
            Friday, March 27 · Private & Secure
          </p>

          <p className="text-[13px] text-light mb-4">
            Today's prompt
          </p>

          <p className="font-display text-base text-ink italic mb-5">
            "What is one thing that made you smile today, however small?"
          </p>

          <div className="flex flex-col gap-7 mb-5">
            <div className="h-px bg-sage/40 relative">
              <span className="absolute -top-2.5 left-0 text-light/60 font-handwriting text-base">
                Start writing…
              </span>
            </div>
            <div className="h-px bg-sage/40" />
            <div className="h-px bg-sage/40" />
          </div>

          <p className="text-xs text-light mb-3">Other prompts</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "💭 What am I grateful for?",
              "🌱 What challenged me?",
              "✨ What was joyful?",
              "🌙 Tonight I let go of…",
            ].map((p) => (
              <span
                key={p}
                className="px-3.5 py-1.5 rounded-full bg-warm text-xs text-mid cursor-pointer border border-transparent hover:border-sage hover:text-sage-dark transition-all"
              >
                {p}
              </span>
            ))}
          </div>

          <button className="w-full py-3 bg-sage-dark text-primary-foreground rounded-xl text-sm font-medium hover:bg-ink transition-colors">
            Save Entry
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default AffirmationsSection;