import { Link } from 'react-router-dom';
import { Minus, Plus, ShoppingBag, Trash2, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { purchaseMethods, getPurchaseMethod } from '../data/purchaseMethods';
import { buildOrderMessage, getCheckoutAction, getPrimaryCheckoutMethod } from '../utils/order';
import type { PurchaseMethodId } from '../types';

export default function Cart() {
  const { items, itemCount, subtotal, updateQuantity, removeItem, updatePurchaseMethod } =
    useCart();

  const orderMessage = buildOrderMessage(items, subtotal);
  const primaryMethod = getPrimaryCheckoutMethod(items);
  const primaryCheckout = getPurchaseMethod(primaryMethod);
  const primaryAction = getCheckoutAction(primaryMethod, orderMessage);

  const methodsInCart = [...new Set(items.map((i) => i.purchaseMethod))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-pale-green pt-20 sm:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/#shop"
          className="inline-flex items-center gap-2 font-body text-sm text-gray-600 hover:text-deep-brown transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue shopping
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
            <ShoppingBag className="w-6 h-6 text-deep-brown" />
          </div>
          <div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-deep-brown">Your Cart</h1>
            <p className="font-body text-gray-600 text-sm mt-1">
              {itemCount === 0 ? 'No items yet' : `${itemCount} item${itemCount === 1 ? '' : 's'}`}
            </p>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 sm:p-14 text-center shadow-sm">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-6" />
            <h2 className="font-display font-semibold text-2xl text-deep-brown mb-3">Your cart is empty</h2>
            <p className="font-body text-gray-600 mb-8 max-w-md mx-auto">
              Tap Add to Cart on any product to choose quantity and how you&apos;d like to purchase.
            </p>
            <Link
              to="/#shop"
              className="inline-flex items-center justify-center btn-primary px-8 py-4 rounded-full font-display font-semibold"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <ul className="space-y-4 mb-8">
              {items.map((item) => (
                <li
                  key={item.productId}
                  className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm"
                >
                  <div className="flex gap-4 sm:gap-6">
                    <Link to={`/product/${item.productId}`} className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.productId}`}
                        className="font-display font-semibold text-lg text-deep-brown hover:text-gold transition-colors line-clamp-2"
                      >
                        {item.name}
                      </Link>
                      <p className="font-display font-bold text-deep-brown mt-1">${item.price}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-4">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                            className="w-9 h-9 border-2 border-deep-brown rounded-lg flex items-center justify-center text-deep-brown hover:bg-deep-brown hover:text-cream transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-display text-lg text-deep-brown w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            className="w-9 h-9 border-2 border-deep-brown rounded-lg flex items-center justify-center text-deep-brown hover:bg-deep-brown hover:text-cream transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.productId)}
                          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </button>
                        <p className="font-display font-bold text-deep-brown ml-auto sm:hidden">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <p className="font-display font-bold text-deep-brown hidden sm:block">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-cream">
                    <label
                      htmlFor={`purchase-${item.productId}`}
                      className="font-body text-xs text-gray-500 uppercase tracking-wider mb-2 block"
                    >
                      Purchase method
                    </label>
                    <select
                      id={`purchase-${item.productId}`}
                      value={item.purchaseMethod}
                      onChange={(e) =>
                        updatePurchaseMethod(
                          item.productId,
                          e.target.value as PurchaseMethodId
                        )
                      }
                      className="input-field w-full px-4 py-3 rounded-xl font-body text-deep-brown text-sm bg-cream/30"
                    >
                      {purchaseMethods.map((method) => (
                        <option key={method.id} value={method.id}>
                          {method.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div>
                <h2 className="font-display font-semibold text-xl text-deep-brown mb-4">
                  Order summary
                </h2>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-body text-gray-600">Subtotal</span>
                  <span className="font-display font-bold text-2xl text-deep-brown">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <p className="font-body text-sm text-gray-500">
                  Free shipping on orders over $50
                </p>
              </div>

              {methodsInCart.length > 1 && (
                <p className="font-body text-xs text-gray-500 bg-cream rounded-xl px-4 py-3">
                  Your items use different purchase methods. Checkout below will include all
                  details in one message.
                </p>
              )}

              <div>
                <p className="font-display font-semibold text-deep-brown text-sm mb-3">
                  Complete your order
                </p>
                <a
                  href={primaryAction.href}
                  target={primaryAction.external ? '_blank' : undefined}
                  rel={primaryAction.external ? 'noopener noreferrer' : undefined}
                  className="btn-primary w-full py-4 rounded-full font-display font-semibold text-lg flex items-center justify-center gap-2 min-h-[48px]"
                >
                  {primaryCheckout?.checkoutLabel ?? 'Complete order'}
                </a>
                {methodsInCart.length > 1 && (
                  <div className="mt-4 space-y-2">
                    <p className="font-body text-xs text-gray-500">Or checkout by method:</p>
                    {methodsInCart.map((methodId) => {
                      const method = getPurchaseMethod(methodId);
                      const methodItems = items.filter((i) => i.purchaseMethod === methodId);
                      const methodSubtotal = methodItems.reduce(
                        (s, i) => s + i.price * i.quantity,
                        0
                      );
                      const action = getCheckoutAction(
                        methodId,
                        buildOrderMessage(methodItems, methodSubtotal)
                      );
                      return (
                        <a
                          key={methodId}
                          href={action.href}
                          target={action.external ? '_blank' : undefined}
                          rel={action.external ? 'noopener noreferrer' : undefined}
                          className="block w-full py-3 rounded-full font-body font-semibold text-sm text-center border-2 border-deep-brown text-deep-brown hover:bg-deep-brown hover:text-cream transition-colors"
                        >
                          {method?.checkoutLabel} ({methodItems.length} item
                          {methodItems.length === 1 ? '' : 's'})
                        </a>
                      );
                    })}
                  </div>
                )}
                <p className="font-body text-xs text-gray-500 text-center mt-4">
                  {primaryMethod === 'email'
                    ? 'Opens your email app with your order details pre-filled.'
                    : 'Opens WhatsApp with your order and purchase preferences.'}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
