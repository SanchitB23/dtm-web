import { signOut } from 'next-auth/react'
import { API_ENDPOINTS } from '@/constants'
import ApiService from '@/services/api.service'
import type { ILoginData } from '@/types/auth'
import type { AxiosResponse } from 'axios'

class AuthService extends ApiService {
	/* Constructor and Init */
	constructor() {
		super()
		void this.init().then(() => {
			console.log('Auth Service Initialized')
		})
	}

	init = async (token?: string) => {
		// const token = await this.getToken()
		// const user = await this.getUser()

		await this.setAuthorizationHeader(token)
		this.api.setUnauthorizedCallback(this.destroySession.bind(this))
	}

	/* Helper Functions */
	/* <LoginSuccessResponse | LoginFailureResponse>> */
	login = async (loginData: Record<keyof ILoginData, string> | undefined): Promise<AxiosResponse> =>
		await this.apiClient.post(API_ENDPOINTS.LOGIN, loginData).then(
			async (res) =>
				// await this.createSession({ userId: res.data.user.id, token: res.data.token })
				// todo add header with token
				res
		)

	logout = async () => {
		await this.destroySession()
	}
	/*
    currentUser = async () =>
      await this.apiClient
        .get(`${API_VERSION.ONE}${API_ENDPOINTS.CurrentUser}`)
        .then((res) => ({
          id: res.data.userId,
          email: res.data.email,
          userType: res.data.userType,
        }))
        .catch((reason) => reason.data)

    signup = async (signupData: LoginFormValues): Promise<SignUpResponse> => {
      try {
        const res = await this.apiClient.post(`${API_VERSION.ONE}${API_ENDPOINTS.SignUpWithEmail}`, signupData)
        return {
          data: res.data, // @ts-expect-error
          status: res.statusCode,
        }
      } catch (reason) {
        return {
          data: reason.data.message,
          status: reason.data.statusCode,
        }
      }
    }

    createProfile = async (formData: FormData) => {
      try {
        const res = await this.apiClient.put(`${API_VERSION.ONE}${API_ENDPOINTS.CreateProfile}`, formData, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        })
        return {
          data: res.data, // @ts-expect-error
          status: res.statusCode,
        }
      } catch (reason) {
        return {
          data: reason.data.message,
          status: reason.data.statusCode,
        }
      }
    } */

	/* API Handlers */

	/* 	private readonly getToken = async (): Promise<string | null> => {
      const user = sessionStorage.getItem(SESSION_STORAGE_KEYS.USER_TOKEN)
      return !(user == null) ? JSON.parse(user).token : null
    }

    private readonly getUser = async () => {
      const user = sessionStorage.getItem(SESSION_STORAGE_KEYS.USER_TOKEN)
      return user != null && JSON.parse(user)
    } */

	private readonly setAuthorizationHeader = async (token?: string) => {
		// const token = await this.getToken()
		if (token != null) {
			this.api.attachHeaders({
				Authorization: `Bearer ${token}`,
			})
		}
	}

	/* 	private readonly createSession = async (user: any) => {
      sessionStorage.setItem(SESSION_STORAGE_KEYS.USER_TOKEN, JSON.stringify(user))
      await this.setAuthorizationHeader()
    } */

	private readonly destroySession = async () => {
		console.log('[[AuthService]] Session Data Destroyed')
		// sessionStorage.getItem(SESSION_STORAGE_KEYS.USER_TOKEN)
		await signOut()
		this.api.removeHeaders(['Authorization'])
	}

	/*  forgotPassword = data => this.apiClient.post(api.auth.FORGOT_PASSWORD, data);

    resetPassword = data => this.apiClient.post(api.auth.RESET_PASSWORD, data); */

	/*  updateUserInStorage = async property => {
      const user = await AsyncStorage.getItem("user");
      let jsonUser = JSON.parse(user);
      jsonUser = {...jsonUser, ...property};
      AsyncStorage.setItem("user", JSON.stringify(jsonUser));
    }; */
}

const authService = new AuthService()

export default authService
