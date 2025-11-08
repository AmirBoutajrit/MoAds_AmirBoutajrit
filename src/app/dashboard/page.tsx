"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useMoAds } from "../moads/context/MoAdsContext";

export default function DashboardPage() {
  const { ads } = useMoAds();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Dashboard Section */}
      <section className="py-20">
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
