import { LoopsClient } from "loops";
import { z } from "zod";

import { env } from "@/env";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

let _loops: LoopsClient | null = null;
function getLoopsClient() {
  _loops ??= new LoopsClient(env.LOOPS_API_KEY);
  return _loops;
}

export const waitlistRouter = createTRPCRouter({
  join: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input }) => {
      const contactPayload = {
        email: input.email,
        mailingLists: {
          [env.LOOPS_WAITLIST_ID]: true,
        },
      };

      try {
        await getLoopsClient().createContact(contactPayload);
      } catch {
        // Contact already exists — update instead
        await getLoopsClient().updateContact(contactPayload);
      }

      return { success: true };
    }),
});
