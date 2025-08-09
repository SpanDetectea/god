export interface IPagination {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalPages: number;
}