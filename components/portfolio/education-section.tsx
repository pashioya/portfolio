import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { education } from "@/lib/data/portfolio-data";
import { EntryCard } from "./entry-card";

export function EducationSection() {
    return (
        <AccordionItem value="education">
            <AccordionTrigger className="text-base font-semibold hover:no-underline md:text-base">
                Education & Certificates
            </AccordionTrigger>
            <AccordionContent>
                <div className="space-y-6 px-5">
                    {education.map((edu, index) => (
                        <div
                            key={`${edu.degree}-${edu.institution}-${edu.period ?? "no-period"}`}
                            className={
                                index > 0
                                    ? "border-t border-border/90 pt-6"
                                    : ""
                            }
                        >
                            <EntryCard
                                title={edu.degree}
                                subtitle={
                                    edu.period
                                        ? `${edu.institution} • ${edu.period}`
                                        : edu.institution
                                }
                                status={edu.isWip ? "wip" : undefined}
                                bullets={edu.highlights}
                            />
                        </div>
                    ))}
                </div>
            </AccordionContent>
        </AccordionItem>
    );
}
