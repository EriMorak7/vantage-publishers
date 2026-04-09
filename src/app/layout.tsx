import type { Metadata } from "next";
import { Playfair_Display, Manrope, Bebas_Neue } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vantage Publishers | Books That Build Nigeria's Future",
  description:
    "Elevating educational standards through premium curriculum-aligned textbooks and literary works crafted for the next generation of leaders. Shop physical books, e-books, and institutional bulk orders.",
  keywords: [
    "Nigerian publishers",
    "educational textbooks",
    "WAEC textbooks",
    "school books Nigeria",
    "Vantage Publishers",
    "African literature",
    "e-books Nigeria",
  ],
  openGraph: {
    title: "Vantage Publishers | Books That Build Nigeria's Future",
    description:
      "Premium curriculum-aligned textbooks and literary works for Nigeria's next generation of leaders.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${manrope.variable} ${bebasNeue.variable} scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-surface text-on-surface font-body antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
