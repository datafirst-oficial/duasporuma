import { Header } from "@/components/header";
import { Header4 } from "@/components/header-4";

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
      <Header4
        title={<span>Não deixe a saudade te prender! Descubra como economizar até 50% nas passagens para o Brasil.</span>}
        description={<>Inscreva-se no treinamento gratuito e garanta mais viagens para ver sua família e amigos.</>}
        searchParams={searchParams}
      />
      <footer className="py-4 bg-[#14112a] text-white text-sm text-center flex flex-col items-center justify-center">
        <p>Copyright © 2024 | Treinamento - Duas Por Uma</p>
        <p>Sede de Viajar Comércio de Infoprodutos e Cursos Digitais LTDA - 47.418.377/0001-29</p>
      </footer>
    </div>
  )
}