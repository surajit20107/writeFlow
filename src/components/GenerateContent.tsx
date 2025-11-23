"use client";
import { useState, useRef } from "react";
import { Zap, Sparkles, AlertCircle } from "lucide-react";

declare global {
  interface Window {
    puter: any;
  }
}

export default function GenerateContent() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState("blog"); // blog, letter, email
  const [error, setError] = useState<string | null>(null);

  const typewriterRef = useRef<any>(null);

  const animateText = (fullText: string) => {
    setOutput("");
    let i = 0;
    clearInterval(typewriterRef.current);

    typewriterRef.current = setInterval(() => {
      setOutput((prev) => prev + fullText.charAt(i));
      i++;
      if (i >= fullText.length) {
        clearInterval(typewriterRef.current);
      }
    }, 10); // Fast typing speed
  };

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setIsGenerating(true);
    setError(null);
    setOutput("");

    let systemPrompt =
      "You are WriteFlow, an expert AI writing assistant. Output in clean Markdown.";
    let userPrompt = input;

    // Prompt Engineering based on active tab
    if (activeTab === "blog") {
      userPrompt = `Write a comprehensive, engaging blog post about: "${input}". Use headings and bullet points where appropriate.`;
    } else if (activeTab === "letter") {
      userPrompt = `Write a formal, professional letter regarding: "${input}". Include placeholders for names/dates like [Name].`;
    } else if (activeTab === "email") {
      userPrompt = `Write a clear, concise professional email about: "${input}".`;
    }

    try {
      const result = await window.puter.ai.chat(
        `${systemPrompt}\n\n${userPrompt}`,
        {
          model: "gpt-5-nano",
        }
      );
      setIsGenerating(false);
      animateText(result);
      console.log(result);
    } catch (err) {
      console.error(err);
      setIsGenerating(false);
      setError("Oops! The AI got writer's block. Please try again.");
    }
  };

  const setPreset = (text: string, type: string) => {
    setInput(text);
    setActiveTab(type);
  };

  return (
    <div
      id="demo"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">
            Interactive Demo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Experience the Magic ✨
          </h2>
          <p className="text-gray-600 mt-4">
            Try it right now. Powered by Gemini.
          </p>
        </div>

        {/* Editor Window UI */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col md:flex-row min-h-[500px]">
          {/* Sidebar / Controls */}
          <div className="w-full md:w-1/3 bg-gray-50 border-r border-gray-200 p-6 flex flex-col">
            <div className="flex space-x-2 mb-6">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>

            <h3 className="font-semibold text-gray-700 mb-4">
              What are we writing?
            </h3>
            <div className="flex space-x-2 mb-6 bg-gray-200 p-1 rounded-lg">
              {["blog", "letter", "email"].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveTab(type)}
                  className={`flex-1 py-1.5 text-sm rounded-md capitalize transition-all ${activeTab === type ? "bg-white shadow-sm font-medium text-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
                >
                  {type}
                </button>
              ))}
            </div>

            <label className="text-xs font-bold text-gray-400 uppercase mb-2">
              Topic / Command
            </label>
            <textarea
              className="w-full h-32 p-3 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none mb-4"
              placeholder={
                activeTab === "blog"
                  ? "E.g., Write a blog on Nextjs 16..."
                  : "E.g., Resignation letter..."
              }
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <div className="space-y-2 mb-6">
              <p className="text-xs text-gray-400 font-semibold">
                TRY A PRESET:
              </p>
              <button
                onClick={() =>
                  setPreset("Write a blog on how AI powered apps works", "blog")
                }
                className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded hover:bg-indigo-200 transition mr-2"
              >
                Blog
              </button>
              <button
                onClick={() =>
                  setPreset("Formal cover letter for a jobrole", "letter")
                }
                className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200 transition"
              >
                Cover Letter
              </button>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 text-xs rounded-lg flex items-center gap-2">
                <AlertCircle className="h-4 w-4" /> {error}
              </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !input}
              className={`mt-auto flex items-center justify-center gap-2 py-3 rounded-xl text-white font-medium transition-all ${isGenerating || !input ? "bg-gray-300 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200"}`}
            >
              {isGenerating ? (
                <Sparkles className="animate-spin h-5 w-5" />
              ) : (
                <Zap className="h-5 w-5" />
              )}
              {isGenerating ? "Magic Happening..." : "Generate with AI"}
            </button>
          </div>

          {/* Output Area */}
          <div className="w-full md:w-2/3 p-8 bg-white relative overflow-y-auto max-h-[600px]">
            {output ? (
              <div className="prose prose-indigo max-w-none animate-fade-in">
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed font-mono text-sm md:text-base">
                  {output}
                  {isGenerating ? null : (
                    <span className="inline-block w-2 h-4 bg-indigo-500 ml-1 animate-pulse"></span>
                  )}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-gray-300 select-none">
                {isGenerating ? (
                  <div className="flex flex-col items-center animate-pulse">
                    <Sparkles className="h-12 w-12 text-indigo-400 mb-4 animate-spin-slow" />
                    <p className="text-indigo-400 font-medium">
                      Drafting your masterpiece...
                    </p>
                  </div>
                ) : (
                  <>
                    <Sparkles className="h-16 w-16 mb-4 opacity-20" />
                    <p>Your AI-generated masterpiece will appear here.</p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
