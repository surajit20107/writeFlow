"use client";
import { useState } from "react";
import { Menu, Feather } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-indigo-600 p-2 rounded-lg">
                            <Feather className="h-6 w-6 text-white" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-gray-900">
                            WriteFlow
                        </span>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        <a
                            href="#features"
                            className="text-gray-600 hover:text-indigo-600 transition"
                        >
                            Features
                        </a>
                        <a
                            href="#demo"
                            className="text-gray-600 hover:text-indigo-600 transition"
                        >
                            Live Demo
                        </a>
                        <a
                            href="#pricing"
                            className="text-gray-600 hover:text-indigo-600 transition"
                        >
                            Pricing
                        </a>
                        <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition font-medium">
                            Get Started
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600"
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t p-4 space-y-4 shadow-lg">
                    <a href="#features" className="block text-gray-600">
                        Features
                    </a>
                    <a href="#demo" className="block text-gray-600">
                        Live Demo
                    </a>
                    <a href="#pricing" className="block text-gray-600">
                        Pricing
                    </a>
                    <button className="w-full bg-indigo-600 text-white px-5 py-2 rounded-lg">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
}
