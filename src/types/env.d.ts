declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production'
			CONTENTFUL_SPACE: string
			CONTENTFUL_KEY: string
		}
	}
}
