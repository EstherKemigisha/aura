import type { PurchaseMethodId } from '../types';

export interface PurchaseMethod {
  id: PurchaseMethodId;
  label: string;
  description: string;
  checkoutLabel: string;
}

export const purchaseMethods: PurchaseMethod[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp Order',
    description: 'Message us to confirm your order and payment',
    checkoutLabel: 'Checkout via WhatsApp',
  },
  {
    id: 'pickup',
    label: 'Studio Pickup',
    description: 'Collect at our Kisaasi studio, Kampala',
    checkoutLabel: 'Confirm pickup on WhatsApp',
  },
  {
    id: 'delivery',
    label: 'Home Delivery',
    description: 'We deliver within Kampala (fee confirmed on chat)',
    checkoutLabel: 'Arrange delivery on WhatsApp',
  },
  {
    id: 'email',
    label: 'Email Inquiry',
    description: 'Get a quote or ask questions before you buy',
    checkoutLabel: 'Send order by email',
  },
];

export const defaultPurchaseMethod: PurchaseMethodId = 'whatsapp';

export function getPurchaseMethod(id: PurchaseMethodId) {
  return purchaseMethods.find((m) => m.id === id);
}
