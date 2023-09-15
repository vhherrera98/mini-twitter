import { useMemo } from 'react';
import { Post } from '../data/interfaces';

export function useFilter(data: Post[], word: string) {
  const filtered = useMemo(() => {
    return data.filter((item) =>
      item.user.name.toLowerCase().includes(word.toLowerCase())
    );
  }, [data, word]);

  return filtered;
}
