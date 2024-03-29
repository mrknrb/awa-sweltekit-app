import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	server: {
		port: 4000,
		strictPort: false
	},
	preview: {
		port: 4000,
		strictPort: false
	}
};
export default config;
