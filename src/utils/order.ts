import { getPurchaseMethod } from '../data/purchaseMethods';
import type { CartItem, PurchaseMethodId } from '../types';

const WHATSAPP_NUMBER = '256788345329';
const EMAIL = 'hello@aura.com';

export function buildOrderMessage(items: CartItem[], subtotal: number) {
  if (!items.length) return 'Hi Aura! I have a question about my order.';

  const lines = items.map((item) => {
    const method = getPurchaseMethod(item.purchaseMethod)?.label ?? item.purchaseMethod;
    return `• ${item.name} x${item.quantity} — $${(item.price * item.quantity).toFixed(2)}\n  Purchase: ${method}`;
  });

  return `Hi Aura! I'd like to order:\n\n${lines.join('\n\n')}\n\nTotal: $${subtotal.toFixed(2)}`;
}

export function getCheckoutAction(method: PurchaseMethodId, message: string) {
  const encoded = encodeURIComponent(message);

  if (method === 'email') {
    return {
      href: `mailto:${EMAIL}?subject=${encodeURIComponent('Aura order inquiry')}&body=${encoded}`,
      external: false,
    };
  }

  return {
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`,
    external: true,
  };
}

export function getPrimaryCheckoutMethod(items: CartItem[]): PurchaseMethodId {
  if (!items.length) return 'whatsapp';
  const counts = items.reduce<Record<string, number>>((acc, item) => {
    acc[item.purchaseMethod] = (acc[item.purchaseMethod] ?? 0) + item.quantity;
    return acc;
  }, {});
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return (sorted[0]?.[0] as PurchaseMethodId) ?? 'whatsapp';
}
