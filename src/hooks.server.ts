import { SvelteKitAuth } from '@airbadge/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export const { handle } = SvelteKitAuth({
	adapter: PrismaAdapter(db),
	providers: [GitHub]
});
