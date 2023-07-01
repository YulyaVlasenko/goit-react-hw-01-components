import PropTypes from 'prop-types';
import { FriendItem, Status } from './FriendListItem.styled';

export const FriendListItem = ({ friend: {avatar, name, isOnline} }) => {
    return (
        <FriendItem>
        <Status isgreen={isOnline}></Status>
        <img src={avatar} alt={name} width='48'/>
        <p>{name}</p>
        </FriendItem>
    )
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
       avatar: PropTypes.string.isRequired,
       name: PropTypes.string.isRequired,
       isOnline: PropTypes.bool.isRequired,
    }).isRequired
}