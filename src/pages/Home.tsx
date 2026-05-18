import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Leaf,
  Heart,
  Recycle,
  Sparkles,
  Calendar,
  Clock,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Send,
} from 'lucide-react';
import { products } from '../data/products';
import { blogPosts } from '../data/blog';
import { values } from '../data/values';
import natalhair from '../assets/natalhair.jpg';
import naturalhair from '../assets/naturalhair.jpeg';
import naturalhair1 from '../assets/naturalhair1.jpg';

const categories = ['All', 'Treatments', 'Styling', 'Shampoo', 'Conditioner'];
const blogCategories = ['All', 'Hair Care', 'Styling', 'Transitioning', 'Education'];

const sectionClass = 'scroll-mt-24';

export default function Home() {
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBlogCategory, setSelectedBlogCategory] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const heroSlides = [
    {
      image: naturalhair,
      eyebrow: 'AURA',
      title: 'Crafted with natural ingredients.',
      description: 'Hydration your hair will love.',
      tags: ['Protect', 'Strengthen', 'Enhance'],
    },
    {
      image: natalhair,
      eyebrow: 'AURA',
      title: 'Hydration your hair will love.',
      description: 'Crafted with natural ingredients.',
      tags: ['Moisture Lock', 'Curl Definition', 'Healthy Scalp'],
    },
    {
      image: naturalhair1,
      eyebrow: 'AURA',
      title: 'Crafted with natural ingredients.',
      description: 'Hydration your hair will love.',
      tags: ['4A-4C Support', 'Soft Hold', 'Daily Nourishment'],
    },
  ];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const filteredPosts = useMemo(() => {
    if (selectedBlogCategory === 'All') return blogPosts;
    return blogPosts.filter((post) => post.category === selectedBlogCategory);
  }, [selectedBlogCategory]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHeroImage((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => window.clearInterval(interval);
  }, [heroSlides.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const naturalTextureBlock = (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/70 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-sm">
      <img src={natalhair} alt="Natural hair care" className="w-full h-64 sm:h-80 lg:h-[420px] object-cover rounded-2xl" />
      <div>
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-deep-brown mb-4">Celebrating Your Natural Texture</h2>
        <p className="font-body text-gray-600 mb-6 leading-relaxed">
          For too long, natural hair has been misunderstood. Aura creates gentle, effective products without
          sulfates or parabens — so your curls stay nourished, defined, and strong.
        </p>
        <ul className="space-y-3 font-body text-gray-600 text-sm">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
            Type-specific formulations for waves, curls, and coils
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
            Shea butter, argan oil, and African-sourced botanicals
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
            Education to help you love your unique curl pattern
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
        {/* Hero */}
        <section id="home" className={`relative flex items-center overflow-hidden pt-20 pb-8 lg:pb-12 ${sectionClass}`}>
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 w-full md:w-1/2 h-full overflow-hidden pointer-events-none hidden md:block">
              <div className="playful-shape playful-shape-1" />
              <div className="playful-shape playful-shape-2" />
              <div className="playful-shape playful-shape-3" />
              <div className="playful-shape playful-shape-4" />
            </div>
            <div className="absolute right-0 top-0 w-full md:w-1/2 h-full overflow-hidden">
              {heroSlides.map((slide, index) => (
                <img
                  key={slide.image}
                  src={slide.image}
                  alt="Natural hair beauty"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1600ms] ease-in-out ${
                    activeHeroImage === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-cream/10 to-cream/35" />
            </div>
            <div className="absolute left-0 top-0 w-full md:w-1/2 h-full bg-gradient-to-r from-cream/95 via-cream/90 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-10 sm:py-12 lg:py-16">
              <div className="relative">
                <div key={activeHeroImage} className="hero-copy-animate relative z-10">
                  <p className="font-body text-gold font-semibold tracking-wider text-xs sm:text-sm mb-3 sm:mb-4 text-center lg:text-left">
                    {heroSlides[activeHeroImage].eyebrow}
                  </p>
                  <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-deep-brown leading-tight mb-4 sm:mb-6 text-center lg:text-left">
                    Aura
                    <br />
                    <span className="text-gradient">{heroSlides[activeHeroImage].title}</span>
                  </h1>
                  <p className="font-body text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                    {heroSlides[activeHeroImage].description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 relative z-10 justify-center lg:justify-start">
                  {heroSlides[activeHeroImage].tags.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-white/80 border border-gold/30 text-deep-brown text-sm font-body font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <button
                    type="button"
                    onClick={() => scrollToSection('shop')}
                    className="btn-primary px-8 py-4 rounded-full font-body font-semibold inline-flex items-center justify-center gap-2"
                  >
                    Shop Collection
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('about')}
                    className="btn-secondary px-8 py-4 rounded-full font-body font-semibold"
                  >
                    About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us — navbar #about target */}
        <section id="about" className={`pt-6 pb-10 lg:pb-14 ${sectionClass}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 lg:mb-10 text-center md:text-left">
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-deep-brown">About</h2>
            </div>
            {naturalTextureBlock}

            <div className="grid lg:grid-cols-2 gap-12 items-center mt-12 lg:mt-16 mb-12 lg:mb-16">
              <div className="order-2 lg:order-1">
                <h3 className="font-display font-bold text-4xl lg:text-5xl text-deep-brown leading-tight mb-6">
                  Beauty Rooted in African Heritage
                </h3>
                <p className="font-body text-gray-600 mb-6 leading-relaxed">
                  Founded in 2020, Aura emerged from a simple belief: natural African hair deserves products as
                  beautiful and complex as the people who wear it.
                </p>
                <p className="font-body text-gray-600 leading-relaxed">
                  We combine traditional botanical wisdom with modern science to celebrate curls, coils, and kinks
                  with formulas made for Type 2, 3, and 4 textures.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img src={naturalhair1} alt="Natural hair celebration" className="w-full h-[420px] object-cover rounded-2xl shadow-xl" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={value.id} className="text-center p-6 bg-white/60 rounded-2xl" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div
                    className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                    style={{ backgroundColor: value.color + '20', color: value.color }}
                  >
                    {value.icon === 'Leaf' && <Leaf className="w-8 h-8" />}
                    {value.icon === 'Heart' && <Heart className="w-8 h-8" />}
                    {value.icon === 'Recycle' && <Recycle className="w-8 h-8" />}
                    {value.icon === 'Sparkles' && <Sparkles className="w-8 h-8" />}
                  </div>
                  <h3 className="font-display font-semibold text-xl text-deep-brown mb-3">{value.title}</h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shop */}
        <section id="shop" className={`py-12 lg:py-16 ${sectionClass}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 reveal text-center md:text-left">
              <p className="font-body text-gold font-semibold tracking-wider text-sm mb-2">PREMIUM COLLECTION</p>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-deep-brown mb-4">Discover Our Products</h2>
              <p className="font-body text-gray-600 max-w-2xl mx-auto md:mx-0">
                Carefully crafted formulations for every curl pattern and natural hair need.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-body text-sm font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-deep-brown text-cream'
                      : 'bg-white/80 text-gray-600 hover:bg-gold hover:text-deep-brown border border-gold/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <article
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover reveal"
                  style={{ animationDelay: `${(index % 3) * 0.1}s` }}
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="relative">
                      {product.bestseller && (
                        <span className="absolute top-4 left-4 bg-gold text-deep-brown text-xs font-semibold px-3 py-1 rounded-full z-10">
                          BESTSELLER
                        </span>
                      )}
                      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs text-gray-400 uppercase tracking-wider">{product.category}</span>
                      <h3 className="font-display font-semibold text-lg text-deep-brown mt-2 mb-2">{product.name}</h3>
                      <p className="font-body text-sm text-gray-500 line-clamp-2">{product.description}</p>
                    </div>
                  </Link>
                  <div className="px-6 pb-6">
                    <span className="font-display font-bold text-xl text-deep-brown">${product.price}</span>
                    <button type="button" className="w-full mt-4 bg-deep-brown text-cream py-3 rounded-full font-body font-semibold hover:bg-gray-800 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* Blog */}
        <section id="blog" className={`py-20 ${sectionClass}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 reveal text-center md:text-left">
              <p className="font-body text-gold font-semibold tracking-wider text-sm mb-2">HAIR JOURNAL</p>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-deep-brown mb-4">Natural Hair Wisdom</h2>
              <p className="font-body text-gray-600 max-w-2xl mx-auto md:mx-0">
                Expert tips and stories for your natural hair journey.
              </p>
            </div>

            {/* Featured natural hair article */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm mb-16 reveal">
              <div className="grid lg:grid-cols-2">
                <img src={naturalhair} alt="Natural hair care routine" className="w-full h-64 lg:h-full min-h-[280px] object-cover" />
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block w-fit bg-gold text-deep-brown text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Featured · Natural Hair
                  </span>
                  <h3 className="font-display font-bold text-2xl lg:text-3xl text-deep-brown mb-4">
                    Your Complete Natural Hair Care Routine
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed mb-4">
                    Healthy natural hair starts with understanding your texture. Whether you have loose waves or tight
                    4C coils, a consistent routine of cleanse, condition, moisturize, and seal keeps strands hydrated
                    and breakage-free.
                  </p>
                  <p className="font-body text-gray-600 leading-relaxed mb-6">
                    Wash with a sulfate-free shampoo, deep condition weekly with shea-based masks, and lock in moisture
                    with oils that penetrate your hair shaft. Protective styles give your hair rest while you grow
                    length — and Aura products are formulated to support every step.
                  </p>
                  <p className="font-body text-sm text-gray-500 flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      May 18, 2026
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      12 min read
                    </span>
                  </p>
                </div>
              </div>
            </article>

            <div className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedBlogCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-body text-sm font-semibold transition-all ${
                    selectedBlogCategory === category
                      ? 'bg-deep-brown text-cream'
                      : 'bg-white/80 text-gray-600 hover:bg-gold hover:text-deep-brown border border-gold/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover reveal group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    <span className="absolute top-4 left-4 bg-gold text-deep-brown text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-xl text-deep-brown mb-3 line-clamp-2">{post.title}</h3>
                    <p className="font-body text-gray-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                    <span className="text-gold font-semibold flex items-center gap-1 text-sm">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={`py-20 ${sectionClass}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <p className="font-body text-gold font-semibold tracking-wider text-sm mb-2">GET IN TOUCH</p>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-deep-brown mb-4">Let&apos;s Talk Beauty</h2>
              <p className="font-body text-gray-600 max-w-2xl mx-auto">
                Questions about your natural hair journey? Our team is here to help.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: 'Visit Our Studio', details: ['Kisaasi', 'Kampala, Uganda'] },
                  { icon: Phone, title: 'Call Us', details: ['+256 772 123 456', 'Mon–Fri: 9am – 6pm EAT'] },
                  { icon: Mail, title: 'Email Us', details: ['hello@aura.com', 'support@aura.com'] },
                ].map((info, index) => (
                  <div key={info.title} className="bg-white rounded-2xl p-6 shadow-sm reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-12 h-12 rounded-xl bg-cream border border-gold/20 flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-deep-brown" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-deep-brown mb-2">{info.title}</h3>
                    {info.details.map((detail) => (
                      <p key={detail} className="font-body text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>

                ))}

                <a
                  href="https://wa.me/256788345329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-deep-brown text-cream rounded-2xl py-4 px-6 font-display font-semibold hover:bg-gray-800 transition-colors shadow-lg reveal"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat with us on WhatsApp
                </a>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-sm reveal">
                  <h3 className="font-display font-semibold text-2xl text-deep-brown mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-body text-sm text-gray-600 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="input-field w-full px-4 py-3 rounded-xl font-body text-gray-800"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-sm text-gray-600 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input-field w-full px-4 py-3 rounded-xl font-body text-gray-800"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-body text-sm text-gray-600 mb-2">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="input-field w-full px-4 py-3 rounded-xl font-body text-gray-800"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-gray-600 mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="input-field w-full px-4 py-3 rounded-xl font-body text-gray-800 resize-none"
                        placeholder="Tell us about your hair goals..."
                      />
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
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
