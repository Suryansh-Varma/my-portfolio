import type { Metadata } from "next";
import { Geist, Geist_Mono, Pirata_One, Cinzel } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pirataOne = Pirata_One({
  weight: "400",
  variable: "--font-pirata-one",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/Suryansh-Varma"),
  title: "Suryansh D Varma | Portfolio",
  description: "CS & Business Systems cadet sailing the seas of full-stack development and product strategy.",
  openGraph: {
    title: "Suryansh D Varma | Portfolio",
    description: "CS & Business Systems cadet sailing the seas of full-stack development and product strategy.",
    url: "https://github.com/Suryansh-Varma",
    siteName: "Suryansh D Varma Portfolio",
    images: [
      {
        url: "/devilfruits/ship.png",
        width: 800,
        height: 800,
        alt: "Suryansh D Varma Pirate Ship",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suryansh D Varma | Portfolio",
    description: "CS & Business Systems cadet sailing the seas of full-stack development and product strategy.",
    images: ["/devilfruits/ship.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth yami">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pirataOne.variable} ${cinzel.variable} antialiased bg-background text-foreground transition-colors duration-300 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
