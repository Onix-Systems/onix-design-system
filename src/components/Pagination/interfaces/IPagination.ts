export interface IPagination {
  currentPage: number
  lastPage: number
  total: number
  setPage: (pageNumber: number) => void
  perPage: number
}
