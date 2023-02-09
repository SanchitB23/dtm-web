import ApiService from '@/services/api.service'

class TempService extends ApiService {
	getPosts = async () =>
		await this.apiClient.get('https://jsonplaceholder.typicode.com/posts').then((res) => ({
			data: res.data,
			status: res.status,
		}))
}

const tempService = new TempService()
export default tempService
