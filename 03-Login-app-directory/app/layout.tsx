import Banner from "@/components/banner";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Passage + Next.js Example With /app directory",
  description:
    "This is an example of how you can integrate passage with the Next.Js /app directory to Register, Login and also get Authentication Status and User Information.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
