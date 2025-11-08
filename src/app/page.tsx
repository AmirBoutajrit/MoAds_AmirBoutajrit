"use client";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { useMoAds } from "./moads/context/MoAdsContext";

export default function MoAdsPage() {
  const { ads } = useMoAds();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Create Stunning Ads in{" "}
            <span className="text-blue-600">Minutes</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-8 max-w-3xl mx-auto">
            Streamline your ad creation process with AI-powered tools. Design, manage, and optimize your campaigns all in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/moads/create"
              className="bg-white text-black px-8 py-4 rounded-lg border-2 border-gray-200 hover:shadow-lg hover:scale-105 hover:border-blue-600 active:scale-95 transition-all font-semibold text-lg"
            >
              Get Started Free
            </Link>
            <button className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition font-semibold text-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* What is MoAds Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What is <span className="text-blue-600">MoAds</span>?
              </h2>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                MoAds is your all-in-one advertising platform that combines cutting-edge AI technology with intuitive design tools. We empower marketers and businesses to create, manage, and optimize advertising campaigns across multiple platforms with unprecedented ease.
              </p>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                From startups to enterprise brands, MoAds streamlines the entire ad creation workflow - from initial concept to final deployment - saving you time and maximizing your marketing ROI.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-blue-600" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">AI-Powered Design</h4>
                    <p className="text-muted text-sm">Leverage machine learning to generate high-converting ad creatives instantly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-blue-600" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Multi-Platform Support</h4>
                    <p className="text-muted text-sm">Deploy to Facebook, Instagram, Google Ads, and more with one click</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-blue-600" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real-Time Analytics</h4>
                    <p className="text-muted text-sm">Track performance and optimize campaigns with actionable insights</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Animated graphic */}
            <div className="relative h-[400px] md:h-[500px]">
              <style jsx>{`
                @keyframes pulse {
                  0%, 100% { opacity: 0.6; }
                  50% { opacity: 1; }
                }
                @keyframes orbit {
                  from { transform: rotate(0deg) translateX(140px) rotate(0deg); }
                  to { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
                }
                @keyframes wave {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-8px); }
                }
                .pulse-animate { animation: pulse 2s ease-in-out infinite; }
                .orbit-1 { animation: orbit 12s linear infinite; }
                .orbit-2 { animation: orbit 12s linear infinite; animation-delay: -3s; }
                .orbit-3 { animation: orbit 12s linear infinite; animation-delay: -6s; }
                .orbit-4 { animation: orbit 12s linear infinite; animation-delay: -9s; }
                .letter-1 { animation: wave 1.5s ease-in-out infinite; }
                .letter-2 { animation: wave 1.5s ease-in-out infinite; animation-delay: 0.1s; }
                .letter-3 { animation: wave 1.5s ease-in-out infinite; animation-delay: 0.2s; }
                .letter-4 { animation: wave 1.5s ease-in-out infinite; animation-delay: 0.3s; }
                .letter-5 { animation: wave 1.5s ease-in-out infinite; animation-delay: 0.4s; }
              `}</style>

              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 bg-blue-600/10 rounded-full pulse-animate"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-blue-600/20 rounded-full pulse-animate" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Static dotted circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
                    <circle cx="150" cy="150" r="140" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="10 10" opacity="0.5"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#4d00ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Orbiting elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="orbit-1">
                    <div className="w-14 h-14 bg-blue-600 rounded-lg shadow-lg flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="orbit-2">
                    <div className="w-14 h-14 bg-purple-600 rounded-full shadow-lg flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="orbit-3">
                    <div className="w-14 h-14 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="orbit-4">
                    <div className="w-14 h-14 bg-red-500 rounded-full shadow-lg flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <path d="M9 12l2 2 4-4"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Center element */}
                <div className="relative z-10 flex items-center justify-center">
                  <span className="font-bold text-4xl md:text-5xl text-blue-600 flex">
                    <span className="letter-1 inline-block">M</span>
                    <span className="letter-2 inline-block">o</span>
                    <span className="letter-3 inline-block">A</span>
                    <span className="letter-4 inline-block">d</span>
                    <span className="letter-5 inline-block">s</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MoAds Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-blue-600">MoAds</span>?
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              The most powerful ad creation platform built for modern marketers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="card group hover:shadow-xl transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 border-2 dark:border-white border-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Lightning Fast</h3>
              <p className="text-muted text-center text-sm">
                Create professional ads in minutes with our intuitive drag-and-drop interface
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card group hover:shadow-xl transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 border-2 dark:border-white border-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Multi-Platform</h3>
              <p className="text-muted text-center text-sm">
                Design once, deploy everywhere. Optimize for all major ad platforms automatically
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card group hover:shadow-xl transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 border-2 dark:border-white border-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Real-Time Analytics</h3>
              <p className="text-muted text-center text-sm">
                Track performance metrics and optimize campaigns with powerful analytics dashboards
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card group hover:shadow-xl transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 border-2 dark:border-white border-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Enterprise Security</h3>
              <p className="text-muted text-center text-sm">
                Bank-level encryption and compliance with industry standards to keep your data safe
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">10K+</div>
              <p className="text-muted">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50M+</div>
              <p className="text-muted">Ads Created</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">99.9%</div>
              <p className="text-muted">Uptime</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-muted">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Ads</h2>
            <p className="text-xl text-muted">
              Manage all your advertising campaigns in one place
            </p>
          </div>

          {ads.length === 0 ? (
            <div className="card text-center py-12">
              <div className="mb-6 flex justify-center">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="stroke-primary" strokeWidth="2">
                  <path d="M16 20L8 28V44L16 52H32L40 44V28L32 20H16Z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M40 24L48 28L56 24L48 36L56 40L48 44L56 56L44 48L40 56L36 44L24 56L32 44L24 40L32 36L24 28L36 24L40 12L44 24L56 16L48 28" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="24" cy="36" r="6" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-xl text-muted mb-6">
                No ads yet. Click <strong className="text-foreground">Create Ad</strong> to get started.
              </p>
              <Link
                href="/moads/create"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition font-semibold"
              >
                Create Your First Ad
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ads.map((ad) => (
                <Link
                  key={ad.id}
                  href={`/moads/${ad.id}`}
                  className="card hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <h3 className="text-xl font-bold mb-2">{ad.headline}</h3>
                  <p className="text-muted mb-4">{ad.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-semibold">{ad.platform}</span>
                    <span className="text-muted">{ad.cta}</span>
                  </div>
                  <p className="text-xs text-muted mt-3">
                    Created: {ad.createdAt}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
            Ready to Transform Your Ad Campaigns?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Join thousands of marketers who trust MoAds for their advertising needs.
          </p>
          <Link
            href="/moads/create"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg border-2 border-gray-200 hover:shadow-lg hover:scale-105 hover:border-blue-600 active:scale-95 transition-all font-semibold text-lg"
          >
            Start Creating Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold gradient-text mb-4">MoAds</div>
              <p className="text-muted">
                Create stunning ads that convert. Fast, easy, and powerful.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-muted">
                <li><Link href="#" className="hover:text-primary transition">Features</Link></li>
                <li><Link href="#" className="hover:text-primary transition">Pricing</Link></li>
                <li><Link href="#" className="hover:text-primary transition">Templates</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-muted">
                <li><Link href="#" className="hover:text-primary transition">About</Link></li>
                <li><Link href="#" className="hover:text-primary transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-primary transition">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-muted">
                <li><Link href="#" className="hover:text-primary transition">Help Center</Link></li>
                <li><Link href="#" className="hover:text-primary transition">Contact</Link></li>
                <li><Link href="#" className="hover:text-primary transition">Privacy</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-muted">
            <p>&copy; 2024 MoAds. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
