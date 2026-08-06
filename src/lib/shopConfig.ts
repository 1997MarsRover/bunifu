/** Update M-Pesa and contact details here before launch. */
export const shopConfig = {
  businessName: 'Bunifu Youths Kenya',
  currency: 'KES',
  mpesa: {
    type: 'Till' as 'Till' | 'Paybill',
    number: '000000', // Replace with your Till or Paybill number
    accountName: 'Bunifu Youths Kenya',
  },
  pickupLocation: 'Afralti, Along Waiyaki Way, Nairobi',
  supportEmail: 'info@bunifuyouths.co.ke',
  supportPhone: '+254712015793',
  whatsappNumber: '254712015793',
  deliveryNote:
    'Delivery within Nairobi may be arranged after order confirmation. Pickup at Afralti is free.',
  /** Used to convert WhalesBot USD list prices to KES for display and enquiries */
  usdToKesRate: 131,
};

export function usdToKes(usd: number): number {
  return Math.round(usd * shopConfig.usdToKesRate);
}

export function formatUsd(usd: number): string {
  return `$${usd.toFixed(2)} USD`;
}

export function formatKes(amount: number): string {
  return `${shopConfig.currency} ${amount.toLocaleString('en-KE')}`;
}

export type ProductInquiry = {
  name: string;
  slug: string;
  priceKes: number;
  quantity: number;
  pageUrl?: string;
};

export function whatsappProductInquiryLink(inquiry: ProductInquiry): string {
  const lineTotal = inquiry.priceKes * inquiry.quantity;
  const linkLine = inquiry.pageUrl ? `\n\n${inquiry.pageUrl}` : '';
  const text = encodeURIComponent(
    `Hi Bunifu, I'm interested in:\n\n${inquiry.name}\nQuantity: ${inquiry.quantity}\nListed price: ${formatKes(inquiry.priceKes)} each (${formatKes(lineTotal)} total)\n\nPlease confirm availability, delivery/pickup, and M-Pesa payment details.${linkLine}`,
  );
  return `https://wa.me/${shopConfig.whatsappNumber}?text=${text}`;
}

export function productInquiryMailto(inquiry: ProductInquiry): string {
  const lineTotal = inquiry.priceKes * inquiry.quantity;
  const subject = encodeURIComponent(`Shop enquiry: ${inquiry.name}`);
  const body = encodeURIComponent(
    `Hi Bunifu,\n\nI'm interested in the following item:\n\nProduct: ${inquiry.name}\nQuantity: ${inquiry.quantity}\nListed price: ${formatKes(inquiry.priceKes)} each (${formatKes(lineTotal)} total)\n${inquiry.pageUrl ? `Link: ${inquiry.pageUrl}\n` : ''}\nPlease confirm availability, delivery/pickup, and M-Pesa payment details.\n\nThank you.`,
  );
  return `mailto:${shopConfig.supportEmail}?subject=${subject}&body=${body}`;
}

export function supportPhoneTelLink(): string {
  return `tel:${shopConfig.supportPhone.replace(/\s/g, '')}`;
}
