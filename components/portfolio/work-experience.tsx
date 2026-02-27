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
                            key={index}
                            className={
                                index > 0 ? "border-t border-zinc-700 pt-4" : ""
                            }
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <div className="flex gap-3">
                                        <h3 className="font-semibold text-zinc-100">
                                            {work.title}
                                        </h3>
                                        {work.isCurrent && (
                                            <StatusIndicator
                                                variant="current"
                                                className="mt-1.5 shrink-0"
                                            />
                                        )}
                                    </div>
                                    <p className="text-sm text-zinc-400">
                                        {work.company} • {work.period}
                                    </p>
                                    <ul className="mt-2 space-y-1 text-sm text-zinc-300">
                                        {work.responsibilities.map(
                                            (resp, idx) => (
                                                <li key={idx}>• {resp}</li>
                                            )
                                        )}
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
