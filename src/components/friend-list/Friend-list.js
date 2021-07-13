import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './item/Friend-item';
import styles from './Friedn-list.module.css';

const FriendList = ({ friends }) => (
  <ul class={styles.friend__list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem src={avatar} name={name} isOnline={isOnline} key={id} />
    ))}
  </ul>
);

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendList;
