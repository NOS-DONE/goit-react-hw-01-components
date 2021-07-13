import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../components/default_image_to_profile.svg';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, url, followers, views, likes }) => (
  <div class={styles.profile}>
    <div class={styles.description}>
      <img src={url} alt="Аватар пользователя" class="avatar" />
      <p class={styles.name}>{name}</p>
      <p class="tag">{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class={styles.stats}>
      <li>
        <span class={styles.label}>followers</span>
        <span class="quantity">{followers}</span>
      </li>
      <li>
        <span class={styles.label}>Views</span>
        <span class="quantity">{views}</span>
      </li>
      <li>
        <span class={styles.label}>Likes</span>
        <span class="quantity">{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  url: defaultImage,
};

Profile.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
