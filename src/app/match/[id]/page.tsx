import React from 'react';
import type { Metadata } from 'next';
import MatchDetailClient from './MatchDetailClient';
import { serverMatchService } from '@/services/server/matchService';

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const id = (await params).id
  const match = await serverMatchService.getMatchDetail(id);

  return {
    title: `${match.homeTeam.name} vs ${match.awayTeam.name} - ${match.score}`,
    description: `Xem trực tiếp tỷ số, đội hình và thống kê trận đấu giữa ${match.homeTeam.name} và ${match.awayTeam.name}. Dự đoán AI: Tỷ lệ thắng, phạt góc và thẻ phạt.`,
  }
}

export default async function MatchDetailPage({ params }: Props) {
  const id = (await params).id;
  const initialMatch = await serverMatchService.getMatchDetail(id);

  return <MatchDetailClient initialData={initialMatch} />;
}