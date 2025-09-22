import Navbar from "@/core/components/Navbar";
import "./globals.css";
import { ReactQueryProvider } from "@/core/providers/ReactQueryProvider";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Online Shop",
  description:
    "Online Shop is a web application that allows you to buy products from the internet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ReactQueryProvider>
          <Navbar />

          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
