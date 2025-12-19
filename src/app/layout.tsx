import { JSX } from "react";
import "./globals.css";

export const metadata = {
  title: "My Profile App",
  description: "Next.js TypeScript Profile Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
