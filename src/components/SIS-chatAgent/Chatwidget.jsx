import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { MessageCircle, X, Send } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHook, setShowHook] = useState(false); // <-- NEW STATE FOR THE BUBBLE
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Welcome to Shrestha Integrated Systems. Need a rough estimate or want to book a site survey?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => Math.random().toString(36).substring(7));
  const messagesEndRef = useRef(null);

  // <-- NEW: Auto-show the "Chat now" bubble after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowHook(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Auto-scroll to the bottom when a new message arrives
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
      console.error("Chat Error:", error);
      setMessages([...newMessages, { role: 'assistant', content: 'Sorry, I am having trouble connecting to the server.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans antialiased">
      
      {/* CHAT WINDOW (Your exact original design) */}
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 h-[30rem] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 mb-4 animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* HEADER */}
          <div className="bg-slate-900 text-white p-4 flex justify-between items-center shadow-md z-10 relative overflow-hidden">
            {/* Subtle background glow effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-transparent pointer-events-none"></div>
            
            <div className="flex items-center gap-3 z-10">
              
              {/* YOUR EXACT SVG LOGO */}
              <div className="bg-slate-800 p-1.5 rounded-md border border-slate-700 shadow-sm flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 60"
                  className="w-6 h-6"
                >
                  <path 
                    d="M 45 10 L 10 10 L 10 35 L 35 35 L 35 45 L 10 45 L 10 55 L 50 55 L 50 25 L 25 25 L 25 20 L 45 20 Z" 
                    fill="#ffffff" 
                  />
                  <rect x="48" y="10" width="8" height="8" fill="#facc15" className="animate-pulse" />
                  <rect x="4" y="47" width="8" height="8" fill="#facc15" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                </svg>
              </div>

              <div>
                <h3 className="font-bold text-sm tracking-wide">Shrestha AI Support</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                  <p className="text-xs text-slate-300 font-medium">Online & Ready</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white transition-colors z-10 p-1"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* CHAT AREA */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-4">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`p-3 px-4 rounded-2xl max-w-[85%] text-sm shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-sm' 
                      : 'bg-white border border-gray-200 text-slate-800 rounded-bl-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-bl-sm shadow-sm flex gap-1.5 items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* INPUT AREA */}
          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 bg-slate-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
            <button 
              onClick={sendMessage} 
              disabled={isTyping || !input.trim()}
              className="bg-blue-600 text-white p-2.5 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md flex-shrink-0"
            >
              <Send size={18} className="ml-0.5" />
            </button>
          </div>
        </div>
      )}

      {/* THE LAUNCHER AND THE HOOK */}
      {!isOpen && (
        <div className="flex flex-col items-end">
          
          {/* <-- THE NEW POP-UP BUBBLE --> */}
          {showHook && (
            <div 
              className="mb-4 mr-1 bg-white border border-gray-200 p-3 rounded-xl shadow-lg flex items-start gap-3 relative cursor-pointer animate-in fade-in slide-in-from-bottom-2 duration-500"
              onClick={() => { setIsOpen(true); setShowHook(false); }}
            >
              {/* Little triangle pointing to the button */}
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-200 rotate-45"></div>
              
              <div>
                <p className="text-xs font-bold text-slate-800">Have a question?</p>
                <p className="text-[10px] text-blue-600 font-semibold mt-0.5">Chat with our AI Agent</p>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setShowHook(false); }} 
                className="text-gray-400 hover:text-gray-600 transition-colors ml-2 -mt-1 -mr-1 p-1"
              >
                <X size={14} />
              </button>
            </div>
          )}

          {/* YOUR EXACT ORIGINAL FLOATING BUBBLE */}
          <button 
            onClick={() => { setIsOpen(true); setShowHook(false); }}
            className="group bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-110 float-right flex items-center justify-center relative"
          >
            <MessageCircle size={28} className="group-hover:rotate-12 transition-transform duration-300" />
            {/* Notification Dot */}
            <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;