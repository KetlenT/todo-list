import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'To-Do List',
  description: 'Criado por Ketlen Sampaio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Toaster />
      </body>
      <footer className="fixed bottom-0 left-0 w-full  ">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Ketlen Sampaio </span>
      </footer>
    </html>
  )
}
