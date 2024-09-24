//COMPONENETS
import { Button } from '../ui/button';

//UTILS
import React from 'react';
import { IconBaseProps } from 'react-icons';
import { cn } from '@/lib/utils';

type QualitieProps = {
  icon: React.ReactElement<IconBaseProps>;
  title: string;
  description: string;
  moreInforedirectPath: string;
};

export function Qualitie(props: QualitieProps) {
  return (
    <div className="px-4 py-3 border-[1px] border-primary/30 rounded-md space-y-3">
      <div className="space-y-2">
        {React.createElement(props.icon.type, {
          ...props.icon.props,
          size: 35,
          className: cn('max-w-max p-[0.40rem] rounded-full bg-gray-200/40 text-primary/30', props.icon.props.className),
        })}
        <p className="font-semibold text-sm">{props.title}</p>
        <p className="text-sm">{props.description}</p>
      </div>
      {/* <Button size={'sm'} variant={'ghost'} className="text-primary p-0">
        Mais detalhes
      </Button> */}
    </div>
  );
}
