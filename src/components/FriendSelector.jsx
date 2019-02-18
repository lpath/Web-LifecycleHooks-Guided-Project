import React from 'react';
import uuid from 'uuid';
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
    randomId: null,
  }

  selectFriend = id => this.setState({ selectedFriendId: id })

  getCurrentFriend = () => friends.find(
    fr => fr.id === this.state.selectedFriendId,
  )

  setRandomId = () => this.setState({ randomId: uuid() })

  render() {
    return (
      <div>
        Select a friend to chat with:&nbsp;
        {
          friends.map(fr => {
            return (
              <button key={fr.id} onClick={() => this.selectFriend(fr.id)}>
                {fr.name}
              </button>
            );
          })
        }
        {
          this.state.selectedFriendId &&
          <Friend
            friend={this.getCurrentFriend()}
            randomId={this.state.randomId}
          />
        }
        <br />
        <button onClick={this.setRandomId}>Refresh friend</button>
      </div>
    );
  }
}
