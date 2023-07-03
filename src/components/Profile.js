import userData from '../json/user1.json';

export default function Profile() {
  return (
    <div className="profile">
      <Thumbnail
        image={userData.avatar}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
      />
      <Stats stats={userData.stats} />
    </div>
  );
}

function Thumbnail({ image, username, tag, location }) {
  return (
    <div className="thumbnail">
      <img className="thumbnail__image" src={image} alt={username} />
      <h3 className="thumbnail__username">{username}</h3>
      <p className="thumbnail__text">@{tag}</p>
      <p className="thumbnail__text">{location}</p>
    </div>
  );
}

function Stats({ stats }) {
  return (
    <ul className="stats">
      <li className="stats__item">
        <p>Folowers</p>
        <p className="stats__stat">{stats.followers}</p>
      </li>
      <li className="stats__item">
        <p>Views</p>
        <p className="stats__stat">{stats.views}</p>
      </li>
      <li className="stats__item">
        <p>Likes</p>
        <p className="stats__stat">{stats.likes}</p>
      </li>
    </ul>
  );
}
