import { HttpService } from '@/services/http.service'
import type { AxiosInstance } from 'axios'

class CmsService extends HttpService {
	client: AxiosInstance
	// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
	private readonly baseURL = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/environments/master/entries`
	constructor() {
		super()
		const client = new HttpService({
			baseURL: this.baseURL,
			params: { select: 'sys.id,fields' },
		})
		this.client = client.client
		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		this.attachHeaders({ Authorization: `Bearer ${process.env.CONTENTFUL_KEY}` })
	}

	async getFaq() {
		return await this.client.get('', {
			params: { content_type: 'faq' },
		})
	}
}
const cmsClient = new CmsService()

export default cmsClient
