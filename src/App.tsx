import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronDown, Mail, Instagram, Twitter, Youtube, Volume2, VolumeX } from 'lucide-react';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter text-brand-red">
          ZIAD | EDITOR 
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['My Arsenal', 'Featured Work', 'Services', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-zinc-600 hover:text-brand-red transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden sm:block text-sm font-bold px-5 py-2.5 bg-brand-red text-white rounded-full">
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
            Bringing your vision to life with <span className="text-brand-red">high-energy</span> cuts.
          </h1>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View My Showreel
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Collaborate
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-50 -z-10 opacity-50" />
    </section>
  );
};

const VideoItem: React.FC<{ src: string; index: number }> = ({ src, index }) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="aspect-[9/16] rounded-2xl overflow-hidden bg-zinc-100 shadow-2xl relative group"
    >
      <video
        src={src}
        className="w-full h-full object-cover"
        autoPlay
        muted={isMuted}
        loop
        playsInline
      />
      {/* Local Mute Toggle */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-brand-red"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </motion.div>
  );
};

const VideoGallery = () => {
  const videos = [
    "https://dl.dropboxusercontent.com/scl/fi/eelbkyhutwb9jba2pp9ee/3d-reel.mp4?rlkey=5moxuq3vlk2dg51wawbaw7e2k&st=bzdw2ggn&raw=1",
    "https://dl.dropboxusercontent.com/scl/fi/eelbkyhutwb9jba2pp9ee/3d-reel.mp4?rlkey=5moxuq3vlk2dg51wawbaw7e2k&st=bzdw2ggn&raw=1",
    "https://dl.dropboxusercontent.com/scl/fi/eelbkyhutwb9jba2pp9ee/3d-reel.mp4?rlkey=5moxuq3vlk2dg51wawbaw7e2k&st=bzdw2ggn&raw=1"
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((src, index) => (
            <VideoItem key={index} src={src} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Arsenal = () => {
  const items = [
    { title: "High-Retention Editing", desc: "Perfect pacing for TikTok, Shorts, and Reels to maximize watch time." },
    { title: "Motion Graphics", desc: "Custom animations built in After Effects and Illustrator to elevate your brand." },
    { title: "Cinematic Visuals", desc: "Professional color grading and sound design to give your footage a premium feel." },
    { title: "AI Video Generation", desc: "Utilizing the latest AI models to create mind-blowing b-roll and visual effects." }
  ];

  return (
    <section id="my-arsenal" className="py-32 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            I specialize in fast-paced edits, dynamic motion graphics, and visuals that demand attention.
          </h2>
          <p className="text-xl text-zinc-500">What I bring to the edit bay:</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FullWidthPreview = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-[2.5rem] overflow-hidden aspect-video bg-zinc-900 shadow-2xl relative group"
        >
          <video
            src="https://dl.dropboxusercontent.com/scl/fi/ezoafrzpvr0j8x3xa739m/project-2.mp4?rlkey=tyhqop357tuk8zfs5ycuqd549&st=202wtugq&raw=1"
            className="w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            loop
            playsInline
          />
          {/* Local Mute Toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-8 right-8 z-10 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-brand-red"
          >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: "Absolute wizard in Premiere Pro. He took our raw, messy footage and turned it into a high-energy promo that doubled our engagement on Instagram. The motion graphics were a massive bonus.",
      author: "Client Name",
      role: "Marketing Director"
    },
    {
      text: "The turnaround time was insane, and the edits were flawless. He totally understood the cinematic vibe we were going for with our documentary style footage. Highly recommend.",
      author: "Client Name",
      role: "Content Creator"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-bold mb-20 text-center">What my clients say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-50 p-12 rounded-[2rem] relative"
            >
              <p className="text-xl md:text-2xl italic text-zinc-700 mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <div className="font-bold text-lg">{review.author}</div>
                <div className="text-zinc-500">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    "Short-Form Content (Reels/Shorts)",
    "YouTube Vlogs & Docs",
    "Commercials & Promos"
  ];

  return (
    <section id="services" className="py-32 bg-brand-red text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">My Services</h2>
            <p className="text-xl text-white/70 leading-relaxed">
              Every edit includes basic color correction, sound mixing, and unlimited revisions until you are 100% happy with the final cut.
            </p>
          </div>
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl md:text-3xl font-medium border-b border-white/20 pb-6"
              >
                {service}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I send you my footage?",
      a: "You can upload your raw files to Google Drive, Dropbox, or WeTransfer and share the link with me. Make sure to include any branding assets like logos or specific fonts."
    },
    {
      q: "What is your turnaround time?",
      a: "For short-form content (under 1 minute), my turnaround time is typically 24-48 hours. Larger projects like YouTube videos or commercials take 3-5 days depending on complexity."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-zinc-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-zinc-50 transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-zinc-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-zinc-50 py-20 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <div className="text-2xl font-bold text-brand-red mb-4">ZIAD AL RASHID</div>
            <p className="text-zinc-500">© 2026 Video Editor Portfolio. All rights reserved.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6">
            <a href="mailto:youremail@gmail.com" className="text-xl font-medium hover:text-brand-red transition-colors underline underline-offset-8">
              ziadalrashid007@gmail.com
            </a>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <VideoGallery />
        <Arsenal />
        <FullWidthPreview />
        <Testimonials />
        <Services />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
