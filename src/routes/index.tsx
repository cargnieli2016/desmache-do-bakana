import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.webp.asset.json";
import hero from "@/assets/hero.png.asset.json";
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
import { MapPin, Phone, MessageCircle, ShieldCheck, FileText, Truck, ChevronDown } from "lucide-react";

const PHONE_DISPLAY = "(19) 99110-5636";
const WHATS = "https://wa.me/5519991105636?text=" + encodeURIComponent("Olá! Vim pelo site e gostaria de uma peça.");
const MAP_URL =
  "https://www.google.com/maps/place/Desmanche+Do+Bakana/@-22.9205207,-47.2514416,17z/data=!4m6!3m5!1s0x94c8ba56b6d8fbd5:0xeeab4d8ab863d781!8m2!3d-22.9205257!4d-47.2488667";
const EMBED = "https://maps.google.com/maps?q=Desmanche%20do%20Bakana%40-22.9205257,-47.2488667&z=16&output=embed";

const cars = [c1, c2, c3, c4, c5, c6, c7, c8, c9].map((c, i) => ({ img: c.url, n: i + 1 }));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Desmanche do Bakana — Peças usadas com garantia" },
      { name: "description", content: "Auto peças usadas com garantia e procedência. Sucatas para desmonte e envio imediato. Fale no WhatsApp." },
      { property: "og:title", content: "Desmanche do Bakana — Peças usadas com garantia" },
      { property: "og:description", content: "Sucatas para desmonte, peças originais com procedência e envio imediato." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function WhatsButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={WHATS} target="_blank" rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-sm bg-whats px-6 py-2.5 text-sm font-bold text-whats-foreground transition hover:brightness-110 ${className}`}>
      {children} <MessageCircle className="h-4 w-4" />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <div className="bg-card text-xs text-muted-foreground">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-6 px-6 py-2">
          <a href={MAP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-1"><MapPin className="h-3 w-3 text-brand" /> Desmanche do Bakana — ver no mapa</a>
          <a href={WHATS} target="_blank" rel="noreferrer" className="flex items-center gap-1"><Phone className="h-3 w-3 text-brand" /> {PHONE_DISPLAY}</a>
        </div>
      </div>

      <header className="relative bg-panel">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <img src={logo.url} alt="Bakana Auto Peças Usadas" className="h-20 rounded-sm object-cover" />
          <img src={selo.url} alt="Desmanche credenciado ao Detran" className="absolute left-1/2 top-0 h-32 -translate-x-1/2 md:h-40 z-10" />
        </div>
      </header>

      <section className="relative overflow-hidden">
        <img src={hero.url} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-panel/75" />
        <div className="relative mx-auto max-w-5xl px-6 pb-14 pt-24 text-panel-foreground">
          <div className="mb-4 flex gap-2 text-[11px] font-medium">
            <span className="rounded-full border border-panel-foreground/70 px-3 py-0.5">ESTOQUE ATUALIZADO</span>
            <span className="rounded-full border border-panel-foreground/70 px-3 py-0.5">SÃO PAULO / SP</span>
          </div>
          <h1 className="max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
            Peças usadas com Garantia e Procedência! <span className="text-brand underline">ENVIO IMEDIATO DA SUA PEÇA!</span>
          </h1>
          <p className="mt-4 text-sm font-bold">SUCATAS EXCLUSIVAS PARA DESMONTE.</p>
          <p className="text-sm opacity-90">Peças originais certificadas com procedência garantida e envio imediato.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsButton>Chamar Vendedor!</WhatsButton>
            <a href="#sucatas" className="inline-flex items-center gap-2 rounded-sm border border-panel-foreground px-6 py-2.5 text-sm font-bold">Sucatas Disponíveis <ChevronDown className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-brand py-1.5 text-sm tracking-[0.2em] text-panel-foreground">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {Array.from({ length: 24 }).map((_, i) => <span key={i}>ENVIO IMEDIATO!</span>)}
        </div>
      </div>

      <section id="sucatas" className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Últimas sucatas recebidas</h2>
            <div className="mt-3 h-0.5 w-40 bg-brand" />
          </div>
          <span className="rounded-full bg-brand px-4 py-1 text-sm text-panel-foreground"><b>+80</b> SUCATAS DISPONÍVEIS</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((c) => (
            <article key={c.n} className="bg-panel text-panel-foreground">
              <img src={c.img} alt={`Sucata para desmonte ${c.n}`} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="p-6">
                <span className="rounded-full border border-panel-foreground/50 px-3 py-0.5 text-[10px]">Recém-chegado</span>
                <h3 className="mt-3 text-xl font-bold">Sucata #{String(c.n).padStart(2, "0")}</h3>
                <p className="text-xs opacity-80">Consulte modelo e ano com o vendedor</p>
                <p className="mt-3 text-xs leading-relaxed opacity-90">Peças disponíveis para retirada;<br />Procedência garantida;<br />Envio imediato.</p>
                <WhatsButton className="mt-5 w-full text-xs tracking-wider">FALAR COM VENDEDOR!</WhatsButton>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand py-14 text-center text-panel-foreground">
        <h2 className="text-2xl font-bold underline">NÃO ENCONTROU A SUCATA PARA O SEU CARRO?</h2>
        <p className="mt-3 text-sm font-bold">+80 SUCATAS DISPONÍVEIS PARA RETIRADA DE PEÇAS!</p>
        <p className="text-sm opacity-90">Peças originais certificadas com procedência garantida e envio imediato.</p>
        <WhatsButton className="mt-6">Vendedor Online!</WhatsButton>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="max-w-md text-3xl font-bold">Oferecendo as melhores peças usadas!</h2>
          <div className="mt-12 grid gap-10 text-center md:grid-cols-3">
            {[
              [ShieldCheck, "Garantia de Procedência", "Todos os nossos veículos são adquiridos legalmente, com documentação completa."],
              [FileText, "Nota Fiscal Inclusa", "Vendas 100% legalizadas. Você recebe a nota fiscal eletrônica com as especificações da peça."],
              [Truck, "Entrega em Todo o Brasil", "Logística otimizada para envio rápido e seguro de peças de qualquer tamanho."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Truck;
              return (
                <div key={t as string}>
                  <I className="mx-auto h-6 w-6 text-brand" />
                  <h3 className="mt-3 font-bold">{t as string}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold">Onde estamos</h2>
        <div className="mt-3 h-0.5 w-40 bg-brand" />
        <iframe title="Mapa Desmanche do Bakana" src={EMBED} className="mt-8 h-96 w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <a href={MAP_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand underline"><MapPin className="h-4 w-4" /> Abrir no Google Maps</a>
      </section>

      <footer className="bg-panel py-10 text-panel-foreground">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-6 text-sm">
          <img src={logo.url} alt="Bakana Auto Peças Usadas" className="h-20 rounded-sm" />
          <div className="space-y-1 opacity-80">
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand" /> Desmanche do Bakana</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand" /> {PHONE_DISPLAY}</p>
          </div>
          <WhatsButton>Fale no WhatsApp</WhatsButton>
        </div>
      </footer>
    </div>
  );
}
