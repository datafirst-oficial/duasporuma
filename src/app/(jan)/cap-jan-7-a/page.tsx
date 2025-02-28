import { Header } from "@/components/header";

interface FormProps {
  searchParams: {
    utm_content?: string
    utm_campaign?: string
    utm_term?: string
    utm_source?: string
    utm_medium?: string
  }
}

export default function Page({ searchParams }: FormProps) {
  return (
    <div className="">
      <Header
        title={<span>Nunca mais sinta saudades sem data marcada para voltar ao Brasil!</span>}
        description={<>Participe do treinamento gratuito e descubra como viajar todo ano gastando metade do que imagina.</>}
        searchParams={searchParams}
      />
      <footer className="py-4 bg-[#14112a] text-white text-sm text-center flex flex-col items-center justify-center">
        <p>Copyright © 2024 | Treinamento - Duas Por Uma</p>
        <p>Sede de Viajar Comércio de Infoprodutos e Cursos Digitais LTDA - 47.418.377/0001-29</p>
      </footer>
    </div>
  )
}