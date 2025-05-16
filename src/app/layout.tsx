
import type { Metadata } from "next";
import StoreProvider from "@/shared/providers/store-provider";
import { Footer, Header } from "@/shared/ui/layout";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Exer Guide",
  description: "A Ai exercise guide app",
  icons: {
    icon: "/app-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
