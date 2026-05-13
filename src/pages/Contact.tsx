import { motion } from 'motion/react';
import { Search, PlayCircle, Trophy, Film, Globe, Flag, Newspaper, Landmark, User, Mail, Send, MessageCircle, HelpCircle, Zap, ShieldCheck, CheckCircle2, Loader2 } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Technical Support',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Submission failed');

      setStatus('success');
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Something went wrong. Please try again later.');
      setStatus('idle');
    }
  };

  return (
    <div className="pt-[120px] pb-24">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center px-6 md:px-16 overflow-hidden text-center mb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBDA3PEERN6tjf0rPuVEbSlFk8j2Utmi-PNL_lA06Bno8WUH7IS83Wx0vYXhw_2-ykzS5VqcZbIA_Ii6FNN-ZL2QGzfPJMfb2ildAqS9IyuSDQung04Vu7_AVnm9FNGnRByxEN0B4q1kFdlBLtOr4X9RqFNTTYoXmdFWgirLNys_MOYgONdAldI5eyO77dAt4aPzU_spQQMPO7lcYywfMGcrvg_ucd8amP21kuYy549eRjrNVYysEKoH-wjJZiT8V-78hl7HH4ug" 
            alt="Support BG" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-extrabold text-on-surface mb-8 tracking-tight"
          >
            We're Here to <span className="text-gradient">Help</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12"
          >
            Experience uninterrupted entertainment. Our dedicated support team is available around the clock to ensure your VybeTV experience is flawless.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="https://wa.me/923223224111" target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-3">
              <MessageCircle className="w-5 h-5 fill-white" />
              Start 24/7 Live Chat
            </a>
            <button className="btn-outline flex items-center gap-3">
              <HelpCircle className="w-5 h-5" />
              Visit Support Hub
            </button>
          </div>
        </div>
      </section>

      {/* Bento Layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-secondary/30">
                    <CheckCircle2 className="text-secondary w-10 h-10" />
                  </div>
                  <h2 className="text-4xl font-display font-bold text-on-surface mb-4">Message Sent!</h2>
                  <p className="text-on-surface-variant mb-8 text-lg">
                    Thank you for reaching out. Our support team will review your message and get back to you at <span className="text-secondary font-bold">{formData.email}</span> within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="btn-outline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-3xl font-display font-bold text-on-surface mb-3">Send us a Message</h2>
                  <p className="text-on-surface-variant mb-10">Fill out the form and we'll get back to you within 24 hours.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1 flex items-center gap-2">
                          <User className="w-3 h-3" /> Full Name
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full bg-surface-container-highest/20 border border-white/10 rounded-xl px-5 py-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1 flex items-center gap-2">
                          <Mail className="w-3 h-3" /> Email Address
                        </label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full bg-surface-container-highest/20 border border-white/10 rounded-xl px-5 py-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1">Subject</label>
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-surface-container-highest/40 border border-white/10 rounded-xl px-5 py-4 text-on-surface focus:border-primary outline-none transition-all cursor-pointer"
                      >
                        <option className="bg-[#1a1a1a] text-white">Technical Support</option>
                        <option className="bg-[#1a1a1a] text-white">Billing Inquiry</option>
                        <option className="bg-[#1a1a1a] text-white">Account Management</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1">Message</label>
                      <textarea 
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you?"
                        className="w-full bg-surface-container-highest/20 border border-white/10 rounded-xl px-5 py-4 text-on-surface focus:border-primary outline-none transition-all resize-none"
                      />
                    </div>

                    <button 
                      disabled={status === 'submitting'}
                      className="w-full bg-white/5 hover:bg-primary/20 border border-white/10 text-on-surface font-display font-bold py-5 rounded-2xl transition-all duration-300 flex justify-center items-center gap-3 group disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>

          {/* Quick Support Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-10 rounded-3xl flex-grow flex flex-col justify-between border-secondary/20 relative overflow-hidden group"
            >
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all" />
              <div className="relative z-10">
                <div className="bg-surface-container-high w-14 h-14 rounded-full flex items-center justify-center mb-8 border border-white/5">
                  <MessageCircle className="text-secondary w-7 h-7 fill-secondary/20" />
                </div>
                <h3 className="text-3xl font-display font-bold text-on-surface mb-4">Need it sorted faster?</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  Skip the queue. Our Live Chat support connects you instantly with our streaming experts in less than a minute.
                </p>
              </div>
              <a href="https://wa.me/923223224111" target="_blank" rel="noreferrer" className="w-full bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-display font-bold py-5 rounded-2xl shadow-xl hover:shadow-secondary/20 transition-all flex justify-center items-center">
                Start Live Chat Now
              </a>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              <div className="glass-panel p-8 rounded-3xl text-center group hover:bg-white/5 transition-all">
                <Zap className="text-primary w-10 h-10 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h4 className="text-sm font-bold text-on-surface mb-1">Instant Reply</h4>
                <p className="text-xs text-on-surface-variant">Avg. wait &lt; 1m</p>
              </div>
              <div className="glass-panel p-8 rounded-3xl text-center group hover:bg-white/5 transition-all">
                <Globe className="text-secondary w-10 h-10 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h4 className="text-sm font-bold text-on-surface mb-1">Global Support</h4>
                <p className="text-xs text-on-surface-variant">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
