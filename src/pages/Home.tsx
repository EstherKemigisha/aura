import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';
import natalhair from '../assets/natalhair.jpg';
import naturalhair from '../assets/naturalhair.jpeg';
import naturalhair1 from '../assets/naturalhair1.jpg';

export default function Home() {
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const instagramPosts = [natalhair, naturalhair, naturalhair1, natalhair, naturalhair, naturalhair1];
  const collectionGroups = [
    {
      title: 'Protect',
      cards: [
        { name: products[5].name, price: products[5].price, image: natalhair },
        { name: products[4].name, price: products[4].price, image: naturalhair1 },
        { name: products[3].name, price: products[3].price, image: naturalhair },
      ],
    },
    {
      title: 'Curl',
      cards: [
        { name: products[1].name, price: products[1].price, image: naturalhair },
        { name: products[6].name, price: products[6].price, image: natalhair },
        { name: products[0].name, price: products[0].price, image: naturalhair1 },
      ],
    },
    {
      title: 'Strengthen',
      cards: [
        { name: products[2].name, price: products[2].price, image: naturalhair1 },
        { name: products[7].name, price: products[7].price, image: naturalhair },
        { name: products[0].name, price: products[0].price, image: natalhair },
      ],
    },
    {
      title: 'Healthy Scalp',
      cards: [
        { name: products[4].name, price: products[4].price, image: naturalhair },
        { name: products[2].name, price: products[2].price, image: natalhair },
        { name: products[5].name, price: products[5].price, image: naturalhair1 },
      ],
    },
    {
      title: 'Enhance',
      cards: [
        { name: products[1].name, price: products[1].price, image: naturalhair1 },
        { name: products[3].name, price: products[3].price, image: natalhair },
        { name: products[6].name, price: products[6].price, image: naturalhair },
      ],
    },
  ];
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

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHeroImage((prev) => (prev + 1) % heroSlides.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-cream home-motion-bg">
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[82vh] lg:min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 w-full md:w-1/2 h-full overflow-hidden pointer-events-none hidden md:block">
              <div className="playful-shape playful-shape-1"></div>
              <div className="playful-shape playful-shape-2"></div>
              <div className="playful-shape playful-shape-3"></div>
              <div className="playful-shape playful-shape-4"></div>
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
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-cream/10 to-cream/35"></div>
            </div>
            <div className="absolute left-0 top-0 w-full md:w-1/2 h-full bg-gradient-to-r from-cream/95 via-cream/90 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
             <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[82vh] lg:min-h-[90vh] py-12 sm:py-16 lg:py-20">
               <div className="relative opacity-100">
                <div key={activeHeroImage} className="hero-copy-animate relative z-10">
                  <p className="font-body text-gold font-semibold tracking-wider text-xs sm:text-sm mb-3 sm:mb-4 text-center lg:text-left">
                    {heroSlides[activeHeroImage].eyebrow}
                  </p>
                  <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-deep-brown leading-tight mb-4 sm:mb-6 text-center lg:text-left">
                    Aura<br />
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
          <a
            href="#shop-collection"
            className="btn-primary px-8 py-4 rounded-full font-body font-semibold inline-flex items-center gap-2"
          >
            Shop Collection
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
                  <a
                    href="#our-story"
                    className="btn-secondary px-8 py-4 rounded-full font-body font-semibold"
                  >
                    Our Story
                  </a>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-8 sm:mt-12">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 star-rating fill-current" />
                    ))}
                  </div>
                  <p className="font-body text-sm text-gray-600">
                    <span className="font-semibold text-deep-brown">4.9</span> from 2,000+ reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section id="our-story" className="pt-24 sm:pt-28 pb-20 sm:pb-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0">
              <img
                src={natalhair}
                alt=""
                className="w-full h-full object-cover opacity-15"
              />
              <div className="absolute inset-0 bg-cream/80"></div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex justify-center">
              <div className="reveal active text-center">
                <p className="font-body text-gold font-semibold tracking-wider text-sm mb-4">
                  OUR STORY
                </p>
                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-deep-brown mb-6">At Aura, Our Story</h2>
                <p className="font-body text-gray-700 mb-6 leading-relaxed">
                  At Aura, our journey began with a simple need — to care for natural hair in a way that truly works.
                </p>
                <p className="font-body text-gray-700 mb-6 leading-relaxed">
                  We saw how hard it was to find products that were both gentle and effective, without harsh chemicals or empty promises. So we decided to create something better.
                </p>
                <p className="font-body text-gray-700 mb-6 leading-relaxed">
                  Aura is built on the belief that natural hair deserves real care — nourishment, moisture, and protection from root to tip. Every product we create is made with carefully selected ingredients designed to support healthy, thriving hair.
                </p>
                <p className="font-body text-gray-700 mb-8 leading-relaxed">
                  This is more than hair care to us — it&apos;s confidence, self-expression, and embracing your natural beauty.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-deep-brown font-semibold hover:text-gold transition-colors"
                >
                   Read More
                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="M5 12h14M12 5l7 7-7 7"/>
                   </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Shop Collection */}
        <section id="shop-collection" className="py-20 sm:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal active">
              <p className="font-body text-deep-brown font-semibold tracking-wider text-sm mb-2">
                SHOP COLLECTION
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-deep-brown">
                Find Products by Hair Need
              </h2>
            </div>
            <div className="space-y-12">
              {collectionGroups.map((group, groupIndex) => (
                <div key={group.title} className={`reveal active ${groupIndex % 2 === 0 ? 'fade-in-delay-100' : 'fade-in-delay-200'}`}>
                  <h3 className="font-display font-bold text-3xl text-deep-brown mb-6">{group.title}</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.cards.map((card) => (
                      <div key={`${group.title}-${card.name}`} className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm">
                        <img src={card.image} alt={card.name} className="w-full h-56 object-cover" />
                        <div className="p-5">
                          <p className="font-display font-semibold text-lg text-deep-brown mb-2">{card.name}</p>
                          <p className="font-body text-gold font-bold text-xl">${card.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gradient-to-b from-cream via-cream to-pale-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <p className="font-body text-deep-brown font-semibold tracking-wider text-sm mb-2">
                TESTIMONIALS
              </p>
              <h2 className="font-display font-bold text-4xl text-deep-brown">
                Loved by Our Community
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`bg-white rounded-2xl p-6 shadow-sm reveal ${index % 2 === 0 ? 'fade-in-delay-100' : 'fade-in-delay-200'}`}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 star-rating fill-current" />
                    ))}
                  </div>
                  <p className="font-body text-gray-600 italic mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-deep-brown">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <p className="font-body text-deep-brown font-semibold tracking-wider text-sm mb-2">
                @AURA_BEAUTY
              </p>
              <h2 className="font-display font-bold text-4xl text-deep-brown mb-4">
                Beauty Inspiration
              </h2>
              <p className="font-body text-gray-600">
                Tag #AuraBeauty to be featured
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {instagramPosts.map((post, index) => (
                <div
                  key={index}
                  className={`reveal group relative aspect-square overflow-hidden rounded-xl cursor-pointer ${index % 2 === 0 ? 'fade-in-delay-100' : 'fade-in-delay-200'}`}
                >
                  <img
                    src={post}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M17 2H7C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-11c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
                  </svg>
                </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
