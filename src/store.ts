import { writable } from 'svelte/store';

export const chartsData = writable(null);

export const loading = writable(false);

export const storeValue = writable(1);
