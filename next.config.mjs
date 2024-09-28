/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	// distDir: "build",
	env: {
		REACT_APP_MAP_API_KEY: process.env.REACT_APP_MAP_API_KEY,
	},
};

export default nextConfig;
