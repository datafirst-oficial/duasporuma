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
        title={<span>Descubra o segredo para voltar ao Brasil todos os anos gastando até metade do preço!</span>}
        description={<>Inscreva-se gratuitamente no treinamento que já ajudou centenas de brasileiros a aproveitar as férias e feriados com economia.</>}
        searchParams={searchParams}
      />
      <footer className="py-4 bg-[#14112a] text-white text-sm text-center flex flex-col items-center justify-center">
        <p>Copyright © 2024 | Treinamento - Duas Por Uma</p>
        <p>Sede de Viajar Comércio de Infoprodutos e Cursos Digitais LTDA - 47.418.377/0001-29</p>
      </footer>
    </div>
  )
}