import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CryptoProvider } from "./context/CryptoContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Real-Time Trading Dashboard",
  description: "Technical Test for Front-End Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-50 bg-slate-950`}
      >
        <CryptoProvider>
          {children}
        </CryptoProvider>
      </body>
    </html>
  );
}
