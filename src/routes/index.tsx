import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.webp.asset.json";
import hero from "@/assets/hero-yard.png.asset.json";
import selo from "@/assets/selo.png.asset.json";
import c1 from "@/assets/06.webp.asset.json";
import c2 from "@/assets/007.webp.asset.json";
import c3 from "@/assets/07.webp.asset.json";
import c4 from "@/assets/008.webp.asset.json";
import c5 from "@/assets/08.webp.asset.json";
import c6 from "@/assets/009.webp.asset.json";
import c7 from "@/assets/010.webp.asset.json";
import c8 from "@/assets/011.webp.asset.json";
import c9 from "@/assets/012.webp.asset.json";
import { MapPin, Phone, MessageCircle, ShieldCheck, FileText, Truck, ArrowRight, Wrench } from "lucide-react";

const PHONE_DISPLAY = "(19) 99110-5636";
const WHATS = "https://wa.me/5519991105636?text=" + encodeURIComponent("Olá! Vim pelo site e gostaria de uma peça.");
const MAP_URL =
  "https://www.google.com/maps/place/Desmanche+Do+Bakana/@-22.9205207,-47.2514416,17z/data=!4m6!3m5!1s0x94c8ba56b6d8fbd5:0xeeab4d8ab863d781!8m2!3d-22.9205257!4d-47.2488667";
const EMBED = "https://maps.google.com/maps?q=Desmanche%20do%20Bakana%40-22.9205257,-47.2488667&z=16&output=embed";

const cars = [c1, c2, c3, c4, c5, c6, c7, c8, c9].map((c, i) => ({ img: c.url, n: i + 1 }));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bakana Auto Peças Usadas — Desmanche" },
      { name: "description", content: "Desmanche do Bakana: peças usadas originais, com nota fiscal e procedência. Peça pelo WhatsApp." },
      { property: "og:title", content: "Bakana Auto Peças Usadas — Desmanche" },
      { property: "og:description", content: "Peças usadas originais com nota fiscal e procedência. Peça pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Whats({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={WHATS} target="_blank" rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-whats px-6 py-3 font-semibold text-whats-foreground transition hover:brightness-110 ${className}`}>
      <MessageCircle className="h-5 w-5" /> {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-20 bg-panel/95 text-panel-foreground backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Bakana Auto Peças Usadas" className="h-12 w-16 rounded-lg object-cover" />
            <span className="font-display text-2xl tracking-wide">BAKANA <span className="text-brand">AUTO PEÇAS</span></span>
          </div>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#estoque" className="hover:text-brand">Estoque</a>
            <a href="#vantagens" className="hover:text-brand">Vantagens</a>
            <a href="#local" className="hover:text-brand">Localização</a>
          </nav>
          <a href={WHATS} target="_blank" rel="noreferrer" className="hidden items-center gap-2 text-sm font-semibold sm:flex"><Phone className="h-4 w-4 text-brand" />{PHONE_DISPLAY}</a>
        </div>
      </header>

      <section className="bg-panel text-panel-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand"><Wrench className="h-4 w-4" /> Desmanche credenciado</p>
            <h1 className="mt-4 font-display text-6xl leading-[0.95] md:text-7xl">
              A peça certa,<br />original e com <span className="text-brand">nota fiscal.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg opacity-80">
              Carros chegando toda semana para desmonte. Diga o modelo e a peça que você precisa: a gente separa e envia.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Whats>Pedir minha peça</Whats>
              <a href="#estoque" className="inline-flex items-center gap-2 font-semibold hover:text-brand">Ver estoque <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-10 flex gap-10">
              <div><p className="font-display text-4xl text-brand">+80</p><p className="text-sm opacity-70">veículos no pátio</p></div>
              <div><p className="font-display text-4xl text-brand">100%</p><p className="text-sm opacity-70">com procedência</p></div>
            </div>
          </div>
          <div className="relative">
            <img src={hero.url} alt="Pátio do Desmanche do Bakana com veículos aguardando desmonte" className="aspect-[4/3] w-full rounded-3xl object-cover ring-1 ring-white/10 md:rotate-1" />
            <img src={selo.url} alt="Desmanche credenciado ao Detran" className="absolute -bottom-6 -left-6 h-32 drop-shadow-xl" />
            <p className="absolute -top-3 left-6 rounded-full bg-brand px-4 py-1 text-xs font-semibold uppercase tracking-widest text-panel-foreground shadow-lg">Nosso pátio hoje</p>
          </div>
        </div>
      </section>

      <section id="estoque" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-5xl">Chegaram no pátio</h2>
          <p className="max-w-sm text-muted-foreground">Toque em um veículo para perguntar pelas peças dele no WhatsApp.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {cars.map((c) => (
            <a key={c.n} href={WHATS} target="_blank" rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-panel">
              <img src={c.img} alt={`Veículo para desmonte ${c.n}`} loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-panel to-transparent p-4 pt-12 text-panel-foreground">
                <span className="font-display text-2xl">Veículo {String(c.n).padStart(2, "0")}</span>
                <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold">Consultar peças</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="vantagens" className="bg-brand text-panel-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
          {[
            [ShieldCheck, "Procedência garantida", "Veículos adquiridos legalmente, com documentação."],
            [FileText, "Nota fiscal sempre", "Toda venda sai com nota fiscal eletrônica."],
            [Truck, "Enviamos para o Brasil", "Embalagem segura para peças de qualquer tamanho."],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Truck;
            return (
              <div key={t as string} className="flex gap-4">
                <I className="h-8 w-8 shrink-0" />
                <div><h3 className="font-display text-2xl">{t as string}</h3><p className="opacity-90">{d as string}</p></div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="local" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="font-display text-5xl">Venha nos visitar</h2>
          <p className="mt-4 text-muted-foreground">Prefere ver a peça de perto? Estamos de portas abertas.</p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-brand" /> Desmanche do Bakana</li>
            <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-brand" /> {PHONE_DISPLAY}</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Whats>Chamar no WhatsApp</Whats>
            <a href={MAP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 font-semibold">Como chegar</a>
          </div>
        </div>
        <iframe title="Mapa Desmanche do Bakana" src={EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          className="h-96 w-full rounded-3xl border-0 md:col-span-3" />
      </section>

      <footer className="bg-panel py-8 text-sm text-panel-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 opacity-80">
          <span className="font-display text-xl tracking-wide">BAKANA <span className="text-brand">AUTO PEÇAS USADAS</span></span>
          <span>© {new Date().getFullYear()} Desmanche do Bakana</span>
        </div>
      </footer>

      <a href={WHATS} target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-whats text-whats-foreground shadow-lg">
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
