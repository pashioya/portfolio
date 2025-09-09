'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
const STORAGE_KEY = 'renovation_notice_dismissed_v1';

export function RenovationNotice() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) !== 'true') {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  const dismiss = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // ignore
    }
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={next => {
        if (!next) dismiss();
        else setOpen(true);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Under Renovation</DialogTitle>
          <DialogDescription>
            This site is undergoing renovations. Please check back soon.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <button
            onClick={dismiss}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
          >
            Visit Anyways
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default RenovationNotice;
