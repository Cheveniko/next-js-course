import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}