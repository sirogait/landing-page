
import React from "react";
import { useIsMobile } from "../hooks/use-mobile";
import { AspectRatio } from "./ui/aspect-ratio";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative bg-tertiary pt-32 pb-24 md:min-h-screen flex items-center">
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden hidden md:block">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/public/lovable-uploads/807ee821-faa2-4d44-b238-1742e5c4d91a.png')",
            opacity: 0.1
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:gap-0">
          <div className="max-w-2xl md:flex-1 md:pt-4">
            <div className="mb-6 inline-block">
              <div className="text-xl text-secondary font-medium tracking-wide animate-fade-in" style={{ animationDelay: "0.3s" }}>
                ATENDIMENTO PARTICULAR
              </div>
              <div className="h-px w-40 bg-secondary mt-2"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-miamo text-primary mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.5s" }}>
              Dra. Ana Flávia Motta
            </h1>
            
            <p className="text-lg text-primary/80 mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.7s" }}>
              Especialista em Clínica Médica em Belo Horizonte – MG
              <br />
              CRM 78.329 – RQE 5516
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <a 
                href="https://wa.me/5531984409243?text=Olá,%20estou%20entrando%20em%20contato,%20pois%20tenho%20interesse%20nos%20seus%20serviços."
                target="_blank"
                rel="noopener noreferrer" 
                className="btn-primary text-center"
              >
                Agendar Consulta
              </a>
              <a href="#especialidades" className="btn-secondary text-center">
                Conhecer Especialidades
              </a>
            </div>
          </div>

          {!isMobile && (
            <div className="hidden md:block ml-2" style={{ width: "518.22px" }}> 
              <div className="bg-tertiary rounded-lg overflow-hidden relative z-10">
                <AspectRatio ratio={4/3} className="w-full">
                  <img 
                    src="/lovable-uploads/dafcebfe-7131-4393-83db-a4b8e30bbeae.png" 
                    alt="Dra. Ana Flávia Motta" 
                    className="w-full h-full object-cover object-center"
                    style={{ height: "388.66px", width: "518.22px" }}
                  />
                </AspectRatio>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* WhatsApp floating button */}
      <a 
        href="https://wa.me/5531984409243?text=Olá,%20estou%20entrando%20em%20contato,%20pois%20tenho%20interesse%20nos%20seus%20serviços." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
        aria-label="Contato via WhatsApp"
      >
        <WhatsAppIcon size={32} />
      </a>
      
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#6D3E3E" 
            fillOpacity="0.1" 
            d="M0,288L48,272C96,256,192,224,288,224C384,224,480,256,576,261.3C672,267,768,245,864,224C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
