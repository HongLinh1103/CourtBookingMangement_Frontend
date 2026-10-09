import { create } from 'zustand';
import type { CustomerFilterState, PaginationState } from '../types/customer';

export interface CustomerState {
  searchKeyword: string;
  selectedCustomerId: string | null;
  filters: CustomerFilterState;
  pagination: PaginationState;
  setSearchKeyword: (keyword: string) => void;
  setSelectedCustomerId: (id: string | null) => void;
  setFilters: (filters: Partial<CustomerFilterState>) => void;
  setPagination: (pagination: Partial<PaginationState>) => void;
  resetFilters: () => void;
}

const initialFilters: CustomerFilterState = {
  status: 'all',
  memberType: 'all',
  isGuest: 'all',
};

const initialPagination: PaginationState = {
  pageNumber: 1,
  pageSize: 10,
  totalCount: 0,
  totalPages: 1,
};

export const useCustomerStore = create<CustomerState>((set) => ({
  searchKeyword: '',
  selectedCustomerId: null,
  filters: initialFilters,
  pagination: initialPagination,

  setSearchKeyword: (searchKeyword) =>
    set((state) => ({
      searchKeyword,
      pagination: { ...state.pagination, pageNumber: 1 },
    })),

  setSelectedCustomerId: (selectedCustomerId) => set({ selectedCustomerId }),

  setFilters: (filters) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
      pagination: { ...state.pagination, pageNumber: 1 },
    })),

  setPagination: (pagination) =>
    set((state) => ({
      pagination: { ...state.pagination, ...pagination },
    })),

  resetFilters: () =>
    set({
      searchKeyword: '',
      filters: initialFilters,
      pagination: { ...initialPagination },
    }),
}));
