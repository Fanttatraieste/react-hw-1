import friendList from '../json/friends3.json';

export default function Friends() {
  return (
    <ul className="friendList">
      {friendList.map(friend => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li className="friendList__item">
      <div
        className="circle"
        style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
      ></div>
      <img
        className="friendList__image"
        src={friend.avatar}
        alt={friend.name}
      />
      <p>{friend.name}</p>
    </li>
  );
}
