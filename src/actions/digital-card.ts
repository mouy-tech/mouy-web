
import type { IUserDigitalCard } from 'src/types/userProfile';

import useSWR from 'swr';
import { useMemo } from 'react';

import { fetcher, endpoints } from 'src/utils/axios';

// ----------------------------------------------------------------------

const swrOptions = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

// ----------------------------------------------------------------------

export function useGetUserDigitalCard(userId: string) {
  const url = endpoints.digitalCard.profile(userId);

  const { data, isLoading, error, isValidating } = useSWR<IUserDigitalCard>(url, fetcher, swrOptions);

  const memoizedValue = useMemo(
    () => ({
      userDigitalCard: data,
      userDigitalCardLoading: isLoading,
      userDigitalCardError: error,
      userDigitalCardValidating: isValidating,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}
