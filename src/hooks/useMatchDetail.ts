import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { matchService } from '../services/matchService';

export const useMatchDetail = (initialData?: any) => {
  const params = useParams();
  const id = params?.id as string;
  const [activeTab, setActiveTab] = useState('Thống kê');

  const { data: match, isLoading: loading } = useQuery({
    queryKey: ['match', id],
    queryFn: () => matchService.getMatchDetail(id!),
    enabled: !!id, // Only run if ID exists
    staleTime: 1000 * 30, // 30 seconds
    initialData: initialData,
    refetchInterval: (query) => {
      // Poll every 30 seconds if match is live
      const data = query.state.data as any;
      return data?.status === 'live' ? 30000 : false;
    }
  });

  const tabs = ['Thống kê', 'Đội hình ra sân', 'AI Dự đoán'];

  const defaultMatch = {
    homeTeam: { name: '', short: '', logo: '' },
    awayTeam: { name: '', short: '', logo: '' },
    score: '0 - 0',
    status: 'Loading...'
  };

  return {
    match: match || defaultMatch,
    activeTab,
    setActiveTab,
    tabs,
    loading
  };
};