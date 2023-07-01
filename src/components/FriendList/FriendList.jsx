import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem"
import { BlockOfFriends } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        <BlockOfFriends>
            {friends.map((friend) => {
                return (
                    <FriendListItem key={friend.id} friend={friend}/>
                )
            })}  
        </BlockOfFriends>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
         id: PropTypes.number.isRequired,
    }).isRequired)
}