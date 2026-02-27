import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { education } from "@/lib/data/portfolio-data";

export function EducationSection() {
    return (
        <AccordionItem value="education">
            <AccordionTrigger className="text-base hover:no-underline">
                Education & Certificates
            </AccordionTrigger>
            <AccordionContent>
                <div className="space-y-5 px-5">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className={
                                index > 0 ? "border-t border-border pt-4" : ""
                            }
                        >
                            {edu.isWip ? (
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <div className="flex gap-3">
                                            <h3 className="font-semibold text-foreground">
                                                {edu.degree}
                                            </h3>
                                            <StatusIndicator variant="wip" />
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            {edu.institution}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h3 className="font-semibold text-foreground">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {edu.institution}
                                        {edu.period && ` • ${edu.period}`}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </AccordionContent>
        </AccordionItem>
    );
}
