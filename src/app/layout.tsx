import "./globals.css";
import Navigation from "@/ui/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-[200vh]">
        <Navigation></Navigation>
        {children}
      </body>
    </html>
  );
}
