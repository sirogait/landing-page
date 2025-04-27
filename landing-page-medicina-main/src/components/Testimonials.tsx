
import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-6 inline-block">
            <div className="text-xl text-secondary font-medium tracking-wide">
              Depoimentos
            </div>
            <div className="h-px w-20 bg-secondary mt-2 mx-auto"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-miamo text-primary mb-6 leading-tight">
            O que dizem meus pacientes
          </h2>
          
          <p className="text-primary/80">
            Conheça as histórias e resultados de quem confiou em meu trabalho para 
            cuidar da sua saúde hormonal e qualidade de vida.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Marina Silva"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            testimonial="A Dra. Ana Flávia conseguiu identificar meu problema hormonal que vários outros médicos não tinham percebido. Após 3 meses de tratamento, minha vida mudou completamente."
            rating={5}
          />
          
          <TestimonialCard 
            name="Carlos Oliveira"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            testimonial="Consegui perder 18kg de forma saudável seguindo o tratamento da Dra. Ana Flávia. O diferencial foi o acompanhamento personalizado e o cuidado em cada detalhe."
            rating={5}
          />
          
          <TestimonialCard 
            name="Juliana Mendes"
            image="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            testimonial="Tratamento para SOP que realmente funciona! O que mais gosto na Dra. Ana Flávia é como ela explica tudo de forma clara e nos faz participar ativamente do tratamento."
            rating={5}
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ 
  name, 
  image, 
  testimonial, 
  rating 
}: { 
  name: string; 
  image: string; 
  testimonial: string; 
  rating: number; 
}) => {
  return (
    <div className="bg-tertiary/50 rounded-lg p-8 border border-secondary/10">
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <h4 className="font-medium text-primary">{name}</h4>
          <div className="flex mt-1">
            {Array.from({ length: rating }).map((_, index) => (
              <Star key={index} className="w-4 h-4 fill-secondary text-secondary" />
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-primary/80 italic">
        "{testimonial}"
      </p>
    </div>
  );
};

export default Testimonials;
