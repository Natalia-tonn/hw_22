
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomQuote } from '../features/quote/quoteSlice';
import styles from './Quote.module.css';

const Quote = () => {
    const dispatch = useDispatch();
    const { quote, author, status, error } = useSelector((state) => state.quote);

    useEffect(() => {
        dispatch(fetchRandomQuote());
    }, [dispatch]);

    const loadNewQuote = () => {
        dispatch(fetchRandomQuote());
    };

    return (
        <div className={styles.container}>
            <h2>Random Quote</h2>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {status === 'succeeded' && (
                <div className={styles.quoteContainer}>
                    <blockquote className={styles.quoteText}>"{quote}"</blockquote>
                    <p className={styles.author}>— {author}</p>
                </div>
            )}
            <button onClick={loadNewQuote} style={{ marginTop: '20px' }}>
                Get New Quote
            </button>
        </div>
    );
};

export default Quote;




