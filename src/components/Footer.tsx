import { Feather } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Feather className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg text-gray-900">WriteFlow</span>
            </div>
          </Link>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a
              href="https://github.com/surajit20107"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              GitHub
            </a>
            <a
              href="https://surajit-dev.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              Portfolio
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              Twitter
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} WriteFlow AI Inc. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
