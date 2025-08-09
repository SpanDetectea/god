import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/typedHooks';
import {
    fetchUserStart,
    fetchUserSuccess,
    fetchUserFailure,
    clearUser,
} from '@/store/slices/userSlices';
import { api } from '@/api/axios';
import { useParams } from 'next/navigation';

export const useUser = () => {
    const { user } = useParams() as { user: string };

    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector((s) => s.user);

    useEffect(() => {
        if (!user) return;

        const load = async () => {
            dispatch(fetchUserStart());
            try {
                const res = await api.get(`/users/${user}`);
                dispatch(fetchUserSuccess(res.data));
            } catch (err) {
                const message = 'Ошибка загрузки пользователя';
                dispatch(fetchUserFailure(message));

            }
        };

        load();

        return () => {
            dispatch(clearUser());
        };
    }, [user]);

    return { data, loading, error };
};
