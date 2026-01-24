import { useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Match } from '@/types';
import { matchService } from '../services/matchService';

export const useMatches = (initialMatches?: Match[]) => {
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  const { data: matches = [], isLoading, isError, refetch } = useQuery({
    queryKey: ['matches'], // Cache key
    queryFn: () => matchService.getMatches(),
    staleTime: 1000 * 60, // 1 minute fresh
    refetchOnWindowFocus: true, // Auto refetch when app comes to foreground
    initialData: initialMatches, // Hydrate from server
    select: (data) => {
      // Transformation: we could do basic sorting here if needed
      return data;
    }
  });

  const filters = ['Tất cả', 'Ngoại Hạng Anh', 'La Liga', 'V.League 1', 'Serie A'];

  // Client-side filtering of the cached server state
  const getFilteredMatches = useCallback(() => {
    if (activeFilter === 'Tất cả') return matches;
    return matches.filter(m => {
      // Match exactly or normalization if needed
      return m.league === activeFilter;
    });
  }, [matches, activeFilter]);

  return {
    activeFilter,
    setActiveFilter,
    filters,
    getFilteredMatches,
    loading: isLoading,
    isError,
    refetch
  };
};