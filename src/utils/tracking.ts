// Google Analytics & Ads Conversion Tracking Events

export type TrackingEventType = 
  | 'click_call'
  | 'click_whatsapp'
  | 'submit_service_booking'
  | 'submit_product_enquiry'
  | 'submit_contact_form'
  | 'view_product'
  | 'view_category'
  | 'click_enquiry_button'
  | 'view_landing_page';

interface TrackingEventPayload {
  event: TrackingEventType;
  value?: string | number;
  currency?: string;
  phone?: string;
  product?: string;
  category?: string;
  service?: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Track conversion events for GA4 and Google Ads
 * Can be called with just event type, or with event and data object
 * Uses gtag if available, otherwise logs to console
 */
export const trackEvent = (eventOrPayload: TrackingEventType | TrackingEventPayload, data?: Record<string, unknown>) => {
  if (typeof window === 'undefined') return;

  // Handle both calling styles:
  // trackEvent({ event: 'click_call', phone: '...' })
  // trackEvent('click_call', { phone: '...' })
  const payload: TrackingEventPayload = typeof eventOrPayload === 'string'
    ? { event: eventOrPayload, ...data }
    : eventOrPayload;

  // Send to GA4 via gtag
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', payload.event, {
      ...payload,
      timestamp: new Date().toISOString(),
    });
  }

  // Log for debugging
  if (process.env.NODE_ENV === 'development') {
    console.log('[Tracking Event]', payload);
  }
};

/**
 * Track phone call clicks
 */
export const trackPhoneClick = (phone: string) => {
  trackEvent({
    event: 'click_call',
    phone,
    value: 1,
  });
};

/**
 * Track WhatsApp clicks
 */
export const trackWhatsAppClick = (message?: string) => {
  trackEvent({
    event: 'click_whatsapp',
    message,
    value: 1,
  });
};

/**
 * Track product view
 */
export const trackProductView = (productId: string, productName: string, category: string) => {
  trackEvent({
    event: 'view_product',
    product: productName,
    category,
    value: productId,
  });
};

/**
 * Track category view
 */
export const trackCategoryView = (category: string) => {
  trackEvent({
    event: 'view_category',
    category,
    value: 1,
  });
};

/**
 * Track form submission
 */
export const trackFormSubmission = (formType: 'booking' | 'enquiry' | 'contact', data?: Record<string, unknown>) => {
  trackEvent({
    event: formType === 'booking' ? 'submit_service_booking' : 
           formType === 'enquiry' ? 'submit_product_enquiry' : 
           'submit_contact_form',
    ...data,
    value: 1,
  });
};

/**
 * Track landing page view
 */
export const trackLandingPageView = (pageName: string) => {
  trackEvent({
    event: 'view_landing_page',
    value: pageName,
  });
};

/**
 * Track enquiry button clicks
 */
export const trackEnquiryClick = (enquiryType: string, productOrService?: string) => {
  trackEvent({
    event: 'click_enquiry_button',
    enquiry_type: enquiryType,
    product_or_service: productOrService,
    value: 1,
  });
};
