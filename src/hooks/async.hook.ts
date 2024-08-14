import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface AsyncHook {
  isLoading: boolean;
  loading: () => void;
  sucess: () => void;
}

export const useAsyncHook = create<AsyncHook>()(
  devtools((set) => ({
    isLoading: false,
    loading: () => set({ isLoading: true }),
    sucess: () => set({ isLoading: false }),
  }),
    {
      name: 'default-storage',
    },
  ),
)