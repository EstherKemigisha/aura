import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { useState } from 'react';
import { productGalleryThumbnails } from '../data/images';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { openAddToCartModal } = useCart();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!product) return;
    openAddToCartModal(product, quantity);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-cream pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-deep-brown mb-4">Product not found</h1>
          <Link to="/shop" className="text-gold font-semibold hover:underline">
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  const additionalImages = productGalleryThumbnails.filter((img) => img !== product.image);

  return (
    <div className="min-h-screen bg-cream pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <nav className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-body text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
          <Link to="/" className="hover:text-deep-brown transition-colors">Home</Link>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          <Link to="/shop" className="hover:text-deep-brown transition-colors">Shop</Link>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          <span className="text-deep-brown">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div className="reveal">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <img src={product.image} alt={product.name} className="w-full h-64 sm:h-80 lg:h-96 object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-4 mt-3 sm:mt-4">
              <button onClick={() => setSelectedImage(0)} className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${selectedImage === 0 ? 'border-gold' : 'border-cream'}`}>
                <img src={product.image} alt="" className="w-full h-full object-cover" />
              </button>
              {additionalImages.map((img, index) => (
                <button key={index} onClick={() => setSelectedImage(index + 1)} className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${selectedImage === index + 1 ? 'border-gold' : 'border-cream'}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            {product.bestseller && (
              <span className="inline-block bg-gold text-deep-brown text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                BESTSELLER
              </span>
            )}
            <h1 className="font-display font-bold text-2xl sm:text-3xl lg:text-5xl text-deep-brown mb-3 sm:mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[1,2,3,4,5].map((_, i) => (
                  <svg key={i} className="w-5 h-5 star-rating fill-current" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <span className="text-gray-600">{product.rating} ({product.reviewCount} reviews)</span>
            </div>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-display font-bold text-4xl text-deep-brown">${product.price}</span>
              {product.originalPrice && (
                <><span className="text-2xl text-gray-400 line-through">${product.originalPrice}</span>
                <span className="bg-gold text-deep-brown text-sm font-semibold px-3 py-1 rounded-full">Save ${product.originalPrice - product.price}</span></>
              )}
            </div>
            <p className="font-body text-gray-600 mb-8 leading-relaxed">{product.description}</p>
            <div className="mb-8">
              <label className="font-display font-semibold text-deep-brown mb-3 block">Quantity</label>
              <div className="flex items-center gap-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-12 border-2 border-deep-brown rounded-xl flex items-center justify-center text-deep-brown hover:bg-deep-brown hover:text-cream transition-colors"><Minus className="w-5 h-5" /></button>
                <span className="font-display text-2xl text-deep-brown w-12 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-12 border-2 border-deep-brown rounded-xl flex items-center justify-center text-deep-brown hover:bg-deep-brown hover:text-cream transition-colors"><Plus className="w-5 h-5" /></button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 btn-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-display font-semibold text-base sm:text-lg flex items-center justify-center gap-3 min-h-[48px]"
              >
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                Add to Cart
              </button>
              <button className="w-full sm:w-16 h-12 sm:h-16 border-2 border-deep-brown rounded-xl flex items-center justify-center text-deep-brown hover:bg-deep-brown hover:text-cream transition-colors min-h-[48px]"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg></button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8"><svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Free shipping on orders over $50</div>
            <div className="border-t border-cream pt-8"><h3 className="font-display font-semibold text-lg text-deep-brown mb-4">Perfect For:</h3><div className="flex flex-wrap gap-2">{product.hairType.map(type => (<span key={type} className="px-4 py-2 bg-white/50 border border-cream rounded-full text-sm font-body text-gray-600">{type}</span>))}</div></div>
          </div>
        </div>

        <div className="mt-16 reveal">
          <div className="bg-white rounded-2xl shadow-sm">
            <div className="border-b border-cream"><div className="flex gap-8 px-6 py-4"><button className="font-display font-semibold text-deep-brown pb-4 border-b-2 border-deep-brown">Description</button><button className="font-display font-semibold text-gray-400 pb-4 border-b-2 border-transparent hover:text-deep-brown transition-colors">Ingredients</button><button className="font-display font-semibold text-gray-400 pb-4 border-b-2 border-transparent hover:text-deep-brown transition-colors">How to Use</button><button className="font-display font-semibold text-gray-400 pb-4 border-b-2 border-transparent hover:text-deep-brown transition-colors">Reviews ({product.reviewCount})</button></div></div>
            <div className="p-8">
              <h3 className="font-display font-semibold text-2xl text-deep-brown mb-4">Product Description</h3>
              <p className="font-body text-gray-600 leading-relaxed mb-6">{product.description}</p>
              <h4 className="font-display font-semibold text-lg text-deep-brown mb-3">Key Benefits:</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3"><svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg><span className="font-body text-gray-600">Intense hydration without buildup</span></li>
                <li className="flex items-start gap-3"><svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg><span className="font-body text-gray-600">Strengthens hair from root to tip</span></li>
                <li className="flex items-start gap-3"><svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg><span className="font-body text-gray-600">Defines natural curl pattern</span></li>
                <li className="flex items-start gap-3"><svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg><span className="font-body text-gray-600">Reduces frizz and adds shine</span></li>
              </ul>
              <h4 className="font-display font-semibold text-lg text-deep-brown mb-3">Ingredients</h4>
              <div className="flex flex-wrap gap-2 mb-6">{product.ingredients.map(ing => (<span key={ing} className="px-4 py-2 bg-cream rounded-lg text-sm font-body text-deep-brown">{ing}</span>))}</div>
              <h4 className="font-display font-semibold text-lg text-deep-brown mb-3">How to Use</h4>
              <p className="font-body text-gray-600 mb-6">{product.howToUse}</p>
              <div className="bg-pale-green rounded-xl p-6"><h4 className="font-display font-semibold text-lg text-deep-brown mb-3">Pro Tips</h4><ul className="space-y-2"><li className="flex items-start gap-3"><span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span><span className="font-body text-gray-600">For best results, use on damp hair after cleansing</span></li><li className="flex items-start gap-3"><span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span><span className="font-body text-gray-600">Section hair for even distribution</span></li><li className="flex items-start gap-3"><span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span><span className="font-body text-gray-600">Follow with our Styling Cream for defined curls</span></li></ul></div>
              <div className="mt-8 pt-8 border-t border-cream"><h4 className="font-display font-semibold text-2xl text-deep-brown mb-6">Customer Reviews</h4><div className="grid md:grid-cols-2 gap-6"><div className="bg-cream rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop" alt="Amina" className="w-12 h-12 rounded-full object-cover" /><div><p className="font-semibold text-deep-brown">Amina O.</p><div className="flex">{[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4 star-rating fill-current" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</div></div></div><p className="font-body text-gray-600 leading-relaxed">"This product completely transformed my hair! After years of damage from heat styling, my curls have never looked better. The moisture is incredible without feeling heavy."</p></div><div className="bg-cream rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop" alt="Zara" className="w-12 h-12 rounded-full object-cover" /><div><p className="font-semibold text-deep-brown">Zara M.</p><div className="flex">{[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4 star-rating fill-current" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</div></div></div><p className="font-body text-gray-600 leading-relaxed">"As a hairstylist, I recommend this to all my clients with natural hair. The formula is lightweight yet deeply nourishing. My clients love how their hair feels after just one use."</p></div><div className="bg-cream rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop" alt="Sophie" className="w-12 h-12 rounded-full object-cover" /><div><p className="font-semibold text-deep-brown">Sophie W.</p><div className="flex">{[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4 star-rating fill-current" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</div></div></div><p className="font-body text-gray-600 leading-relaxed">"I've tried so many products claiming to moisturize 4C hair, but this is the first that actually delivers. The smell is divine and my coils pop like never before!"</p></div><div className="bg-cream rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=60&h=60&fit=crop" alt="Lisa" className="w-12 h-12 rounded-full object-cover" /><div><p className="font-semibold text-deep-brown">Lisa T.</p><div className="flex">{[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4 star-rating fill-current" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</div></div></div><p className="font-body text-gray-600 leading-relaxed">"Worth every penny! The ingredients list is clean and the results speak for themselves. My hair has never been softer or easier to manage. Highly recommend!"</p></div></div></div>
            </div>
          </div>
        </div>

        <div className="mt-16 reveal"><h3 className="font-display font-semibold text-2xl text-deep-brown mb-6">You May Also Like</h3><div className="grid md:grid-cols-4 gap-6">{products.filter(p => p.id !== product.id).slice(0, 4).map(related => (<Link key={related.id} to={`/product/${related.id}`} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover"><div className="relative">{related.bestseller && <span className="absolute top-4 left-4 bg-gold text-deep-brown text-xs font-semibold px-3 py-1 rounded-full">BESTSELLER</span>}<img src={related.image} alt={related.name} className="w-full h-48 object-cover" /></div><div className="p-4"><span className="text-xs text-gray-400 uppercase">{related.category}</span><h4 className="font-display font-semibold text-lg text-deep-brown mt-1 mb-2">{related.name}</h4><p className="font-display font-bold text-deep-brown">${related.price}</p></div></Link>))}</div></div>
      </div>
    </div>
  );
}
