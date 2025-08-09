import React from 'react';
import styles from "./Pagination.module.css";
import { IPagination } from '@/types/IPagination';

const Pagination = ({ currentPage, setCurrentPage, totalPages }: IPagination) => {
    return (
        <div className={styles.pagination}>
            <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
            >
                Назад
            </button>
            <span>
                Страница {currentPage} из {totalPages}
            </span>
            <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
            >
                Вперед
            </button>
        </div>
    );
}

export default Pagination;
