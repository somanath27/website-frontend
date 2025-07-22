import Image from 'next/image';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

export default function BusinessCard() {
  return (
    <main className="min-h-screen flex flex-1 items-center justify-center px-4">
      <div className="relative w-full max-w-sm aspect-[1.8/1] bg-gradient-to-br from-blue-900 to-blue-600 text-white rounded-md shadow-2xl overflow-hidden p-6 flex flex-col justify-between">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          {/* Company Info */}
          <div>
            <h1 className="text-xl font-bold leading-tight tracking-wide font-sans">
              Saraswati Enterprises
            </h1>
            <p className="text-sm text-white/80 font-medium font-sans">
              Proprietor: <span className="text-white">Rakesh Kumar Barik</span>
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-xs space-y-2 text-right">
            <div className="flex items-center justify-end gap-1">
              <Phone size={10} />
              <span>9439263319</span>
            </div>
            <div className="flex items-center justify-end gap-1">
              <Phone size={10} />
              <span>7008826552</span>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="text-xs space-y-1">
          <p className="flex flex-row mt-2 text-nowrap gap-2">
            <Mail size={14} />
            <span className="break-all text-right w-32 font-sans">
              saraswatienterprises.ro@gmail.com
            </span>
          </p>
          <p className="flex mt-2 text-nowrap gap-2">
            <Globe size={14} />
            <span className="break-all text-right w-32 font-sans">
              saraswatienterprises.net.in
            </span>
          </p>
        </div>
        <div className="text-xs mt-4 space-y-1 flex items-start gap-2 text-white/80 font-sans">
          <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
          <div>
            <p>Infront of Cosmo Bazzar, Uttareswar</p>
            <p>Soro, Balasore, Odisha, India</p>
          </div>
        </div>
        {/* Logo or QR Code */}
        <div className="absolute bottom-4 right-4">
          <Image
            src="/assets/images/logo.png"
            alt="QR Code"
            width={60}
            height={60}
            className="rounded shadow-md"
          />
        </div>
      </div>
    </main>
  );
}
