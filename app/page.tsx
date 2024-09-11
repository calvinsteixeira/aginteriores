//COMPONENETS
import Image from 'next/image';
import * as Components from '@/components/index';
import * as Icons from '@/icons';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Components.Header />
      <main className="bg-background">
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
        <section>
          <div className="space-y-6">
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
      </main>
    </div>
  );
}
