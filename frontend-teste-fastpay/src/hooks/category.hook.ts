import create from 'zustand';
import { devtools } from 'zustand/middleware';
import api from '@/services/api';

type CategoryType = 'predefined' | 'custom';

type Category = {
  id: number;
  name: string;
  type: CategoryType;
};

type CategoryHook = {
  categories?: Category[];
  selectedCategoryType: CategoryType;
  setSelectedCategoryType: (type: CategoryType) => void;
  getCategories: () => void;
  addCategory: (name: string, type: string) => void;
};

export const useCategoryHook = create<CategoryHook>()(
  devtools((set, get) => ({
    selectedCategoryType: 'predefined',
    setSelectedCategoryType: (type) => set({ selectedCategoryType: type }),
    getCategories: () => {
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
          get().getCategories();
        })
        .catch(() => {
          alert('Erro ao adicionar categoria');
        });
    },
  }))
)