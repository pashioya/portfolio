import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { workExperiences } from "@/lib/data/portfolio-data";
import { EntryCard } from "./entry-card";
export function WorkExperience() {
    return (
        <AccordionItem value="work">
            <AccordionTrigger className="font-semibold hover:no-underline md:text-base">
                Work Experience
            </AccordionTrigger>
            <AccordionContent>
                <div className="space-y-6 px-5">
                    {workExperiences.map((work, index) => (
                        <div
                            key={`${work.title}-${work.company}-${work.period}`}
                            className={
                                index > 0
                                    ? "border-t border-border/90 pt-6"
                                    : ""
                            }
                        >
                            <EntryCard
                                title={work.title}
                                subtitle={`${work.company} • ${work.period}`}
                                status={work.isCurrent ? "current" : undefined}
                                bullets={work.responsibilities}
                                tags={work.tags}
                            />
                        </div>
                    ))}
                </div>
            </AccordionContent>
        </AccordionItem>
    );
}
