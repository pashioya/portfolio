import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Chip } from '@nextui-org/chip';

type ProjectCardProps = {
  isNew?: boolean;
  inProgress?: boolean;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
};

export default function ProjectCard({
  isNew,
  inProgress,
  title,
  description,
  technologies,
  image,
}: ProjectCardProps) {
  return (
    <Card isFooterBlurred isPressable className="h-[400px]">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="text-white font-medium text-2xl">{title}</h4>
        {isNew && <p className="text-tiny text-white/60 uppercase font-bold">New</p>}
        {inProgress && <p className="text-tiny text-white/60 uppercase font-bold">In Progress</p>}
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={
          image
            ? image
            : 'https://plus.unsplash.com/premium_photo-1701590725523-984a41d4b635?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between h-[100px]">
        <div className="w-full items-start flex flex-col gap-3">
          <div>
            {technologies.map(tech => (
              <Chip
                size="sm"
                key={tech}
                color="secondary"
                variant="flat"
                className="mr-2 text-white"
              >
                {tech}
              </Chip>
            ))}
          </div>
          <p className="text-white text-sm text-left">{description}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
