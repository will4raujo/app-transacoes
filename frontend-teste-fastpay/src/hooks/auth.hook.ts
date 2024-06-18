import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import api from '@/services/api'

interface LoginModel {
  email: string;
  password: string;
}
  
interface AuthData {
  isAuthenticated?: boolean;
  token?: string;
  login: (data: LoginModel) => Promise<boolean>
}

export const useAuthHook = create<AuthData>()(
  devtools(
    persist(
      (set, get) => ({
        login: async (data: LoginModel) => {
          try {
            const response = await api.post('/sessions', data)
            const token = response.data.token
            
            set((state ) => ({
              ...state,
              isAuthenticated: true,
              token,
            })) 
          } catch (error) {
            if ( error instanceof Error) {
              alert('Login ou senha inválidos')
            }
            return false
          }
          return true
        }
      }),
      {
        name: 'fastpay-auth',
        getStorage: () => localStorage,
      },
    ),
  ),
)