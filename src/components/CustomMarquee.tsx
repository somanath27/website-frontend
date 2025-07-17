'use client';

export default function CustomMarquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-indigo-600 py-2">
      <div
        className="inline-block text-white text-sm font-semibold"
        style={{
          display: 'inline-block',
          animation: 'scroll 15s linear infinite',
        }}
      >
        📢 Book your RO service now! Call us at 9439263319 or WhatsApp us
        anytime. &nbsp;&nbsp;&nbsp; 🚚 Doorstep service in Balasore, Soro &
        nearby areas. &nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}
