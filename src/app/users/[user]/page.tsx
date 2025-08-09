'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { useUser } from '@/hooks/useUser';

export default function UserDetailsPage() {
    const router = useRouter();
    const { data, loading, error } = useUser()

    if (loading) {
        return <p className={styles.message}>Загрузка...</p>
    }

    if (error) {
        return <p className={`${styles.message} ${styles.error}`}>{error}</p>
    }

    return (
        <div className={styles.container}>
            <button
                onClick={() => router.push('/users')}
                className={styles.backButton}
            >
                ← Назад
            </button>

            {data && (
                <div className={styles.card}>
                    <h1 className={styles.title}>{data.name}</h1>

                    <p className={styles.infoRow}>
                        <span className={styles.infoLabel}>Username:</span> {data.username ?? '—'}
                    </p>
                    <p className={styles.infoRow}>
                        <span className={styles.infoLabel}>Email:</span> {data.email}
                    </p>
                    <p className={styles.infoRow}>
                        <span className={styles.infoLabel}>Phone:</span> {data.phone ?? '—'}
                    </p>
                    <p className={styles.infoRow}>
                        <span className={styles.infoLabel}>Website:</span>{' '}
                        {data.website ? (
                            <a
                                href={`https://${data.website}`}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.link}
                            >
                                {data.website}
                            </a>
                        ) : (
                            '—'
                        )}
                    </p>

                    {data.address && (
                        <div className={styles.section}>
                            <h3 className={styles.sectionTitle}>Адрес</h3>
                            <p>
                                {data.address.street}, {data.address.suite}
                            </p>
                            <p>
                                {data.address.city}, {data.address.zipcode}
                            </p>
                        </div>
                    )}

                    {data.company && (
                        <div className={styles.section}>
                            <h3 className={styles.sectionTitle}>Компания</h3>
                            <p>{data.company.name}</p>
                            {data.company.catchPhrase && (
                                <p className={styles.italic}>{data.company.catchPhrase}</p>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
