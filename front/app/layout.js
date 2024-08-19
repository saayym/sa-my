import { Inter } from "next/font/google";
import "./assets/css/globals.css";
import "./assets/css/tailwind.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "sa-my",
  description: "The portfolio of a passionate Junior Fullstack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
