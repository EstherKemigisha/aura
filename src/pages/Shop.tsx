import { Link, useLocation } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import { products } from '../data/products';

const categories = ['All', 'Treatments', 'Styling', 'Shampoo', 'Conditioner'];
const hairTypes = ['All Types', 'Type 2', 'Type 3', 'Type 4', 'Curly', 'Coily', 'Wavy', 'Dry Hair', 'Damaged Hair', 'Color Treated'];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedHairType, setSelectedHairType] = useState('All Types');
  const [sortBy, setSortBy] = useState('featured');
  const location = useLocation();

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedHairType !== 'All Types') {
      filtered = filtered.filter(p => p.hairType.includes(selectedHairType));
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedHairType, sortBy]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-pale-green pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 reveal">
          <p className="font-body text-gold font-semibold tracking-wider text-sm mb-2">
            PREMIUM COLLECTION
          </p>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-deep-brown mb-4">
            Discover Our Products
          </h1>
          <p className="font-body text-gray-600 max-w-2xl">
            Carefully crafted formulations for every curl pattern and hair need.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-32">
              <div className="bg-white rounded-2xl p-6 shadow-sm reveal">
                <h3 className="font-display font-semibold text-lg text-deep-brown mb-4">
                  Filter by Category
                </h3>
                <div className="space-y-2 mb-6">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-body text-sm transition-all ${
                        selectedCategory === category
                          ? 'bg-deep-brown text-cream'
                          : 'bg-cream text-gray-600 hover:bg-pale-green'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <h3 className="font-display font-semibold text-lg text-deep-brown mb-4">
                  Hair Type
                </h3>
                <div className="space-y-2 max-h-48 overflow-y-auto scroll-bar-hide">
                  {hairTypes.map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedHairType(type)}
                      className={`w-full text-left px-4 py-2 rounded-lg font-body text-xs transition-all ${
                        selectedHairType === type
                          ? 'bg-gold text-deep-brown'
                          : 'bg-white/50 text-gray-500 hover:bg-pale-green'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <div className="pt-6 border-t border-cream">
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSelectedHairType('All Types');
                      setSortBy('featured');
                    }}
                    className="w-full text-deep-brown font-body text-sm hover:text-gold transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 reveal">
              <p className="font-body text-gray-600">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="font-body text-sm bg-white/50 border border-gray-200 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:border-gold"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 reveal">
                <p className="font-display text-2xl text-deep-brown mb-2">No products found</p>
                <p className="font-body text-gray-600">
                  Try adjusting your filters or explore our full collection.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedHairType('All Types');
                  }}
                  className="mt-4 text-gold font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <div
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
                        {product.originalPrice && (
                          <span className="absolute top-4 right-4 bg-deep-brown text-cream text-xs font-semibold px-3 py-1 rounded-full z-10">
                            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                          </span>
                        )}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-xs text-gray-400 uppercase tracking-wider">
                          {product.category}
                        </span>
                        <h3 className="font-display font-semibold text-lg text-deep-brown mt-2 mb-2 line-clamp-1">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 star-rating fill-current" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">({product.reviewCount})</span>
                        </div>
                        <p className="font-body text-sm text-gray-500 mb-4 line-clamp-2">
                          {product.description}
                        </p>
                      </div>
                    </Link>
                    <div className="px-6 pb-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-display font-bold text-xl text-deep-brown">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <button className="w-full bg-deep-brown text-cream py-3 rounded-full font-body font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
