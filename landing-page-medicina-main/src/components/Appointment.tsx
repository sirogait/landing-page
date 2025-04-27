import React from "react";
import { Calendar } from "lucide-react";
import { Button } from "./ui/button";

const Appointment = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      "https://wa.me/5531984409243?text=Olá,%20estou%20entrando%20em%20contato,%20pois%20tenho%20interesse%20nos%20seus%20serviços.",
      "_blank"
    );
  };

  return (
    <section id="agendar" className="py-12 bg-tertiary text-primary relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex justify-center">
          <div className="max-w-md w-full">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-miamo text-primary mb-6 text-center">
                Agende sua Consulta
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary/70 mb-1 font-avenir">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border-2 border-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-avenir"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary/70 mb-1 font-avenir">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border-2 border-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-avenir"
                    placeholder="Seu email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary/70 mb-1 font-avenir">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border-2 border-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-avenir"
                    placeholder="(31) 98440-9243"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-primary/70 mb-1 font-avenir">
                    Especialidade
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border-2 border-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-avenir appearance-none bg-white"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236D3E3E' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em" }}
                  >
                    <option value="">Selecione uma especialidade</option>
                    <option value="thyroid">Tireoide</option>
                    <option value="weight">Emagrecimento</option>
                    <option value="diabetes">Diabetes</option>
                    <option value="woman">Saúde da Mulher</option>
                    <option value="adrenal">Saúde Adrenal</option>
                    <option value="children">Obesidade Infantil</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary/70 mb-1 font-avenir">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-avenir"
                    placeholder="Descreva brevemente seu caso"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-avenir font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center text-base h-auto"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Consulta
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-primary/10"></div>
    </section>
  );
};

export default Appointment;
