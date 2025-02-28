import { Button } from "@/components/button";
import Calendar from "@/components/calendar";
import { Card } from "@/components/card";
import { Header5 } from "@/components/header-5";
import HeroFlex from "@/components/heroflex";
import Section from "@/components/section";
import { Slider } from "@/components/slider";
import Image from "next/image";


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
      <Header5
        title={<span>Volte ao Brasil todos os anos com <span className="text-orange-500">50% de desconto</span> e nunca mais pense em ir embora da Europa</span>}
        description={<>Inscreva-se agora no Treinamento online e gratuito e junte-se à Comunidade de Brasileiros na Europa que Aproveitará Férias, Natal ou Ano Novo no Brasil com Passagens 50% mais baratas! <strong>Não Fique de Fora!</strong></>}
        searchParams={searchParams}
      />
      <main className="">
        <section
          className="w-full py-12 sm:py-16 bg-my2"
        >
          <div className="flex flex-col gap-6 sm:gap-12 justify-center items-center">
            <div className="w-ful max-w-2xl text-center flex flex-col gap-4">
              <h1 className="text-2xl sm:text-4xl font-bold">Se você compra de alguma dessas marcas, você pode viajar mais barato!</h1>
            </div>
            <div className="w-full sm:max-w-4xl ">
              <Slider />
            </div>
          </div>
        </section>
        <Section
          className="py-12 sm:py-12 px-4"
        >
          <HeroFlex
            height={598}
            width={1024}
            imagePath="bg2.webp"
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-xl sm:text-3xl font-bold text-[#5484ff]">Treinamento online e gratuito</h2>
              <ul className="sm:text-lg flex flex-col text-[#363636]">
                <li className="flex items-center gap-2 font-semibold">
                  <svg className="h-6 w-6 fill-[#5484ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" /></svg>
                  <Calendar />
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <svg className="h-6 w-6 fill-[#5484ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" /></svg>
                  <p className="flex flex-col">
                    <span>Sempre às 20h (horário da Alemanha)</span>
                    <span className="text-sm">ou 15h do Brasil</span>
                  </p>
                </li>
              </ul>
              <p className="sm:text-lg font-semibold text-[#363636]">Aumentos de preços por todos os lados. Isso não é diferente no mundo das passagens aéreas. O preço alto das passagens impossibilitam nossas famílias de se relacionar com os avós, familiares e amigos, assim como de passarmos datas importantes no Brasil, nos fazendo perder o recurso mais importante que temos: o tempo.</p>
              <p className="sm:text-lg font-semibold text-[#363636]">Chegou a hora de você <strong>aprender emitir passagens com 50% de desconto e nunca mais perder uma data importante</strong> no Brasil por causa dos preços das passagens.</p>
              <p className="sm:text-lg font-semibold text-[#363636]">O treinamento Duas Por Uma é o movimento que levará o maior número de brasileiros morando no exterior para passar datas importantes no Brasil em 2024. <strong>Vai deixar sua família de fora?</strong></p>
              <Button type="redirect" />
            </div>
          </HeroFlex>
        </Section>
        <Section classNameS="relative bg-my2" className="sm:px-4">
          <div className="sm:grid sm:grid-cols-2 flex flex-col py-12">
            <div className="w-full sm:w-1/2 sm:h-full h-[256px] flex items-center sm:absolute sm:left-0 sm:top-0">
              <Image
                src="/images/bg3.webp"
                alt=""
                layout="fill"
                className="sm:block hidden"
              />
              <Image
                src="/images/bg3.webp"
                alt=""
                width={1080}
                height={1080}
                className="sm:hidden block"
              />
            </div>
            {/* <div className="flex items-center justify-center">
            </div> */}
            <div className="col-mod flex flex-col justify-center gap-4 px-8 sm:pt-0 pt-20 text-[#1C1E3A]">
              <h2 className="font-bold text-2xl sm:text-4xl">Você vai aprender</h2>
              <ul className="flex flex-col gap-2 sm:text-lg font-medium">
                <li className="relative flex gap-4">
                  <svg className="absolute -left-4 -top-[2px] h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M420-308q-8 0-14-5.5t-6-14.5v-304q0-9 6-14.5t14-5.5q2 0 14 6l145 145q5 5 7 10t2 11q0 6-2 11t-7 10L434-314q-3 3-6.5 4.5T420-308Z" /></svg>
                  <span className="ps-4">Como transformar os gastos do seu dia em desconto nas passagens aéreas (aluguel, combustível, compras e etc).</span>
                </li>
                <li className="relative flex gap-4">
                  <svg className="absolute -left-4 -top-[2px] h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M420-308q-8 0-14-5.5t-6-14.5v-304q0-9 6-14.5t14-5.5q2 0 14 6l145 145q5 5 7 10t2 11q0 6-2 11t-7 10L434-314q-3 3-6.5 4.5T420-308Z" /></svg>
                  <span className="ps-4">Como identificar oportunidades únicas de compra de passagens com 50% ou mais de desconto.</span>
                </li>
                <li className="relative flex gap-4">
                  <svg className="absolute -left-4 -top-[2px] h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M420-308q-8 0-14-5.5t-6-14.5v-304q0-9 6-14.5t14-5.5q2 0 14 6l145 145q5 5 7 10t2 11q0 6-2 11t-7 10L434-314q-3 3-6.5 4.5T420-308Z" /></svg>
                  <span className="ps-4">Como acessar salas vip em todos os aeroportos sem pagar nada a mais por isso.</span>
                </li>
                <li className="relative flex gap-4">
                  <svg className="absolute -left-4 -top-[2px] h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M420-308q-8 0-14-5.5t-6-14.5v-304q0-9 6-14.5t14-5.5q2 0 14 6l145 145q5 5 7 10t2 11q0 6-2 11t-7 10L434-314q-3 3-6.5 4.5T420-308Z" /></svg>
                  <span className="ps-4">O plano pra você comprar sua primeira passagem pagando metade do preço ainda esse ano.</span>
                </li>
                <li className="relative flex gap-4">
                  <svg className="absolute -left-4 -top-[2px] h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M420-308q-8 0-14-5.5t-6-14.5v-304q0-9 6-14.5t14-5.5q2 0 14 6l145 145q5 5 7 10t2 11q0 6-2 11t-7 10L434-314q-3 3-6.5 4.5T420-308Z" /></svg>
                  <span className="ps-4">Como aproveitar essas oportunidades para emitir passagens para toda sua família.</span>
                </li>
                <li className="relative flex gap-4">
                  <svg className="absolute -left-4 -top-[2px] h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M420-308q-8 0-14-5.5t-6-14.5v-304q0-9 6-14.5t14-5.5q2 0 14 6l145 145q5 5 7 10t2 11q0 6-2 11t-7 10L434-314q-3 3-6.5 4.5T420-308Z" /></svg>
                  <span className="ps-4">Como emitir passagens de executiva pelo preço da econômica.</span>
                </li>
              </ul>
              <Button type="redirect" />
            </div>
          </div>
        </Section>
        <Section
          className="py-16 overflow-hidden px-4"
        >
          <div className="flex flex-col items-center text-center gap-6 sm:gap-12">
            <h2 className="font-bold text-2xl sm:text-4xl text-[#1C1E3A]">Tudo isso em 3 aulas 100% gratuitas</h2>
            <div className="flex items-center flex-col sm:flex-row gap-4 sm:gap-8">
              <Card
                title="Aula 01"
                description="O que você não sabe sobre emitir passagens com 50% de desconto."
              />
              <Card
                title="Aula 02"
                description="Como você vai emitir uma passagem com 50% ainda esse ano?"
              />
              <Card
                title="Aula 03"
                description="O Mapa para você começar do zero e emitir sua passagem."
              />
            </div>
            <Button type="redirect" />
          </div>
        </Section>
        <Section
          classNameS="py-16 bg-my2"
          className="px-4"
        >
          <HeroFlex
            reverse={true}
            height={1744}
            width={1080}
            imagePath="bg4.png"

          >
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-2xl sm:text-4xl text-my">Para quem é o treinamento</h4>
              <ul className="flex flex-col gap-4 sm:text-lg font-medium">
                <li className="relative flex gap-2">
                  <svg className="absolute left-0 top-1 h-8 w-8" viewBox="0 0 35 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_206_6)">
                      <mask id="mask0_206_6" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="44">
                        <path d="M34.187 0H0V44H34.187V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_206_6)">
                        <path d="M8.7875 9.77516C8.60517 9.56616 8.5197 9.26916 8.55388 8.9575C8.58807 8.64583 8.73479 8.391 8.95558 8.259L10.0638 7.58983C10.7732 7.16266 11.6065 7.27266 12.2717 7.90883L21.9139 15.9058L16.8414 19.0573L8.7875 9.77516Z" fill="#5484FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.4748 43.9998C33.868 43.9998 34.187 43.5892 34.187 43.0832C34.187 42.5772 33.868 42.1665 33.4748 42.1665H0.71223C0.319079 42.1665 0 42.5772 0 43.0832C0 43.5892 0.319079 43.9998 0.71223 43.9998H33.4748Z" fill="#5484FF" />
                        <path d="M1.66519 24.4932C1.92445 24.0697 2.30905 23.8332 2.70363 23.8332C2.85177 23.8332 2.99991 23.868 3.14378 23.9358L8.03965 26.2495C8.22056 26.3357 8.42141 26.321 8.59519 26.2128L29.7299 13.0862C30.7954 12.4555 32.0675 13.0532 32.5632 14.4282C33.0603 15.8105 32.5945 17.4678 31.5262 18.1242L11.6806 30.3653C9.51255 31.6945 6.94852 31.4103 4.98988 29.6192L2.03413 26.9132C1.7122 26.6198 1.49711 26.1633 1.44013 25.6628C1.3917 25.232 1.47147 24.8158 1.66804 24.4932H1.66519Z" fill="#5484FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.20794 28.4055L4.1637 31.1115C5.5497 32.3802 7.18498 33.0273 8.82881 33.0273C10.0083 33.0273 11.1934 32.6937 12.2945 32.019L32.1401 19.7778C33.9079 18.6907 34.6771 15.9462 33.8537 13.6582C33.029 11.3647 30.9065 10.3673 29.1259 11.4233L29.116 11.4307L23.4153 14.9727C23.401 14.958 23.3868 14.9452 23.3711 14.9323L13.0837 6.40183C12.0381 5.40083 10.6507 5.22116 9.46269 5.92516L8.35019 6.598C7.69778 6.99216 7.24765 7.77683 7.14509 8.69533C7.04253 9.61566 7.30321 10.5305 7.84023 11.1428L15.4554 19.9153L8.24763 24.3923L3.63522 22.2125C2.52699 21.6955 1.28344 22.1502 0.544144 23.3657C0.106835 24.0862 -0.0754964 24.9955 0.0299137 25.9268C0.142446 26.9205 0.569784 27.8225 1.20794 28.4055ZM8.55388 8.9575C8.5197 9.26916 8.60517 9.56616 8.7875 9.77516L16.8414 19.0573L21.9139 15.9058L12.2717 7.90883C11.6065 7.27266 10.7732 7.16266 10.0638 7.58983L8.95558 8.259C8.73479 8.391 8.58807 8.64583 8.55388 8.9575ZM2.70363 23.8332C2.30905 23.8332 1.92445 24.0697 1.66519 24.4932H1.66804C1.47147 24.8158 1.3917 25.232 1.44013 25.6628C1.49711 26.1633 1.7122 26.6198 2.03413 26.9132L4.98988 29.6192C6.94852 31.4103 9.51255 31.6945 11.6806 30.3653L31.5262 18.1242C32.5945 17.4678 33.0603 15.8105 32.5632 14.4282C32.0675 13.0532 30.7954 12.4555 29.7299 13.0862L8.59519 26.2128C8.42141 26.321 8.22056 26.3357 8.03965 26.2495L3.14378 23.9358C2.99991 23.868 2.85177 23.8332 2.70363 23.8332Z" fill="#5484FF" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_206_6">
                        <rect width="35" height="44" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="ps-12">Para brasileiros que moram no exterior e querem visitar o Brasil com mais frequência e/ou pagando menos</span>
                </li>
                <li className="relative flex gap-2">
                  <svg className="absolute left-0 top-1 h-8 w-8" viewBox="0 0 35 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_206_6)">
                      <mask id="mask0_206_6" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="44">
                        <path d="M34.187 0H0V44H34.187V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_206_6)">
                        <path d="M8.7875 9.77516C8.60517 9.56616 8.5197 9.26916 8.55388 8.9575C8.58807 8.64583 8.73479 8.391 8.95558 8.259L10.0638 7.58983C10.7732 7.16266 11.6065 7.27266 12.2717 7.90883L21.9139 15.9058L16.8414 19.0573L8.7875 9.77516Z" fill="#5484FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.4748 43.9998C33.868 43.9998 34.187 43.5892 34.187 43.0832C34.187 42.5772 33.868 42.1665 33.4748 42.1665H0.71223C0.319079 42.1665 0 42.5772 0 43.0832C0 43.5892 0.319079 43.9998 0.71223 43.9998H33.4748Z" fill="#5484FF" />
                        <path d="M1.66519 24.4932C1.92445 24.0697 2.30905 23.8332 2.70363 23.8332C2.85177 23.8332 2.99991 23.868 3.14378 23.9358L8.03965 26.2495C8.22056 26.3357 8.42141 26.321 8.59519 26.2128L29.7299 13.0862C30.7954 12.4555 32.0675 13.0532 32.5632 14.4282C33.0603 15.8105 32.5945 17.4678 31.5262 18.1242L11.6806 30.3653C9.51255 31.6945 6.94852 31.4103 4.98988 29.6192L2.03413 26.9132C1.7122 26.6198 1.49711 26.1633 1.44013 25.6628C1.3917 25.232 1.47147 24.8158 1.66804 24.4932H1.66519Z" fill="#5484FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.20794 28.4055L4.1637 31.1115C5.5497 32.3802 7.18498 33.0273 8.82881 33.0273C10.0083 33.0273 11.1934 32.6937 12.2945 32.019L32.1401 19.7778C33.9079 18.6907 34.6771 15.9462 33.8537 13.6582C33.029 11.3647 30.9065 10.3673 29.1259 11.4233L29.116 11.4307L23.4153 14.9727C23.401 14.958 23.3868 14.9452 23.3711 14.9323L13.0837 6.40183C12.0381 5.40083 10.6507 5.22116 9.46269 5.92516L8.35019 6.598C7.69778 6.99216 7.24765 7.77683 7.14509 8.69533C7.04253 9.61566 7.30321 10.5305 7.84023 11.1428L15.4554 19.9153L8.24763 24.3923L3.63522 22.2125C2.52699 21.6955 1.28344 22.1502 0.544144 23.3657C0.106835 24.0862 -0.0754964 24.9955 0.0299137 25.9268C0.142446 26.9205 0.569784 27.8225 1.20794 28.4055ZM8.55388 8.9575C8.5197 9.26916 8.60517 9.56616 8.7875 9.77516L16.8414 19.0573L21.9139 15.9058L12.2717 7.90883C11.6065 7.27266 10.7732 7.16266 10.0638 7.58983L8.95558 8.259C8.73479 8.391 8.58807 8.64583 8.55388 8.9575ZM2.70363 23.8332C2.30905 23.8332 1.92445 24.0697 1.66519 24.4932H1.66804C1.47147 24.8158 1.3917 25.232 1.44013 25.6628C1.49711 26.1633 1.7122 26.6198 2.03413 26.9132L4.98988 29.6192C6.94852 31.4103 9.51255 31.6945 11.6806 30.3653L31.5262 18.1242C32.5945 17.4678 33.0603 15.8105 32.5632 14.4282C32.0675 13.0532 30.7954 12.4555 29.7299 13.0862L8.59519 26.2128C8.42141 26.321 8.22056 26.3357 8.03965 26.2495L3.14378 23.9358C2.99991 23.868 2.85177 23.8332 2.70363 23.8332Z" fill="#5484FF" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_206_6">
                        <rect width="35" height="44" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="ps-12">Mora fora e perde eventos e acontecimentos importantes com sua família e amigos por causa dos preços das passagens</span>
                </li>
                <li className="relative flex gap-2">
                  <svg className="absolute left-0 top-1 h-8 w-8" viewBox="0 0 35 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_206_6)">
                      <mask id="mask0_206_6" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="44">
                        <path d="M34.187 0H0V44H34.187V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_206_6)">
                        <path d="M8.7875 9.77516C8.60517 9.56616 8.5197 9.26916 8.55388 8.9575C8.58807 8.64583 8.73479 8.391 8.95558 8.259L10.0638 7.58983C10.7732 7.16266 11.6065 7.27266 12.2717 7.90883L21.9139 15.9058L16.8414 19.0573L8.7875 9.77516Z" fill="#5484FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.4748 43.9998C33.868 43.9998 34.187 43.5892 34.187 43.0832C34.187 42.5772 33.868 42.1665 33.4748 42.1665H0.71223C0.319079 42.1665 0 42.5772 0 43.0832C0 43.5892 0.319079 43.9998 0.71223 43.9998H33.4748Z" fill="#5484FF" />
                        <path d="M1.66519 24.4932C1.92445 24.0697 2.30905 23.8332 2.70363 23.8332C2.85177 23.8332 2.99991 23.868 3.14378 23.9358L8.03965 26.2495C8.22056 26.3357 8.42141 26.321 8.59519 26.2128L29.7299 13.0862C30.7954 12.4555 32.0675 13.0532 32.5632 14.4282C33.0603 15.8105 32.5945 17.4678 31.5262 18.1242L11.6806 30.3653C9.51255 31.6945 6.94852 31.4103 4.98988 29.6192L2.03413 26.9132C1.7122 26.6198 1.49711 26.1633 1.44013 25.6628C1.3917 25.232 1.47147 24.8158 1.66804 24.4932H1.66519Z" fill="#5484FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.20794 28.4055L4.1637 31.1115C5.5497 32.3802 7.18498 33.0273 8.82881 33.0273C10.0083 33.0273 11.1934 32.6937 12.2945 32.019L32.1401 19.7778C33.9079 18.6907 34.6771 15.9462 33.8537 13.6582C33.029 11.3647 30.9065 10.3673 29.1259 11.4233L29.116 11.4307L23.4153 14.9727C23.401 14.958 23.3868 14.9452 23.3711 14.9323L13.0837 6.40183C12.0381 5.40083 10.6507 5.22116 9.46269 5.92516L8.35019 6.598C7.69778 6.99216 7.24765 7.77683 7.14509 8.69533C7.04253 9.61566 7.30321 10.5305 7.84023 11.1428L15.4554 19.9153L8.24763 24.3923L3.63522 22.2125C2.52699 21.6955 1.28344 22.1502 0.544144 23.3657C0.106835 24.0862 -0.0754964 24.9955 0.0299137 25.9268C0.142446 26.9205 0.569784 27.8225 1.20794 28.4055ZM8.55388 8.9575C8.5197 9.26916 8.60517 9.56616 8.7875 9.77516L16.8414 19.0573L21.9139 15.9058L12.2717 7.90883C11.6065 7.27266 10.7732 7.16266 10.0638 7.58983L8.95558 8.259C8.73479 8.391 8.58807 8.64583 8.55388 8.9575ZM2.70363 23.8332C2.30905 23.8332 1.92445 24.0697 1.66519 24.4932H1.66804C1.47147 24.8158 1.3917 25.232 1.44013 25.6628C1.49711 26.1633 1.7122 26.6198 2.03413 26.9132L4.98988 29.6192C6.94852 31.4103 9.51255 31.6945 11.6806 30.3653L31.5262 18.1242C32.5945 17.4678 33.0603 15.8105 32.5632 14.4282C32.0675 13.0532 30.7954 12.4555 29.7299 13.0862L8.59519 26.2128C8.42141 26.321 8.22056 26.3357 8.03965 26.2495L3.14378 23.9358C2.99991 23.868 2.85177 23.8332 2.70363 23.8332Z" fill="#5484FF" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_206_6">
                        <rect width="35" height="44" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="ps-12">Quer estar no Brasil no natal, ano novo ou fugir do inverno Europeu, mas o preço das passagens não deixa</span>
                </li>
                <li className="relative flex gap-2">
                  <svg className="absolute left-0 top-1 h-8 w-8" viewBox="0 0 35 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_206_6)">
                      <mask id="mask0_206_6" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="44">
                        <path d="M34.187 0H0V44H34.187V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_206_6)">
                        <path d="M8.7875 9.77516C8.60517 9.56616 8.5197 9.26916 8.55388 8.9575C8.58807 8.64583 8.73479 8.391 8.95558 8.259L10.0638 7.58983C10.7732 7.16266 11.6065 7.27266 12.2717 7.90883L21.9139 15.9058L16.8414 19.0573L8.7875 9.77516Z" fill="#5484FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.4748 43.9998C33.868 43.9998 34.187 43.5892 34.187 43.0832C34.187 42.5772 33.868 42.1665 33.4748 42.1665H0.71223C0.319079 42.1665 0 42.5772 0 43.0832C0 43.5892 0.319079 43.9998 0.71223 43.9998H33.4748Z" fill="#5484FF" />
                        <path d="M1.66519 24.4932C1.92445 24.0697 2.30905 23.8332 2.70363 23.8332C2.85177 23.8332 2.99991 23.868 3.14378 23.9358L8.03965 26.2495C8.22056 26.3357 8.42141 26.321 8.59519 26.2128L29.7299 13.0862C30.7954 12.4555 32.0675 13.0532 32.5632 14.4282C33.0603 15.8105 32.5945 17.4678 31.5262 18.1242L11.6806 30.3653C9.51255 31.6945 6.94852 31.4103 4.98988 29.6192L2.03413 26.9132C1.7122 26.6198 1.49711 26.1633 1.44013 25.6628C1.3917 25.232 1.47147 24.8158 1.66804 24.4932H1.66519Z" fill="#5484FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.20794 28.4055L4.1637 31.1115C5.5497 32.3802 7.18498 33.0273 8.82881 33.0273C10.0083 33.0273 11.1934 32.6937 12.2945 32.019L32.1401 19.7778C33.9079 18.6907 34.6771 15.9462 33.8537 13.6582C33.029 11.3647 30.9065 10.3673 29.1259 11.4233L29.116 11.4307L23.4153 14.9727C23.401 14.958 23.3868 14.9452 23.3711 14.9323L13.0837 6.40183C12.0381 5.40083 10.6507 5.22116 9.46269 5.92516L8.35019 6.598C7.69778 6.99216 7.24765 7.77683 7.14509 8.69533C7.04253 9.61566 7.30321 10.5305 7.84023 11.1428L15.4554 19.9153L8.24763 24.3923L3.63522 22.2125C2.52699 21.6955 1.28344 22.1502 0.544144 23.3657C0.106835 24.0862 -0.0754964 24.9955 0.0299137 25.9268C0.142446 26.9205 0.569784 27.8225 1.20794 28.4055ZM8.55388 8.9575C8.5197 9.26916 8.60517 9.56616 8.7875 9.77516L16.8414 19.0573L21.9139 15.9058L12.2717 7.90883C11.6065 7.27266 10.7732 7.16266 10.0638 7.58983L8.95558 8.259C8.73479 8.391 8.58807 8.64583 8.55388 8.9575ZM2.70363 23.8332C2.30905 23.8332 1.92445 24.0697 1.66519 24.4932H1.66804C1.47147 24.8158 1.3917 25.232 1.44013 25.6628C1.49711 26.1633 1.7122 26.6198 2.03413 26.9132L4.98988 29.6192C6.94852 31.4103 9.51255 31.6945 11.6806 30.3653L31.5262 18.1242C32.5945 17.4678 33.0603 15.8105 32.5632 14.4282C32.0675 13.0532 30.7954 12.4555 29.7299 13.0862L8.59519 26.2128C8.42141 26.321 8.22056 26.3357 8.03965 26.2495L3.14378 23.9358C2.99991 23.868 2.85177 23.8332 2.70363 23.8332Z" fill="#5484FF" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_206_6">
                        <rect width="35" height="44" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="ps-12">Quer entender o mundo das milhas mas não sabe por onde começar</span>
                </li>
                <li className="relative flex gap-2">
                  <svg className="absolute left-0 top-1 h-8 w-8" viewBox="0 0 35 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_206_6)">
                      <mask id="mask0_206_6" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="44">
                        <path d="M34.187 0H0V44H34.187V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_206_6)">
                        <path d="M8.7875 9.77516C8.60517 9.56616 8.5197 9.26916 8.55388 8.9575C8.58807 8.64583 8.73479 8.391 8.95558 8.259L10.0638 7.58983C10.7732 7.16266 11.6065 7.27266 12.2717 7.90883L21.9139 15.9058L16.8414 19.0573L8.7875 9.77516Z" fill="#5484FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.4748 43.9998C33.868 43.9998 34.187 43.5892 34.187 43.0832C34.187 42.5772 33.868 42.1665 33.4748 42.1665H0.71223C0.319079 42.1665 0 42.5772 0 43.0832C0 43.5892 0.319079 43.9998 0.71223 43.9998H33.4748Z" fill="#5484FF" />
                        <path d="M1.66519 24.4932C1.92445 24.0697 2.30905 23.8332 2.70363 23.8332C2.85177 23.8332 2.99991 23.868 3.14378 23.9358L8.03965 26.2495C8.22056 26.3357 8.42141 26.321 8.59519 26.2128L29.7299 13.0862C30.7954 12.4555 32.0675 13.0532 32.5632 14.4282C33.0603 15.8105 32.5945 17.4678 31.5262 18.1242L11.6806 30.3653C9.51255 31.6945 6.94852 31.4103 4.98988 29.6192L2.03413 26.9132C1.7122 26.6198 1.49711 26.1633 1.44013 25.6628C1.3917 25.232 1.47147 24.8158 1.66804 24.4932H1.66519Z" fill="#5484FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.20794 28.4055L4.1637 31.1115C5.5497 32.3802 7.18498 33.0273 8.82881 33.0273C10.0083 33.0273 11.1934 32.6937 12.2945 32.019L32.1401 19.7778C33.9079 18.6907 34.6771 15.9462 33.8537 13.6582C33.029 11.3647 30.9065 10.3673 29.1259 11.4233L29.116 11.4307L23.4153 14.9727C23.401 14.958 23.3868 14.9452 23.3711 14.9323L13.0837 6.40183C12.0381 5.40083 10.6507 5.22116 9.46269 5.92516L8.35019 6.598C7.69778 6.99216 7.24765 7.77683 7.14509 8.69533C7.04253 9.61566 7.30321 10.5305 7.84023 11.1428L15.4554 19.9153L8.24763 24.3923L3.63522 22.2125C2.52699 21.6955 1.28344 22.1502 0.544144 23.3657C0.106835 24.0862 -0.0754964 24.9955 0.0299137 25.9268C0.142446 26.9205 0.569784 27.8225 1.20794 28.4055ZM8.55388 8.9575C8.5197 9.26916 8.60517 9.56616 8.7875 9.77516L16.8414 19.0573L21.9139 15.9058L12.2717 7.90883C11.6065 7.27266 10.7732 7.16266 10.0638 7.58983L8.95558 8.259C8.73479 8.391 8.58807 8.64583 8.55388 8.9575ZM2.70363 23.8332C2.30905 23.8332 1.92445 24.0697 1.66519 24.4932H1.66804C1.47147 24.8158 1.3917 25.232 1.44013 25.6628C1.49711 26.1633 1.7122 26.6198 2.03413 26.9132L4.98988 29.6192C6.94852 31.4103 9.51255 31.6945 11.6806 30.3653L31.5262 18.1242C32.5945 17.4678 33.0603 15.8105 32.5632 14.4282C32.0675 13.0532 30.7954 12.4555 29.7299 13.0862L8.59519 26.2128C8.42141 26.321 8.22056 26.3357 8.03965 26.2495L3.14378 23.9358C2.99991 23.868 2.85177 23.8332 2.70363 23.8332Z" fill="#5484FF" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_206_6">
                        <rect width="35" height="44" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="ps-12">Ama viajar e quer pagar 50% mais barato nas tarifas aéreas</span>
                </li>
                <li className="relative flex gap-2">
                  <svg className="absolute left-0 top-1 h-8 w-8" viewBox="0 0 35 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_206_6)">
                      <mask id="mask0_206_6" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="44">
                        <path d="M34.187 0H0V44H34.187V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_206_6)">
                        <path d="M8.7875 9.77516C8.60517 9.56616 8.5197 9.26916 8.55388 8.9575C8.58807 8.64583 8.73479 8.391 8.95558 8.259L10.0638 7.58983C10.7732 7.16266 11.6065 7.27266 12.2717 7.90883L21.9139 15.9058L16.8414 19.0573L8.7875 9.77516Z" fill="#5484FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.4748 43.9998C33.868 43.9998 34.187 43.5892 34.187 43.0832C34.187 42.5772 33.868 42.1665 33.4748 42.1665H0.71223C0.319079 42.1665 0 42.5772 0 43.0832C0 43.5892 0.319079 43.9998 0.71223 43.9998H33.4748Z" fill="#5484FF" />
                        <path d="M1.66519 24.4932C1.92445 24.0697 2.30905 23.8332 2.70363 23.8332C2.85177 23.8332 2.99991 23.868 3.14378 23.9358L8.03965 26.2495C8.22056 26.3357 8.42141 26.321 8.59519 26.2128L29.7299 13.0862C30.7954 12.4555 32.0675 13.0532 32.5632 14.4282C33.0603 15.8105 32.5945 17.4678 31.5262 18.1242L11.6806 30.3653C9.51255 31.6945 6.94852 31.4103 4.98988 29.6192L2.03413 26.9132C1.7122 26.6198 1.49711 26.1633 1.44013 25.6628C1.3917 25.232 1.47147 24.8158 1.66804 24.4932H1.66519Z" fill="#5484FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.20794 28.4055L4.1637 31.1115C5.5497 32.3802 7.18498 33.0273 8.82881 33.0273C10.0083 33.0273 11.1934 32.6937 12.2945 32.019L32.1401 19.7778C33.9079 18.6907 34.6771 15.9462 33.8537 13.6582C33.029 11.3647 30.9065 10.3673 29.1259 11.4233L29.116 11.4307L23.4153 14.9727C23.401 14.958 23.3868 14.9452 23.3711 14.9323L13.0837 6.40183C12.0381 5.40083 10.6507 5.22116 9.46269 5.92516L8.35019 6.598C7.69778 6.99216 7.24765 7.77683 7.14509 8.69533C7.04253 9.61566 7.30321 10.5305 7.84023 11.1428L15.4554 19.9153L8.24763 24.3923L3.63522 22.2125C2.52699 21.6955 1.28344 22.1502 0.544144 23.3657C0.106835 24.0862 -0.0754964 24.9955 0.0299137 25.9268C0.142446 26.9205 0.569784 27.8225 1.20794 28.4055ZM8.55388 8.9575C8.5197 9.26916 8.60517 9.56616 8.7875 9.77516L16.8414 19.0573L21.9139 15.9058L12.2717 7.90883C11.6065 7.27266 10.7732 7.16266 10.0638 7.58983L8.95558 8.259C8.73479 8.391 8.58807 8.64583 8.55388 8.9575ZM2.70363 23.8332C2.30905 23.8332 1.92445 24.0697 1.66519 24.4932H1.66804C1.47147 24.8158 1.3917 25.232 1.44013 25.6628C1.49711 26.1633 1.7122 26.6198 2.03413 26.9132L4.98988 29.6192C6.94852 31.4103 9.51255 31.6945 11.6806 30.3653L31.5262 18.1242C32.5945 17.4678 33.0603 15.8105 32.5632 14.4282C32.0675 13.0532 30.7954 12.4555 29.7299 13.0862L8.59519 26.2128C8.42141 26.321 8.22056 26.3357 8.03965 26.2495L3.14378 23.9358C2.99991 23.868 2.85177 23.8332 2.70363 23.8332Z" fill="#5484FF" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_206_6">
                        <rect width="35" height="44" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="ps-12">Que deseja trazer sua família para uma viagem internacional</span>
                </li>
                <li className="relative flex gap-2">
                  <svg className="absolute left-0 top-1 h-8 w-8" viewBox="0 0 35 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_206_6)">
                      <mask id="mask0_206_6" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="44">
                        <path d="M34.187 0H0V44H34.187V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_206_6)">
                        <path d="M8.7875 9.77516C8.60517 9.56616 8.5197 9.26916 8.55388 8.9575C8.58807 8.64583 8.73479 8.391 8.95558 8.259L10.0638 7.58983C10.7732 7.16266 11.6065 7.27266 12.2717 7.90883L21.9139 15.9058L16.8414 19.0573L8.7875 9.77516Z" fill="#5484FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.4748 43.9998C33.868 43.9998 34.187 43.5892 34.187 43.0832C34.187 42.5772 33.868 42.1665 33.4748 42.1665H0.71223C0.319079 42.1665 0 42.5772 0 43.0832C0 43.5892 0.319079 43.9998 0.71223 43.9998H33.4748Z" fill="#5484FF" />
                        <path d="M1.66519 24.4932C1.92445 24.0697 2.30905 23.8332 2.70363 23.8332C2.85177 23.8332 2.99991 23.868 3.14378 23.9358L8.03965 26.2495C8.22056 26.3357 8.42141 26.321 8.59519 26.2128L29.7299 13.0862C30.7954 12.4555 32.0675 13.0532 32.5632 14.4282C33.0603 15.8105 32.5945 17.4678 31.5262 18.1242L11.6806 30.3653C9.51255 31.6945 6.94852 31.4103 4.98988 29.6192L2.03413 26.9132C1.7122 26.6198 1.49711 26.1633 1.44013 25.6628C1.3917 25.232 1.47147 24.8158 1.66804 24.4932H1.66519Z" fill="#5484FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.20794 28.4055L4.1637 31.1115C5.5497 32.3802 7.18498 33.0273 8.82881 33.0273C10.0083 33.0273 11.1934 32.6937 12.2945 32.019L32.1401 19.7778C33.9079 18.6907 34.6771 15.9462 33.8537 13.6582C33.029 11.3647 30.9065 10.3673 29.1259 11.4233L29.116 11.4307L23.4153 14.9727C23.401 14.958 23.3868 14.9452 23.3711 14.9323L13.0837 6.40183C12.0381 5.40083 10.6507 5.22116 9.46269 5.92516L8.35019 6.598C7.69778 6.99216 7.24765 7.77683 7.14509 8.69533C7.04253 9.61566 7.30321 10.5305 7.84023 11.1428L15.4554 19.9153L8.24763 24.3923L3.63522 22.2125C2.52699 21.6955 1.28344 22.1502 0.544144 23.3657C0.106835 24.0862 -0.0754964 24.9955 0.0299137 25.9268C0.142446 26.9205 0.569784 27.8225 1.20794 28.4055ZM8.55388 8.9575C8.5197 9.26916 8.60517 9.56616 8.7875 9.77516L16.8414 19.0573L21.9139 15.9058L12.2717 7.90883C11.6065 7.27266 10.7732 7.16266 10.0638 7.58983L8.95558 8.259C8.73479 8.391 8.58807 8.64583 8.55388 8.9575ZM2.70363 23.8332C2.30905 23.8332 1.92445 24.0697 1.66519 24.4932H1.66804C1.47147 24.8158 1.3917 25.232 1.44013 25.6628C1.49711 26.1633 1.7122 26.6198 2.03413 26.9132L4.98988 29.6192C6.94852 31.4103 9.51255 31.6945 11.6806 30.3653L31.5262 18.1242C32.5945 17.4678 33.0603 15.8105 32.5632 14.4282C32.0675 13.0532 30.7954 12.4555 29.7299 13.0862L8.59519 26.2128C8.42141 26.321 8.22056 26.3357 8.03965 26.2495L3.14378 23.9358C2.99991 23.868 2.85177 23.8332 2.70363 23.8332Z" fill="#5484FF" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_206_6">
                        <rect width="35" height="44" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="ps-12">Quer realizar o sonho de viajar de executiva e acha que isso é só para ricos</span>
                </li>
              </ul>
              <p className="text-my text-lg font-medium">Dá uma olhada nas experiências que eu já viví, graças a esses conhecimentos que eu vou te ensinar…</p>
              <Button type="redirect" />
            
            </div>
          </HeroFlex>
        </Section>
        <Section classNameS="bg-my py-12" className="px-4">
          <div className="sm:grid sm:grid-cols-2 flex flex-col gap-12">
            <div className="sm:max-w-md flex flex-col gap-8">
              <h2 className="text-white font-bold text-2xl sm:text-3xl sm:max-w-xs">Quem vai te guiar nesse treinamento?</h2>
              <div className="sm:w-96">
                <Image
                  src="/images/bg5.webp"
                  alt="Imagem da Ani com passaporte"
                  width={865}
                  height={1080}
                  className="rounded-[20px]"
                />
              </div>
            </div>
            <div className="max-w-md flex flex-col items-start gap-6">
              <h4 className="text-white font-bold text-2xl sm:text-3xl">Ani</h4>
              <div className="flex flex-col gap-4 text-white sm:text-lg font-medium mb-4">
                <p>Ani é especialista em planejamento de viagens, passagens, milhas, roteiros e tudo que envolve o mundo das viagens internacionais.</p>
                <p>Já ensinou mais de centenas de pessoas como comprar passagens com no mínimo 50% de desconto, planejarem o roteiro dos seus sonhos e nunca mais perderem um momento importante com sua família e amigos por causa do preço das passagens.</p>
                <p>E agora, através do Duas Por Uma, vai te ensinar um caminho simples para você nunca mais comprar uma passagem com menos de 50% de desconto e ainda ter acesso a salas VIP dos aeroportos sem pagar nada mais por isso.</p>
              </div>
              <Button type="redirect" />
            </div>
          </div>
        </Section>
      </main>
      <footer className="py-4 bg-[#14112a] text-white text-sm text-center flex flex-col items-center justify-center">
        <p>Copyright © 2024 | Treinamento - Duas Por Uma</p>
        <p>Sede de Viajar Comércio de Infoprodutos e Cursos Digitais LTDA - 47.418.377/0001-29</p>
      </footer>
    </div>
  )
}