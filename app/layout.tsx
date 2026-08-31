import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

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

const DESCRIPTION =
  "A1 Swaara is the ultimate high-fidelity music streaming & social studio for Android. 320 kbps Ultra HQ audio, native stream downloader, Story Creator Studio, synchronized karaoke lyrics, and 12-language discovery. Free forever — no ads, no account.";

export const metadata: Metadata = {
  metadataBase: new URL("https://swaara.app"),
  title: {
    default: "A1 Swaara — Pure Sonic Experience & Social Studio",
    template: "%s · A1 Swaara",
  },
  description: DESCRIPTION,
  applicationName: "A1 Swaara",
  keywords: [
    "A1 Swaara",
    "Swaara",
    "A1Swaara",
    "Android music player",
    "HQ music streaming",
    "320kbps audio",
    "Story Creator Studio",
    "Synced Lyrics",
    "ExoPlayer Media3",
    "Jetpack Compose music player",
    "Material 3",
  ],
  authors: [{ name: "A1 Swaara" }],
  creator: "A1 Swaara",
  publisher: "A1 Swaara",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://swaara.app",
    siteName: "A1 Swaara",
    title: "A1 Swaara — Pure Sonic Experience & Social Studio",
    description: DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "A1 Swaara — High-Fidelity Music Streaming for Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A1 Swaara — Pure Sonic Experience & Social Studio",
    description: DESCRIPTION,
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
    },
  },
  category: "music",
};

export const viewport: Viewport = {
  themeColor: "#08080C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
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
