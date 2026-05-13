import { motion } from 'motion/react';
import { 
  Smartphone, 
  Monitor, 
  Tv, 
  Apple, 
  Laptop, 
  Tablet, 
  PlayCircle,
  CheckCircle2,
  Cpu,
  Wifi,
  Zap,
  Globe
} from 'lucide-react';

export default function Devices() {
  const devices = [
    { name: "iOS", icon: Apple, desc: "iPhone & iPad App", color: "text-white" },
    { name: "Apple TV", icon: Tv, desc: "4K Home Cinema", color: "text-white" },
    { name: "Amazon Firestick", icon: Zap, desc: "Fire OS Optimized", color: "text-orange-500" },
    { name: "Android TV", icon: Monitor, desc: "Sony, Philips, Sharp", color: "text-green-500" },
    { name: "Android", icon: Smartphone, desc: "Mobile & Tablet", color: "text-green-400" },
    { name: "LG TV", icon: Monitor, desc: "WebOS Integration", color: "text-rose-500" },
    { name: "Samsung TV", icon: Monitor, desc: "Tizen OS Supported", color: "text-blue-500" },
    { name: "Roku TV", icon: Tv, desc: "Roku OS Ready", color: "text-purple-500" },
  ];

  return (
    <div className="pt-[120px] pb-24 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 px-4 py-2 rounded-full mb-8"
        >
          <Cpu className="w-4 h-4 text-secondary" />
          <span className="text-xs font-bold text-secondary uppercase tracking-widest">Multi-Platform Support</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-on-surface mb-8 leading-tight">
          Watch Anywhere, <br /> <span className="text-gradient">On Any Device</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
          VybeTV is built to run flawlessly on all your favorite hardware. From your pocket to your living room, experience premium streaming without limits.
        </p>
      </section>

      {/* Device Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
        {devices.map((device, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass-panel p-10 rounded-[2.5rem] text-center group flex flex-col items-center border-white/5 hover:border-primary/40 transition-all duration-500"
          >
            <div className="w-20 h-20 bg-surface-container-high rounded-3xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform shadow-lg group-hover:shadow-primary/20">
              <device.icon className={`w-10 h-10 ${device.color}`} />
            </div>
            <h3 className="text-2xl font-display font-bold text-on-surface mb-3">{device.name}</h3>
            <p className="text-on-surface-variant text-sm font-medium">{device.desc}</p>
            
            <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-secondary uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
              <CheckCircle2 className="w-3 h-3" />
              Fully Optimized
            </div>
          </motion.div>
        ))}
      </section>

      {/* Tech Specs */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold text-on-surface mb-8">Engineering Excellence</h2>
            <div className="space-y-8">
              {[
                { title: "Low Latency Protocol", desc: "Our proprietary buffering engine ensures live sports stay truly live.", icon: Zap },
                { title: "Universal Compatibility", desc: "One subscription works across all apps and devices seamlessly.", icon: Globe },
                { title: "High Speed Optimization", desc: "Optimized for both Fiber broadband and 5G mobile data.", icon: Wifi }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-on-surface mb-2">{item.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[3rem] blur-3xl opacity-30 -z-10" />
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArnidOLw29AZSqDG52dVYbMeOkI7p-jFrEZnYxJAJUrOMYb7mmufJ9IITIYzbtGrd7NUKHOi9Sh7FKHd-gSD0MGsV1nzAr1F7w_oEe_7B1dZQJF25e1xvwy1OKovCWfV82LCN_tZNbTMnx_McKPi3YyUtLKNrI_16SEvSp8mflUBOsk6R8rdzHb_1zLc5jQQakJXLbAKPbYBtHERBNDWeJBR7nAl5Lj84dzEWPvweaHxVahvpNaSDA45bjCy-hWT9LDdyyiqKDTA" 
              alt="Multi-device display" 
              className="rounded-[3rem] shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="bg-surface-container-high rounded-[3rem] p-12 md:p-24 text-center border border-outline-variant/10 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-8">Ready to Connect?</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
          Setup is instant. Once you subscribe, you'll receive download links for all your devices via our protected support portal.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="btn-primary">Get My Setup Guide</button>
          <button className="btn-outline">Contact Support</button>
        </div>
      </section>
    </div>
  );
}
