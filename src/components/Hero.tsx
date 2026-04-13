export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-16 overflow-hidden bg-neutral-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-16">
          <div>
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Distribuidora mayorista
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Macetas de calidad para{" "}
              <span className="text-primary">todo tipo de proyecto</span>
            </h1>
            <p className="text-lg text-neutral mb-8 max-w-xl">
              Somos distribuidores mayoristas de macetas de cerámica, plástico,
              fibrocemento y más. Abastecemos viveros, ferreterías, decoradores y
              paisajistas en todo el país.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#catalogo"
                className="bg-primary text-white px-8 py-3.5 rounded-full font-medium text-center hover:bg-primary-dark transition-colors"
              >
                Ver catálogo
              </a>
              <a
                href="#contacto"
                className="border-2 border-primary text-primary px-8 py-3.5 rounded-full font-medium text-center hover:bg-primary hover:text-white transition-colors"
              >
                Contactar ventas
              </a>
            </div>

            <div className="flex gap-8 mt-10 pt-8 border-t border-neutral/20">
              <div>
                <p className="text-2xl font-bold text-foreground">800+</p>
                <p className="text-sm text-neutral">Clientes activos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">5.000+</p>
                <p className="text-sm text-neutral">Productos en stock</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">15 años</p>
                <p className="text-sm text-neutral">En el mercado</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&q=80"
                alt="Macetas de cerámica y cemento"
                className="w-full h-[540px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-white p-5 rounded-2xl shadow-lg">
              <p className="text-2xl font-bold">23</p>
              <p className="text-sm opacity-90">Provincias alcanzadas</p>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute bottom-20 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
