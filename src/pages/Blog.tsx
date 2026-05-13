import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blog';

export default function Blog() {
  const categories = ['All', 'Hair Care', 'Styling', 'Transitioning', 'Education', 'DIY', 'Science'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);


  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-pale-green pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12 reveal">
          <p className="font-body text-gold font-semibold tracking-wider text-sm mb-2">
            HAIR JOURNAL
          </p>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-deep-brown mb-4">
            Beauty & Wisdom
          </h1>
          <p className="font-body text-gray-600 max-w-2xl">
            Expert tips, inspiring stories, and guidance for your natural hair journey.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 reveal">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-body font-semibold text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-deep-brown text-cream'
                  : 'bg-white/50 text-gray-600 hover:bg-gold hover:text-deep-brown'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to={`/blog/${post.id}`}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-deep-brown text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
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
                  <h2 className="font-display font-semibold text-xl text-deep-brown mb-3 line-clamp-2 group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-body text-gray-600 text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-gray-500">
                      By {post.author}
                    </span>
                    <span className="text-gold font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 reveal">
            <p className="font-display text-2xl text-deep-brown mb-4">
              No articles in this category
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-gold font-semibold hover:underline"
            >
              View all articles
            </button>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16 reveal">
          <div className="bg-gradient-to-r from-deep-brown to-gray-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-3xl md:text-4xl text-cream mb-4 relative">
              Join Our Community
            </h3>
            <p className="font-body text-cream/80 mb-8 max-w-xl mx-auto relative">
              Subscribe to receive exclusive hair care tips, new product launches, 
              and member-only discounts.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full font-body text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent"
              />
              <button
                type="submit"
                className="btn-gold px-8 py-4 rounded-full font-display font-semibold whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
