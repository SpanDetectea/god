import { useState } from "react";

export function usePagination<U>(data: U[], itemsPerPage: number) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const currentUsers = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    return { currentPage, setCurrentPage, totalPages, currentUsers };
}