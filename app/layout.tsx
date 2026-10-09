import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import {
  APK_URL,
  BRAND_NAME,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});
const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${BRAND_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: BRAND_NAME,
  keywords: [
    "A1 Swaara",
    "Swaara",
    "A1Swaara",
    "Swaara Android app",
    "Android music player",
    "music story creator",
    "Story Creator Studio",
    "320kbps audio",
    "HQ music streaming",
    "Synced Lyrics",
    "karaoke lyrics",
    "ExoPlayer Media3",
    "Jetpack Compose music player",
    "Material 3",
  ],
  authors: [{ name: BRAND_NAME, url: SITE_URL }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${BRAND_NAME} – Android Music Player & Story Creator`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "music",
  verification: {
    google: "c2f5d1553c838bdf",
  },
};

export const viewport: Viewport = {
  themeColor: "#08080C",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BRAND_NAME,
      description: SITE_TITLE,
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: BRAND_NAME,
      applicationCategory: "MultimediaApplication",
      applicationSubCategory: "MusicApplication",
      operatingSystem: "Android 8.0 and up",
      url: SITE_URL,
      downloadUrl: APK_URL,
      softwareVersion: "1.0.0",
      fileSize: "35.9MB",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description: SITE_DESCRIPTION,
      screenshot: [
        `${SITE_URL}/screens/player.png`,
        `${SITE_URL}/screens/home.png`,
        `${SITE_URL}/screens/lyrics.png`,
        `${SITE_URL}/screens/search.png`,
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${grotesk.variable} ${jbmono.variable} bg-background font-sans text-foreground antialiased overflow-x-clip`}
      >
        {children}
      </body>
    </html>
  );
}
