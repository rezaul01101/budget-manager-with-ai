import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-purple-900 via-blue-900 to-purple-800 text-white">
      <div className="container mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-purple-200 leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-linear-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Email</h3>
            <p className="text-purple-200 break-all">support@budgetpro.com</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-linear-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Phone</h3>
            <p className="text-purple-200">+1 (555) 123-4567</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Address</h3>
            <p className="text-purple-200">San Francisco, CA<br />United States</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-pink-500/50 focus:bg-white/15 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-pink-500/50 focus:bg-white/15 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-pink-500/50 focus:bg-white/15 transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-pink-500/50 focus:bg-white/15 transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-linear-to-r from-pink-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-purple-200">Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM PT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200">Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM PT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Response Time</h3>
              <p className="text-purple-200 leading-relaxed">
                We typically respond to all inquiries within 24 hours during business days. For urgent issues, please call our support line.
              </p>
            </div>

            <div className="bg-linear-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30">
              <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="text-purple-100 mb-4">
                Check out our knowledge base for quick answers to common questions.
              </p>
              <a href="/faq" className="text-pink-400 hover:text-pink-300 font-semibold transition-colors">
                Visit our FAQ →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
