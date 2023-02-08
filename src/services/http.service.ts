import axios from 'axios'
import { API_ENDPOINTS } from '@/constants'
import type { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios'

class HttpService {
	client: AxiosInstance
	unauthorizedCallback: () => void

	constructor(options = {}) {
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

	handleErrorResponse = async (error: any) => {
		try {
			const { status } = error.response
			switch (status) {
				case 401:
					this.unauthorizedCallback()
					break
				default:
					break
			}
			return await Promise.reject(error.response)
		} catch (e) {
			return await Promise.reject(error)
		}
	}

	setUnauthorizedCallback(callback: () => void) {
		this.unauthorizedCallback = callback
	}
}

const options: AxiosRequestConfig = {
	baseURL: process.env.API_URL ?? API_ENDPOINTS.BASE_URL,
	timeout: 5000,
}
const httpService = new HttpService(options)

export default httpService
