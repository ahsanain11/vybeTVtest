import { motion } from 'motion/react';
import { CheckCircle2, ShoppingCart, ArrowRight, Zap, Calendar, Banknote, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing({ onOrderClick }: { onOrderClick?: (pkg?: string) => void }) {
  const tiers = [
    { name: '1 Month', price: '10', popular: false },
    { name: '3 Months', price: '25', popular: false },
    { name: '6 Months', price: '45', popular: false },
    { name: '12 Months', price: '65', popular: true },
    { name: '15 Months', price: '80', popular: false },
    { name: '24 Months', price: '100', popular: false },
    { name: 'Lifetime', price: '180', popular: false },
  ];

  const features = ["All Premium Sports Networks", "Premium Movies & Entertainment", "4K UHD & HD Quality"];

  return (
    <div className="pt-[120px] pb-24">
      {/* Ambient Background */}
      <div 
        className="fixed inset-0 z-[-1] opacity-30 mix-blend-screen pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASd72IzUUjSbYcDZXAHC--kDzZPHBuCy-xRxh-MvqxnWuZ4IJrOn0afca7VMcywbU_382K_42j1WJM2Y2lOwAZ_7_f8vS3ECkUc_9MDd4MXmuDGYTF6s2wxOL15mCPP-BrLleKHsdtnOF6Z3C82ObE_3Ee2YY5VzYg4fhtI6rGhlfTXw8Y3xINOT9LZGHKrGzwz2kgTcq2rY4FcC0ZbmUAy7Fi9XYit5qfZB3cLrF2Vkfdw0YfbecGW9TNbRoe5ECC1GNpAiQzHg')" }}
      />

      <section className="max-w-5xl mx-auto px-6 text-center mb-24">
        <span className="inline-block py-1.5 px-4 rounded-full border border-primary/30 bg-primary/10 text-primary font-display font-bold text-xs uppercase tracking-widest mb-8">
          No Contracts. No Dish.
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-on-surface mb-8 leading-tight">
          Stream Without <br /> <span className="text-gradient">Compromise</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
          Experience premium UK live streaming with clarity and reliability. Choose the package that fits your style.
        </p>
        <button 
          onClick={() => onOrderClick?.('24-Hour Free Trial')}
          className="btn-primary flex items-center gap-2 mx-auto scale-110 w-fit"
        >
          Claim Your 24-Hour Free Trial
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* Pricing Grid */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`glass-panel p-8 rounded-3xl flex flex-col relative group transition-all duration-500 ${
                tier.popular ? 'border-primary/50 shadow-[0_0_40px_rgba(139,92,246,0.15)] ring-1 ring-primary/30' : 'hover:border-primary/30'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary font-display font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap shadow-xl">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-display font-bold text-on-surface mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className={`text-4xl md:text-5xl font-display font-extrabold ${tier.popular ? 'text-primary' : 'text-on-surface'}`}>
                  £{tier.price}
                </span>
              </div>

              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-on-surface/80">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${tier.popular ? 'text-primary' : 'text-secondary'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onOrderClick?.(tier.name)}
                className={`w-full py-4 rounded-2xl flex justify-center items-center gap-2 font-display font-bold text-sm transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-primary to-secondary text-on-primary-fixed shadow-lg hover:shadow-primary/30' 
                    : 'bg-white/5 border border-white/10 text-on-surface hover:bg-white/10'
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                Order Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 md:px-16 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-on-surface mb-4">Why Choose VybeTV?</h2>
          <p className="text-on-surface-variant">See how we stack up against traditional broadcasting monopolies.</p>
        </div>
        
        <div className="glass-panel rounded-3xl overflow-hidden">
          <div className="grid grid-cols-3 p-6 bg-surface-container-highest/50 border-b border-white/5">
            <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Feature</div>
            <div className="text-center font-display font-bold text-primary">VybeTV</div>
            <div className="text-center font-display font-bold text-on-surface-variant opacity-60">Traditional TV</div>
          </div>

          {[
            { label: 'Installation', vybe: 'Instant (App based)', trad: 'Requires Dish/Engineer', icon: Zap },
            { label: 'Contracts', vybe: 'None (Month-to-month)', trad: '18-24 Month Lock-in', icon: Calendar },
            { label: 'Monthly Cost', vybe: '£10 - £5.40', trad: '£50 - £100+', icon: Banknote },
            { label: 'Support', vybe: '24/7 Live Chat', trad: 'Long Call Queues', icon: Headphones },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-3 p-6 border-b border-white/5 hover:bg-white/5 transition-colors">
              <div className="text-sm font-medium text-on-surface flex items-center">{row.label}</div>
              <div className="text-center text-on-surface flex justify-center items-center gap-2 text-sm font-semibold">
                <row.icon className="w-4 h-4 text-secondary" />
                {row.vybe}
              </div>
              <div className="text-center text-on-surface-variant flex justify-center items-center gap-2 text-sm opacity-60">
                {row.trad}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
