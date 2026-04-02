import { Google_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eugenio Felix | Software, Design, and Photography",
  description: "Bridging the gap between aesthetic design and software engineering to build digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${googleSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="font-sans antialiased min-h-full flex flex-col">{children}</body>
    </html>
  );
}
