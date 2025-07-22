'use client';

export default function CustomMarquee() {
  return (
    <div className="fixed top-0 left-0 w-full bg-indigo-700 overflow-hidden whitespace-nowrap text-white text-sm py-2 z-[60]">
      <div className="overflow-hidden whitespace-nowrap">
        <div
          className="inline-block text-white text-sm font-semibold"
          style={{
            display: 'inline-block',
            animation: 'scroll 15s linear infinite',
          }}
        >
          📢 Book your RO service now! Call us at 9439263319 or WhatsApp us
          anytime. &nbsp;&nbsp;&nbsp; 🚚 Doorstep service in Soro & nearby
          areas. &nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
}
