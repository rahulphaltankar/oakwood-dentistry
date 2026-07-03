import Image from 'next/image';
import { CheckCircle2, Star, MapPin, Phone, Mail } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center pt-12 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="md:w-1/2 z-10 text-center md:text-left pr-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              London’s Premier Destination for a <span className="text-blue-600">Confident, Radiant Smile.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              Advanced cosmetic and restorative dentistry delivered with uncompromising, pain-free care. Experience the Oakwood difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#booking" className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition shadow-md">
                Book Your Assessment
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-200 flex items-center justify-center">
            <span className="text-slate-500 font-medium">Premium Dental Clinic Image</span>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-8" id="about">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Clinical Philosophy</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Led by Dr. Sarah Jenkins, our clinic was founded on a simple principle: dentistry should be anxiety-free, transparent, and transformative. We don't just treat teeth; we restore confidence.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white px-4 sm:px-6 lg:px-8" id="booking">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Start Your Journey to a Better Smile.</h2>
            <p className="text-slate-300 mb-10">Our patient concierge team is ready to answer your questions and schedule your comprehensive consultation.</p>
            <p className="text-2xl font-bold text-blue-400">Call: 020 8946 0001</p>
        </div>
      </section>
    </>
  );
}
