import { useState } from "react";
import { Link } from "@remix-run/react";
import BoxImage from "./BoxImage";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/about" },
    { name: "Ujian", href: "/exams" },
    { name: "Regulasi", href: "/regulations" },
    { name: "Berita", href: "/news" },
    { name: "Kontak", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20 ">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <BoxImage
            src="/logo-kolegium.png"
            alt="Kolegium Optometris"
            width={60}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center space-x-8 gap-4 min-w-[10vw]">
          {navigation.map(item => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Button
            asChild
            className="bg-teal-600 hover:bg-teal-700 lg:text-red-50"
          >
            <Link to="/exam-registration">Daftar Ujian</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col space-y-4 mt-8">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-600 hover:text-teal-600 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t pt-4">
                <Button
                  asChild
                  className="bg-teal-600 hover:bg-teal-700 w-full"
                >
                  <Link to="/exam-registration">Daftar Ujian</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
