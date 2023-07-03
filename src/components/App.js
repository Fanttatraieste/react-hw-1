import Friends from './Friends';
import Profile from './Profile';
import Statistics from './Statistics';
import Tranzactions from './Tranzactions';

export default function App() {
  return (
    <div className="root-container">
      <Profile />
      <Statistics />
      <Friends />
      <Tranzactions />
    </div>
  );
}
