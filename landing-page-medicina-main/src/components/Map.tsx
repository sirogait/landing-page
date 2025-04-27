
import React from "react";

const Map = () => {
  return (
    <section id="localizacao" className="py-16 bg-tertiary">
      <div className="container mx-auto px-4 md:px-6 mb-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="mb-4 inline-block">
            <div className="text-2xl text-secondary font-medium tracking-wide">
              Localização
            </div>
            <div className="h-px w-20 bg-secondary mt-2 mx-auto"></div>
          </div>
          
          {/* Removed the redundant h2 heading */}
        </div>
      </div>
      
      {/* Map container with overlaid address box */}
      <div className="relative w-full h-[500px]">
        {/* The map iframe */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.1106644221554!2d-43.91376479999999!3d-19.9197409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69987b8cf794f%3A0x104f1e02cdd29f24!2sAv.%20dos%20Andradas%2C%203323%20-%20Santa%20Efig%C3%AAnia%2C%20Belo%20Horizonte%20-%20MG%2C%2031010-560!5e0!3m2!1spt-BR!2sbr!4v1745759542895!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização do consultório"
          className="w-full h-full"
        />
        
        {/* The address box overlaid on the map */}
        <div className="absolute top-10 right-10 max-w-sm bg-white rounded-lg shadow-lg p-8 z-10">
          <h3 className="text-2xl font-miamo text-primary mb-4">Endereço</h3>
          <p className="text-primary/80 text-lg mb-6">
            Av. dos Andradas, 3323 - Santa Efigênia<br />
            Belo Horizonte/MG - 31010-560
          </p>
          
          <div className="mt-6">
            <a 
              href="https://www.google.com/maps/dir//Av.+dos+Andradas,+3323+-+Santa+Efig%C3%AAnia+Belo+Horizonte+-+MG+31010-560/@-19.9197409,-43.9137648,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0xa69987b8cf794f:0x104f1e02cdd29f24!2m2!1d-43.9137648!2d-19.9197409?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-secondary text-white px-6 py-3 rounded-full hover:bg-secondary/90 transition-colors"
            >
              Solicitar rota
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
