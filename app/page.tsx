//COMPONENETS
import Image from 'next/image';
import * as Components from '@/components/index';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Components.Header />
      <main className="bg-background">
        <section className="relative w-full h-screen bg-primary overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
          <div className="text-center z-20 text-white space-y-8">
            <div className='space-y-4'>
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
      </main>
    </div>
  );
}
