import { ContactForm } from './ContactForm';
import DialogComponent from './DialogComponent';
import { Button } from './ui/button';

export default function ContactMe() {
  return (
    <DialogComponent
      title={'Contact Me'}
      trigger={<Button size={'lg'}>Contact Me</Button>}
      content={<ContactForm />}
    />
  );
}
