import "./globals.css";
import Navigation from "@/ui/navigation/Navigation";
import { nunito, montserrat, lato } from "@/utils/font_classes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`h-[200vh] ${montserrat.className}`}>
        <Navigation></Navigation>
        {children}
      </body>
    </html>
  );
}
