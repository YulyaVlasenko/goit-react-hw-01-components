import PropTypes from 'prop-types';
import { DataOfUser, Label, Stats, StatsItem} from "./Profile.styled"

export const Profile = ({description: {username, tag, avatar, location, stats: {followers, views, likes}}}) => {
  return (
    <DataOfUser>
    <div>
      <img src={avatar} alt={username} />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
    <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <span>{followers}</span>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <span>{views}</span>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <span>{likes}</span>
        </StatsItem>
    </Stats>
    </DataOfUser>
  )
}

Profile.propTypes = {
  description: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    }).isRequired}).isRequired
}



