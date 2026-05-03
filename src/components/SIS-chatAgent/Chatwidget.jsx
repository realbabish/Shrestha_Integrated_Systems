import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Using framer-motion for the pop

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHook, setShowHook] = useState(false); // New state for the "Chat now" pop
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Welcome to Shrestha Integrated Systems. Need a rough estimate or want to book a site survey?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => Math.random().toString(36).substring(7));
  const messagesEndRef = useRef(null);

  // 1. PROACTIVE POP: Show "Chat now" hook after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowHook(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    try {
      const response = await axios.post('https://ai-api.integratedsystems.ca:8000/chat', {
        text: input,
        session_id: sessionId
      });
      setMessages([...newMessages, { role: 'assistant', content: response.data.reply }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'assistant', content: 'Sorry, I am having trouble connecting to the server.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans antialiased">
      
      {/* CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white w-80 sm:w-96 h-[30rem] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 mb-4"
          >
            {/* HEADER - Updated to your Brand Colors */}
            <div className="bg-[#050608] text-white p-4 flex justify-between items-center shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400/10 to-transparent pointer-events-none"></div>
              
              <div className="flex items-center gap-3 z-10">
                <div className="bg-zinc-800 p-1.5 rounded-md border border-zinc-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className="w-5 h-5">
                    <path d="M 45 10 L 10 10 L 10 35 L 35 35 L 35 45 L 10 45 L 10 55 L 50 55 L 50 25 L 25 25 L 25 20 L 45 20 Z" fill="#facc15" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-xs uppercase tracking-widest text-white">SIS Agent</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">System Online</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors p-1"><X size={20} /></button>
            </div>
            
            {/* CHAT AREA */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 px-4 rounded-2xl max-w-[85%] text-sm shadow-sm ${
                      msg.role === 'user' ? 'bg-black text-white rounded-br-none' : 'bg-white border border-gray-200 text-slate-800 rounded-bl-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 px-4 py-2 rounded-2xl rounded-bl-none shadow-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* INPUT AREA */}
            <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input 
                type="text" value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
              <button onClick={sendMessage} disabled={isTyping || !input.trim()} className="bg-black text-white p-2 rounded-lg hover:bg-yellow-400 hover:text-black transition-all disabled:opacity-50 shadow-md">
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING LAUNCHER & PROACTIVE HOOK */}
      {!isOpen && (
        <div className="flex flex-col items-end">
          {/* THE HOOK POPOVER */}
          <AnimatePresence>
            {showHook && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="mb-4 bg-white border border-gray-200 p-3 rounded-xl shadow-xl flex items-center gap-3 relative mr-2 cursor-pointer"
                onClick={() => { setIsOpen(true); setShowHook(false); }}
              >
                {/* Small triangle arrow for the bubble */}
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-200 rotate-45"></div>
                
                <div className="bg-yellow-400 p-1.5 rounded-lg">
                  <Bot size={16} className="text-black" />
                </div>
                <div className="pr-4">
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">SIS Agent</p>
                  <p className="text-xs font-black text-black">Chat now for a quick quote</p>
                </div>
                <button onClick={(e) => { e.stopPropagation(); setShowHook(false); }} className="text-gray-400 hover:text-black transition-colors"><X size={14}/></button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* THE BUTTON */}
          <button 
            onClick={() => { setIsOpen(true); setShowHook(false); }}
            className="group bg-black text-yellow-400 p-4 rounded-full shadow-2xl hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-110 relative border-2 border-yellow-400/20"
          >
            <MessageCircle size={28} className="group-hover:rotate-12 transition-transform duration-300" />
            
            {/* Notification Dot */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-500 border-2 border-black"></span>
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;