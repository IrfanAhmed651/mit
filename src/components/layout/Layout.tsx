import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="top" className="flex flex-col min-h-screen">
      <Header />
      <main id="main" tabIndex={-1} className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
