import React from 'react';
import type { Metadata } from 'next';
import TeamDetailClient from './TeamDetailClient';
import { serverTeamService } from '@/services/server/teamService';

export const metadata: Metadata = {
    title: 'Chi tiết Đội bóng | Football Companion',
    description: 'Thông tin chi tiết, thống kê phong độ, đội hình và lịch thi đấu của đội bóng.',
};

export default async function TeamDetailPage() {
    // Hardcoded 'mcy' to match the current hook behavior
    const initialData = await serverTeamService.getTeamDetail('mcy');

    return <TeamDetailClient initialData={initialData} />;
}
