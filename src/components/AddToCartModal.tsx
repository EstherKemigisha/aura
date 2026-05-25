import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, MessageCircle, Store, Truck, Mail, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { purchaseMethods, defaultPurchaseMethod } from '../data/purchaseMethods';
import type { PurchaseMethodId } from '../types';

const methodIcons = {
  whatsapp: MessageCircle,
  pickup: Store,
  delivery: Truck,
  email: Mail,
} as const;

export default function AddToCartModal() {
  const navigate = useNavigate();
  const { modalProduct, modalQuantity, closeAddToCartModal, addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [purchaseMethod, setPurchaseMethod] = useState<PurchaseMethodId>(defaultPurchaseMethod);
  const [addedFeedback, setAddedFeedback] = useState(false);

  const isOpen = Boolean(modalProduct);

  useEffect(() => {
    if (modalProduct) {
      setQuantity(modalQuantity);
      setPurchaseMethod(defaultPurchaseMethod);
      setAddedFeedback(false);
    }
  }, [modalProduct, modalQuantity]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAddToCartModal();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, closeAddToCartModal]);

  if (!modalProduct) return null;

  const lineTotal = modalProduct.price * quantity;
  const selectedMethod = purchaseMethods.find((m) => m.id === purchaseMethod);

  const handleAdd = (goToCart: boolean) => {
    addItem(modalProduct, quantity, purchaseMethod);
    if (goToCart) {
      closeAddToCartModal();
      navigate('/cart');
      return;
    }
    setAddedFeedback(true);
    window.setTimeout(() => {
      setAddedFeedback(false);
      closeAddToCartModal();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-to-cart-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-deep-brown/50 backdrop-blur-sm"
        onClick={closeAddToCartModal}
        aria-label="Close"
      />

      <div className="relative w-full sm:max-w-lg max-h-[92dvh] sm:max-h-[90vh] overflow-y-auto bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-cream px-5 sm:px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-deep-brown" />
            </div>
            <div>
              <h2 id="add-to-cart-title" className="font-display font-bold text-xl text-deep-brown">
                Add to Cart
              </h2>
              <p className="font-body text-xs text-gray-500">Choose quantity & how to purchase</p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeAddToCartModal}
            className="p-2 rounded-full hover:bg-cream text-gray-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-5 sm:px-6 py-5 space-y-6">
          <div className="flex gap-4 p-4 bg-cream/60 rounded-2xl">
            <img
              src={modalProduct.image}
              alt={modalProduct.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover flex-shrink-0"
            />
            <div className="min-w-0 flex-1">
              <p className="text-xs text-gray-400 uppercase tracking-wider">{modalProduct.category}</p>
              <h3 className="font-display font-semibold text-lg text-deep-brown line-clamp-2">
                {modalProduct.name}
              </h3>
              <p className="font-display font-bold text-xl text-deep-brown mt-1">
                ${modalProduct.price}
              </p>
            </div>
          </div>

          <div>
            <label className="font-display font-semibold text-deep-brown text-sm mb-3 block">
              Quantity
            </label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-11 h-11 border-2 border-deep-brown rounded-xl flex items-center justify-center text-deep-brown hover:bg-deep-brown hover:text-cream transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="font-display text-2xl text-deep-brown w-10 text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-11 h-11 border-2 border-deep-brown rounded-xl flex items-center justify-center text-deep-brown hover:bg-deep-brown hover:text-cream transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-5 h-5" />
              </button>
              <span className="font-body text-sm text-gray-500 ml-auto">
                Line total: <strong className="text-deep-brown">${lineTotal.toFixed(2)}</strong>
              </span>
            </div>
          </div>

          <div>
            <label className="font-display font-semibold text-deep-brown text-sm mb-3 block">
              How would you like to purchase?
            </label>
            <div className="space-y-2">
              {purchaseMethods.map((method) => {
                const Icon = methodIcons[method.id];
                const selected = purchaseMethod === method.id;
                return (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPurchaseMethod(method.id)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex gap-3 ${
                      selected
                        ? 'border-gold bg-gold/10 shadow-sm'
                        : 'border-cream bg-white hover:border-gold/40'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        selected ? 'gold-gradient text-deep-brown' : 'bg-cream text-gray-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-semibold text-deep-brown">{method.label}</p>
                      <p className="font-body text-xs text-gray-500 mt-0.5">{method.description}</p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        selected ? 'border-gold bg-gold' : 'border-gray-300'
                      }`}
                    >
                      {selected && <span className="w-2 h-2 rounded-full bg-deep-brown" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {selectedMethod && (
            <p className="font-body text-xs text-gray-500 bg-pale-green/50 rounded-xl px-4 py-3 border border-soft-green/20">
              {purchaseMethod === 'whatsapp' &&
                'After adding to cart, complete checkout on WhatsApp — we’ll confirm payment and delivery details.'}
              {purchaseMethod === 'pickup' &&
                'We’ll message you when your order is ready for pickup at Kisaasi, Kampala.'}
              {purchaseMethod === 'delivery' &&
                'Delivery fees depend on your location — we’ll confirm on WhatsApp before dispatch.'}
              {purchaseMethod === 'email' &&
                'We’ll reply to your email with availability, pricing, and next steps.'}
            </p>
          )}
        </div>

        <div className="sticky bottom-0 bg-white border-t border-cream px-5 sm:px-6 py-4 pb-safe space-y-3">
          {addedFeedback ? (
            <div className="flex items-center justify-center gap-2 py-4 text-deep-brown font-display font-semibold">
              <Check className="w-5 h-5 text-green-600" />
              Added to cart!
            </div>
          ) : (
            <>
              <button
                type="button"
                onClick={() => handleAdd(true)}
                className="btn-primary w-full py-3.5 rounded-full font-display font-semibold min-h-[48px]"
              >
                Add to Cart & View Cart
              </button>
              <button
                type="button"
                onClick={() => handleAdd(false)}
                className="w-full py-3.5 rounded-full font-display font-semibold border-2 border-deep-brown text-deep-brown hover:bg-deep-brown hover:text-cream transition-colors min-h-[48px]"
              >
                Add to Cart & Keep Shopping
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
