export default function CTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-2 border-white" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-2 border-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          ¿Listo para abastecer tu negocio?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Pedí tu lista de precios actualizada y empezá a trabajar con las
          mejores condiciones del mercado mayorista de macetas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="bg-white text-primary px-8 py-3.5 rounded-full font-medium hover:bg-neutral-light transition-colors"
          >
            Solicitar lista de precios
          </a>
          <a
            href="https://wa.me/5491100000000"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
