import { Wallet } from 'lucide-react';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-900/20 to-purple-900/40"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 rounded-full border border-pink-400/30 backdrop-blur-sm">
              <Wallet className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-pink-300">Smart Budget Management</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Take Control of Your{' '}
              <span className="bg-linear-to-br from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Finances
              </span>
            </h1>

            <p className="text-xl text-purple-200 leading-relaxed max-w-xl">
              Track your income, expenses, and budgets effortlessly. Make smarter financial decisions with real-time insights and intuitive reports.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-linear-to-br from-pink-500 to-purple-600 rounded-full font-semibold text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative w-full h-[600px]">
              <div className="absolute inset-0 bg-linear-to-br from-pink-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-linear-to-br from-blue-600/40 to-purple-600/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-pink-500 rounded-full"></div>
                      <div>
                        <div className="w-24 h-3 bg-white/20 rounded"></div>
                        <div className="w-16 h-2 bg-white/10 rounded mt-2"></div>
                      </div>
                    </div>
                    <div className="w-20 h-8 bg-pink-500/30 rounded-full"></div>
                  </div>

                  <div className="bg-linear-to-br from-pink-500/20 to-purple-500/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">$12,847</div>
                    <div className="text-purple-200 text-sm">Total Balance</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="text-2xl font-bold text-green-400">$8,240</div>
                      <div className="text-purple-200 text-sm mt-1">Income</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="text-2xl font-bold text-pink-400">$4,593</div>
                      <div className="text-purple-200 text-sm mt-1">Expenses</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[35, 20, 15, 10, 8].map((percent, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex-1 bg-white/5 rounded-full h-3 overflow-hidden">
                          <div
                            className="h-full bg-linear-to-br from-pink-500 to-purple-500 rounded-full"
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                        <span className="text-white text-sm font-semibold w-12">{percent}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
