import React, { useState, useRef, useEffect } from 'react';
import { getBotResponse } from './ChatLogic'; // Import the logic

// Using a deeper, more corporate blue tone
const PRIMARY_COLOR = 'bg-indigo-700';
const ACCENT_COLOR = 'bg-indigo-900'; // Subtle gold/amber for highlight
const TEXT_COLOR = 'text-gray-900';

const initialBotMessage = {
  text: "Hello! Welcome to SRI SAI EXIM. How can I assist you with your export or import query today?",
  sender: 'bot',
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([initialBotMessage]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null); // For auto-scrolling

  // Scroll to the bottom whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    // 1. Add user message
    const newUserMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, newUserMessage]);

    // 2. Get bot response (simulated delay for realism)
    const botResponseText = getBotResponse(input);
    const newBotMessage = { text: botResponseText, sender: 'bot' };

    setInput(''); // Clear input immediately

    // Add bot response after a short delay (optional, but good UX)
    setTimeout(() => {
      setMessages(prev => [...prev, newBotMessage]);
    }, 500); 
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    // Fixed container for the floating button and chat window
    // Use a high z-index (z-[999]) for certainty
    <div className="fixed bottom-6 right-6 z-[999]"> 
      
      {/* --- Chat Window --- */}
      {isOpen && (
        // Added 'shadow-2xl' and 'ring-1 ring-gray-200' for a premium floating look
        <div className="w-80 md:w-96 h-[480px] bg-white shadow-2xl rounded-xl flex flex-col overflow-hidden ring-1 ring-gray-200 mb-4 transition-all duration-300">
          
          {/* Header - Deep Blue Background */}
          <div className={`${PRIMARY_COLOR} text-white p-4 flex items-center justify-between shadow-md`}>
            <h3 className="font-semibold text-xl tracking-wide">SRI SAI EXIM Assistant</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white opacity-80 hover:opacity-100 transition-opacity text-2xl bg-[#144df7ff]"
              style={{backgroundColor:"#144df7ff"}}
              
            >
              &times;
            </button>
          </div>
          
          {/* Message Area - Cleaner Padding */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {/* Message Bubble Styling */}
                <div 
                  className={`max-w-[85%] p-3 rounded-xl text-sm ${TEXT_COLOR} shadow-sm 
                    ${msg.sender === 'user' 
                      // User message: Accent color with subtle rounding
                      ? `${ACCENT_COLOR} text-white rounded-br-lg font-medium` 
                      // Bot message: Light gray/white with border for contrast
                      : 'bg-white text-gray-800 border border-gray-100 rounded-tl-lg'
                    }`
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Scroll target */}
          </div>
          
          {/* Input Area - Cleaner border, refined button */}
          <div className="border-t border-gray-200 p-3 flex bg-white">
            <input
              type="text"
              className={`flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base ${TEXT_COLOR}`}
              placeholder="Ask your query..." // More professional placeholder
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={handleSend}
              style={{backgroundColor: "#144df7ff"}}
              className={`${PRIMARY_COLOR} text-white p-3 rounded-r-lg hover:bg-indigo-800 transition-colors disabled:opacity-50 flex items-center justify-center`}
              disabled={input.trim() === ''}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>
      )}

      {/* --- Floating Chat Button --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{backgroundColor:"#144df7ff"}}
        // Deep color, larger size, deeper shadow for presence
        className={`${PRIMARY_COLOR} bg-[ #0098f7ff] text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center hover:bg-indigo-800 transition-all duration-300 transform hover:scale-105`}
      >
        {isOpen ? (
          // Close Icon - Simple 'X'
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        ) : (
          // Message Icon - Use a more formal message icon
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        )}
      </button>

    </div>
  );
};

export default Chatbot;