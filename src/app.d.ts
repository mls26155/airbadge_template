// src/app.d.ts
import type { Session } from '@auth/core/types';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			getSession(): Promise<Session | null>;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export interface PageData {
	session: Session | null;
	// Add other properties if needed
}

export {};
