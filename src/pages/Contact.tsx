import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Our Studio',
    details: ['123 Natural Beauty Ave', 'Lagos, Nigeria', 'West Africa'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+234 800 123 4567', 'Mon-Fri: 9am - 6pm WAT'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['hello@aura.com', 'support@aura.com'],
  },
];

const faqs = [
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 15 countries worldwide. International shipping rates vary by destination.'
    },
    {
      question: 'Are your products suitable for all hair types?',
      answer: 'Our products are specifically formulated for Type 2, 3, and 4 hair textures, but we offer options for various hair needs and concerns.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day satisfaction guarantee. If you\'re not happy with your purchase, we\'ll provide a full refund or exchange.'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-pale-green pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="font-body text-gold font-semibold tracking-wider text-sm mb-2">
            GET IN TOUCH
          </p>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-deep-brown mb-4">
            Let's Talk Beauty
          </h1>
          <p className="font-body text-gray-600 max-w-2xl mx-auto">
            Have questions about your natural hair journey? Our team is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-pale-green flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-deep-brown" />
                </div>
                <h3 className="font-display font-semibold text-lg text-deep-brown mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="font-body text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* WhatsApp Button */}
            <div className="reveal">
              <a
                href="https://wa.me/2348001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white rounded-2xl py-4 px-6 font-display font-semibold hover:bg-[#128C7E] transition-colors shadow-lg"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat with us on WhatsApp
              </a>
            </div>

            {/* Social Media */}
            <div className="reveal">
              <h4 className="font-display font-semibold text-lg text-deep-brown mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com" target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/50 border border-cream flex items-center justify-center text-deep-brown hover:bg-gold hover:text-deep-brown transition-all social-icon"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M17 2H7C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm4-10c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com" target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/50 border border-cream flex items-center justify-center text-deep-brown hover:bg-gold hover:text-deep-brown transition-all social-icon"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </a>
                <a
                  href="https://www.twitter.com" target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/50 border border-cream flex items-center justify-center text-deep-brown hover:bg-gold hover:text-deep-brown transition-all social-icon"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm reveal">
              <h2 className="font-display font-semibold text-2xl text-deep-brown mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm text-gray-600 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field w-full px-4 py-3 rounded-xl font-body text-gray-800"
                      placeholder="Adaora Uzo"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-gray-600 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field w-full px-4 py-3 rounded-xl font-body text-gray-800"
                      placeholder="adaora@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-sm text-gray-600 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field w-full px-4 py-3 rounded-xl font-body text-gray-800"
                    placeholder="Product inquiry, feedback, etc."
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-gray-600 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field w-full px-4 py-3 rounded-xl font-body text-gray-800 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-full font-display font-semibold flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* FAQs */}
            <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm reveal">
              <h3 className="font-display font-semibold text-2xl text-deep-brown mb-6">
                Quick Answers
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-cream pb-4 last:border-0">
                    <h4 className="font-display font-semibold text-deep-brown mb-2">
                      {faq.question}
                    </h4>
                    <p className="font-body text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-gold font-semibold mt-4 hover:gap-3 transition-all"
              >
                Read More Articles
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
