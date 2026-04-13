import { ArrowRight } from "lucide-react";

const categorias = [
  {
    nombre: "Cerámica artesanal",
    descripcion:
      "Macetas hechas a mano con diseños únicos. Ideales para decoración de interiores y exteriores premium.",
    imagen:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80",
    cantidad: "120+ modelos",
  },
  {
    nombre: "Plástico inyectado",
    descripcion:
      "Resistentes, livianas y económicas. Gran variedad de tamaños y colores para todo tipo de uso.",
    imagen:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    cantidad: "200+ modelos",
  },
  {
    nombre: "Fibrocemento",
    descripcion:
      "Durabilidad superior para exteriores y paisajismo. Acabados que imitan piedra, madera y concreto.",
    imagen:
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&q=80",
    cantidad: "80+ modelos",
  },
  {
    nombre: "Macetas colgantes",
    descripcion:
      "Tendencia en decoración vertical. Incluye macramé, metálicas y de plástico con soporte integrado.",
    imagen:
      "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=600&q=80",
    cantidad: "60+ modelos",
  },
  {
    nombre: "Línea jardín",
    descripcion:
      "Jardineras, macetones y contenedores grandes para paisajismo profesional y áreas verdes.",
    imagen:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80",
    cantidad: "90+ modelos",
  },
  {
    nombre: "Accesorios",
    descripcion:
      "Platos, soportes, ruedas y tutores. Todo lo que necesitás para complementar la venta de macetas.",
    imagen:
      "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=600&q=80",
    cantidad: "150+ productos",
  },
];

export default function Catalogo() {
  return (
    <section id="catalogo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Nuestros productos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Catálogo por categoría
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            Trabajamos con los mejores fabricantes para ofrecerte variedad,
            calidad y precios competitivos en todas las líneas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((cat) => (
            <div
              key={cat.nombre}
              className="group bg-neutral-light rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={cat.imagen}
                  alt={cat.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {cat.nombre}
                  </h3>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {cat.cantidad}
                  </span>
                </div>
                <p className="text-neutral text-sm mb-4">{cat.descripcion}</p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-light transition-colors"
                >
                  Pedir lista de precios
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
