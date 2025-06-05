import Carousel from '@/components/Carousel';
import AboutPage from '@/components/About';
import { Metadata } from 'next';
import Services from '@/components/Services';
import CustomerReviews from '@/components/CustomerReviews';

export const metadata: Metadata = {
  title: 'Saraswati Enterprises',
  description: 'Description of the index page',
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
};

export default function IndexPage() {
  return (
    <main className="w-full mx-auto">
      <Carousel />
      <AboutPage />
      <Services />
      <CustomerReviews />
    </main>
  );
}
