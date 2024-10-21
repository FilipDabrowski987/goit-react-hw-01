import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className='profile'>
  <div className='profile-items-div'>
    <img className='profile-avatar'
      src={avatar}
      alt="User avatar"
    />
    <p className='profile-items username'>{username}</p>
    <p className='profile-items tag'>@{tag}</p>
    <p className='profile-items location'>{location}</p>
  </div>

  <ul className = "profile-stats">
    <li className='profile-stats-items'>
      <span className='profile-stats-items-span'>Followers</span>
          <span className='profile-stats-items-span-value'>{stats.followers}</span>
    </li>
    <li className='profile-stats-items'>
      <span className='profile-stats-items-span'>Views</span>
      <span className='profile-stats-items-span-value'>{stats.views}</span>
    </li>
    <li className='profile-stats-items'>
      <span className='profile-stats-items-span'>Likes</span>
      <span className='profile-stats-items-span-value'>{stats.likes}</span>
    </li>
  </ul>
</div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired,
};

export default Profile;