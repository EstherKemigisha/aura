import { Link } from 'react-router-dom';
import { Leaf, Heart, Recycle, Sparkles } from 'lucide-react';
import { values } from '../data/values';
import natalhair from '../assets/natalhair.jpg';
import naturalhair from '../assets/naturalhair.jpeg';
import naturalhair1 from '../assets/naturalhair1.jpg';

export default function About() {
    return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-pale-green pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <img
              src={naturalhair1}
              alt="Founder story"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 cream-gradient"></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl reveal">
            <p className="font-body text-gold font-semibold tracking-wider text-sm mb-4">
              OUR STORY
            </p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-deep-brown leading-tight mb-6">
              Beauty Rooted in<br />
              African Heritage
            </h1>
            <p className="font-body text-gray-600 text-lg mb-8 leading-relaxed">
              Founded in 2020, Aura emerged from a simple yet powerful belief: 
              that natural African hair deserves products as beautiful and complex 
              as the people who wear it.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-full font-display font-semibold"
            >
              Explore Products
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="relative">
                <img
                  src={natalhair}
                  alt="Founder"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl max-w-sm">
                  <p className="font-display font-semibold text-deep-brown text-xl mb-2">
                    "Representation matters."
                  </p>
                  <p className="font-body text-gray-600 text-sm">
                    - Adaora Uzo, Founder & CEO
                  </p>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-display font-bold text-4xl text-deep-brown mb-6">
                From Kitchen to Crown
              </h2>
              <p className="font-body text-gray-600 mb-6 leading-relaxed">
                Growing up in Lagos, I watched my grandmother mix shea butter with 
                local herbs to create hair treatments that nourished generations of 
                women in our family. When I moved to study in London, I struggled 
                to find products that understood my hair's unique needs.
              </p>
              <p className="font-body text-gray-600 mb-6 leading-relaxed">
                That's when I started experimenting in my kitchen, combining 
                traditional African botanical knowledge with modern cosmetic science. 
                What began as a personal quest grew into Aura - a brand that 
                celebrates natural African beauty in all its glory.
              </p>
              <p className="font-body text-gray-600 mb-8 leading-relaxed">
                Today, we work directly with women's cooperatives across West Africa 
                to source the finest ingredients, ensuring our products honor both 
                tradition and innovation.
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-deep-brown font-semibold hover:text-gold transition-colors"
              >
                Read More Stories
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="values" className="py-20 bg-gradient-to-b from-pale-green to-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <p className="font-body text-gold font-semibold tracking-wider text-sm mb-2">
              OUR VALUES
            </p>
            <h2 className="font-display font-bold text-4xl text-deep-brown">
              More Than Beauty
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto mt-4">
              We believe that true luxury comes from authenticity, responsibility, 
              and respect for our heritage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              return (
                <div
                  key={value.id}
                  className={`reveal text-center p-6`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                    style={{ backgroundColor: value.color + '20', color: value.color }}
                  >
                    {value.icon === 'Leaf' && <Leaf className="w-8 h-8" />}
                    {value.icon === 'Heart' && <Heart className="w-8 h-8" />}
                    {value.icon === 'Recycle' && <Recycle className="w-8 h-8" />}
                    {value.icon === 'Sparkles' && <Sparkles className="w-8 h-8" />}
                  </div>
                  <h3 className="font-display font-semibold text-xl text-deep-brown mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
      </div>
    </section>

    {/* Why Natural Hair */}
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-deep-brown mb-6">
                Celebrating Your<br />
                Natural Texture
              </h2>
              <p className="font-body text-gray-600 mb-6 leading-relaxed">
                For too long, natural African hair has been misunderstood, 
                marginalized, and forced into narrow beauty standards. We're 
                changing that narrative.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-deep-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-deep-brown mb-1">
                      Type-Specific Formulations
                    </h4>
                    <p className="font-body text-gray-600 text-sm">
                      Products designed specifically for Type 2, 3, and 4 hair textures
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-deep-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-deep-brown mb-1">
                      Gentle, Effective Ingredients
                    </h4>
                    <p className="font-body text-gray-600 text-sm">
                      No sulfates, parabens, or harsh chemicals that strip natural oils
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-deep-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-deep-brown mb-1">
                      Education & Empowerment
                    </h4>
                    <p className="font-body text-gray-600 text-sm">
                      Resources to help you understand and love your unique curl pattern
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-deep-brown font-semibold hover:text-gold transition-colors"
              >
                Learn More
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
            <div className="reveal">
              <img
                src={naturalhair}
                alt="Natural hair celebration"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-deep-brown text-cream relative">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="reveal">
              <p className="font-display font-bold text-5xl text-gold mb-2">50K+</p>
              <p className="font-body text-cream/80">Happy Customers</p>
            </div>
            <div className="reveal" style={{ animationDelay: '0.1s' }}>
              <p className="font-display font-bold text-5xl text-gold mb-2">15+</p>
              <p className="font-body text-cream/80">Countries Served</p>
            </div>
            <div className="reveal" style={{ animationDelay: '0.2s' }}>
              <p className="font-display font-bold text-5xl text-gold mb-2">500K+</p>
              <p className="font-body text-cream/80">Products Sold</p>
            </div>
            <div className="reveal" style={{ animationDelay: '0.3s' }}>
              <p className="font-display font-bold text-5xl text-gold mb-2">100%</p>
              <p className="font-body text-cream/80">Natural Ingredients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
