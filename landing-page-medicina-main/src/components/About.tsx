
import React from "react";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-6 inline-block">
              <div className="text-xl text-secondary font-medium tracking-wide">
                Sobre mim
              </div>
              <div className="h-px w-20 bg-secondary mt-2"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-miamo text-primary mb-6 leading-tight">
              Dra. Ana Flávia Camelo Motta
            </h2>
            
            <p className="text-primary/80 mb-6">
              Médica formada pela Faculdade de Ciências Médicas de Minas Gerais (FCMMG) em 2018.
              Especialista em Clínica Médica, com residência médica no Hospital Vila da Serra, 
              realizada entre os meses de março de 2020 e março de 2022.
            </p>
            
            <p className="text-primary/80 mb-6">
              Atuei como médica generalista no PSF e na Axial de Diamantina no ano de 2019. 
              Trabalhei como plantonista do Hospital Vila da Serra e da Oncobio em 2022. 
              Também atuei no PSF Floramar em Belo Horizonte em 2022.
            </p>
            
            <p className="text-primary/80 mb-6">
              Atuo com foco em Endocrinologia e Metabologia, especialmente no cuidado de pacientes com diabetes mellitus, obesidade, doenças da tireoide, distúrbios do metabolismo ósseo e alterações da glândula suprarrenal.
            </p>

            <p className="text-primary/80 mb-6">
              Atualmente, estou realizando residência médica em Endocrinologia na Santa Casa de Belo Horizonte, iniciada em 2024.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex flex-col items-center">
                <div className="font-miamo text-4xl text-primary">6+</div>
                <div className="text-secondary mt-2">Anos de experiência</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="font-miamo text-4xl text-primary">1k+</div>
                <div className="text-secondary mt-2">Pacientes atendidos</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-[3/4] bg-tertiary rounded-lg overflow-hidden relative z-10 max-w-sm mx-auto">
              <div className="w-full h-full bg-[#B89097]/20 absolute"></div>
              <img 
                src="/lovable-uploads/8ae6e9b8-9c04-410d-baaa-27eea82c1f8e.png" 
                alt="Dra. Ana Flávia Camelo Motta" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-primary/10 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-2/3 h-2/3 border-2 border-secondary/30 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
