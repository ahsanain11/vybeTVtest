import { motion } from 'motion/react';
import { PlayCircle, Clock, ArrowRight, MessageCircle, Laptop, Globe, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const articles = [
    {
      title: "Cheapest Way to Watch Premium Sports Online",
      desc: "Navigate the complex landscape of sports subscriptions and find the most cost-effective legal streaming options available today.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqhVeZtLqlRbbBD4H6SM2zUJN6TDwSca40a6zHtyUemWGKT8-eJzP7302EyEJySH3JJ37HtcI2AAeBLbNpXZ-FL7OZyVDkxxy3iDmSbkvrB-csdMeKcCZqlA80hX3dX90Uw2tpPVz9D9yLwlrKBac7b91zVpBbp3u6OzZlPfii__uvGF7DaaYW0wbW5-jf474L_qGF5KJKPuFusX8a10x7PSOZYTJwbN2L24yBUsJp1_NUmUnOWZ2Go-wGJF_DaMRniPBxLdtXnQ",
      category: "Setup",
      time: "5 min read"
    },
    {
      title: "Guide to International TV Channels in the UK",
      desc: "From US networks to European broadcasts, discover how to access premium international television content seamlessly.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSgxIAQcHzt9D9SPObsoD_nUbtgi6hMXiqbAfowH75-bEJeqv52RONHpEzqE2Rj6nPOX5Q6vdrmr2omfgJq7qvqRRnqXdNOT5rp4b3fpX-olxWRUpRbUIukeEtz26D6fLWxD5UKztAphOfRYZ0ly28fEfZtnpXp1DJZIKBOUu0xMyq8ucgbVeGRtng5GXtxMqRS1wV9cOZx-p2VVS_-JGQ7pPfVIx-2mUBtXtCxyNpM4YwqG8U3aHqVBVkYOd-9Fvg0qjJFXE5GQ",
      category: "Channels",
      time: "6 min read"
    },
    {
      title: "The Ultimate 4K Live Streaming Setup Guide",
      desc: "Optimize your home network and hardware to guarantee flawless, buffer-free 4K Ultra HD streaming for major live events.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEJoAatWCvAcQRvdQPeVzi5UHY8FhgC3_RAhZqiZX644eooAuXZruWGQpjji1yWNl4AdIUp1SC7Vugdqs6lg_7d_f6MmBC7Wt8z3pLBk5wmdz03AygbeuMQzgly3faot6BjQgAWY-dEJd5QyYOPLXys9xFUv2-SViEboGBaELUR-Lfk5n_skRD7sWRhT0xVV20_q0HoRKMmkL428BIfxDMp5KVvvU6S81iFTgFpFR42DCgEzEuQ7p8D4JBX6eLNfypbq7WBun_zQ",
      category: "Hardware",
      time: "10 min read"
    }
  ];

  return (
    <div className="pt-[120px] pb-24 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-20">
        <div className="inline-flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-xs font-bold text-secondary uppercase tracking-widest font-display">Guides & Insights</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-on-surface mb-4">The Vybe Hub.</h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl">
          Master your entertainment setup with premium guides, technical deep-dives, and the latest streaming insights.
        </p>
      </header>

      {/* Featured Article */}
      <section className="mb-24">
        <motion.div 
          whileHover={{ scale: 0.99 }}
          className="group relative overflow-hidden rounded-3xl bg-surface-container-low border border-outline-variant/20 hover:border-primary/50 transition-all duration-500 cursor-pointer"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto min-h-[400px]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyLeRUy4HU6Iabw3_2-nu954m_T0g_dolvcknDJC8i0FKkWdm7MsTrXfCTG6W5FoHydvsaizbEwpTxl-Y1mZY_VLa-K3daSwEkYxP-78bgNrbIPCLzuvd4wNjLqQqzMM4rsxx56p9L9U1sd6uJ0xYEe4BZFcfpktVIu6bT4jMG_OWa0dZmGEdBK6c2sRl-EWiEelSe4IYUmd2G-vpHMko_4rvbtOB2aQ-7HYR0Ovpt89R-X2-vY5YiEFEAjdPIbfR8oSdRZmghXw" 
                alt="Featured" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent" />
            </div>
            <div className="p-8 lg:p-16 flex flex-col justify-center z-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest font-display">Featured</span>
                <span className="text-sm text-on-surface-variant flex items-center gap-2">
                  <Clock className="w-4 h-4" /> 8 min read
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-on-surface mb-6 group-hover:text-primary transition-colors">How to Stream Live Football Without a Dish</h2>
              <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
                Cut the cord and unlock ultimate flexibility. A comprehensive guide to setting up high-definition, latency-free sports streaming using cutting-edge IPTV solutions in the UK.
              </p>
              <button className="w-fit btn-primary flex items-center gap-2">
                Read Guide <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <motion.article 
            key={i}
            whileHover={{ y: -8 }}
            className="group glass-panel rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-300"
          >
            <div className="relative aspect-video overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold text-secondary uppercase tracking-widest font-display">
                {article.category}
              </div>
            </div>
            <div className="p-8 flex flex-col h-[300px]">
              <h3 className="text-2xl font-display font-bold text-on-surface mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-on-surface-variant mb-auto line-clamp-3 leading-relaxed">
                {article.desc}
              </p>
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <a href="https://wa.me/923223224111" target="_blank" rel="noreferrer" className="text-primary hover:text-primary-container transition-colors font-display font-bold text-xs flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> Live Chat
                </a>
                <span className="text-xs text-on-surface-variant font-medium">{article.time}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <button className="btn-outline px-12 group">
          View All Articles
          <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
