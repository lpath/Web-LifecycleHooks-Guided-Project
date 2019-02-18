import React from 'react';
import Friend from './Friend';


const friends = [
  { id: 1, name: 'Luke' },
  { id: 2, name: 'Josh' },
  { id: 3, name: 'Tom' },
  { id: 4, name: 'Samar' },
];

export default class FriendSelector extends React.Component {
  state = {
    selectedFriendId: null,
  }

  selectFriend = id => this.setState({ selectedFriendId: id })

  getCurrentFriend = () => friends.find(
    fr => fr.id === this.state.selectedFriendId,
  )

  render() {
    return (
      <div>
        Select a friend to chat with:&nbsp;
        {
          friends.map(friend => {
            return (
              <button key={friend.id} onClick={() => this.selectFriend(friend.id)}>
                {friend.name}
              </button>
            );
          })
        }
        {
          this.state.selectedFriendId &&
          <Friend
            friend={this.getCurrentFriend()}
          />
        }
        <br />
      </div>
    );
  }
}
