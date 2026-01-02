import { cn } from "../src/utils/helpers/cn";
import "./globals.css";
import {
  GeologicaBold,
  GeologicaLight,
  GeologicaRegular,
  GeologicaSemiBold,
  GeologicaMedium,
  KomikazoomRegular,
} from "../src/utils/helpers/font";
import Navbar from "@/src/components/Element/Navbar";
import Footer from "@/src/components/Element/Footer";

export const metadata = {
  title: "latihan bang",
  description: "menuju website nesco 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          GeologicaBold.variable,
          GeologicaLight.variable,
          GeologicaRegular.variable,
          GeologicaSemiBold.variable,
          GeologicaMedium.variable,
          KomikazoomRegular.variable,
          "antialiased"
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
