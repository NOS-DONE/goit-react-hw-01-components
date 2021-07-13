import React from 'react';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friend-list/Friend-list';
import user from './components/profile/user.json';
import friendsData from './components/friend-list/friends.json';
import TransactionHistory from './components/transaction-history.js/transaction-history';
import transactions from './components/transaction-history.js/transactions.json';

const App = () => (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      url={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Statistics title="Upload stats" />
    <Statistics />
    <FriendList friends={friendsData} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
