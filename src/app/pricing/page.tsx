"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted">
              Choose the plan that works best for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {/* Starter Plan */}
            <div className="card text-center flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-muted mb-6">Perfect for getting started</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-muted">/month</span>
              </div>
              <ul className="text-left space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-primary mt-0.5" strokeWidth="2">
                    <path d="M4 10L8 14L16 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Up to 10 ads per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-primary mt-0.5" strokeWidth="2">
                    <path d="M4 10L8 14L16 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Basic templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-primary mt-0.5" strokeWidth="2">
                    <path d="M4 10L8 14L16 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Community support</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link
                  href="/moads/create"
                  className="block bg-white text-black border-2 border-gray-200 px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 hover:border-blue-600 active:scale-95 transition-all font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="card text-center border-2 border-primary relative flex flex-col">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-muted mb-6">For growing businesses</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-muted">/month</span>
              </div>
              <ul className="text-left space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-primary mt-0.5" strokeWidth="2">
                    <path d="M4 10L8 14L16 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Unlimited ads</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-primary mt-0.5" strokeWidth="2">
                    <path d="M4 10L8 14L16 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Premium templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-primary mt-0.5" strokeWidth="2">
                    <path d="M4 10L8 14L16 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-primary mt-0.5" strokeWidth="2">
                    <path d="M4 10L8 14L16 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Priority support</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link
                  href="/moads/create"
                  className="block bg-white text-black border-2 border-gray-200 px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 hover:border-blue-600 active:scale-95 transition-all font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="card text-center flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-muted mb-6">For large organizations</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$99</span>
                <span className="text-muted">/month</span>
              </div>
              <ul className="text-left space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-primary mt-0.5" strokeWidth="2">
                    <path d="M4 10L8 14L16 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-primary mt-0.5" strokeWidth="2">
                    <path d="M4 10L8 14L16 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Custom templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-primary mt-0.5" strokeWidth="2">
                    <path d="M4 10L8 14L16 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-primary mt-0.5" strokeWidth="2">
                    <path d="M4 10L8 14L16 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Dedicated support</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link
                  href="/moads/create"
                  className="block bg-white text-black border-2 border-gray-200 px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 hover:border-blue-600 active:scale-95 transition-all font-semibold"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border mt-20">
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
                <li><a href="/features" className="hover:text-primary transition">Features</a></li>
                <li><a href="/pricing" className="hover:text-primary transition">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition">Templates</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-muted">
                <li><a href="#" className="hover:text-primary transition">About</a></li>
                <li><a href="#" className="hover:text-primary transition">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-muted">
                <li><a href="#" className="hover:text-primary transition">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition">Privacy</a></li>
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
