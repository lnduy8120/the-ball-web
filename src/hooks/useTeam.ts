import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { teamService } from '../services/teamService';

export const useTeam = () => {
  const [activeTab, setActiveTab] = useState('Tổng quan');

  const { data: teamData, isLoading: loading } = useQuery({
    queryKey: ['team', 'mcy'],
    queryFn: () => teamService.getTeamDetail('mcy'),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  const tabs = ['Tổng quan', 'Trận đấu', 'Đội hình', 'Thống kê'];

  return {
    activeTab,
    setActiveTab,
    performanceData: teamData?.performanceData || [],
    lineData: teamData?.lineData || [],
    matchStats: teamData?.matchStats || [],
    goalStats: teamData?.goalStats || [],
    players: teamData?.players || [],
    matches: teamData?.matches || [],
    squad: teamData?.squad || [],
    coaches: teamData?.coaches || [],
    mainLineup: teamData?.mainLineup || [],
    substituteLineup: teamData?.substituteLineup || [],
    formation: teamData?.formation || null,
    playingStyle: teamData?.playingStyle || null,
    tabs,
    loading
  };
};