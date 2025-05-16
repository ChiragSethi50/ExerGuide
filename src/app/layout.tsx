import type { Metadata } from "next";
import StoreProvider from "@/store/store-provider";
import { Footer, Header } from "@/shared/ui/layout";
import "./globals.scss";
import ThemeProviderWrapper from "@/shared/theme/theme-provider";

export const metadata: Metadata = {
  title: "Exer Guide",
  description: "A Ai exercise guide app",
  icons: {
    icon: "/app-logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeProviderWrapper>
          <StoreProvider>
            <Header />
            {children}
            <Footer />
          </StoreProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
