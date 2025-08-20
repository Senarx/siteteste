"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import StickyWord from "./components/StickyWord";
import Scribble from "./components/Scribble";

export default function Page() {
  // smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    let raf: number;
    const loop = (time: number) => { lenis.raf(time); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <main className="paper-bg relative overflow-x-clip">
      {/* floating scribbles */}
      <div className="pointer-events-none text-ink/40">
        <Scribble x={40} y={220} scale={0.9} delay={0.4} />
        <Scribble x={320} y={680} scale={1.1} rotate={8} delay={0.6} />
        <Scribble x={880} y={160} scale={0.8} rotate={-6} delay={0.8} />
        <Scribble x={1200} y={520} scale={1.2} rotate={2} delay={1.0} />
      </div>

      {/* nav */}
      <nav className="sticky top-0 z-20 mix-blend-difference text-white/90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="tracking-[0.25em] text-xs font-semibold">MIGUEL DA HORA</a>
          <div className="hidden md:flex gap-6 text-[11px] tracking-widest uppercase">
            <a href="#about">about</a><a href="#work">work</a><a href="#contact">contact</a>
          </div>
        </div>
      </nav>

      {/* hero */}
      <section className="max-w-7xl mx-auto px-6 pt-[18vh] pb-[14vh]">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-[12vw] leading-[0.85] font-display font-semibold">
          Project Sheet
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.15 }}
          className="max-w-2xl mt-6 text-lg text-ink/80">
          Um site com estética de papel quadriculado, blocos tipográficos de alto contraste e rabiscos animados — inspirado em experiências experimentais.
        </motion.p>
        <div className="mt-8 h-1 w-40 bg-ink underline" />
      </section>

      {/* sticky words */}
      <StickyWord word="VISÃO" />
      <StickyWord word="IMPACTO" />

      {/* features grid */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">
        {[
          ["Rabiscos Dinâmicos", "Elementos que parecem desenhados à mão, com traços animados e leves vibrações."],
          ["Animação de Escrita", "Títulos que surgem como escrita à mão, criando foco e ritmo na narrativa."],
          ["Estética de Projeto", "Layout que remete a folhas de projeto com grid, contraste e composições ousadas."]
        ].map(([t, d], i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative border-2 border-ink p-6 bg-paper/60">
            <div className="absolute -top-2 -left-2 -z-10 border-2 border-ink w-full h-full" />
            <h3 className="font-display text-xl font-bold mb-2">{t}</h3>
            <p className="text-sm text-ink/80">{d}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-24">
        <div className="border-2 border-ink p-8 md:p-12 bg-paper/70">
          <h3 className="font-display text-4xl md:text-5xl font-bold">Bora encontrar o seu impacto real_</h3>
          <p className="text-ink/80 max-w-2xl mt-3">Posso conectar formulário, publicar no Vercel e ajustar a coreografia das animações conforme sua identidade.</p>
          <a href="#contact" className="inline-block mt-6 border-2 border-ink px-5 py-2 text-sm font-semibold hover:bg-ink hover:text-white transition">Falar com Miguel</a>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
        <h4 className="font-display text-4xl font-bold mb-6">Vamos conversar</h4>
        <form className="grid gap-4 border-2 border-ink p-6 bg-paper/70">
          <input className="border-b-2 border-ink bg-transparent px-2 py-1" placeholder="Nome" />
          <input type="email" className="border-b-2 border-ink bg-transparent px-2 py-1" placeholder="Email" />
          <textarea rows={4} className="border-2 border-ink bg-transparent px-2 py-1" placeholder="Mensagem" />
          <button type="button" className="border-2 border-ink px-4 py-2 font-bold hover:bg-ink hover:text-white transition">Enviar</button>
          <p className="text-xs text-ink/60">* Estático por enquanto. Posso conectar via Resend/EmailJS.</p>
        </form>
      </section>

      {/* footer */}
      <footer className="border-t-2 border-ink">
        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between text-xs">
          <p className="tracking-[0.25em]">MIGUEL DA HORA</p>
          <span>© {new Date().getFullYear()} • Paper XP</span>
        </div>
      </footer>
    </main>
  );
}
