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
            <AccordionTrigger className="text-base hover:no-underline">
                Work Experience
            </AccordionTrigger>
            <AccordionContent>
                <div className="space-y-5 px-5">
                    {workExperiences.map((work, index) => (
                        <div
                            key={`${work.title}-${work.company}-${work.period}`}
                            className={
                                index > 0 ? "border-t border-border pt-4" : ""
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
