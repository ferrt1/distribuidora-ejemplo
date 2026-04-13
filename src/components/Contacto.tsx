"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

const datos = [
  {
    icon: MapPin,
    titulo: "Dirección",
    texto: "Av. Industrial 1234, Parque Industrial, Buenos Aires",
  },
  {
    icon: Phone,
    titulo: "Teléfono",
    texto: "+54 11 0000-0000",
  },
  {
    icon: Mail,
    titulo: "Email",
    texto: "ventas@terramacetas.com",
  },
  {
    icon: Clock,
    titulo: "Horario",
    texto: "Lun a Vie: 8:00 - 17:00 | Sáb: 8:00 - 13:00",
  },
];

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Hablemos de tu próximo pedido
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            Completá el formulario y un ejecutivo de ventas se pondrá en
            contacto con vos en menos de 24 horas hábiles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Formulario */}
          <form className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Empresa / Negocio
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="Nombre de tu negocio"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="+54 11 ..."
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Tipo de negocio
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-neutral">
                <option value="">Seleccioná una opción</option>
                <option value="vivero">Vivero</option>
                <option value="ferreteria">Ferretería</option>
                <option value="garden">Garden center</option>
                <option value="decoracion">Decoración / Interiorismo</option>
                <option value="paisajismo">Paisajismo</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Mensaje
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                placeholder="Contanos qué productos te interesan, cantidades estimadas, etc."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3.5 rounded-xl font-medium hover:bg-primary-dark transition-colors"
            >
              Enviar consulta
            </button>
          </form>

          {/* Info + Mapa */}
          <div className="flex flex-col gap-6 h-full">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-6">
                {datos.map((d) => (
                  <div key={d.titulo} className="flex gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <d.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">
                        {d.titulo}
                      </h4>
                      <p className="text-sm text-neutral">{d.texto}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex-1 min-h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889523!2d-58.38375!3d-34.60373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf250a73ab%3A0x8aa1e38ae18cacf2!2sBuenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación TerraMacetas"
                className="w-full h-full min-h-[320px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
