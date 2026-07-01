import StoryblokInitializer from "@/components/StorybkokInitializer";

import { Fredoka, Quicksand } from 'next/font/google';
import "./globals.css";

import Header from "@/components/Header";
import { getNavigation } from "@/lib/getNavigation";
import Footer from "@/components/Footer";

const fredoka = Fredoka({ 
  subsets: ['latin'],
  variable: '--font-fredoka', 
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
});

export const metadata = {
  title: "ADDO",
  description: "Test with Storyblok",
};

export default async function RootLayout({ children }) {
  const menuItems = await getNavigation();

  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${quicksand.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Header menuItems={menuItems} />

        <main className="flex-1">
          <StoryblokInitializer>
          {children}
          </StoryblokInitializer>
        </main>

        <Footer />
      </body>
    </html>
  );
}