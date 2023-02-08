import httpService from './http.service'
import type { AxiosInstance } from 'axios'

class ApiService {
	api: typeof httpService
	apiClient: AxiosInstance

	constructor() {
		this.api = httpService
		this.apiClient = this.api.client
	}
}

export default ApiService
