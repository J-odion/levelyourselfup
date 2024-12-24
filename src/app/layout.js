import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./component/Header";
import FooterSection from "./component/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

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
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3479358447222895"
          async
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <Script id="mcjs" strategy="afterInteractive">
          {`
            !function(c,h,i,m,p){
              m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)
            }(document,"script","https://chimpstatic.com/mcjs-connected/js/users/5ccd84da1698ec16db7fd21b5/fb2f9be663183b52d269afb07.js");
          `}
        </Script>
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
