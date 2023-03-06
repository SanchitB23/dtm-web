import axios from 'axios'
import { API_ENDPOINTS } from '@/constants'
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios'

export class HttpService {
	client: AxiosInstance
	unauthorizedCallback: () => void

	constructor(options: AxiosRequestConfig = {}) {
		this.client = axios.create(options)
		this.client.interceptors.response.use(this.handleSuccessResponse, this.handleErrorResponse)
		this.unauthorizedCallback = () => undefined
	}

	attachHeaders(headers: Partial<AxiosRequestHeaders>) {
		Object.assign(this.client.defaults.headers, headers)
	}

	removeHeaders(headerKeys: [string] | []) {
		headerKeys.length !== 0 && headerKeys.forEach((key) => delete this.client.defaults.headers.common[key])
	}

	handleSuccessResponse(response: AxiosResponse): Promise<AxiosResponse> | AxiosResponse {
		return {
			...response,
		}
	}

	handleErrorResponse = async (error) => {
		const { status } = error as AxiosError
		if (status === 401) {
			this.unauthorizedCallback()
		}
		throw error
	}

	setUnauthorizedCallback(callback: () => void) {
		this.unauthorizedCallback = callback
	}
}

const httpService = new HttpService({
	baseURL: process.env.API_BASE_URL ?? API_ENDPOINTS.BASE_URL,
	timeout: 5000,
})

export default httpService
