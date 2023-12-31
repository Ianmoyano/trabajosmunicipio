import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Titulo } from "./partials/titulo/Titulo"
import { Footer } from "./partials/footer/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Municipio de Bahía Blanca',
  description: 'Pagina oficial del Municipio de Bahía Blanca',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Titulo/>
        {children} 
        <Footer/>
        </body>
    </html>
  
  )
}
