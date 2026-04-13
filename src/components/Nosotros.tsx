import { Users, TrendingUp, MapPin } from "lucide-react";

const stats = [
  { icon: Users, valor: "800+", label: "Clientes activos" },
  { icon: TrendingUp, valor: "15", label: "Años en el mercado" },
  { icon: MapPin, valor: "23", label: "Provincias alcanzadas" },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Quiénes somos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              Tu socio mayorista en macetas
            </h2>
            <p className="text-neutral mb-4">
              Desde hace más de 15 años nos dedicamos a la distribución
              mayorista de macetas y accesorios para el sector viveros,
              ferreterías, garden centers y decoradores. Trabajamos con los
              principales fabricantes nacionales e importados.
            </p>
            <p className="text-neutral mb-8">
              Nuestro depósito central nos permite mantener stock permanente de
              más de 5.000 productos listos para despachar, con logística propia
              y envíos a todo el país. Ofrecemos condiciones comerciales
              flexibles para que tu negocio crezca con nosotros.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">
                    {stat.valor}
                  </p>
                  <p className="text-xs text-neutral">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                alt="Depósito de macetas"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-lg hidden lg:block">
              <p className="text-3xl font-bold">5.000+</p>
              <p className="text-sm opacity-90">productos en stock</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
