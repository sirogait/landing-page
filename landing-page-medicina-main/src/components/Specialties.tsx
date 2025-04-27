import React from "react";
import { Shield, Heart, Scale, Brain, Activity, Users } from "lucide-react";

const Specialties = () => {
  return (
    <section id="especialidades" className="py-24 bg-tertiary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-6 inline-block">
            <div className="text-xl text-secondary font-medium tracking-wide">
              Especialidades
            </div>
            <div className="h-px w-20 bg-secondary mt-2 mx-auto"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-miamo text-primary mb-6 leading-tight">
            Áreas de Atuação
          </h2>
          
          <p className="text-primary/80">
            Ofereço tratamentos especializados para diversas condições endocrinológicas, 
            sempre com foco na medicina personalizada e baseada em evidências.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SpecialtyCard 
            icon={<Shield className="w-10 h-10 text-primary" />}
            title="Tireoide"
            description="Diagnóstico e tratamento de hipotireoidismo, hipertireoidismo, nódulos e câncer de tireoide."
          />
          
          <SpecialtyCard 
            icon={<Scale className="w-10 h-10 text-primary" />}
            title="Emagrecimento"
            description="Abordagem personalizada para perda de peso saudável e duradoura, com foco nos aspectos metabólicos."
          />
          
          <SpecialtyCard 
            icon={<Activity className="w-10 h-10 text-primary" />}
            title="Diabetes"
            description="Controle e tratamento do diabetes tipo 1, tipo 2 e gestacional, com monitoramento contínuo."
          />
          
          <SpecialtyCard 
            icon={<Heart className="w-10 h-10 text-primary" />}
            title="Saúde da Mulher"
            description="Tratamento hormonal na adolescência, climatério, menopausa e SOP (Síndrome dos Ovários Policísticos)."
          />
          
          <SpecialtyCard 
            icon={<Brain className="w-10 h-10 text-primary" />}
            title="Saúde Adrenal"
            description="Diagnóstico e tratamento de distúrbios da glândula suprarrenal, como Síndrome de Cushing e Doença de Addison."
          />
          
          <SpecialtyCard 
            icon={<Users className="w-10 h-10 text-primary" />}
            title="Obesidade Infantil"
            description="Abordagem especializada e cuidadosa para crianças e adolescentes com excesso de peso."
          />
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/5531984409243?text=Olá,%20estou%20entrando%20em%20contato,%20pois%20tenho%20interesse%20nos%20seus%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  );
};

const SpecialtyCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 bg-tertiary inline-block p-3 rounded-full">
        {icon}
      </div>
      
      <h3 className="text-xl font-miamo text-primary mb-3">
        {title}
      </h3>
      
      <p className="text-primary/70">
        {description}
      </p>
    </div>
  );
};

export default Specialties;
