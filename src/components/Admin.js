import React from 'react';

import { useGetAccountsQuery } from '../api/adminSlice';

function Admin() {
  const { data, error, isLoading } = useGetAccountsQuery();
  // Rest of your component code
  <>
    <div>
      <h4>Admin</h4>
      {
        data && data.map(account=><p>{account.id}:{account.amount}</p>)
      }
    </div>
  </>
}

export default Admin;

