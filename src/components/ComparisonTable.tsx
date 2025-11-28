import { Check, X } from "lucide-react";

export default function ComparisonTable() {
  const competitors = [
    {
      feature: "AI Model Quality",
      us: "GPT-4 + Custom",
      them: "GPT-3.5 Legacy",
    },
    { feature: "Real-time SEO", us: true, them: false },
    { feature: "Brand Voice Learning", us: true, them: false },
    { feature: "Pricing (Unlimited)", us: "$29/mo", them: "$99/mo" },
    { feature: "Export to CMS", us: true, them: true },
  ];
  return (
    <div className="py-20" id="features">
      <section className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why choose WriteFlow?</h2>
          <p className="text-gray-500">
            Don't settle for generic text generators.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="py-4 px-6 text-left text-gray-500 font-medium">
                  Feature
                </th>
                <th className="py-4 px-6 text-center text-indigo-600 font-bold bg-indigo-50/50">
                  WriteFlow
                </th>
                <th className="py-4 px-6 text-center text-gray-400 font-medium">
                  Others
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {competitors.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition">
                  <td className="py-4 px-6 text-gray-700 font-medium">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-center bg-indigo-50/30">
                    {typeof row.us === "boolean" ? (
                      row.us ? (
                        <Check className="mx-auto text-green-500 h-6 w-6" />
                      ) : (
                        <X className="mx-auto text-red-400 h-6 w-6" />
                      )
                    ) : (
                      <span className="font-bold text-gray-800">{row.us}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof row.them === "boolean" ? (
                      row.them ? (
                        <Check className="mx-auto text-green-500 h-6 w-6" />
                      ) : (
                        <X className="mx-auto text-red-300 h-6 w-6 opacity-50" />
                      )
                    ) : (
                      <span className="text-gray-400">{row.them}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
