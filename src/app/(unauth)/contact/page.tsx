'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Loader2, SendHorizonal, PhoneCall, Mail } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.log(err);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto mt-28 max-w-3xl px-4 text-[#101010]">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
          Get in Touch
        </h1>
        <p className="mx-auto max-w-xl text-lg text-gray-600">
          Have a question or need support? Fill in the form below or reach out
          via WhatsApp—our team will respond as soon as possible.
        </p>
      </motion.section>

      <motion.form
        onSubmit={handleSubmit}
        className="mb-12 space-y-6 rounded-2xl bg-white p-8 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border px-4 py-3 text-sm focus:border-blue-600 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border px-4 py-3 text-sm focus:border-blue-600 focus:outline-none"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full rounded-lg border px-4 py-3 text-sm focus:border-blue-600 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full rounded-lg border px-4 py-3 text-sm focus:border-blue-600 focus:outline-none"
        />

        {status === 'success' && (
          <p className="text-green-600">
            Thank you! Your message has been sent.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600">
            Oops! Something went wrong. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <SendHorizonal className="h-5 w-5" />
          )}
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>

      <section className="rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-center text-white shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Other Ways to Connect</h2>
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
          <Link
            href="tel:+919439263319"
            className="flex items-center gap-2 hover:underline"
          >
            <PhoneCall className="h-5 w-5" /> +91&nbsp;94392&nbsp;63319
          </Link>
          <Link
            href="mailto:somanathbarik0727@gmail.com"
            className="flex items-center gap-2 hover:underline"
          >
            <Mail className="h-5 w-5" /> saraswatienterprises.ro@gmail.com
          </Link>
          <Link
            href="https://wa.me/919439263319?text=Hello%20I%20have%20a%20query%20about%20RO%20services"
            target="_blank"
            className="flex items-center gap-2 hover:underline"
          >
            <Image
              src="/assets/images/whatsapp.png"
              alt="WhatsApp"
              width={20}
              height={20}
            />{' '}
            WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}
