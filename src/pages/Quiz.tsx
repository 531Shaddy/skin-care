import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/ui/Button';

type Step = { question: string; options: string[] };

const steps: Step[] = [
  { question: 'How would you describe your skin type?', options: ['Dry', 'Oily', 'Combination', 'Normal', 'Sensitive'] },
  { question: 'What\'s your primary skin concern?', options: ['Acne & breakouts', 'Dryness & dehydration', 'Fine lines & aging', 'Dark spots & uneven tone', 'Redness & sensitivity'] },
  { question: 'How would you describe your current routine?', options: ['Minimalist (1–2 steps)', 'Balanced (3–4 steps)', 'Comprehensive (5+ steps)', 'I don\'t really have one'] },
  { question: 'Any known sensitivities?', options: ['None', 'Fragrance', 'Essential oils', 'Retinol / strong actives', 'Not sure'] },
  { question: 'What\'s your biggest skin goal?', options: ['A clearer complexion', 'A brighter, more even glow', 'Firmer, smoother skin', 'Calmer, less reactive skin', 'Better hydration'] },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const select = (opt: string) => {
    const next = [...answers, opt];
    setAnswers(next);
    if (step < steps.length - 1) setTimeout(() => setStep(step + 1), 250);
    else setTimeout(() => setDone(true), 250);
  };

  const back = () => { setStep(Math.max(0, step - 1)); setAnswers(answers.slice(0, -1)); setDone(false); };

  // Simple recommendation logic
  const recommended = products.slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 lg:px-8 py-16">
      {!done ? (
        <>
          {/* Progress */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs uppercase tracking-widest text-charcoal-soft">Question {step + 1} of {steps.length}</p>
              {step > 0 && <button onClick={back} className="text-xs uppercase tracking-widest text-charcoal-soft hover:text-charcoal flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Back</button>}
            </div>
            <div className="h-0.5 bg-sand rounded-full overflow-hidden">
              <motion.div className="h-full bg-sage" animate={{ width: `${((step + 1) / steps.length) * 100}%` }} transition={{ duration: 0.4 }} />
            </div>
          </div>

          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-sage-dark mb-3">Your skin, your routine</p>
            <h1 className="font-serif text-4xl md:text-5xl">{steps[step].question}</h1>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 gap-3"
            >
              {steps[step].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => select(opt)}
                  className="p-6 text-left border border-sand rounded-2xl hover:border-charcoal hover:bg-cream transition-all group"
                >
                  <span className="font-serif text-xl group-hover:text-sage-dark">{opt}</span>
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage flex items-center justify-center">
              <Check className="w-7 h-7 text-ivory" />
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-sage-dark mb-3">Your personalized routine</p>
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Meet your kindred match.</h1>
            <p className="text-charcoal-soft max-w-xl mx-auto">Based on your answers, we've curated a 3-step routine designed for your skin. Every product is dermatologist-tested and formulated for your concerns.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {recommended.map((p, i) => (
              <div key={p.id}>
                <p className="text-xs uppercase tracking-widest text-sage-dark mb-3">Step {i + 1}</p>
                <ProductCard product={p} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => { setStep(0); setAnswers([]); setDone(false); }}>Retake quiz</Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}