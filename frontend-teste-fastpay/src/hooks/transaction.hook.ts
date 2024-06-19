import create from 'zustand'
import { devtools } from 'zustand/middleware'
import api from '@/services/api'

type Transaction = {
  id?: number;
  description: string;
  value: number;
  date: string;
  categoryId: Number;
  category?: {
    name: string;
  };
};

type TransactionHook = {
  transactions?: Transaction[];
  getTransactions: () => void;
  addTransaction: (data: Transaction) => void;
  editTransaction: (id: number, data: Transaction) => void;
  deleteTransaction: (id: number) => void;
};

export const useTransactionHook = create<TransactionHook>()(
  devtools((set, get) => ({
    getTransactions: async () => {
      const response = await api.get('/transactions')
        .then((response) => {
          response.data.map((transaction: Transaction) => {
            transaction.date = new Date(transaction.date).toLocaleDateString('pt-BR');
          });
          set({ transactions: response.data });
        })
        .catch(() => {
          alert
            ('Erro ao carregar transações');
        }
        );
      return response;
    },
    addTransaction: async (data) => {
      const response = await api.post('/transactions', data)
        .then(() => {
          alert('Transação adicionada com sucesso');
          get().getTransactions();
        })
        .catch(() => {
          alert('Erro ao adicionar transação');
        });
      return response;
    },
    editTransaction: async (id, data) => {
      const response = await api.put(`/transactions/${id}`, data)
        .then(() => {
          alert('Transação editada com sucesso');
          get().getTransactions();
        })
        .catch(() => {
          alert('Erro ao editar transação');
        });
      return response;
    },
    deleteTransaction: async (id) => {
      const response = await api.delete(`/transactions/${id}`)
        .then(() => {
          alert('Transação deletada com sucesso');
          get().getTransactions();
        })
        .catch(() => {
          alert('Erro ao deletar transação');
        });

      return response;
    }
  }))
)