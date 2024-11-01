"use client"
import { FC, ReactNode } from 'react';

import {
  QueryClient,
  QueryClientProvider, QueryClientConfig
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';



export const reactQueryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 60 * 1000,
      cacheTime: 5 * 60 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 2,
    },

  },
};

interface ReactQueryProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient(reactQueryConfig)

export const ReactQueryProvider: FC<ReactQueryProviderProps> = ({
  children,
}) => {
  // const [queryClient] = useState(() => new QueryClient(reactQueryConfig));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
