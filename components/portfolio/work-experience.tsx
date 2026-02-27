import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { workExperiences } from "@/lib/data/portfolio-data";

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
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <div className="flex gap-3">
                                        <h3 className="font-semibold text-foreground">
                                            {work.title}
                                        </h3>
                                        {work.isCurrent && (
                                            <StatusIndicator variant="current" />
                                        )}
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {work.company} • {work.period}
                                    </p>
                                    <ul className="mt-2 space-y-1 text-sm text-foreground">
                                        {work.responsibilities.map((resp) => (
                                            <li key={resp}>• {resp}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </AccordionContent>
        </AccordionItem>
    );
}
