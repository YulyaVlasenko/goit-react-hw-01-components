import PropTypes from 'prop-types';
import { ColumnName, TableCell, TransactionsList } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionsList>
        <thead>
        <tr>
            <ColumnName>Type</ColumnName>
            <ColumnName>Amount</ColumnName>
            <ColumnName>Currency</ColumnName>
        </tr>
        </thead>
        <tbody>
            {items.map(({id, type, amount, currency}) => {
                return (
                    <tr key={id}>
                        <TableCell>{type}</TableCell>
                        <TableCell>{amount}</TableCell>
                        <TableCell>{currency}</TableCell>
                    </tr>
                )
            })}
        </tbody>
    </TransactionsList>
    ) 
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
         id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired)
}