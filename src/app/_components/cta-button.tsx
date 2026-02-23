"use client";

import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { WaitlistModal } from "./waitlist-modal";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg" | "sm";
  variant?: "default" | "outline" | "secondary" | "ghost";
}

export function CTAButton({
  children,
  className,
  size = "lg",
  variant = "default",
}: CTAButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        size={size}
        variant={variant}
        className={className}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>
      <Suspense>
        <WaitlistModal open={open} onOpenChange={setOpen} />
      </Suspense>
    </>
  );
}
