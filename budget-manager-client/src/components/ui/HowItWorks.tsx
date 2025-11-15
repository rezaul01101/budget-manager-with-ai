import { UserPlus, Wallet, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Add Your Income',
    description: 'Set up your income sources and payment schedules in seconds.',
    step: '01'
  },
  {
    icon: Wallet,
    title: 'Track Expenses',
    description: 'Log expenses automatically or manually with smart categorization.',
    step: '02'
  },
  {
    icon: BarChart3,
    title: 'View Reports',
    description: 'Get insights with beautiful charts and actionable recommendations.',
    step: '03'
  }
];

function HowItWorks() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-transparent"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Get started in three simple steps and take control of your financial future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative cursor-pointer">
              {index < steps.length - 1 && (
                <div className=" hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-linear-to-r from-pink-500/50 to-transparent -z-10"></div>
              )}

              <div className="bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="absolute -top-4 -left-4 text-7xl font-bold text-pink-500/20">
                    {step.step}
                  </div>
                  <div className="relative w-20 h-20 bg-linear-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-purple-200 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
