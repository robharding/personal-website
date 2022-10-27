import Link from "next/link";
import Navbar from "../components/Navbar";

import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Rob Harding</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="h-screen items-center mx-4 md:mx-auto md:flex md:w-4/5 md:flex-col lg:w-2/5">
          <div className="pt-10"></div>
          <div className="px-2 md:px-5">
            <Navbar />
          </div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
