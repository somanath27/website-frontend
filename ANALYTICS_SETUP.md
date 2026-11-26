# Google Analytics & Google Ads Conversion Tracking Setup

This guide helps you configure GA4 and Google Ads conversion tracking for Saraswati Enterprises website.

## Overview

The website is prepared with tracking infrastructure that sends events to:
- **Google Analytics 4 (GA4)** - For website analytics and user behavior
- **Google Ads** - For conversion tracking and campaign performance

## Step 1: Set Up Google Analytics 4

### Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com)
2. Click "Create" property
3. Set property name: "Saraswati Enterprises"
4. Select Industry: "Business and Professional Services"
5. Create a Web data stream
6. Add website URL: `https://www.saraswatienterprises.net.in`

### Get Your Measurement ID
1. In GA4, go to Admin → Data Streams
2. Click on your web stream
3. Copy the **Measurement ID** (format: G-XXXXXXXXXX)

### Add GA4 to Website

Add this to `src/app/layout.tsx` in the `<head>` section:

```typescript
<Script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></Script>
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

Replace `G-XXXXXXXXXX` with your Measurement ID.

## Step 2: Configure GA4 Conversion Events

### Events to Track

The website tracks these events automatically:

1. **click_call** - Phone button clicks
2. **click_whatsapp** - WhatsApp button clicks
3. **submit_service_booking** - Service booking form submission
4. **submit_product_enquiry** - Product enquiry form submission
5. **submit_contact_form** - Contact form submission
6. **view_product** - Product page views
7. **view_category** - Category page views
8. **click_enquiry_button** - Any enquiry CTA clicks
9. **view_landing_page** - Landing page views

### Mark Events as Conversions (GA4)

1. In GA4, go to Admin → Events
2. Click "Create event" for each conversion event
3. For example, create conversion "phone_call":
   - Event name: `click_call`
   - Conversion value: Optional (can add revenue value)
   - Mark as conversion: ✓

Recommended conversions to mark:
- `click_call` ✓
- `click_whatsapp` ✓
- `submit_service_booking` ✓
- `submit_product_enquiry` ✓
- `submit_contact_form` ✓

## Step 3: Set Up Google Ads Conversion Tracking

### Link Google Ads to GA4

1. Go to [Google Ads](https://ads.google.com)
2. Click Tools & Settings → Measurement
3. Click "Conversions"
4. Click the + button to create conversion
5. Select "Import from Google Analytics"
6. Choose GA4 property
7. Select events to import as conversions

### Create Ads-Specific Conversions (Optional)

If you want conversions only tracked in Ads:

1. In Google Ads, go to Tools → Conversions
2. Click + button
3. Select "Website"
4. Set up conversion:
   - Conversion name: "Phone Call"
   - Conversion category: "Calls"
   - Value: 50 (adjust based on your average lead value)
   - Attribution model: Last Click
5. Copy the conversion ID
6. Add tracking code to website

### Example Conversion Setup:

**Phone Call Conversion:**
- Name: `phone_call_conversion`
- Value: ₹50 (avg lead value)
- Category: Calls
- Tracking: Automatic (via GA4)

**WhatsApp Conversion:**
- Name: `whatsapp_conversion`
- Value: ₹50 (avg lead value)
- Category: Leads
- Tracking: Automatic (via GA4)

**Service Booking Conversion:**
- Name: `service_booking_conversion`
- Value: ₹100-500 (based on service type)
- Category: Purchase
- Tracking: Automatic (via GA4)

## Step 4: Implement Conversion Tracking

Tracking is already implemented in the codebase using the `src/utils/tracking.ts` utility.

### Examples:

```typescript
// Track phone click
import { trackPhoneClick } from '@/utils/tracking';
trackPhoneClick('+919439263319');

// Track WhatsApp click
import { trackWhatsAppClick } from '@/utils/tracking';
trackWhatsAppClick();

// Track product view
import { trackProductView } from '@/utils/tracking';
trackProductView('product-1', 'KENT Grand Star', 'water-purifiers');

// Track form submission
import { trackFormSubmission } from '@/utils/tracking';
trackFormSubmission('booking', { service: 'RO Installation' });
```

## Step 5: Set Up Google Ads Campaigns

### Campaign Structure Recommendation

```
Saraswati Enterprises
├── RO Service Campaign
│   ├── Keyword: "RO service Soro"
│   ├── Keyword: "RO repair Balasore"
│   └── Landing page: /ro-service-soro
├── Water Purifier Campaign
│   ├── Keyword: "water purifier Soro"
│   ├── Keyword: "water purifier dealer"
│   └── Landing page: /water-purifiers-soro
├── Kitchen Chimney Campaign
│   ├── Keyword: "kitchen chimney Soro"
│   ├── Keyword: "chimney installation"
│   └── Landing page: /kitchen-chimneys-soro
└── RO Installation Campaign
    ├── Keyword: "RO installation Soro"
    ├── Keyword: "water purifier installation"
    └── Landing page: /ro-installation-soro
```

### Add Conversion Tracking to Ads

1. Create campaigns as above
2. In each campaign:
   - Ad settings → Conversion tracking
   - Select conversions created in Step 3
   - Set conversion value if applicable
   - Set conversion window (30 days recommended)

### Recommended Landing Pages

- **RO Service**: `/ro-service-soro` - For "RO repair", "RO service" keywords
- **Water Purifiers**: `/water-purifiers-soro` - For "water purifier", "buy water purifier" keywords
- **Kitchen Chimneys**: `/kitchen-chimneys-soro` - For "chimney", "kitchen chimney" keywords
- **RO Installation**: `/ro-installation-soro` - For "installation" keywords

## Step 6: Verify Tracking

### In GA4
1. Go to Real-time → Events
2. Trigger events (click phone, WhatsApp, etc.)
3. Watch events appear in real-time

### In Google Ads
1. Go to Tools → Conversions
2. Set date range to "Today"
3. Verify conversions are being recorded

## Step 7: Optimize & Monitor

### Monthly Tasks
- Review conversion rates and ROI
- Adjust bid amounts based on conversion value
- Test different landing pages
- Optimize ad copy based on performance
- Monitor cost per conversion

### Key Metrics to Track
- Cost per conversion (target: ₹50-200)
- Conversion rate (target: 2-5%)
- Click-through rate (target: 2-4%)
- Quality score (target: 7+)

## Troubleshooting

### Events Not Appearing in GA4
1. Check Measurement ID is correct
2. Wait 24-48 hours for processing
3. Use GA4 DebugView (Admin → DebugView) to verify events
4. Clear browser cache and try again

### Conversions Not Tracking in Ads
1. Verify conversion tracking code is installed
2. Test conversion by triggering action
3. Wait 24 hours for data to populate
4. Check conversion window and attribution model

### Phone/WhatsApp Clicks Not Tracking
1. Verify `trackPhoneClick()` and `trackWhatsAppClick()` are called
2. Check browser console for errors
3. Verify gtag is loaded: `typeof window.gtag === 'function'`

## Additional Resources

- [GA4 Setup Guide](https://support.google.com/analytics/answer/10089681)
- [Google Ads Conversion Tracking](https://support.google.com/google-ads/answer/3103387)
- [Event Tracking Best Practices](https://support.google.com/analytics/answer/9234069)

## Contact

For technical issues with tracking:
1. Check browser console for JavaScript errors
2. Verify gtag library is loaded
3. Test in browser DevTools → Application → Cookies
4. Contact Google Analytics support

---

**Setup Checklist:**
- [ ] GA4 Property created
- [ ] Measurement ID added to website
- [ ] Conversion events configured in GA4
- [ ] Google Ads linked to GA4
- [ ] Ads conversions created
- [ ] Landing pages tested
- [ ] Real-time events verified
- [ ] Tracking confirmed in GA4
- [ ] Conversion tracking confirmed in Ads
- [ ] Campaigns created and running
