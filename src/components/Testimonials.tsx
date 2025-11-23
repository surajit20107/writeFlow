import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Content Marketer",
      text: "WriteFlow cut my blog production time in half. The Next.js article it wrote was surprisingly accurate!",
      avatar: "S",
    },
    {
      id: 2,
      name: "David Chen",
      role: "Startup Founder",
      text: "I used to struggle with investor updates. Now I just type 'monthly update' and it's 90% done.",
      avatar: "D",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Freelance Copywriter",
      text: "The competitor comparison tool is a game changer for my sales pages. Worth every penny.",
      avatar: "E",
    },
  ];
  return (
    <div>
      <section className="py-20 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            Loved by 10,000+ writers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-indigo-800/50 p-8 rounded-2xl border border-indigo-700 backdrop-blur-sm"
              >
                <div className="flex items-center gap-1 mb-4 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-indigo-100 mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-sm text-indigo-300">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
