import { Cpu, Shield, Sparkles } from "lucide-react";

export default function FeaturesGrid() {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Context Aware</h3>
              <p className="text-gray-500 leading-relaxed">
                It doesn't just write; it understands what you wrote previously
                to maintain perfect flow.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enterprise Secure</h3>
              <p className="text-gray-500 leading-relaxed">
                Your data never trains our public models. Encryption at rest and
                in transit.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">SEO Optimized</h3>
              <p className="text-gray-500 leading-relaxed">
                Keywords are integrated naturally. Rank higher on Google without
                trying.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
