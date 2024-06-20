import create from 'zustand';
import { devtools } from 'zustand/middleware';
import api from '@/services/api';

type CategoryType = 'predefined' | 'custom' | 'all';

export type Category = {
  id: number;
  name: string;
  type: CategoryType;
};

type CategoryHook = {
  categories?: Category[];
  selectedCategoryType: CategoryType;
  setSelectedCategoryType: (type: CategoryType) => void;
  getCategoriesByType: () => void;
  addCategory: (name: string, type: string) => void;
  getAllCategories: () => void;
};

export const useCategoryHook = create<CategoryHook>()(
  devtools((set, get) => ({
    selectedCategoryType: 'all',
    setSelectedCategoryType: (type) => set({ selectedCategoryType: type }),
    getCategoriesByType: () => {
      api.get(`/categories/${get().selectedCategoryType}`)
        .then((response) => { 
          set({ categories: response.data });
        })
        .catch(() => {
          alert('Erro ao carregar categorias');
        });
    },
    addCategory: (name, type) => {
      api.post('/categories', { name, type })
        .then(() => {
          alert('Categoria adicionada com sucesso');
          get().getCategoriesByType();
        })
        .catch(() => {
          alert('Erro ao adicionar categoria');
        });
    },
    getAllCategories: () => {
      api.get('/categories')
        .then((response) => {
          console.log(response);
          set({ categories: response.data });
        })
        .catch(() => {
          alert('Erro ao carregar categorias');
        });
    },
  }))
)