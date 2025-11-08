"use client";
import { useParams, useRouter } from "next/navigation";
import { useMoAds } from "../context/MoAdsContext";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { ads } = useMoAds();
  const [adGraphic, setAdGraphic] = useState<string | null>(null);

  const ad = ads.find((a) => a.id === params.id);

  const generateGraphic = (adData: any) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    // Modern gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#1e3a8a'); // Deep blue
    gradient.addColorStop(0.5, '#3b82f6'); // Blue
    gradient.addColorStop(1, '#8b5cf6'); // Purple
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add modern geometric shapes
    ctx.globalAlpha = 0.15;
    ctx.fillStyle = '#ffffff';

    // Large circle top left
    ctx.beginPath();
    ctx.arc(-50, -50, 250, 0, Math.PI * 2);
    ctx.fill();

    // Large circle bottom right
    ctx.beginPath();
    ctx.arc(1250, 680, 300, 0, Math.PI * 2);
    ctx.fill();

    // Medium circles
    ctx.beginPath();
    ctx.arc(900, 100, 120, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 1.0;

    // Top bar with MoAds branding
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fillRect(0, 0, canvas.width, 120);

    // MoAds Logo with modern styling
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 72px -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif';
    ctx.fillText('MoAds', 60, 85);

    // Platform badge - rounded
    const badgeX = 1000;
    const badgeY = 40;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.beginPath();
    ctx.roundRect(badgeX, badgeY, 160, 40, 20);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = '600 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(adData.platform, badgeX + 80, badgeY + 26);
    ctx.textAlign = 'left';

    // Content area with card-like background
    const cardX = 60;
    const cardY = 160;
    const cardWidth = 1080;
    const cardHeight = 400;

    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardWidth, cardHeight, 24);
    ctx.fill();

    // Inner padding for content
    const contentX = cardX + 50;
    const contentY = cardY + 60;

    // Headline with better typography
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 56px -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 4;

    const headlineWords = adData.headline.split(' ');
    let line = '';
    let y = contentY;
    const maxWidth = cardWidth - 100;

    for (let i = 0; i < headlineWords.length; i++) {
      const testLine = line + headlineWords[i] + ' ';
      const metrics = ctx.measureText(testLine);

      if (metrics.width > maxWidth && i > 0) {
        ctx.fillText(line, contentX, y);
        line = headlineWords[i] + ' ';
        y += 70;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, contentX, y);

    // Reset shadow
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;

    // Description with better spacing
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.font = '28px -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif';
    const descWords = adData.description.split(' ');
    line = '';
    y += 90;

    for (let i = 0; i < descWords.length; i++) {
      const testLine = line + descWords[i] + ' ';
      const metrics = ctx.measureText(testLine);

      if (metrics.width > maxWidth && i > 0) {
        ctx.fillText(line, contentX, y);
        line = descWords[i] + ' ';
        y += 40;
        if (y > cardY + cardHeight - 100) break;
      } else {
        line = testLine;
      }
    }
    if (y <= cardY + cardHeight - 100) {
      ctx.fillText(line, contentX, y);
    }

    // Modern CTA Button with shadow
    const ctaX = contentX;
    const ctaY = cardY + cardHeight - 80;
    const ctaWidth = 280;
    const ctaHeight = 60;

    // Button shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.beginPath();
    ctx.roundRect(ctaX + 4, ctaY + 4, ctaWidth, ctaHeight, 30);
    ctx.fill();

    // Button background
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(ctaX, ctaY, ctaWidth, ctaHeight, 30);
    ctx.fill();

    // Button text
    ctx.fillStyle = '#2563eb';
    ctx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(adData.cta, ctaX + ctaWidth / 2, ctaY + 38);
    ctx.textAlign = 'left';

    // Footer with gradient overlay
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(0, canvas.height - 50, canvas.width, 50);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = '16px -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif';
    ctx.fillText(`Created with MoAds`, 60, canvas.height - 18);

    // Date on right side
    ctx.textAlign = 'right';
    ctx.fillText(adData.createdAt, canvas.width - 60, canvas.height - 18);
    ctx.textAlign = 'left';

    return canvas;
  };

  useEffect(() => {
    if (ad) {
      try {
        const canvas = generateGraphic(ad);
        if (canvas) {
          // Convert canvas to data URL instead of blob for better compatibility
          const dataUrl = canvas.toDataURL('image/png');
          setAdGraphic(dataUrl);
        } else {
          console.error('Canvas generation failed');
        }
      } catch (error) {
        console.error('Error generating graphic:', error);
      }
    }
  }, [ad]);

  if (!ad) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Ad Not Found</h1>
          <p className="text-muted mb-8">The ad you're looking for doesn't exist.</p>
          <Link
            href="/"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const downloadGraphic = () => {
    if (!ad) return;

    try {
      const canvas = generateGraphic(ad);
      if (canvas) {
        // Convert to data URL - more reliable for downloads
        const dataUrl = canvas.toDataURL('image/png', 1.0);

        // Create download link
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `moads_ad_${ad.id}.png`;
        link.style.display = 'none';
        document.body.appendChild(link);

        // Trigger download
        link.click();

        // Cleanup
        setTimeout(() => {
          document.body.removeChild(link);
        }, 100);
      }
    } catch (error) {
      console.error('Error downloading graphic:', error);
      alert('Failed to download graphic. Please try again.');
    }
  };

  const downloadJSON = () => {
    if (!ad) return;

    const jsonBlob = new Blob([JSON.stringify(ad, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(jsonBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `moads_ad_${ad.id}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-primary hover:text-secondary transition inline-flex items-center gap-2 mb-4"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold mb-2">{ad.headline}</h1>
          <p className="text-muted">Created on {ad.createdAt}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Graphic */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Ad Graphic</h2>
                <button
                  onClick={downloadGraphic}
                  className="bg-white text-primary border-2 border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition text-sm font-semibold"
                >
                  Download PNG
                </button>
              </div>
              {adGraphic ? (
                <div className="border-2 border-border rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
                  <img
                    src={adGraphic}
                    alt={ad.headline}
                    className="w-full h-auto"
                    onError={(e) => {
                      console.error('Image failed to load');
                    }}
                  />
                </div>
              ) : (
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
                  <div className="animate-pulse">
                    <div className="h-4 bg-border rounded w-3/4 mx-auto mb-4"></div>
                    <div className="h-4 bg-border rounded w-1/2 mx-auto"></div>
                  </div>
                  <p className="text-muted mt-4">Generating graphic...</p>
                </div>
              )}
            </div>

            {/* Ad Details */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Ad Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-1 text-sm">Headline</label>
                  <p className="text-muted">{ad.headline}</p>
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-sm">Description</label>
                  <p className="text-muted">{ad.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-1 text-sm">Platform</label>
                    <p className="text-muted">{ad.platform}</p>
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 text-sm">Call to Action</label>
                    <p className="text-muted">{ad.cta}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Insights */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="card">
              <h3 className="font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={downloadGraphic}
                  className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition text-sm font-semibold"
                >
                  Download Graphic
                </button>
                <button
                  onClick={downloadJSON}
                  className="w-full bg-white text-primary border-2 border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition text-sm font-semibold"
                >
                  Export JSON
                </button>
              </div>
            </div>

            {/* Insights */}
            <div className="card">
              <h3 className="font-bold mb-4">Campaign Insights</h3>
              <div className="space-y-4">
                <div className="border-b border-border pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted">Impressions</span>
                    <span className="font-bold text-blue-600">12,453</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="border-b border-border pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted">Clicks</span>
                    <span className="font-bold text-green-600">1,847</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>

                <div className="border-b border-border pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted">Conversions</span>
                    <span className="font-bold text-purple-600">243</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted">CTR</span>
                    <span className="font-bold">14.8%</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted">Conversion Rate</span>
                    <span className="font-bold">13.2%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance */}
            <div className="card">
              <h3 className="font-bold mb-4">Performance Score</h3>
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-32 h-32">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-border"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.85)}`}
                      className="text-blue-600"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">85</span>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-muted">
                Great performance! Your ad is outperforming 85% of similar campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>

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
