"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useMoAds } from "../context/MoAdsContext";
import Navbar from "../../components/Navbar";

export default function CreateAdPage() {
  const { addAd } = useMoAds();
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [platform, setPlatform] = useState("");
  const [cta, setCta] = useState("");
  const [error, setError] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

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

  const handleSubmit = () => {
    if (!headline || !description || !platform || !cta) {
      setError("All fields are required.");
      return;
    }

    const newAd = {
      id: Date.now().toString(),
      headline,
      description,
      platform,
      cta,
      createdAt: new Date().toLocaleString(),
    };

    addAd(newAd);

    // Export JSON file
    const jsonBlob = new Blob([JSON.stringify(newAd, null, 2)], {
      type: "application/json",
    });
    const jsonLink = document.createElement("a");
    jsonLink.href = URL.createObjectURL(jsonBlob);
    jsonLink.download = `moads_ad_${newAd.id}.json`;
    jsonLink.click();

    // Generate and export graphic
    const canvas = generateGraphic(newAd);
    if (canvas) {
      try {
        // Convert to data URL - more reliable for downloads
        const dataUrl = canvas.toDataURL('image/png', 1.0);

        // Create download link
        const imgLink = document.createElement("a");
        imgLink.href = dataUrl;
        imgLink.download = `moads_ad_${newAd.id}.png`;
        imgLink.style.display = 'none';
        document.body.appendChild(imgLink);

        // Trigger download
        imgLink.click();

        // Cleanup
        setTimeout(() => {
          document.body.removeChild(imgLink);
        }, 100);
      } catch (error) {
        console.error('Error generating graphic:', error);
      }
    }

    // Redirect to home page after a brief delay to allow downloads
    setTimeout(() => {
      router.push("/");
    }, 800);
  };

  const handlePreview = () => {
    if (!headline || !description || !platform || !cta) {
      setError("All fields are required to generate preview.");
      return;
    }

    const previewAd = {
      id: "preview",
      headline,
      description,
      platform,
      cta,
      createdAt: new Date().toLocaleString(),
    };

    const canvas = generateGraphic(previewAd);
    if (canvas) {
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          setPreviewUrl(url);
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-primary">Create New Ad</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Headline</label>
          <input
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full p-2 border rounded-xl"
            placeholder="E.g., Boost your brand visibility"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-xl"
            placeholder="Describe your ad purpose..."
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Platform</label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full p-2 border rounded-xl"
          >
            <option value="">Select platform</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Google Ads">Google Ads</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Call To Action</label>
          <input
            value={cta}
            onChange={(e) => setCta(e.target.value)}
            className="w-full p-2 border rounded-xl"
            placeholder="E.g., Learn More, Sign Up, Get Started"
          />
        </div>

          <div className="flex gap-3">
            <button
              onClick={handlePreview}
              className="bg-white text-primary border-2 border-primary px-4 py-2 rounded-xl mt-4 hover:bg-primary hover:text-white transition flex-1"
            >
              Preview Graphic
            </button>
            <button
              onClick={handleSubmit}
              className="bg-primary text-white px-4 py-2 rounded-xl mt-4 hover:bg-secondary transition flex-1"
            >
              Save & Export
            </button>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Graphic Preview</h2>
          {previewUrl ? (
            <div className="border-2 border-border rounded-xl overflow-hidden">
              <img
                src={previewUrl}
                alt="Ad Preview"
                className="w-full h-auto"
              />
            </div>
          ) : (
            <div className="border-2 border-dashed border-border rounded-xl p-12 text-center text-muted">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                className="mx-auto mb-4 stroke-current opacity-40"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <p className="text-sm">Fill in all fields and click "Preview Graphic"</p>
              <p className="text-sm mt-2">to see your ad design</p>
            </div>
          )}
        </div>
      </div>
    </main>
    </div>
  );
}
