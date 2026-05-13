import { motion, useScroll, useTransform } from 'motion/react';
import { Play, CheckCircle2, Tv, MonitorPlay, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';

export default function Home({ onOrderClick }: { onOrderClick?: (pkg?: string) => void }) {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "50%"]);
  const textY = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-[120px] pb-32 px-6 md:px-16 min-h-[100vh] flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-[-1] bg-surface-container-lowest"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen scale-150"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQ5bd4XKJuDSC5DvargrTVhN0qzWI7AZ8EGjcfH8xSbet6I5NqHz_iqI0IC-X7ea1dJfdrdAhlQ_WDjTUkdp3B6Z-Tod2n7xh3ypHGnjius8UWmUxd4UzSnpV8uh4pxIl7CdZ3KN7hYxSvT4rHY_3jntcLJn1gwtjyViyN_Sl0dS3Z6vmYmJz_Fd0FhiCVEjakCEY6X-Y66VEBQC81sWGsg8h4VxkgO69TBx-7Rf8r46dJHum7EwShPwhyyP7o407JN6nOV8eBew')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" 
          />
        </motion.div>

        <motion.div 
          style={{ y: textY, opacity }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto z-10 flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-2 rounded-full mb-8 backdrop-blur-md"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_#4cd7f6] animate-pulse" />
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Premium UK Streaming</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-8xl font-display font-extrabold text-on-background mb-8 leading-[1.1] tracking-tight"
          >
            The Future of Premium <br /> <span className="text-gradient">UK Streaming</span> is Here
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Experience cinematic quality entertainment, live sports, and top-tier channels without the hassle. No contracts, no dish.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6">
            <button 
              onClick={() => onOrderClick?.('24-Hour Free Trial')}
              className="btn-primary flex items-center gap-2 group"
            >
              <Play className="w-5 h-5 fill-white" />
              Start 24-Hour Free Trial
            </button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 px-6 py-3 glass-panel rounded-2xl flex items-center gap-3"
          >
            <ShieldCheck className="text-secondary w-5 h-5" />
            <span className="text-sm font-semibold text-on-surface-variant">No dish or long contracts required</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Grid Features - Revealed on Scroll */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={revealVariants}
        className="py-24 px-6 md:px-16 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: MonitorPlay,
              title: "Affordable Luxury",
              desc: "Premium entertainment shouldn't break the bank. Enjoy top-tier content at a fraction of traditional costs.",
              color: "text-secondary"
            },
            {
              icon: Tv,
              title: "Cinematic Quality",
              desc: "Immerse yourself in crystal-clear 4K streams. Our infrastructure ensures clarity without buffering.",
              color: "text-primary"
            },
            {
              icon: Zap,
              title: "Instant Access",
              desc: "No technicians, no hardware. Get connected instantly through your existing smart devices.",
              color: "text-secondary-container"
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-surface-container/40 backdrop-blur-md rounded-2xl p-8 border border-outline-variant/10 hover:border-primary/30 hover:bg-surface-container/60 transition-all duration-300 group shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-bright flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className={`${feature.color} w-6 h-6`} />
              </div>
              <h3 className="text-2xl font-display font-bold text-on-surface mb-3">{feature.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Passions Sections - Revealed on Scroll */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={revealVariants}
        className="py-24 px-6 md:px-16 max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-on-background mb-12">Explore Your Passions</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[600px]">
          {/* Sports */}
          <div className="md:col-span-8 rounded-2xl overflow-hidden relative group cursor-pointer border border-outline-variant/20 shadow-lg min-h-[400px]">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCywKmKxfaCtceps4ae8G23zNxef3TAGeShqw3zSAgtQbxiuOHsPUGrhGmNeFEUsGUMhLDl70I-GJXKT9lKys0ZzbZetuPTAkxZmqzFEEMaYI_MF7jwEtd5fGAHv3jmNA7zSC-tf2aDyIsuJxiRmBkbe6Czc5ZVnI9ls2R70TsW4cP8V3wQvBQ4hTCh9uYjvewCEMQz7gogHJUnAoeIaTbAlDEU5eHz1fKBm1hcsKO84WGlx1zZFSWM5rlsn0gWXRz-met_i3y_VA')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <span className="inline-block bg-primary text-on-primary text-xs font-bold px-3 py-1.5 rounded uppercase tracking-widest mb-4">Live Focus</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-on-background mb-3">Elite Sports</h3>
              <p className="text-on-surface-variant max-w-md">Experience every heart-pounding moment with 4K coverage of the Premier League and global sports.</p>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-8">
            {/* Entertainment */}
            <div className="flex-1 rounded-2xl overflow-hidden relative group cursor-pointer border border-outline-variant/20 shadow-lg min-h-[250px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARnidOLw29AZSqDG52dVYbMeOkI7p-jFrEZnYxJAJUrOMYb7mmufJ9IITIYzbtGrd7NUKHOi9Sh7FKHd-gSD0MGsV1nzAr1F7w_oEe_7B1dZQJF25e1xvwy1OKovCWfV82LCN_tZNbTMnx_McKPi3YyUtLKNrI_16SEvSp8mflUBOsk6R8rdzHb_1zLc5jQQakJXLbAKPbYBtHERBNDWeJBR7nAl5Lj84dzEWPvweaHxVahvpNaSDA45bjCy-hWT9LDdyyiqKDTA')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-display font-bold text-on-background mb-2">Entertainment</h3>
                <p className="text-sm text-on-surface-variant">The latest blockbusters and series.</p>
              </div>
            </div>
            
            {/* International */}
            <div className="flex-1 rounded-2xl overflow-hidden relative group cursor-pointer border border-outline-variant/20 shadow-lg min-h-[250px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqm_LQVUdpLMnbfyQCKepPwKtCscAvMZzImdL2e6t9XFbj8TZsJKIoIjGVp3yN1B8hF9qSQpI1nkJ4_D6yu4GvwPKcoEXKB0W6RQHyEKOGr47hg4fCXp2dXDjc2RKsLk3qVFNGn-66u2o6IZb74zxqm_hKXVBY0d5UnZONbimiMrH6kLl4xO-XeqCmL677g__xlfk-3tsm3XPAP1ZZYlTXrUXIhezfDFc7KWoo5qFYC7zCCHwrZDCNdpX54vLV7qRGfNqYDGKbDw')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-display font-bold text-on-background mb-2">International</h3>
                <p className="text-sm text-on-surface-variant">Global news and culture.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Box */}
      <section className="py-24 px-6 md:px-16 mb-24">
        <motion.div 
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center bg-surface-container-high rounded-[2.5rem] p-12 md:p-24 border border-outline-variant/10 shadow-2xl relative overflow-hidden ring-1 ring-primary/20"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-display font-bold text-on-background mb-8 relative z-10">Ready to Elevate <br /> Your Setup?</h2>
          <p className="text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto relative z-10">
            Join 50,000+ viewers across the UK experiencing the next generation of home entertainment. No credit card required for trial.
          </p>
          <button 
            onClick={() => onOrderClick?.('Custom Package')}
            className="inline-flex items-center gap-3 bg-on-background text-background font-display font-bold text-lg px-12 py-5 rounded-full hover:bg-primary transition-all duration-300 relative z-10 group"
          >
            Order Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
