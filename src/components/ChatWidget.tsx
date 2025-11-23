"use client";
import { useState } from "react";
import {
  MessageSquare,
  ChevronDown,
  X,
  Send,
  Sparkles,
} from "lucide-react";

declare global {
  interface Window {
    puter: any;
  }
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! 👋 I'm writeFlow assistant. Ask me about writeFlow and writing tips!",
      from: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages((prev) => [...prev, { text: userMsg, from: "user" }]);
    setInput("");
    setIsTyping(true);

    try {
      // Build a simple context string from previous messages
      const historyContext = messages.map((m) => `${m.from === "user" ? "User" : "Assistant"}: ${m.text}`).join("\n");
      const fullPrompt = `${historyContext}\nUser: ${userMsg}\nAssistant:`;
      const systemPrompt =
        "You are a friendly, helpful support assistant for WriteFlow. You help users with the SaaS product and give brief writing advice.";

      //const reply = await callGeminiAPI(fullPrompt, systemPrompt);

      const messages = [
        { role: "system", content: systemPrompt },
        { role: "user", content: fullPrompt },
      ]

      const response = await window.puter.ai.chat(messages, {
        model: "gpt-4o-nano"
      })

      const reply = response.choices[0].message.content

      setMessages((prev) => [...prev, { text: reply, from: "bot" }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm having trouble connecting right now.",
          from: "bot",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="bg-indigo-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="font-semibold">WriteFlow AI Support</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="h-64 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] p-3 text-sm rounded-lg ${msg.from === "bot" ? "bg-white border border-gray-200 self-start text-gray-700" : "bg-indigo-600 text-white self-end"}`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="bg-white border border-gray-200 self-start p-3 rounded-lg flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
              </div>
            )}
          </div>
          <form
            onSubmit={handleSend}
            className="p-3 bg-white border-t flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 text-sm outline-none px-2"
            />
            <button
              type="submit"
              disabled={isTyping}
              className="text-indigo-600 hover:bg-indigo-50 p-2 rounded-full disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
      >
        {isOpen ? (
          <ChevronDown className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};
