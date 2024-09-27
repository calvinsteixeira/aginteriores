//COMPONENETS
import Image from 'next/image';
import { Button } from '../ui/button';

//UTILS
import React from 'react';

type ServiceProps = {
  title: string;
  description: string;
  imgPath: string;
};

export function Service(props: ServiceProps) {
  return (
    <div className="space-y-4 border-[1px] border-primary/30 text-foreground/80 px-3 py-4 rounded-md">
      <div className='flex gap-4'>
        <div className="flex-1 space-y-4">
          <h2 className="font-semibold text-base">{props.title}</h2>
          <p className="text-sm">{props.description}</p>
        </div>
        <div className="flex-1 w-full relative">
          <Image
            src={props.imgPath}
            alt="Imagem de um ambiente com paredes claras, 2 sofás brancos e uma mesa de apoio com potes de decoração."
            objectFit="cover"
            fill
            className="z-0 rounded-lg"
          />
        </div>
      </div>
      <Button size={'sm'} variant={'secondary'} className="w-full text-primary p-0">
        Mais detalhes
      </Button>
    </div>
  );
}
