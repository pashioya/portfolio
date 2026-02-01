"use client";

import { useQuery } from "@tanstack/react-query";

import type { VisitorStats } from "@/components/VisitorDialog";

const initial: VisitorStats = { total: 0, unique: 0, live: 0 };
const LIVE_WINDOW_MS = 5 * 60 * 1000;

async function recordVisit(signal?: AbortSignal): Promise<void> {
    const res = await fetch("/api/visitors", { method: "POST", signal });
    if (!res.ok) throw new Error(`POST failed with ${res.status}`);
}

async function getStatsOnly(signal?: AbortSignal): Promise<VisitorStats> {
    const res = await fetch("/api/visitors", { signal });
    if (!res.ok) throw new Error(`GET failed with ${res.status}`);
    return (await res.json()) as VisitorStats;
}

async function fetchVisitorStats(signal?: AbortSignal): Promise<VisitorStats> {
    await recordVisit(signal);
    return await getStatsOnly(signal);
}

export type UseVisitorStatsOptions = {
    enabled?: boolean;
    retry?: number;
};

export function useVisitorStats(options: UseVisitorStatsOptions = {}) {
    const { enabled = true, retry = 1 } = options;

    const query = useQuery<VisitorStats>({
        queryKey: ["visitor-stats"],
        queryFn: ({ signal }) => fetchVisitorStats(signal),
        enabled,
        retry,
        refetchInterval: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        staleTime: LIVE_WINDOW_MS,
        initialData: initial,
        // Mark initial data as stale so we always fetch on first mount.
        initialDataUpdatedAt: 0,
    });

    return {
        stats: query.data ?? initial,
        error: query.error,
        isLoading: query.isLoading,
        refetch: query.refetch,
    };
}
