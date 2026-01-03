
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Minimize2, Maximize2 } from 'lucide-react';
import { getEnergyConsultation } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Hello! I'm the MW Energy Expert Consultant. How can I help you with your infrastructure, Solar, or BESS needs today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    const response = await getEnergyConsultation(userMessage);
    setMessages(prev => [...prev, { role: 'model', content: response || "I'm sorry, I couldn't process that. Please try again." }]);
    setIsLoading(false);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[60] brand-gradient text-slate-950 p-5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(58,190,249,0.5)] transition-all scale-100 hover:scale-110 flex items-center space-x-3 group active:scale-95"
      >
        <Bot className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-black uppercase tracking-widest text-xs whitespace-nowrap">Energy AI Expert</span>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-8 right-8 z-[60] glass-morphism w-full max-w-[360px] md:max-w-[420px] rounded-[32px] overflow-hidden flex flex-col shadow-2xl transition-all border-brand-cyan/20 ${isMinimized ? 'h-16' : 'h-[600px]'}`}>
      <div className="bg-slate-900/80 p-5 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center space-x-4">
          <div className="bg-brand-cyan/10 p-2 rounded-xl border border-brand-cyan/20">
            <Bot className="h-5 w-5 text-brand-cyan" />
          </div>
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest">Expert Consultant</h4>
            <div className="flex items-center space-x-1.5 mt-0.5">
              <span className="h-2 w-2 bg-brand-green rounded-full animate-pulse shadow-[0_0_10px_rgba(151,233,177,0.8)]"></span>
              <span className="text-[10px] text-brand-green font-black uppercase tracking-tighter">AI Online</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <button onClick={() => setIsMinimized(!isMinimized)} className="text-slate-500 hover:text-white p-2 transition-colors">
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </button>
          <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white p-2 transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-950/40">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'brand-gradient text-slate-950 font-bold' : 'bg-slate-800 text-slate-200 border border-slate-700/50'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 flex space-x-1.5">
                  <div className="h-2 w-2 bg-brand-cyan rounded-full animate-bounce"></div>
                  <div className="h-2 w-2 bg-brand-cyan rounded-full animate-bounce delay-150"></div>
                  <div className="h-2 w-2 bg-brand-cyan rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-5 bg-slate-900/80 border-t border-white/5">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Solar, BESS or AI Glass..."
                className="w-full bg-slate-950 border border-slate-700/50 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-3 p-2 bg-brand-cyan text-slate-950 rounded-xl hover:bg-brand-green transition-all disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AIConsultant;
