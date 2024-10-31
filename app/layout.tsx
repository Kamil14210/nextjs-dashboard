<<<<<<< HEAD
import '@/app/ui/global.css';
import { inter } from "@/app/ui/fonts";

=======
>>>>>>> parent of ec37633 (Added prerendering with nedded components)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
