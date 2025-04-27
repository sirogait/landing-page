import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-tertiary py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/4ff4a94a-1bce-49fb-8bb8-cb4c190dc04a.png" 
              alt="Logo Dra. Ana Flávia" 
              className="h-12 md:h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#especialidades">Especialidades</NavLink>
            <NavLink href="#contato">Contato</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 pt-4 pb-8 space-y-4">
            <MobileNavLink href="#sobre" onClick={() => setIsOpen(false)}>
              Sobre
            </MobileNavLink>
            <MobileNavLink href="#especialidades" onClick={() => setIsOpen(false)}>
              Especialidades
            </MobileNavLink>
            <MobileNavLink href="#contato" onClick={() => setIsOpen(false)}>
              Contato
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ 
  href, 
  children 
}: { 
  href: string; 
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="hover:text-secondary transition-colors font-avenir font-medium text-primary"
    >
      {children}
    </a>
  );
};

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="block py-2 text-primary hover:text-secondary text-lg"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;
