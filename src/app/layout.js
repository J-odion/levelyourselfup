import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./component/Header";
import FooterSection from "./component/Footer";
import { Analytics } from "@vercel/analytics/next";

const figtree = localFont({
  src: "./fonts/Figtree.ttf",
  variable: "--font-figtree",
  weight: "100 900",
});

export const metadata = {
  title: "NextLevelYourself",
  description: "Tailored Trip planning around life's specice moment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?
client=ca-pub-3479358447222895"
          crossorigin="anonymous"
        ></script>
      </head>
      <body
        className={`${figtree.variable}  antialiased w-full bg-black text-white overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <FooterSection />

        <Analytics />
      </body>
    </html>
  );
}
