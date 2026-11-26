'use client';

export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 text-center text-sm font-medium">
      <p className="max-w-7xl mx-auto">
        🚀 Doorstep RO & Kitchen Chimney Services in Soro, Balasore & Nearby Villages | 
        <a href="tel:+919439263319" className="ml-2 font-semibold hover:underline">
          Call Now
        </a>
        {' | '}
        <a 
          href="https://wa.me/919439263319?text=Hello, I'm interested in your services" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
        >
          WhatsApp
        </a>
      </p>
    </div>
  );
}
