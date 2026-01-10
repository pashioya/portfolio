"use client";

import CountUp from "@/components/CountUp";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export type VisitorStats = {
    total: number;
    unique: number;
    live: number;
};

type Props = {
    stats: VisitorStats;
};

export function VisitorDialog({ stats }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    type="button"
                    className="absolute right-4 top-4 z-20 max-w-xs rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left shadow-lg shadow-fuchsia-500/10 backdrop-blur transition hover:border-white/30 hover:shadow-fuchsia-400/15 sm:right-8 sm:top-8"
                >
                    <div className="flex items-center justify-between gap-3">
                        <div className="text-left text-sm text-slate-200/80">
                            <div className="font-semibold text-slate-50">
                                Profile visitors
                            </div>
                            <div className="text-xs text-slate-300/70">
                                Tap to view details
                            </div>
                        </div>
                        <div className="text-3xl font-semibold text-fuchsia-200">
                            <CountUp to={stats.total} separator="," />
                        </div>
                    </div>
                </button>
            </DialogTrigger>

            <DialogContent className="bg-[#0b0820] text-slate-100 border-white/10">
                <DialogHeader>
                    <DialogTitle>Profile visitors</DialogTitle>
                </DialogHeader>

                <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <div className="text-sm text-slate-200/80">
                            Total visitors
                        </div>
                        <div className="text-2xl font-semibold text-fuchsia-200">
                            {stats.total}
                        </div>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <div className="text-sm text-slate-200/80">
                            Unique visitors
                        </div>
                        <div className="text-2xl font-semibold text-fuchsia-200">
                            {stats.unique}
                        </div>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <div className="text-sm text-slate-200/80">
                            Currently Live
                        </div>
                        <div className="text-2xl font-semibold text-fuchsia-200">
                            {stats.live}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
