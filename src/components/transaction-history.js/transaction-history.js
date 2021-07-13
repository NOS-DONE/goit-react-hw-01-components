import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction-history.module.css';

const TransactionHistory = ({ items }) => (
  <table class={styles.transaction__history}>
    <thead class={styles.thead}>
      <tr class={styles.table__tr}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    {items.map(({ id, type, amount, currency }) => (
      <tbody key={id} class={styles.tbody}>
        <tr class={styles.tbody__row}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      </tbody>
    ))}
  </table>
);

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionHistory;
