import React from 'react';
import type { Metadata } from 'next';
import MatchesClient from './MatchesClient';

export const metadata: Metadata = {
  title: 'Lịch thi đấu & Tỷ số Trực tiếp | Football Companion',
  description: 'Cập nhật lịch thi đấu, tỷ số bóng đá trực tuyến Ngoại Hạng Anh, La Liga, V-League mới nhất.',
  openGraph: {
    title: 'Lịch thi đấu & Tỷ số Trực tiếp',
    description: 'Theo dõi tỷ số và lịch thi đấu bóng đá nhanh nhất.',
  }
};

export default function MatchesPage() {
  return <MatchesClient />;
}