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
      <div className="fixed top-0 left-0 w-full  bg-orange-500 flex items-center justify-center z-50 py-2 border-b border-white">
        <p className="text-white font-bold sm:text-base text-sm">Exclusivo para brasileiros que moram na Europa</p>
      </div>
      <Header
        title={<span>Volte ao Brasil todos os anos com 50% de desconto e nunca mais pense em ir embora da Europa</span>}
        description={<>Inscreva-se agora no Treinamento online e gratuito e junte-se à Comunidade de Brasileiros na Europa que Aproveitará Férias, Natal ou Ano Novo no Brasil com Passagens 50% mais baratas! <strong>Não Fique de Fora!</strong></>}
        searchParams={searchParams}
      />
      <footer className="py-4 bg-[#14112a] text-white text-sm text-center flex flex-col items-center justify-center">
        <p>Copyright © 2024 | Treinamento - Duas Por Uma</p>
        <p>Sede de Viajar Comércio de Infoprodutos e Cursos Digitais LTDA - 47.418.377/0001-29</p>
      </footer>
    </div>
  )
}