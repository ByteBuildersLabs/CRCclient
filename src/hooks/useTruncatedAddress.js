import { useMemo } from 'react';

const useTruncatedAddress = (account) => {
  const truncated = useMemo(
    () => account ? (`${account.substr(0, 6)}...${account.substr(-4)}`) : '',
    [account]
  );

  return truncated;
};

export  { useTruncatedAddress };
