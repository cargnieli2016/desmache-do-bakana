import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.webp";
import hero from "@/assets/011.webp";
import c1 from "@/assets/002.webp";
import c2 from "@/assets/003.webp";
import c3 from "@/assets/005.webp";
import c4 from "@/assets/007.webp";
import c5 from "@/assets/008.webp";
import c6 from "@/assets/009.webp";
import c7 from "@/assets/010.webp";
import c8 from "@/assets/011.webp";
import c9 from "@/assets/012.webp";
import {
  MapPin,
  Phone,
  MessageCircle,
  ShieldCheck,
  FileText,
  Truck,
  ArrowRight,
} from "lucide-react";

const PHONE_DISPLAY = "(19) 99110-5636";
const WHATS =
  "https://wa.me/5519991105636?text=" +
  encodeURIComponent("Olá! Vim pelo site e gostaria de uma peça.");
const MAP_URL = "https://www.google.com/maps/dir/?api=1&destination=-22.9205257%2C-47.2488667";
const EMBED = "https://maps.google.com/maps?ll=-22.9205257%2C-47.2488667&z=16&output=embed";

const cars = [c1, c2, c3, c4, c5, c6, c7, c8, c9];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bakana Auto Peças Usadas — Desmanche" },
      {
        name: "description",
        content:
          "Desmanche do Bakana: peças usadas originais, com nota fiscal e procedência. Peça pelo WhatsApp.",
      },
      { property: "og:title", content: "Bakana Auto Peças Usadas — Desmanche" },
      {
        property: "og:description",
        content: "Peças usadas originais com nota fiscal e procedência. Peça pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Whats({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={WHATS}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-whats px-6 py-3 font-semibold text-whats-foreground transition hover:brightness-110 ${className}`}
    >
      <MessageCircle className="h-5 w-5" /> {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="relative z-20">
        <div className="bg-[#edf0ed] text-[#191919]">
          <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between gap-4 px-6">
            <a
              href="#"
              className="flex shrink-0 items-center gap-3"
              aria-label="Desmanche do Bakana — início"
            >
              <img src={logo} alt="" className="h-14 w-[92px] rounded-md object-cover" />
              <span className="hidden text-xs font-bold uppercase leading-tight tracking-[0.12em] sm:block">
                Auto peças
                <br />
                usadas
              </span>
            </a>
            <div className="hidden items-center gap-2 sm:flex">
              <ShieldCheck className="h-9 w-9 text-[#184875]" />
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-wide">
                  Desmanche credenciado
                </p>
                <p className="text-xs text-[#555]">Procedência e nota fiscal</p>
              </div>
            </div>
            <a
              href={WHATS}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-bold sm:text-sm"
            >
              <Phone className="h-4 w-4 text-[#188d44]" />
              <span className="hidden sm:inline">Fale com um vendedor</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
        <nav className="bg-black text-white">
          <div className="mx-auto flex h-12 max-w-6xl items-center justify-center gap-8 px-6 text-xs font-semibold uppercase tracking-wide sm:justify-start sm:text-sm">
            <a href="#estoque" className="transition hover:text-[#ff3939]">
              Sucatas disponíveis
            </a>
            <a href="#vantagens" className="transition hover:text-[#ff3939]">
              Nossas vantagens
            </a>
            <a href="#local" className="transition hover:text-[#ff3939]">
              Localização
            </a>
          </div>
        </nav>
      </header>

      <section className="relative isolate overflow-hidden bg-panel text-panel-foreground">
        <img
          src={hero}
          alt="Veículos no pátio do Desmanche do Bakana"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="mx-auto flex min-h-[390px] max-w-6xl items-center px-6 py-14 md:min-h-[430px]">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/60 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide">
                Estoque atualizado
              </span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Peças usadas com garantia e procedência:
              <span className="block text-[#ff3939]">a peça que você precisa, sem demora.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-white/85 md:text-base">
              Peças originais com nota fiscal. Consulte nosso estoque e fale diretamente com um
              vendedor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WHATS}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#20e525] px-6 py-3 text-sm font-bold text-black transition hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" /> Chamar vendedor
              </a>
              <a
                href="#estoque"
                className="inline-flex items-center gap-2 rounded-md border border-white/80 bg-black/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Sucatas disponíveis <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="estoque" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-5xl">Chegaram no pátio</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {cars.map((img) => (
            <a
              key={img}
              href={WHATS}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-panel"
            >
              <img
                src={img}
                alt="Carro disponível para peças"
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-panel to-transparent p-4 pt-12 text-panel-foreground">
                <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold">
                  Consultar peças
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="vantagens" className="bg-brand text-panel-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
          {[
            [
              ShieldCheck,
              "Procedência garantida",
              "Veículos adquiridos legalmente, com documentação.",
            ],
            [FileText, "Nota fiscal sempre", "Toda venda sai com nota fiscal eletrônica."],
            [Truck, "Enviamos para o Brasil", "Embalagem segura para peças de qualquer tamanho."],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Truck;
            return (
              <div key={t as string} className="flex gap-4">
                <I className="h-8 w-8 shrink-0" />
                <div>
                  <h3 className="font-display text-2xl">{t as string}</h3>
                  <p className="opacity-90">{d as string}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="local" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="font-display text-5xl">Venha nos visitar</h2>
          <p className="mt-4 text-muted-foreground">
            Prefere ver a peça de perto? Estamos de portas abertas.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-brand" /> Desmanche do Bakana
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-brand" /> {PHONE_DISPLAY}
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Whats>Chamar no WhatsApp</Whats>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 font-semibold"
            >
              Como chegar
            </a>
          </div>
        </div>
        <iframe
          title="Mapa Desmanche do Bakana"
          src={EMBED}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-96 w-full rounded-3xl border-0 md:col-span-3"
        />
      </section>

      <footer className="bg-panel py-8 text-sm text-panel-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 opacity-80">
          <span className="font-display text-xl tracking-wide">
            BAKANA <span className="text-brand">AUTO PEÇAS USADAS</span>
          </span>
          <span>© {new Date().getFullYear()} Desmanche do Bakana</span>
        </div>
      </footer>

      <a
        href={WHATS}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-whats text-whats-foreground shadow-lg"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
