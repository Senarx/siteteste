# Miguel — Paper XP (Next.js)

Site no estilo **folha de projeto** com rabiscos animados, usando **Next.js (App Router) + Tailwind + Framer Motion + Lenis**.

## Rodar localmente
```bash
npm i
npm run dev
```
Abra http://localhost:3000

## Deploy (Vercel)
1. Faça login em https://vercel.com e crie um novo projeto.
2. Importe este repositório (ou arraste o zip) e mantenha os comandos padrão (build e start do Next).
3. Habilite a variável `NEXT_TELEMETRY_DISABLED=1` se preferir.

## Onde editar
- `app/page.tsx` — conteúdo e animações.
- `app/components/*` — rabiscos e títulos sticky.
- `app/globals.css` — grade de papel e keyframes de escrita.
- `tailwind.config.js` — cores e tipografia.

## Para conectar formulário
- Use [Resend](https://resend.com) ou [EmailJS](https://www.emailjs.com/).
- Crie um endpoint em `app/api/contact/route.ts` e suba as chaves como variáveis no Vercel.
