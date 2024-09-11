import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="bg-background">        
        <section className="h-[30rem] bg-primary -mx-6">
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
