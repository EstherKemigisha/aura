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
import { galleryImages } from '../data/images';

const categories = ['All', 'Treatments', 'Styling', 'Shampoo', 'Conditioner'];
const blogCategories = ['All', 'Hair Care', 'Styling', 'Transitioning', 'Education'];

const sectionClass = 'scroll-mt-[4.5rem] md:scroll-mt-24';
const filterPillClass =
  'px-4 py-2.5 rounded-full font-body text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0';
const sectionPad = 'py-10 sm:py-14 lg:py-16';
const headingLg = 'font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-deep-brown';
const heroMobileH = 'h-[min(52vw,320px)] sm:h-80';
const homeImgH = `w-full ${heroMobileH} lg:h-[420px] object-cover object-center`;
const homeCardImgH = `w-full ${heroMobileH} object-cover object-center`;
const heroContentMinH = 'min-h-[480px] sm:min-h-[520px] md:min-h-[560px]';

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

  const heroImgClass =
    'hero-slide-img absolute inset-0 w-full h-full object-cover transition-opacity duration-[1600ms] ease-in-out';

  const heroSlides = [
    {
      image: naturalhair,
      objectPosition: 'center center',
      eyebrow: 'AURA',
      showAura: true,
      title: 'Crafted with natural ingredients.',
      description: 'Hydration your hair will love.',
      tags: ['Protect', 'Strengthen', 'Enhance'],
    },
    {
      image: natalhair,
      objectPosition: 'center center',
      eyebrow: 'AURA',
      showAura: false,
      title: 'Embrace every curl',
      description: 'Celebrate your texture with formulas made for waves, curls, and coils.',
      tags: ['Curl Love', 'Natural Beauty', 'Confidence'],
    },
    {
      image: naturalhair1,
      objectPosition: 'center center',
      eyebrow: 'AURA',
      showAura: false,
      title: 'Good hair starts here',
      description: 'Gentle care rooted in African botanicals and modern science.',
      tags: ['Healthy Scalp', 'Deep Moisture', 'Daily Care'],
    },
    {
      image: naturalhair,
      objectPosition: 'center center',
      eyebrow: 'AURA',
      showAura: false,
      title: 'Pure. Natural. You.',
      description: 'Clean ingredients, no sulfates or parabens — just nourished, defined hair.',
      tags: ['Clean Beauty', '4A-4C Support', 'Self Love'],
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center bg-white/70 rounded-2xl p-5 sm:p-8 lg:p-12 shadow-sm">
      <img src={galleryImages.hairPickMirror} alt="Natural hair care" className={`${homeImgH} rounded-2xl`} />
      <div>
        <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-deep-brown mb-4 text-center lg:text-left">Celebrating Your Natural Texture</h2>
        <p className="font-body text-gray-600 mb-6 leading-relaxed text-center lg:text-left">
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
        <section id="home" className={`relative overflow-hidden ${sectionClass}`}>
          <div className={`md:hidden relative overflow-hidden ${heroMobileH}`}>
            {heroSlides.map((slide, index) => (
              <img
                key={`hero-mobile-${index}`}
                src={slide.image}
                alt="Natural hair beauty"
                style={{ objectPosition: slide.objectPosition }}
                className={`${heroImgClass} ${activeHeroImage === index ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-transparent" />
          </div>

          <div className={`hidden md:block absolute inset-x-0 top-20 bottom-0 ${heroContentMinH}`}>
            <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden pointer-events-none">
              <div className="playful-shape playful-shape-1" />
              <div className="playful-shape playful-shape-2" />
              <div className="playful-shape playful-shape-3" />
              <div className="playful-shape playful-shape-4" />
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
              {heroSlides.map((slide, index) => (
                <img
                  key={`hero-desktop-${index}`}
                  src={slide.image}
                  alt="Natural hair beauty"
                  style={{ objectPosition: slide.objectPosition }}
                  className={`${heroImgClass} ${activeHeroImage === index ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-cream/10 to-cream/35" />
            </div>
            <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-cream/95 via-cream/90 to-transparent" />
          </div>

          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-6 pb-10 md:pt-24 md:pb-14 ${heroContentMinH} flex flex-col justify-center`}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative max-w-xl mx-auto lg:mx-0 w-full">
                <div key={activeHeroImage} className="hero-copy-animate relative z-10">
                  <p className="font-body text-gold font-semibold tracking-wider text-xs sm:text-sm mb-3 sm:mb-4 text-center lg:text-left">
                    {heroSlides[activeHeroImage].eyebrow}
                  </p>
                  <h1 className="font-display font-bold text-[2rem] leading-[1.15] sm:text-5xl lg:text-7xl text-deep-brown mb-4 sm:mb-6 text-center lg:text-left min-h-[5.5rem] sm:min-h-[8.5rem] lg:min-h-[11rem]">
                    {heroSlides[activeHeroImage].showAura ? (
                      <>
                        Aura
                        <br />
                        <span className="text-gradient">{heroSlides[activeHeroImage].title}</span>
                      </>
                    ) : (
                      <span className="text-gradient">{heroSlides[activeHeroImage].title}</span>
                    )}
                  </h1>
                  <p className="font-body text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0 px-1">
                    {heroSlides[activeHeroImage].description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 relative z-10 justify-center lg:justify-start px-1">
                  {heroSlides[activeHeroImage].tags.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/90 border border-gold/30 text-deep-brown text-xs sm:text-sm font-body font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-1">
                  <button
                    type="button"
                    onClick={() => scrollToSection('shop')}
                    className="btn-primary w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full font-body font-semibold inline-flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    Shop Collection
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('about')}
                    className="btn-secondary w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full font-body font-semibold min-h-[48px]"
                  >
                    About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us — navbar #about target */}
        <section id="about" className={`${sectionPad} ${sectionClass}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 lg:mb-10 text-center md:text-left">
              <h2 className={headingLg}>About</h2>
            </div>
            {naturalTextureBlock}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mt-10 sm:mt-12 lg:mt-16 mb-10 sm:mb-12 lg:mb-16">
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-5xl text-deep-brown leading-tight mb-4 sm:mb-6">
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
                <img src={galleryImages.hairThreeWomen} alt="Natural hair celebration" className={`${homeImgH} rounded-2xl shadow-xl`} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
        <section id="shop" className={`${sectionPad} ${sectionClass}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12 reveal text-center md:text-left">
              <p className="font-body text-gold font-semibold tracking-wider text-xs sm:text-sm mb-2">PREMIUM COLLECTION</p>
              <h2 className={`${headingLg} mb-3 sm:mb-4`}>Discover Our Products</h2>
              <p className="font-body text-gray-600 max-w-2xl mx-auto md:mx-0">
                Carefully crafted formulations for every curl pattern and natural hair need.
              </p>
            </div>

            <div className="-mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto scrollbar-hide mb-8 sm:mb-10">
              <div className="flex gap-2 sm:gap-3 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center md:justify-start pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`${filterPillClass} ${
                    selectedCategory === category
                      ? 'bg-deep-brown text-cream'
                      : 'bg-white/80 text-gray-600 hover:bg-gold hover:text-deep-brown border border-gold/20'
                  }`}
                >
                  {category}
                </button>
              ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
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
                      <img src={product.image} alt={product.name} className={homeCardImgH} />
                    </div>
                    <div className="p-6">
                      <span className="text-xs text-gray-400 uppercase tracking-wider">{product.category}</span>
                      <h3 className="font-display font-semibold text-lg text-deep-brown mt-2 mb-2">{product.name}</h3>
                      <p className="font-body text-sm text-gray-500 line-clamp-2">{product.description}</p>
                    </div>
                  </Link>
                  <div className="px-6 pb-6">
                    <span className="font-display font-bold text-xl text-deep-brown">${product.price}</span>
                    <button type="button" className="w-full mt-4 bg-deep-brown text-cream py-3 rounded-full font-body font-semibold hover:bg-gray-800 transition-colors min-h-[44px]">
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* Blog */}
        <section id="blog" className={`${sectionPad} ${sectionClass}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12 reveal text-center md:text-left">
              <p className="font-body text-gold font-semibold tracking-wider text-xs sm:text-sm mb-2">HAIR JOURNAL</p>
              <h2 className={`${headingLg} mb-3 sm:mb-4`}>Natural Hair Wisdom</h2>
              <p className="font-body text-gray-600 max-w-2xl mx-auto md:mx-0">
                Expert tips and stories for your natural hair journey.
              </p>
            </div>

            {/* Featured natural hair article */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm mb-10 sm:mb-16 reveal">
              <div className="grid lg:grid-cols-2">
                <img src={galleryImages.hairMirrorRobe} alt="Natural hair care routine" className={homeImgH} />
                <div className="p-5 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block w-fit bg-gold text-deep-brown text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Featured · Natural Hair
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-deep-brown mb-3 sm:mb-4">
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

            <div className="-mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto scrollbar-hide mb-8 sm:mb-10">
              <div className="flex gap-2 sm:gap-3 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center md:justify-start pb-1">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedBlogCategory(category)}
                  className={`${filterPillClass} ${
                    selectedBlogCategory === category
                      ? 'bg-deep-brown text-cream'
                      : 'bg-white/80 text-gray-600 hover:bg-gold hover:text-deep-brown border border-gold/20'
                  }`}
                >
                  {category}
                </button>
              ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover reveal group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`relative overflow-hidden ${heroMobileH}`}>
                    <img src={post.image} alt={post.title} className={`w-full h-full object-cover object-center`} />
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
        <section id="contact" className={`${sectionPad} ${sectionClass}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16 reveal">
              <p className="font-body text-gold font-semibold tracking-wider text-xs sm:text-sm mb-2">GET IN TOUCH</p>
              <h2 className={`${headingLg} mb-3 sm:mb-4`}>Let&apos;s Talk Beauty</h2>
              <p className="font-body text-gray-600 max-w-2xl mx-auto">
                Questions about your natural hair journey? Our team is here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              <div className="flex flex-col gap-3 lg:h-full">
                {[
                  { icon: MapPin, title: 'Visit Our Studio', details: ['Kisaasi', 'Kampala, Uganda'] },
                  { icon: Phone, title: 'Call Us', details: ['0788 345 329', 'Mon–Fri: 9am – 6pm EAT'] },
                  { icon: Mail, title: 'Email Us', details: ['hello@aura.com', 'support@aura.com'] },
                ].map((info, index) => (
                  <div
                    key={info.title}
                    className="flex-1 flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm reveal min-h-[72px]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-cream border border-gold/20 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-deep-brown" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display font-semibold text-sm text-deep-brown mb-0.5">{info.title}</h3>
                      {info.details.map((detail) => (
                        <p key={detail} className="font-body text-gray-600 text-xs leading-snug">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                <a
                  href="https://wa.me/256788345329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center justify-center gap-2 bg-deep-brown text-cream rounded-xl py-3 px-4 text-sm font-display font-semibold hover:bg-gray-800 transition-colors shadow-lg reveal"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat with us on WhatsApp
                </a>
              </div>

              <div className="lg:col-span-2">
                <div className="h-full bg-white rounded-2xl p-5 sm:p-8 shadow-sm reveal">
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
                      className="btn-primary w-full py-3.5 sm:py-4 rounded-full font-display font-semibold flex items-center justify-center gap-3 min-h-[48px]"
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
