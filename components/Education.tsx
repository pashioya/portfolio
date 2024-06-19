import { School2Icon } from 'lucide-react';
import {
  DottedTimelineConnector,
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from './TimeLine';

export default function Education() {
  return (
    <div className="pt-28 w-full" id="Education">
      <div className="container flex flex-row justify-center gap-10 py-10 lg:py-16">
        <div className="max-w-2xl text-center mx-auto">
          <p className="text-xl text-muted-foreground">Explore my</p>
          <div className="mt-1 max-w-2xl">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Education
            </h1>
          </div>
          <Timeline className="mt-24 pl-24">
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineTime>- 2018</TimelineTime>
                <TimelineIcon className="pl-2">
                  <School2Icon />
                </TimelineIcon>
                <TimelineTitle className="pl-2 ">USIU - Nairobi</TimelineTitle>
              </TimelineHeader>
              <TimelineContent>
                <TimelineDescription className="pl-2">
                  United States International University - Africa
                </TimelineDescription>
                <TimelineDescription className="pl-2">
                  Completed a Year of Computer Science
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineTime>- 2020</TimelineTime>
                <TimelineIcon className="pl-2">
                  <School2Icon />
                </TimelineIcon>
                <TimelineTitle className="pl-2">BIS - Berlin</TimelineTitle>
              </TimelineHeader>
              <TimelineContent>
                <TimelineDescription className="pl-2">
                  Berlin International School
                </TimelineDescription>
                <TimelineDescription className="pl-2">
                  International Baccalaureate Diploma
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineTime>- 2021</TimelineTime>
                <TimelineIcon className="pl-2">
                  <School2Icon />
                </TimelineIcon>
                <TimelineTitle className="pl-2">IUBH - Berlin</TimelineTitle>
              </TimelineHeader>
              <TimelineContent>
                <TimelineDescription className="pl-2">
                  IUBH Internationale Hochschule
                </TimelineDescription>
                <TimelineDescription className="pl-2">
                  Completed a Year of Computer Science
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <DottedTimelineConnector />
              <TimelineHeader>
                <TimelineTime>- 2024</TimelineTime>
                <TimelineIcon className="pl-2">
                  <School2Icon />
                </TimelineIcon>
                <TimelineTitle className="pl-2">KdG - Antwerp </TimelineTitle>
              </TimelineHeader>
              <TimelineContent>
                <TimelineDescription className="pl-2">Karel de Grote </TimelineDescription>
                <TimelineDescription className="pl-2">Bs.C Computer Science</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
}
