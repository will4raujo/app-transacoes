import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import api from '@/services/api'
import { useAsyncHook } from '@/hooks/async.hook'

interface LoginModel {
  email: string;
  password: string;
}
  
interface AuthData {
  isAuthenticated?: boolean;
  token?: string;
  login: (data: LoginModel) => Promise<boolean>
  logout: () => void
}

export const useAuthHook = create<AuthData>()(
  devtools(
    persist(
      (set, get) => ({
        login: async (data: LoginModel) => {
          const asyncHook = useAsyncHook.getState()
          asyncHook.loading()

          try {
            const response = await api.post('/sessions', data)
            const token = response.data.token
            set((state ) => ({
              ...state,
              isAuthenticated: true,
              token,
            })) 
            asyncHook.sucess()
          } catch (error) {
            if ( error instanceof Error) {
              alert('Login ou senha inválidos')
              asyncHook.sucess()
            }
            return false
          }
          return true
        },
        logout: () => {
          set(() => ({
            isAuthenticated: false,
            token: undefined,
          }))
        },
      }),
      {
        name: 'app-auth',
        getStorage: () => localStorage,
      },
    ),
  ),
)