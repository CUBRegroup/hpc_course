class FriendsList {
  friends = [];

  addFriend(name) {
    this.friends.push(name);
    this.announceFriendship(name);
  }

  announceFriendship(name) {
    console.log(`${name} is now a friend`);
  }

  removeFriend(name) {
    const idx = this.friends.indexOf(name);

    if (idx === -1) {
      throw new Error('friend not found!');
    }

    this.friends.splice(idx, 1);
  }
}

describe('my test', () => {
  let friendsList;

  beforeEach(() => {
    friendsList = new FriendsList();
  });

  it('initializes friends list', async () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it('adds a friend to the list', async () => {
    friendsList.addFriend('daba');
    expect(friendsList.friends.length).toEqual(1);
  });

  it('announces friendship', async () => {
    // const friendsList = new FriendsList();
    friendsList.announceFriendship = jest.fn();
    friendsList.addFriend('daba');
    expect(friendsList.announceFriendship).toHaveBeenCalled();
  });

  describe('removes friend', () => {
    it('removes a friend from the list', async () => {
      friendsList.addFriend('Ariel');
      expect(friendsList.friends[0]).toEqual('Ariel');
      friendsList.removeFriend('Ariel');
      expect(friendsList.friends[0]).toBeUndefined();
    });

    it('throws an error as friend does not exist', async () => {
      expect(() => {
        friendsList.removeFriend('Ariel');
      }).toThrow(new Error('friend not found!'));
    });
  });
});
