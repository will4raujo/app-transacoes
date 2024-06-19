import create from 'zustand'
import { devtools } from 'zustand/middleware'
import api from '@/services/api'

type Transaction = {
  id?: number;
  description: string;
  value: number;
  date: string;
  categoryId: Number;
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
    getTransactions: () => {
      api.get('/transactions')
        .then((response) => {
          set({ transactions: response.data });
        })
        .catch(() => {
          alert
            ('Erro ao carregar transações');
        }
        );
    },
    addTransaction: (data) => {
      console.log('addtransaction', data)
      api.post('/transactions', data)
        .then(() => {
          alert('Transação adicionada com sucesso');
          get().getTransactions();
        })
        .catch(() => {
          alert('Erro ao adicionar transação');
        });
    },
    editTransaction: (id, data) => {
      api.put(`/transactions/${id}`, data)
        .then(() => {
          alert('Transação editada com sucesso');
          get().getTransactions();
        })
        .catch(() => {
          alert('Erro ao editar transação');
        });
    },
    deleteTransaction: (id) => {
      api.delete(`/transactions/${id}`)
        .then(() => {
          alert('Transação deletada com sucesso');
          get().getTransactions();
        })
        .catch(() => {
          alert('Erro ao deletar transação');
        });
    }
  }))
)