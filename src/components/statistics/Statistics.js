import React from 'react';
import PropTypes from 'prop-types';
import statisticalData from './statistical-data.json';
import styles from './Statistics.module.css';

const Statistics = ({ title }) => (
  <section class={styles.statistics}>
    {title && <h2 class="title">{title}</h2>}

    <ul class={styles.statList}>
      {statisticalData.map(({ id, label, percentage }) => (
        <li
          key={id}
          class={styles.item}
          style={{ backgroundColor: `${setBg()}` }}
        >
          <span class="label">{label}</span>
          <span class="percentage">{`${percentage}%`}</span>
        </li>
      ))}
    </ul>
  </section>
);

function setBg() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const color = '#' + randomColor;
  return color;
}

Statistics.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
};

export default Statistics;
