import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';
import { GenerateContentResponse } from '@google/genai';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi there! I'm Nexus, Martin's AI assistant. Ask me about his studies, projects, or skills." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const stream = await sendMessageToGemini(userText);
      
      if (!stream) {
        throw new Error("Service unavailable");
      }

      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      let fullText = '';

      for await (const chunk of stream) {
        const c = chunk as GenerateContentResponse;
        const chunkText = c.text || '';
        fullText += chunkText;
        
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMsg = newMessages[newMessages.length - 1];
          if (lastMsg.role === 'model') {
            lastMsg.text = fullText;
          }
          return newMessages;
        });
        scrollToBottom();
      }
      
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting right now. Please try again later.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] h-[500px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-10">
          <div className="bg-zinc-50 dark:bg-zinc-850 p-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent-600 dark:text-accent-500" />
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Nexus AI</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50/95 dark:bg-zinc-900/95">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-accent-600 text-white rounded-br-none' 
                      : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-bl-none border border-zinc-200 dark:border-zinc-700 shadow-sm dark:shadow-none'
                  } ${msg.isError ? 'border-red-500 text-red-600 dark:text-red-200' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-white dark:bg-zinc-800 p-3 rounded-lg rounded-bl-none border border-zinc-200 dark:border-zinc-700 shadow-sm dark:shadow-none">
                   <Loader2 className="w-4 h-4 animate-spin text-accent-500" />
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-zinc-50 dark:bg-zinc-850 border-t border-zinc-200 dark:border-zinc-800">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Martin..."
                className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-200 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 placeholder-zinc-400 dark:placeholder-zinc-600 shadow-inner dark:shadow-none"
                disabled={isLoading}
              />
              <button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent-600 text-white rounded-full hover:bg-accent-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center ${
          isOpen 
            ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rotate-90' 
            : 'bg-accent-600 text-white dark:text-zinc-950 hover:bg-accent-500'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default AIChat;