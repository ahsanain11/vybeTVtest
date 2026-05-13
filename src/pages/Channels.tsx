import { motion } from 'motion/react';
import { Search, Trophy, Film, Laptop, Globe, Flag, Newspaper, Landmark, User, Mail, Send, MessageCircle, HelpCircle, Zap, ShieldCheck, Gamepad2, Tv, Utensils, Microscope, WalletCards } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Channels({ onOrderClick }: { onOrderClick?: (pkg?: string) => void }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { name: 'All', icon: Globe },
    { name: 'Sports', icon: Trophy },
    { name: 'Entertainment', icon: Film },
    { name: 'News', icon: Newspaper },
    { name: 'International', icon: Flag },
  ];

  const channelSections = [
    {
      title: "Premium Sports",
      icon: Trophy,
      channels: [
        { name: "Action Sports 1", icon: Landmark, live: true, quality: "4K" },
        { name: "Motor Racing HD", icon: Gamepad2, live: false, quality: "HD" },
        { name: "Hoops Network", icon: Zap, live: false, quality: "4K" },
        { name: "Combat Zone TV", icon: Zap, live: false, quality: "HD" },
        { name: "Cricket Live+", icon: Trophy, live: false, quality: "HD" },
      ]
    },
    {
      title: "Entertainment & Lifestyle",
      icon: Film,
      channels: [
        { name: "Cinema Premier", icon: Film, live: false, quality: "4K" },
        { name: "Kids Universe", icon: User, live: false, quality: "HD" },
        { name: "Reality Plus", icon: ShieldCheck, live: false, quality: "HD" },
        { name: "Cuisine TV", icon: Utensils, live: false, quality: "HD" },
        { name: "Discovery HD", icon: Microscope, live: false, quality: "HD" },
      ]
    },
    {
      title: "Global News",
      icon: Newspaper,
      channels: [
        { name: "World News 24", icon: Newspaper, live: true, quality: "HD" },
        { name: "Finance Daily", icon: WalletCards, live: false, quality: "HD" },
      ]
    },
    {
      title: "International Networks",
      icon: Globe,
      channels: [
        { name: "UK Premium", icon: Flag, live: false, quality: "HD" },
        { name: "US Global", icon: Globe, live: false, quality: "HD" },
      ]
    }
  ];

  return (
    <div className="pt-[120px] pb-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
      <section className="mb-20 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-on-surface mb-4">Channel Directory</h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-12">
          Explore our comprehensive lineup of premium HD streams across sports, entertainment, and global networks.
        </p>

        {/* Search */}
        <div className="relative w-full max-w-2xl mb-10 mx-auto md:mx-0">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search channels, genres, or keywords..."
            className="w-full bg-[#0A0A0A] border border-outline-variant/30 rounded-full py-5 pl-16 pr-8 text-on-surface focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(208,188,255,0.2)] transition-all placeholder:text-on-surface-variant/50 shadow-xl"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveFilter(cat.name)}
              className={`px-8 py-3 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                activeFilter === cat.name 
                  ? 'bg-primary text-on-primary border-transparent shadow-[0_0_15px_rgba(208,188,255,0.3)]' 
                  : 'bg-surface-container text-on-surface border-white/5 hover:bg-surface-bright'
              }`}
            >
              <div className="flex items-center gap-2">
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Grid of Sections */}
      <div className="space-y-20">
        {channelSections.map((section, idx) => (
          <section key={idx} className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <section.icon className="text-secondary w-6 h-6" />
              </div>
              <h2 className="text-3xl font-display font-bold text-on-surface">{section.title}</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {section.channels.map((chan, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative aspect-video bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/20 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(208,188,255,0.2)] transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center p-6 text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-surface-bright to-surface-container opacity-40 group-hover:opacity-60 transition-opacity" />
                  <chan.icon className="w-12 h-12 text-primary mb-3 relative z-10 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-on-surface uppercase tracking-widest relative z-10 leading-tight">
                    {chan.name}
                  </span>
                  
                  {chan.live && (
                    <div className="absolute top-4 right-4 bg-error text-on-error px-3 py-1 rounded-full text-[8px] font-extrabold shadow-lg">
                      LIVE
                    </div>
                  )}
                  {chan.quality === "4K" && (
                    <div className="absolute top-4 right-4 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[8px] font-extrabold shadow-lg">
                      4K
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="mt-32">
        <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-surface-container-high border border-outline-variant/30 p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 group">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-primary/20 transition-all duration-700" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
          
          <div className="relative z-10 flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-on-surface mb-6">Unlock Complete Access</h2>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mx-auto md:mx-0">
              Get instant, buffer-free streaming for all channels. Setup takes less than 2 minutes via Live Chat.
            </p>
          </div>
          
          <button 
            onClick={() => onOrderClick?.('Complete Access Packet')}
            className="relative z-10 btn-primary px-12 py-5 text-lg shadow-2xl hover:shadow-primary/40"
          >
            Order Now
          </button>
        </div>
      </section>
    </div>
  );
}
