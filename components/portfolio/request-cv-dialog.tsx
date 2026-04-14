"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type State = "idle" | "loading" | "success" | "error";

export function RequestCvDialog() {
    const [email, setEmail] = useState("");
    const [state, setState] = useState<State>("idle");
    const [open, setOpen] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setState("loading");

        try {
            const res = await fetch("/api/request-cv", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error ?? "Something went wrong.");
            }

            setState("success");
        } catch {
            setState("error");
        }
    }

    function handleOpenChange(next: boolean) {
        if (next) {
            setEmail("");
            setState("idle");
        }
        setOpen(next);
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button className="mt-1 h-10 rounded-lg bg-primary px-5 text-primary-foreground shadow-[0_10px_26px_rgb(242_199_114/0.2)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent active:translate-y-px">
                    <Mail className="mr-2 size-4" />
                    Request CV
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Request my CV</DialogTitle>
                    <DialogDescription>
                        Enter your email and I&apos;ll review your request and
                        send the CV directly to your inbox.
                    </DialogDescription>
                </DialogHeader>

                {state === "success" ? (
                    <p className="py-4 text-sm text-center text-muted-foreground">
                        Request received! I&apos;ll send the CV to{" "}
                        <strong>{email}</strong> shortly.
                    </p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="py-4">
                            <label
                                htmlFor="cv-request-email"
                                className="sr-only"
                            >
                                Email address
                            </label>
                            <Input
                                id="cv-request-email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={state === "loading"}
                            />
                            {state === "error" && (
                                <p className="mt-2 text-sm text-destructive">
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </div>
                        <DialogFooter>
                            <Button
                                type="submit"
                                disabled={state === "loading" || !email}
                                className="w-full sm:w-auto"
                            >
                                {state === "loading"
                                    ? "Sending request…"
                                    : "Send request"}
                            </Button>
                        </DialogFooter>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}
