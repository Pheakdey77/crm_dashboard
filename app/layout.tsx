import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { SideBar, Nav } from "@/components/layout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "white" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="h-screen flex">
            <SideBar />
            <div className="flex-1 ">
              <div className="sticky top-0 z-10 ">
                <Nav />
              </div>
              <div className="overflow-y-scroll	 w-full">{children}</div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
