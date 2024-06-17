import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/popover';

type PopOverComponentProps = {
  trigger: React.ReactNode;
  content: React.ReactNode;
};

export function PopOverComponent({ trigger, content }: PopOverComponentProps) {
  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent>{content}</PopoverContent>
    </Popover>
  );
}
