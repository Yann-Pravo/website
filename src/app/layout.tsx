import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yann Pravossoudovitch",
  description: "Yann's resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-slate-50 lg:m-10"
      >
        {children}
      </body>
    </html>
  );
}
