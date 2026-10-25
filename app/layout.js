import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Alok Kumar | AI Engineer Portfolio",
  description:
    "Portfolio of Alok Kumar, B.Tech CSE student building AI-powered applications with Python, Node.js and LLM APIs (OpenAI, Google Gemini).",
  keywords: ["Alok Kumar", "AI Engineer", "Portfolio", "Python", "LLM", "Next.js"],
  authors: [{ name: "Alok Kumar" }],
  openGraph: {
    title: "Alok Kumar | AI Engineer Portfolio",
    description: "AI-powered apps, backend development and DSA.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8`}
      >
        {children}
      </body>
    </html>
  );
}
