import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => (
    <ul className="friend-list">
        {friends.map(friend => (
            <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                key={friend.id}
                isOnline={friend.isOnline}
            ></FriendListItem>
        ))}
    </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
