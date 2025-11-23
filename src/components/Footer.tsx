import { Feather } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Feather className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900">WriteFlow</span>
          </div>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms
            </a>
            <a href="#" className="hover:text-gray-900">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-900">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © 2024 WriteFlow AI Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
