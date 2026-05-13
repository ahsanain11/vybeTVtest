import { Link } from 'react-router-dom';
import { PlayCircle, Languages, Monitor } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-20 px-6 md:px-16 bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-display font-bold text-on-surface mb-6 flex items-center gap-2">
              <PlayCircle className="text-primary w-8 h-8 fill-primary/20" />
              VybeTV
            </Link>
            <p className="text-on-surface-variant text-base leading-relaxed max-w-xs">
              The premier destination for modern, high-quality home entertainment viewing. Premium UK live streaming without limits.
            </p>
          </div>

          {/* Links Columns */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-on-surface uppercase tracking-wider text-sm mb-2">Company</h4>
            <Link to="/about" className="text-on-surface-variant hover:text-secondary hover:underline transition-all">About VybeTV</Link>
            <Link to="/devices" className="text-on-surface-variant hover:text-secondary hover:underline transition-all">Supported Devices</Link>
            <Link to="/pricing" className="text-on-surface-variant hover:text-secondary hover:underline transition-all">Pricing Plans</Link>
            <Link to="/blog" className="text-on-surface-variant hover:text-secondary hover:underline transition-all">The Vybe Hub</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-on-surface uppercase tracking-wider text-sm mb-2">Support</h4>
            <Link to="/contact" className="text-on-surface-variant hover:text-secondary hover:underline transition-all">Support Center</Link>
            <a href="https://wa.me/923223224111" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-secondary hover:underline transition-all">Live Chat Contact</a>
            <a href="https://wa.me/923223224111" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-secondary hover:underline transition-all">WhatsApp Support</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-on-surface uppercase tracking-wider text-sm mb-2">Legal</h4>
            <Link to="/privacy" className="text-on-surface-variant hover:text-secondary hover:underline transition-all">Privacy Policy</Link>
            <Link to="/terms" className="text-on-surface-variant hover:text-secondary hover:underline transition-all">Terms of Service</Link>
            <Link to="/cookies" className="text-on-surface-variant hover:text-secondary hover:underline transition-all">Cookie Settings</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-on-surface-variant text-sm text-center md:text-left">
            © 2024 VybeTV. Premium UK Live Streaming. All rights reserved. <span className="mx-2 text-white/10">|</span> Licensed for UK Distribution.
          </p>
          <div className="flex gap-4 text-on-surface-variant/50">
            <Languages className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            <Monitor className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
