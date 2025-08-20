export const metadata = {
  title: "Miguel da Hora — Paper XP",
  description: "Portfolio em estilo folha de projeto com rabiscos e animações.",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen font-body">{children}</body>
    </html>
  );
}
