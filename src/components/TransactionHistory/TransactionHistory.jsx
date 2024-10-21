import PropTypes from 'prop-types';
import './TransactionHistory.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead className='table-thead'>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className='table-tbody'>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className='table-tbody-td-type'>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
