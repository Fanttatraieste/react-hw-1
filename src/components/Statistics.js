import data from '../json/data2.json';

export default function Statistics() {
  return (
    <div className="statistics">
      <h3>Upload Stats</h3>
      <ul className="statistics__list">
        {data.map(d => (
          <Element stat={d} key={d.id} />
        ))}
      </ul>
    </div>
  );
}

function Element({ stat }) {
  return (
    <li
      className="statistics__item"
      style={{
        backgroundColor:
          stat.percentage < 10
            ? 'purple'
            : stat.percentage < 20
            ? 'red'
            : stat.percentage < 40
            ? '#4FC4F7'
            : '#20B8C5',
      }}
    >
      <p>{stat.label}</p>
      <p>{stat.percentage}</p>
    </li>
  );
}
