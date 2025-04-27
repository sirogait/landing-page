
import React from "react";
import { Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contato" className="bg-tertiary pt-24 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/4ff4a94a-1bce-49fb-8bb8-cb4c190dc04a.png" 
                alt="Logo Dra. Ana Flávia" 
                className="h-16 md:h-20 w-auto"
              />
            </div>
            
            <p className="text-primary/70 mb-6">
              Cuidando da sua saúde hormonal com excelência e atendimento humanizado.
            </p>
            
            <div className="flex items-center space-x-4">
              <p className="text-primary/70">Me acompanhe no Instagram:</p>
              <a 
                href="https://www.instagram.com/dra.anaflaviacmotta" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-miamo text-xl text-primary mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <FooterLink href="#sobre">Sobre</FooterLink>
              <FooterLink href="#especialidades">Especialidades</FooterLink>
              <FooterLink href="#agendar">Agendar Consulta</FooterLink>
            </div>
          </div>
          
          <div>
            <h4 className="font-miamo text-xl text-primary mb-4">Especialidades</h4>
            <div className="space-y-2">
              <FooterLink href="#especialidades">Tireoide</FooterLink>
              <FooterLink href="#especialidades">Emagrecimento</FooterLink>
              <FooterLink href="#especialidades">Diabetes</FooterLink>
              <FooterLink href="#especialidades">Saúde da Mulher</FooterLink>
              <FooterLink href="#especialidades">Saúde Adrenal</FooterLink>
              <FooterLink href="#especialidades">Obesidade Infantil</FooterLink>
            </div>
          </div>
          
          <div>
            <h4 className="font-miamo text-xl text-primary mb-4">Contato</h4>
            <div className="space-y-3 text-primary/70">
              <p>Av. dos Andradas, 3323 - Santa Efigênia</p>
              <p>Belo Horizonte/MG - 31010-560</p>
              <p>draanaflaviamotta@gmail.com</p>
              <p>(31) 98440-9243</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Dra. Ana Flávia Motta. Todos os direitos reservados.
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-primary text-white p-3 rounded-full shadow-md hover:bg-primary/90 transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ 
  href, 
  children 
}: { 
  href: string; 
  children: React.ReactNode; 
}) => {
  return (
    <a href={href} className="block text-primary/70 hover:text-secondary transition-colors">
      {children}
    </a>
  );
};

export default Footer;
