import { ContactForm } from './ContactForm';
import DialogComponent from './DialogComponent';
import { Button } from './ui/button';

export default function ContactMe() {
  return (
    <DialogComponent
      title={'Contact Me'}
      description={'Contact me here'}
      trigger={<Button size={'lg'}>Contact Me</Button>}
      content={<ContactForm />}
      footer={undefined}
    />
  );
}
