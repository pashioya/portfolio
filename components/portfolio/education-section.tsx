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
                                index > 0 ? "border-t border-zinc-700 pt-4" : ""
                            }
                        >
                            {edu.isWip ? (
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <div className="flex gap-3">
                                            <h3 className="font-semibold text-zinc-100">
                                                {edu.degree}
                                            </h3>
                                            <StatusIndicator
                                                variant="wip"
                                                className="mt-1.5 shrink-0"
                                            />
                                        </div>
                                        <p className="text-sm text-zinc-400">
                                            {edu.institution}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h3 className="font-semibold text-zinc-100">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-sm text-zinc-400">
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
