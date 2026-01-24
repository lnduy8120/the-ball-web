import React from 'react';
import type { Metadata } from 'next';
import StandingsClient from './StandingsClient';
import { serverTeamService } from '@/services/server/teamService';

export const metadata: Metadata = {
  title: 'Bảng xếp hạng Bóng đá | Premier League, La Liga, Serie A',
  description: 'Bảng xếp hạng Premier League, La Liga, Serie A mới nhất. Cập nhật điểm số, hiệu số bàn thắng bại và phong độ đội bóng.',
};

export default async function StandingsPage() {
  const initialStandings = await serverTeamService.getStandings('PL'); // Default to Premier League

  return <StandingsClient initialStandings={initialStandings} />;
}