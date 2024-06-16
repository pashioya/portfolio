import { ContactForm } from './ContactForm';
import DialogComponent from './DialogComponent';
import { Button } from '@nextui-org/button';

export default function ContactMe() {
  return (
    <DialogComponent
      title={'Contact Me'}
      trigger={
        <Button variant="solid" color="primary" size={'lg'}>
          Contact Me
        </Button>
      }
      content={<ContactForm />}
    />
  );
}
