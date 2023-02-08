import { SESSION_STORAGE_KEYS } from '@/constants'
import ApiService from '@/services/api.service'

class AuthService extends ApiService {
	/* Constructor and Init */
	constructor() {
		super()
		void this.init().then(() => {
			console.log('Auth Service Initialized')
		})
	}

	init = async () => {
		const token = await this.getToken()
		const user = await this.getUser()

		if (token != null && Boolean(user)) {
			await this.setAuthorizationHeader()
		}
		this.api.setUnauthorizedCallback(this.destroySession.bind(this))
	}

	/* Helper Functions */

	/* 	login = async (loginData: LoginFormValues): Promise<AxiosResponse<LoginSuccessResponse | LoginFailureResponse>> =>
      await this.apiClient
        .post(`${API_VERSION.ONE}${API_ENDPOINTS.LoginWithEmail}`, loginData)
        .then(async (res) => {
          await this.createSession({ userId: res.data.user.id, token: res.data.token })
          return res
        })
        .catch((error) => error.data) */

	logout = async () => {
		await this.destroySession()
	} /*
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

	private readonly getToken = async (): Promise<string | undefined> => {
		const user = sessionStorage.getItem(SESSION_STORAGE_KEYS.USER_TOKEN)
		return user != null ? JSON.parse(user).token : undefined
	}

	private readonly getUser = async () => {
		const user = sessionStorage.getItem(SESSION_STORAGE_KEYS.USER_TOKEN)
		return user != null && JSON.parse(user)
	}

	private readonly setAuthorizationHeader = async () => {
		const token = await this.getToken()
		if (token != null) {
			this.api.attachHeaders({
				Authorization: `Bearer ${token}`,
			})
		}
	}

	private readonly createSession = async (user: any) => {
		sessionStorage.setItem(SESSION_STORAGE_KEYS.USER_TOKEN, JSON.stringify(user))
		await this.setAuthorizationHeader()
	}

	private readonly destroySession = async () => {
		console.log('[[AuthService]] Session Data Destroyed')
		sessionStorage.getItem(SESSION_STORAGE_KEYS.USER_TOKEN)
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
