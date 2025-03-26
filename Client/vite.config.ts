import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import "vitest/config";

// https://vite.dev/config/
export default defineConfig({
	plugins: [svelte()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./src/setupTests.ts"]
	}
});
