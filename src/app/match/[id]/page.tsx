import React from 'react';
import type { Metadata } from 'next';
import MatchDetailClient from './MatchDetailClient';
import { matchService } from '../../../services/matchService';

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // In a real app, this runs on the server.
  // matchService.getMatchDetail implementation uses a simple promise/timeout which is safe on server.
  // However, ensure your service doesn't use `localStorage` or `window` in the global scope or execution path of this method.
  const id = (await params).id
  const match = await matchService.getMatchDetail(id);
 
  return {
    title: `${match.homeTeam.name} vs ${match.awayTeam.name} - ${match.score}`,
    description: `Xem trực tiếp tỷ số, đội hình và thống kê trận đấu giữa ${match.homeTeam.name} và ${match.awayTeam.name}. Dự đoán AI: Tỷ lệ thắng, phạt góc và thẻ phạt.`,
  }
}

export default function MatchDetailPage() {
  return <MatchDetailClient />;
}