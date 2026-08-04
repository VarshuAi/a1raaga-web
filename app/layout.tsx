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
  "Raaga is a free music player for Android. HD streaming, gapless playback, synced lyrics and smart mixes — with Raaga DNA insights computed locally. No ads. No tracking. No account.";

export const metadata: Metadata = {
  metadataBase: new URL("https://raaga.app"),
  title: {
    default: "Raaga — Music that learns you",
    template: "%s · Raaga",
  },
  description: DESCRIPTION,
  applicationName: "Raaga",
  keywords: [
    "Raaga",
    "music player",
    "online music streaming",
    "android music player",
    "raaga music player",
    "a1raaga",
    "gapless playback",
    "synced lyrics",
    "320k HD streaming",
    "Flutter music player",
    "Material 3",
  ],
  authors: [{ name: "Raaga" }],
  creator: "Raaga",
  publisher: "Raaga",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raaga.app",
    siteName: "Raaga",
    title: "Raaga — Music that learns you",
    description: DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Raaga — online music player for Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raaga — Music that learns you",
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
  themeColor: "#000000",
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
