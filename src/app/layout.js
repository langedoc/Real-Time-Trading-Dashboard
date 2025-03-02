import "./globals.css";
import { CryptoProvider } from "./context/CryptoContext";

export const metadata = {
  title: "Real-Time Trading Dashboard",
  description: "Technical Test for Front-End Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-(family-name:--font-outfit) antialiased text-slate-50 bg-slate-950"
      >
        <CryptoProvider>
          <div className="min-h-screen">
            {children}
          </div>
        </CryptoProvider>
      </body>
    </html>
  );
}
