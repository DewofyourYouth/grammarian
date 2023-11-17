import { writable } from "svelte/store";
import { persisted } from "svelte-persisted-store";

export const speakers = persisted("speakers", []);
