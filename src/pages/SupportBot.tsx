import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Loader2, PlayCircle, MessageSquare, ArrowLeft, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  role: 'user' | 'bot' | 'system_action';
  text: string;
  timestamp: Date;
}

interface SupportBotProps {
  onContactClick?: () => void;
}

// Local FAQ Knowledge Base
const FAQ_DATABASE = [
  {
    keywords: ['football', 'premier league', 'la liga', 'bundesliga', 'serie a', 'champions league', 'soccer', 'match', 'game'],
    response: "Yes! We provide live coverage for all major football leagues including the **Premier League**, **Champions League**, **Europa League**, **La Liga**, **Bundesliga**, and many more. All matches are available in HD/4K quality."
  },
  {
    keywords: ['trial', 'free', 'test', 'demo', '24 hour'],
    response: "We offer a **24-hour free trial** so you can test our service before committing. You can start your trial by clicking the 'Start Free Trial' button on our homepage or pricing page."
  },
  {
    keywords: ['device', 'tv', 'phone', 'firestick', 'apple', 'android', 'roku', 'samsung', 'lg'],
    response: "VybeTV is compatible with almost every device! We support:\n\n- **Amazon Firestick**\n- **iOS & Android** (Phones/Tablets)\n- **Apple TV**\n- **Smart TVs** (Samsung, LG, Android TV, Roku)\n- **Windows & Mac**\n\nCheck our 'Devices' page for full details."
  },
  {
    keywords: ['buffer', 'lag', 'slow', 'freeze', 'quality', '4k', 'hd'],
    response: "VybeTV is optimized for low-latency streaming. We recommend a minimum connection speed of **25Mbps** for 4K content. If you're experiencing issues, try restarting your router or switching to an Ethernet connection for best results."
  },
  {
    keywords: ['price', 'cost', 'subscription', 'monthly', 'package', 'pay'],
    response: "Our plans start from just £12.99. We offer flexible options for 1 month, 3 months, 6 months, and 12 months. Visit our **Pricing** page to see all available packages and features."
  },
  {
    keywords: ['help', 'support', 'human', 'contact', 'talk', 'whatsapp', 'person'],
    response: "I'm your AI assistant, but if you need to speak with our human experts, please click the **'Contact Support'** button at the top or below for WhatsApp and callback options."
  }
];

export default function SupportBot({ onContactClick }: SupportBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'bot',
      text: "Hello! I'm your VybeTV Assistant. I can help you with questions about our **football coverage**, **supported devices**, **pricing**, or **free trials**. \n\nHow can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const findBestResponse = (query: string) => {
    const lowerQuery = query.toLowerCase();
    
    // Check for football specifically as requested with misspelling tolerance
    const footballTerms = ['football', 'footbal', 'soccer', 'soker', 'futbol'];
    if (footballTerms.some(t => lowerQuery.includes(t))) {
       return FAQ_DATABASE[0].response;
    }

    // Common misspellings for other categories
    const misspellingMap: Record<string, string[]> = {
      trial: ['trial', 'tiral', 'triel', 'trail', 'free', 'test'],
      price: ['price', 'prise', 'cost', 'cozt', 'pay', 'subscription'],
      device: ['device', 'devise', 'divice', 'tv', 'firestick', 'phone'],
      buffer: ['buffer', 'bufer', 'lag', 'lagg', 'slow', 'freeze'],
    };

    // Check misspellings first
    for (const [category, variants] of Object.entries(misspellingMap)) {
      if (variants.some(v => lowerQuery.includes(v))) {
        // Find the index in FAQ_DATABASE matching these keywords
        if (category === 'trial') return FAQ_DATABASE[1].response;
        if (category === 'device') return FAQ_DATABASE[2].response;
        if (category === 'buffer') return FAQ_DATABASE[3].response;
        if (category === 'price') return FAQ_DATABASE[4].response;
      }
    }

    // Keyword matching with very basic "fuzzy" check (contains)
    for (const item of FAQ_DATABASE) {
      if (item.keywords.some(k => lowerQuery.includes(k))) {
        return item.response;
      }
    }

    return "I'm not quite sure about that specific question. For more detailed assistance, please click the **'Contact Support'** button below and our team will help you manually!";
  };

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate thinking/searching locally
    setTimeout(() => {
      const responseText = findBestResponse(userMessage.text);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="pt-[100px] pb-10 min-h-screen bg-background flex flex-col">
      <div className="max-w-4xl w-full mx-auto px-4 flex-grow flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-white/5 rounded-full transition-colors text-on-surface-variant">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-on-surface flex items-center gap-3">
                <Bot className="text-primary w-8 h-8" />
                VybeTV Assistant
              </h1>
              <p className="text-on-surface-variant text-sm">Automated Instant Answers</p>
            </div>
          </div>
          <button 
            onClick={onContactClick}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary-container to-secondary-container text-white rounded-full font-bold text-sm shadow-lg hover:shadow-primary/30 transition-all group"
          >
            <Headphones className="w-4 h-4" />
            Contact Support
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-grow glass-panel rounded-[2rem] overflow-hidden flex flex-col border-white/5 shadow-2xl min-h-[60vh] max-h-[70vh]">
          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10"
          >
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-3 max-w-[85%] md:max-w-[70%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border ${
                    message.role === 'user' ? 'bg-primary/20 border-primary/30' : 'bg-surface-container border-white/10'
                  }`}>
                    {message.role === 'user' ? <User className="w-5 h-5 text-primary" /> : <Bot className="w-5 h-5 text-secondary" />}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className={`p-4 rounded-2xl ${
                      message.role === 'user' 
                        ? 'bg-primary text-on-primary rounded-tr-none' 
                        : 'bg-surface-container-highest/50 text-on-surface rounded-tl-none border border-white/5'
                    }`}>
                      <div className="text-sm md:text-base leading-relaxed whitespace-pre-wrap prose prose-invert prose-sm max-w-full">
                        <ReactMarkdown>{message.text}</ReactMarkdown>
                      </div>
                      <span className="text-[10px] opacity-50 mt-2 block text-right">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    {message.role === 'bot' && (message.text.toLowerCase().includes('contact support') || message.text.toLowerCase().includes('detailed assistance')) && (
                      <button 
                        onClick={onContactClick}
                        className="mt-2 btn-primary py-3 px-6 text-sm flex items-center justify-center gap-2 w-fit"
                      >
                        <Headphones className="w-4 h-4" />
                        Open Support Form
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container border border-white/10 flex items-center justify-center">
                    <Loader2 className="w-5 h-5 text-secondary animate-spin" />
                  </div>
                  <div className="bg-surface-container-highest/50 p-4 rounded-2xl rounded-tl-none border border-white/5">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-on-surface-variant rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-on-surface-variant rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-on-surface-variant rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white/5 border-t border-white/10">
            <form onSubmit={handleSend} className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about football, devices, or trials..."
                className="flex-grow bg-surface-container/50 border border-white/10 rounded-xl px-5 py-3 text-on-surface focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="btn-primary p-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
