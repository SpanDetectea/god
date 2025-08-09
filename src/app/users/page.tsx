"use client";
import { api } from "@/api/axios";
import { fetchUsersFailure, fetchUsersStart, fetchUsersSuccess } from "@/store/slices/usersSlices";
import { RootState } from "@/store/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.css";
import { IUser } from "@/types/IUser";
import UserCard from "@/components/userCard/userCard";
import Pagination from "@/components/pagination/Pagination";
import { usePagination } from "@/hooks/usePagination";

const UsersList = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state: RootState) => state.users);

    const usersPerPage = 6;
    const { currentPage, setCurrentPage, totalPages, currentUsers } = usePagination<IUser>(data, usersPerPage);


    useEffect(() => {
        const fetchUsers = async () => {
            dispatch(fetchUsersStart());
            try {
                const response = await api.get("/users");
                dispatch(fetchUsersSuccess(response.data));
            } catch (err) {
                dispatch(fetchUsersFailure("Ошибка загрузки пользователей"));
            }
        };

        fetchUsers();
    }, [dispatch]);

    if (loading) {
        return <p className={styles.loading}>Загружаем пользователей...</p>
    }

    if (error) {
        return <div className={styles.error}>
            <span>⚠</span>
            <p>{error}</p>
        </div>
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Список пользователей</h2>
            <ul className={styles.list}>
                {currentUsers.map((user: IUser) => (
                    <UserCard key={user.id} {...user} />
                ))}
            </ul>
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default UsersList;
