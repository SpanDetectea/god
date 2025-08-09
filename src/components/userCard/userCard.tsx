import { IUser } from '@/types/IUser';
import React from 'react';
import styles from "./userCard.module.css";
import { useRouter } from 'next/navigation';
const DEFAULT_AVATAR = "/user.svg";


const UserCard = (user: IUser) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/users/${user.id}`);
    };
    return (
        <li key={user.id} className={styles.card} onClick={handleClick}>
            <img
                className={styles.avatar}
                src={user.avatar || DEFAULT_AVATAR}
                alt={user.name}
            />
            <div>
                <h3 className={styles.name}>{user.name}</h3>
                <p className={styles.email}>{user.email}</p>
            </div>
        </li>
    );
}

export default UserCard;
