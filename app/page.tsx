//COMPONENETS
import Image from "next/image";
import * as Components from '@/components/index'

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Components.Header/>
      <main className="bg-background">        
        <section className="w-full h-[30rem] bg-primary -mx-6 overflow-hidden">
          <Image
            src={'/imgbg1.png'}
            alt="Imagem de um ambiente com paredes claras, 2 sofás brancos e uma mesa de apoio com potes de decoração."
            objectFit="cover"
            fill
          />
        </section>
      </main>
    </div>
  );
}
