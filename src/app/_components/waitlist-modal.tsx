"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { z } from "zod";

import { siteConfig } from "@/config/site";
import { api } from "@/trpc/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const joinWaitlist = api.waitlist.join.useMutation({
    onSuccess: () => setStep(2),
  });

  function resetForm() {
    setStep(1);
    setEmail("");
    setError("");
    joinWaitlist.reset();
  }

  function handleOpenChange(open: boolean) {
    if (!open) resetForm();
    onOpenChange(open);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const result = formSchema.safeParse({ email });
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Invalid email");
      return;
    }

    joinWaitlist.mutate({ email: result.data.email });
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="border-border/50 sm:max-w-md">
        {step === 1 ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">
                Join the{" "}
                <span className="text-gradient-primary">
                  {siteConfig.name}
                </span>{" "}
                Waitlist
              </DialogTitle>
              <DialogDescription>
                {siteConfig.description}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!error}
                />
                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}
              </div>

              {joinWaitlist.error && (
                <p className="text-sm text-destructive">
                  Something went wrong. Please try again.
                </p>
              )}

              <Button
                type="submit"
                disabled={joinWaitlist.isPending}
                className="mt-2 w-full"
              >
                {joinWaitlist.isPending ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Submitting…
                  </>
                ) : (
                  "Join the Waitlist"
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center gap-6 py-4 text-center">
            <div className="animate-scale-in flex size-16 items-center justify-center rounded-full bg-primary/20">
              <CheckCircle className="size-8 text-primary" />
            </div>

            <div className="grid gap-2">
              <h3 className="text-xl font-semibold">You&apos;re in!</h3>
              <p className="text-muted-foreground text-sm">
                We&apos;ll send updates to{" "}
                <span className="text-foreground font-medium">{email}</span>{" "}
                when {siteConfig.name} is ready. Stay tuned!
              </p>
            </div>

            <Button
              onClick={() => handleOpenChange(false)}
              className="w-full"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
