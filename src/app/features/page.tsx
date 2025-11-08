"use client";
import Navbar from "../components/Navbar";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Powerful Features for <span className="text-blue-600">Modern</span> Marketers
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-8 max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize high-converting advertising campaigns
          </p>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core Features
            </h2>
            <p className="text-xl text-muted">
              Essential tools to supercharge your ad creation workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center group hover:shadow-xl transition-all">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 border-2 dark:border-white border-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-muted">
                Create professional ads in minutes, not hours. Our intuitive drag-and-drop interface speeds up your workflow by 10x.
              </p>
            </div>

            <div className="card text-center group hover:shadow-xl transition-all">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 border-2 dark:border-white border-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Beautiful Templates</h3>
              <p className="text-muted">
                Access 500+ professionally designed templates. Customize colors, fonts, images, and layouts to match your brand identity.
              </p>
            </div>

            <div className="card text-center group hover:shadow-xl transition-all">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 border-2 dark:border-white border-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Real-Time Analytics</h3>
              <p className="text-muted">
                Track performance metrics, conversion rates, and ROI with powerful dashboards. Make data-driven decisions instantly.
              </p>
            </div>

            <div className="card text-center group hover:shadow-xl transition-all">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 border-2 dark:border-white border-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Image Generation</h3>
              <p className="text-muted">
                Generate stunning ad visuals with our AI-powered image generator. Create custom graphics that capture attention.
              </p>
            </div>

            <div className="card text-center group hover:shadow-xl transition-all">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 border-2 dark:border-white border-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Multi-Platform Export</h3>
              <p className="text-muted">
                Export ads optimized for Facebook, Instagram, Google Ads, LinkedIn, and more. One design, all platforms.
              </p>
            </div>

            <div className="card text-center group hover:shadow-xl transition-all">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 border-2 dark:border-white border-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Team Collaboration</h3>
              <p className="text-muted">
                Invite team members, assign roles, and collaborate in real-time. Share feedback and approve campaigns together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-muted">
              Professional-grade tools for experienced marketers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 border-2 dark:border-white border-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">A/B Testing Suite</h3>
                  <p className="text-muted">
                    Run split tests on headlines, images, CTAs, and more. Automatically optimize campaigns based on performance data.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 border-2 dark:border-white border-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 1v6m0 6v6"></path>
                    <path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"></path>
                    <path d="M1 12h6m6 0h6"></path>
                    <path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Smart Targeting</h3>
                  <p className="text-muted">
                    AI-powered audience targeting recommendations based on your campaign goals and historical performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 border-2 dark:border-white border-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Bulk Operations</h3>
                  <p className="text-muted">
                    Create, edit, and publish hundreds of ad variations at once. Perfect for large-scale campaigns and agencies.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 border-2 dark:border-white border-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">API Access</h3>
                  <p className="text-muted">
                    Integrate MoAds into your existing workflow with our comprehensive REST API. Full documentation included.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 border-2 dark:border-white border-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Device Preview</h3>
                  <p className="text-muted">
                    See how your ads look on desktop, mobile, and tablet before publishing. Ensure perfect rendering everywhere.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 border-2 dark:border-white border-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Brand Kit Manager</h3>
                  <p className="text-muted">
                    Store your logos, colors, fonts, and brand guidelines. Maintain consistency across all campaigns effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Seamless <span className="text-blue-600">Integrations</span>
            </h2>
            <p className="text-xl text-muted">
              Connect with the tools you already use
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="card text-center hover:shadow-xl transition-all">
              <h4 className="font-bold mb-2">Facebook Ads</h4>
              <p className="text-sm text-muted">Direct publishing</p>
            </div>
            <div className="card text-center hover:shadow-xl transition-all">
              <h4 className="font-bold mb-2">Google Ads</h4>
              <p className="text-sm text-muted">Instant deployment</p>
            </div>
            <div className="card text-center hover:shadow-xl transition-all">
              <h4 className="font-bold mb-2">Instagram</h4>
              <p className="text-sm text-muted">Story & feed ads</p>
            </div>
            <div className="card text-center hover:shadow-xl transition-all">
              <h4 className="font-bold mb-2">LinkedIn Ads</h4>
              <p className="text-sm text-muted">B2B targeting</p>
            </div>
            <div className="card text-center hover:shadow-xl transition-all">
              <h4 className="font-bold mb-2">Shopify</h4>
              <p className="text-sm text-muted">Product sync</p>
            </div>
            <div className="card text-center hover:shadow-xl transition-all">
              <h4 className="font-bold mb-2">WordPress</h4>
              <p className="text-sm text-muted">Content integration</p>
            </div>
            <div className="card text-center hover:shadow-xl transition-all">
              <h4 className="font-bold mb-2">Zapier</h4>
              <p className="text-sm text-muted">1000+ apps</p>
            </div>
            <div className="card text-center hover:shadow-xl transition-all">
              <h4 className="font-bold mb-2">Slack</h4>
              <p className="text-sm text-muted">Team notifications</p>
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
