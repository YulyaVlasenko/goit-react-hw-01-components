import PropTypes from 'prop-types';
import { Stat, Statistic, StatsData } from './Statistics.styled';
import { getRandomColor } from 'utils/getRandomColor';

export const Statistics = ({ stats, title }) => {
    return (
        <Statistic>
            {title && <h2>{title}</h2>}
            <StatsData>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <Stat style={{backgroundColor: getRandomColor()}} key={id}><span>{label}</span><span>{percentage}%</span></Stat>
                    )
                })}
            </StatsData>
        </Statistic>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
         id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired),
    title: PropTypes.string.isRequired
}