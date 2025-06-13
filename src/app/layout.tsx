import Head from "next/head";
import "./globals.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" href="/hero.webp" as="image" />
      </Head>
      <body>{children}</body>
    </html>
  );
}