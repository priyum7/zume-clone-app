import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { shadesOfPurple } from "@clerk/themes";
import "react-datepicker/dist/react-datepicker.css";
import "@stream-io/video-react-sdk/dist/css/styles.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZUME",
  description: "Replica of ZOOM, created using NextJS v14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      baseTheme: [shadesOfPurple],
      variables: {
        colorPrimary: "#0E78F9",
        colorText: "white",
        colorBackground: "#1C1F2E",
        colorInputBackground: "#252A41",
        colorInputText: "white"
      },
      layout: {
        logoImageUrl: "/logo.svg",
        logoPlacement: "inside"
      }
    }}>
      <html lang="en">
        <body className={inter.className}>
            {children}
        </body>
      </html>
    </ClerkProvider>  
  );
}
