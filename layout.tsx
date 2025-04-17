'use client'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Layout({ children }) {
  const router = useRouter()
  
  // إضافة الخطوط من Google Fonts
  useEffect(() => {
    // إضافة خط Amiri من Google Fonts
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    
    return () => {
      document.head.removeChild(link)
    }
  }, [])
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold font-arabic">القرآن الكريم</Link>
            <nav className="hidden md:flex space-x-4 rtl:space-x-reverse">
              <Button variant="ghost" asChild>
                <Link href="/">الرئيسية</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/surahs">السور</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/tafsir">التفسير</Link>
              </Button>
            </nav>
            <Button variant="outline" className="md:hidden" onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu')
              if (mobileMenu) {
                mobileMenu.classList.toggle('hidden')
              }
            }}>
              <span className="sr-only">القائمة</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
          <div id="mobile-menu" className="md:hidden hidden mt-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/">الرئيسية</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/surahs">السور</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/tafsir">التفسير</Link>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">موقع القرآن الكريم وتفسير الآيات © {new Date().getFullYear()}</p>
            <div className="mt-2 flex justify-center space-x-4 rtl:space-x-reverse">
              <Link href="/" className="text-muted-foreground hover:text-primary">الرئيسية</Link>
              <Link href="/surahs" className="text-muted-foreground hover:text-primary">السور</Link>
              <Link href="/tafsir" className="text-muted-foreground hover:text-primary">التفسير</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
