/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				hostname: '*',
			},
		],
	},
}

module.exports = nextConfig
