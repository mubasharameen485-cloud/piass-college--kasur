import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "PIASS College of Nursing & Sciences Kasur | Admissions Open 2026",
  description:
    "Official website of PIASS College of Nursing & Sciences, Kasur. Approved by PNMC & Govt. of Punjab. Offering BS Nursing, Post RN, LHV, CMW, CNA, BSCS, BSIT, BBA & ADP programs.",
  keywords: [
    "PIASS College Kasur",
    "PIASS College of Nursing",
    "BS Nursing Admissions Kasur 2026",
    "Post RN Kasur",
    "LHV CMW CNA Diplomas Kasur",
    "PNMC Approved Nursing Colleges in Punjab",
    "BSCS Kasur University of Education",
    "Islamia University Bahawalpur affiliated colleges in Kasur"
  ],
  authors: [{ name: "PIASS College Kasur" }],
  // 🎯 1. METADATA MEIN ICON CONNECT HO GAYA:
  icons: {
    icon: "/favicon.jpeg?v=3",
    shortcut: "/favicon.jpeg?v=3",
    apple: "/favicon.jpeg?v=3",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 🎯 2. BROWSER KE LIYE DIRECT LINK (Kabhi fail nahi hoga) */}
        <link rel="icon" href="/favicon.jpeg?v=3" type="image/jpeg" />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-white selection:bg-[#0D7A68] selection:text-white">
        <TopBar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}