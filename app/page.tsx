//COMPONENETS
import Image from 'next/image';
import * as Components from '@/components/index';
import * as Icons from '@/icons';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <main className="bg-background">
        {/* IMAGEM */}
        <section className="relative w-full h-screen bg-primary overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
          <div className="text-center z-10 text-white space-y-8">
            <div className="space-y-4">
              <h2 className="font-semibold text-2xl">Torne seus ambientes minimalistas e modernos</h2>
              <p>Damos vida aos ambientes conciliando a personalidade de quem os utiliza.</p>
            </div>
            <Button>Solicitar orçamento</Button>
          </div>
          <Image
            src={'/imgbg1.png'}
            alt="Imagem de um ambiente com paredes claras, 2 sofás brancos e uma mesa de apoio com potes de decoração."
            objectFit="cover"
            fill
            className="z-0"
          />
        </section>
        {/* SERVIÇOS */}
        <section>
          <div className="space-y-6">
            <h1 className="font-semibold">Nossos serviços</h1>
            <Components.Service
              title="Renderização de imagens"
              description="Renderização de interiores com imagens realistas para visualizar o ambiente final"
              imgPath="/imgbg3.png"
            />
            <Components.Service
              title="Projeto executivo"
              description="Renderização de interiores com imagens realistas para visualizar o ambiente final"
              imgPath="/imgbg3.png"
            />
          </div>
        </section>
        <Components.Divider />
        {/* DIFERENCIAIS */}
        <section className="bg-secondary">
          <div className="space-y-6">
            <h1 className="font-semibold">Por que escolher a gente</h1>
            <Components.Qualitie
              title="Realismo"
              description="Imagens que mostram com alta fidelidade como seu ambiente será"
              moreInforedirectPath="/"
              icon={<Icons.BiImage />}
            />
            <Components.Qualitie
              title="Orçamento"
              description="Orçamentos personalizados que se ajustam de acordo com a sua necessidade de investimento"
              moreInforedirectPath="/"
              icon={<Icons.MdAttachMoney />}
            />
            <Components.Qualitie
              title="Comunicação"
              description="Acreditamos que a transparência e sinceridade tornam o trabalho muito mais fluído e satisfatório. Utilizamos o Whatsapp como um canal de comunicação direto e claro"
              moreInforedirectPath="/"
              icon={<Icons.FaRegHandshake />}
            />
          </div>
        </section>
        <Components.Divider />
        {/* TIPOS DE PROJETOS */}
        <section className="space-y-8">
          <div className="w-full h-[20rem] relative">
            <Image
              src={'/imgbg2.png'}
              alt="Imagem de um ambiente com paredes claras, 2 sofás brancos e uma mesa de apoio com potes de decoração."
              objectFit="cover"
              fill
              className="z-0 rounded-2xl"
            />
          </div>
          <div className="space-y-4">
            <p>Iremos te ajudar a transformar o seu ambiente em lar, com elegância, conforto e uma design que explora praticidade e funcionalidade.</p>
          </div>
          <div className="space-y-4">
            <h2 className="font-semibold">Escolha a opção que se encaixa na sua personalidade</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-primary/60">Contemporâneos</AccordionTrigger>
                <AccordionContent>
                  Ambientes que combinam sofisticação com linhas suaves e funcionais, criando espaços elegantes e acolhedores.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-primary/60">Atemporais</AccordionTrigger>
                <AccordionContent>
                  Estilos que nunca saem de moda, com combinações de elementos clássicos e modernos, proporcionando um equilíbrio perfeito entre elegância,
                  durabilidade e sustentabilidade.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-primary/60">Minimalistas</AccordionTrigger>
                <AccordionContent>
                  Espaços que valorizam a simplicidade, trazendo leveza visual e um ambiente organizado e funcional, ideal para quem busca tranquilidade.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-primary/60">Modernos</AccordionTrigger>
                <AccordionContent>
                  Com um design inovador, o estilo moderno utiliza linhas arrojadas, materiais tecnológicos e soluções criativas para transformar qualquer
                  ambiente.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button size={'sm'}>Contratar</Button>
          </div>
        </section>
        <Components.Divider />
        {/* GALERIA DE PROJETOS */}
        <section className="bg-secondary space-y-12">
          <div className="w-full h-max content-center self-center text-center">
            <Components.Counter className="text-6xl text-foreground" duration={3} bottomOffset={100} partialVisibility prefix="+" start={0} end={50} />
            <h2 className="text-3xl text-foreground">PROJETOS</h2>
          </div>
          <h1 className='font-semibold'>Galeria de imagens</h1>
        </section>
        <Components.Divider />
      </main>
    </div>
  );
}
