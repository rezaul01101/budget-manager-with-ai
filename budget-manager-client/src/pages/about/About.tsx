import { Target, Users, Zap } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-blue-900 to-purple-800 text-white">
      <div className="container mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">About BudgetPro</h1>
          <p className="text-xl text-purple-200 leading-relaxed">
            We believe that managing your finances should be simple, intuitive, and empowering. BudgetPro was built with one mission: to help people take control of their money.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300">
            <div className="w-16 h-16 bg-linear-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-purple-200 leading-relaxed">
              To empower individuals and families with intelligent financial tools that transform how they understand and manage their money.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300">
            <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-purple-200 leading-relaxed">
              A world where financial stress is eliminated and everyone has the tools to build wealth and achieve their financial dreams.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300">
            <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Community</h3>
            <p className="text-purple-200 leading-relaxed">
              Join thousands of users who have transformed their financial lives with BudgetPro and our supportive community.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-pink-500/30 mb-20">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-purple-100 leading-relaxed mb-4">
            BudgetPro was founded in 2024 by a team of financial experts and software developers who shared a frustration: existing budget apps were either too complicated or too basic. They didn't provide the insights people needed to make smarter financial decisions.
          </p>
          <p className="text-lg text-purple-100 leading-relaxed mb-4">
            We spent months researching what people really wanted from a budget app. The answer was clear: something beautiful, intuitive, and powerful. Something that didn't require a finance degree to understand. Something that felt like it was designed specifically for them.
          </p>
          <p className="text-lg text-purple-100 leading-relaxed">
            That's when BudgetPro was born. Today, we're proud to serve thousands of users who are taking control of their finances and building better futures for themselves and their families.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-pink-400 mb-3">Transparency</h3>
              <p className="text-purple-200 leading-relaxed">
                We believe in complete transparency about how we handle your data and how our app works. No hidden fees, no surprises.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-pink-400 mb-3">Security</h3>
              <p className="text-purple-200 leading-relaxed">
                Your financial data is precious. We use bank-level encryption and never compromise on security to protect what matters most to you.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-pink-400 mb-3">Simplicity</h3>
              <p className="text-purple-200 leading-relaxed">
                Complex problems need elegant solutions. We design every feature with simplicity in mind so you can focus on what matters.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-pink-400 mb-3">Empowerment</h3>
              <p className="text-purple-200 leading-relaxed">
                We empower our users to make informed financial decisions with actionable insights and clear reporting tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
