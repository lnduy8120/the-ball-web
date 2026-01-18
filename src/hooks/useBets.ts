import { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { betService } from '../services/betService';

export const useBets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [page, setPage] = useState(1);
  const limit = 5;

  const { data, isLoading, isPlaceholderData, isError } = useQuery({
    queryKey: ['bets', page, filterType],
    queryFn: () => betService.getHistory(page, limit, filterType),
    placeholderData: keepPreviousData, // Keep previous data while fetching new page for smooth transition
    staleTime: 5000, // Data is fresh for 5 seconds
  });

  const bets = data?.data || [];
  const total = data?.total || 0;
  const totalPages = Math.ceil(total / limit);

  // Client-side search (optional: usually search is also server-side)
  // For this demo, we filter the CURRENT page results by search term
  const displayBets = bets.filter(bet => {
      const term = searchTerm.toLowerCase();
      if (!term) return true;
      return bet.matchName.toLowerCase().includes(term) || 
             bet.league.toLowerCase().includes(term) ||
             bet.betType.toLowerCase().includes(term);
  });

  const filterOptions = [
    { id: 'all', label: 'Tất cả' },
    { id: 'won', label: 'Thắng' },
    { id: 'lost', label: 'Thua' },
    { id: 'pending', label: 'Đang chờ' }
  ];

  const handleFilterChange = (newFilter: string) => {
      setFilterType(newFilter);
      setPage(1); // Reset to first page on filter change
  };

  return {
    searchTerm,
    setSearchTerm,
    filterType,
    setFilterType: handleFilterChange,
    bets: displayBets,
    filterOptions,
    loading: isLoading,
    isError,
    page,
    setPage,
    totalPages,
    isPlaceholderData,
    total
  };
};