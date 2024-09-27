//COMPONENTS
import * as Icons from '@/icons/index';
import { Button } from '../ui/button';

//UTILS
import React from 'react';

type Props = {};

export function Footer(props: Props) {
  return (
    <footer className="bg-primary h-56 py-10 px-8 text-primary-foreground flex items-center">
      <div>
        <div className="space-y-5">
          <h2 className="font-semibold">Contate-nos</h2>
          <div className="space-y-3">
            <div className="flex gap-2 items-center">
              <Icons.MdMail className="text-primary-foreground text-lg" />
              <p>annagooisc@gmail.com</p>
            </div>
            <div className="flex gap-2 items-center">
              <Button size={'sm'} className="gap-2 bg-primary-foreground text-primary">
                <Icons.IoLogoWhatsapp className='text-lg'/>
                Chamar no Whatsapp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
