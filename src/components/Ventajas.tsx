import { Truck, ShieldCheck, Percent, Package, Clock, Headphones } from "lucide-react";

const ventajas = [
  {
    icon: Truck,
    titulo: "Envíos a todo el país",
    descripcion:
      "Logística propia y alianzas con transportes para llegar a las 23 provincias con tiempos competitivos.",
  },
  {
    icon: Percent,
    titulo: "Precios mayoristas",
    descripcion:
      "Escalas de descuento por volumen. Cuanto más comprás, mejor precio por unidad obtenés.",
  },
  {
    icon: Package,
    titulo: "Stock permanente",
    descripcion:
      "Más de 5.000 productos en depósito listos para despacho inmediato. Sin esperas innecesarias.",
  },
  {
    icon: ShieldCheck,
    titulo: "Calidad garantizada",
    descripcion:
      "Trabajamos solo con fabricantes certificados. Cada lote pasa por control de calidad antes del envío.",
  },
  {
    icon: Clock,
    titulo: "Despacho en 24-48hs",
    descripcion:
      "Pedidos confirmados antes de las 14hs se despachan el mismo día. Agilidad para tu negocio.",
  },
  {
    icon: Headphones,
    titulo: "Atención personalizada",
    descripcion:
      "Un ejecutivo de cuenta asignado para cada cliente. Asesoramiento en tendencias y productos nuevos.",
  },
];

export default function Ventajas() {
  return (
    <section id="ventajas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Por qué elegirnos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Ventajas de trabajar con nosotros
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            Nos enfocamos en hacer crecer tu negocio con productos de calidad,
            precios competitivos y un servicio que se adapta a tus necesidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ventajas.map((v) => (
            <div
              key={v.titulo}
              className="p-6 rounded-2xl border border-neutral-light hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {v.titulo}
              </h3>
              <p className="text-neutral text-sm">{v.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
