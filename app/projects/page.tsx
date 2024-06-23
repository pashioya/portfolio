import Header from '@/components/Header';
import { ScrollShadow } from '@nextui-org/scroll-shadow';

import { Footer } from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <>
      <ScrollShadow hideScrollBar className="w-[90%]">
        <Header activeNav="projects" />
      </ScrollShadow>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-2 w-[95%] py-10 lg:py-16">
        <ProjectCard
          title={'Youth Council Project'}
          description={
            'Web application allowing young people to express their community improvement ideas'
          }
          technologies={['Spring Boot', 'PostgreSQL']}
        />
        <ProjectCard
          title={'Portfolio'}
          description={'My personal portfolio website'}
          technologies={['Next.js', 'Tailwind CSS']}
          isNew
          inProgress
        />
        <ProjectCard
          title={'Third-Life'}
          description={'Rust based life simulator'}
          technologies={['Rust']}
        />
        <ProjectCard
          title={'Tuh-Beh-Huh'}
          description={
            'Air quality Analizer utilizing real world up-to-date data from active sensors to set custom notifications for anomalies, forecasts, and historical data.'
          }
          technologies={['Spring Boot', 'React', 'PostgreSQL', 'Solid', 'Python']}
        />

        <ProjectCard
          title={'Tech-Topia'}
          description={
            'Comprehensive themepark management system with a handy theme park information system frontend'
          }
          technologies={['React', 'Spring Boot', 'PostgreSQL']}
        />
      </div>
      <Footer />
    </>
  );
}
