import trans from '../json/transactions4.json';

export default function Transactions() {
  return (
    <table className="table">
      <tr>
        <th className="table__header">Type</th>
        <th className="table__header">Amount</th>
        <th className="table__header">Currency</th>
      </tr>
      {trans.map(t => (
        <Trans transaction={t} key={t.id} />
      ))}
    </table>
  );
}

function Trans({ transaction }) {
  return (
    <tr>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
  );
}
