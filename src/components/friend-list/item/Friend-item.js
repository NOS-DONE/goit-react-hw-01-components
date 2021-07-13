import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friend-item.module.css';

const FriendListItem = ({ src, name, isOnline }) => (
  <li class={styles.item}>
    <span class={isOnline ? styles.online : styles.ofline}></span>
    <img class={styles.avatar} src={src} alt={name} width="48" />
    <p class="name">{name}</p>
  </li>
);
export default FriendListItem;

FriendListItem.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
