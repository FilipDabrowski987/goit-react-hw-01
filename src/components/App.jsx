import Profile from './Profile/Profile.jsx';
import userData from './Profile/userData.json';
import FriendList from './FriendList/FriendList.jsx';
import friends from './FriendList/friends.json';

export default function App() {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
}