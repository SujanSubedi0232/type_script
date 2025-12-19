import "./globals.css";

export const metadata = {
  title: "My Next App",
  description: "Basic Next.js with TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
