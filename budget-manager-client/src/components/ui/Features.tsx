import { TrendingUp, PieChart, Bell, Shield } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'Expense Tracking',
    description: 'Monitor every dollar with intelligent categorization and real-time updates.',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: PieChart,
    title: 'Budget Planning',
    description: 'Set smart budgets and get alerts before you overspend on any category.',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Stay informed with notifications about spending patterns and upcoming bills.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Bank-level encryption keeps your financial data safe and confidential.',
    gradient: 'from-violet-500 to-purple-500'
  }
];

function Features() {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Powerful Features for Better Budgeting
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Everything you need to take control of your finances in one beautiful app
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="cursor-pointer group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
            >
              <div className={`w-16 h-16 bg-linear-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-purple-200 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
