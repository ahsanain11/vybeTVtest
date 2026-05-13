import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Mail, CheckCircle2, ChevronRight, Loader2, MessageCircle } from 'lucide-react';

interface SupportLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportLeadModal({ isOpen, onClose }: SupportLeadModalProps) {
  const [phone, setPhone] = useState('+44 ');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/trial-request', { // Reusing the same endpoint logic for support leads
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone,
          email,
          packageName: 'Support Inquiry'
        })
      });

      if (!response.ok) throw new Error('Submission failed');

      setStatus('success');
    } catch (error) {
      console.error('Error submitting support lead:', error);
      alert('Something went wrong. Please try again later.');
      setStatus('idle');
    }
  };

  if (!isOpen && status !== 'success') return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md glass-panel rounded-[2rem] p-8 md:p-10 shadow-2xl border-white/10"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-on-surface-variant hover:text-on-surface hover:bg-white/5 rounded-full transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/30">
                  <CheckCircle2 className="text-primary w-10 h-10" />
                </div>
                <h2 className="text-3xl font-display font-bold text-on-surface mb-4">Request Received</h2>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  We've received your request for support. Our team will contact you at <span className="text-primary font-bold">{phone}</span> as soon as possible.
                </p>
                <button 
                  onClick={onClose}
                  className="btn-primary w-full"
                >
                  Return to Chat
                </button>
              </motion.div>
            ) : (
              <>
                <div className="mb-8">
                  <span className="inline-block py-1 px-3 rounded-md bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest mb-4">
                    Expert Human Support
                  </span>
                  <h2 className="text-3xl font-display font-bold text-on-surface mb-2">Need More Help?</h2>
                  <p className="text-on-surface-variant text-sm">
                    Enter your details for a callback, or connect with us instantly on WhatsApp.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* WhatsApp Button */}
                  <a 
                    href="https://wa.me/923223224111" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl flex items-center justify-center gap-3 font-bold transition-all shadow-lg hover:shadow-green-500/30 group"
                  >
                    <MessageCircle className="w-6 h-6 fill-white" />
                    Express Support via WhatsApp
                  </a>

                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
                      <span className="px-4 bg-[#0a0a0a] text-on-surface-variant font-bold">Or Request Callback</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                        <input 
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-surface-container-highest/30 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-on-surface focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30"
                          placeholder="+44 123 456 7890"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                        <input 
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-surface-container-highest/30 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-on-surface focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <button 
                      disabled={status === 'submitting'}
                      className="w-full btn-primary py-5 flex items-center justify-center gap-3 shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Inquiry
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
