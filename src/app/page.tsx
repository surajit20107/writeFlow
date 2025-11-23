import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          v2.0 is live with Next.js support
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
          Write faster,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            write smarter.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-10">
          The AI writing assistant that adapts to your brand voice. Generate
          blogs, letters, and emails in seconds, not hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/demo"
            className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
            Start Writing for Free
          </Link>
          <Link
            href="/comparison"
            className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition flex items-center gap-2 justify-center">
            View Comparison <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <ChatWidget />
      </section>
    </div>
  );
}
