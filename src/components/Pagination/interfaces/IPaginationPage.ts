export interface IPaginationPage {
  currentPage: number
  lastPage: number
  perPage: number
  total: number
  setPage: (pageNumber: number) => void
}
