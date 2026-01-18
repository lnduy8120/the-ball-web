import { Notification } from '@/types';

// MOCK DATA
const MOCK_NOTIFICATIONS = [
    {
        id: 1,
        type: 'match',
        title: 'Bàn thắng: Man City vs Chelsea',
        message: 'Erling Haaland đã ghi bàn mở tỷ số phút 12!',
        time: '2 phút trước',
        read: false,
        icon: 'sports_soccer',
        color: 'text-blue-500',
        bg: 'bg-blue-50',
        targetUrl: '/match/m1'
    },
    {
        id: 2,
        type: 'bet',
        title: 'Vé cược đã thắng!',
        message: 'Chúc mừng! Vé cược trận Arsenal vs Liverpool đã thắng. Tiền thưởng +500.000đ đã được cộng vào ví.',
        time: '2 giờ trước',
        read: false,
        icon: 'payments',
        color: 'text-green-500',
        bg: 'bg-green-50',
        targetUrl: '/history'
    },
    {
        id: 3,
        type: 'system',
        title: 'Bảo trì hệ thống',
        message: 'Hệ thống sẽ bảo trì từ 02:00 đến 04:00 ngày 16/05 để nâng cấp máy chủ.',
        time: '1 ngày trước',
        read: true,
        icon: 'dns',
        color: 'text-orange-500',
        bg: 'bg-orange-50'
    },
    {
        id: 4,
        type: 'match',
        title: 'Trận đấu sắp diễn ra',
        message: 'Trận đấu giữa Real Madrid và Barcelona sẽ bắt đầu trong 30 phút nữa.',
        time: '1 ngày trước',
        read: true,
        icon: 'schedule',
        color: 'text-purple-500',
        bg: 'bg-purple-50',
        targetUrl: '/match/m3'
    }
];

export const notificationService = {
    getNotifications: async (): Promise<any[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_NOTIFICATIONS), 100);
        });
    },
    getUnreadCount: async (): Promise<number> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const unread = MOCK_NOTIFICATIONS.filter(n => !n.read).length;
                resolve(unread);
            }, 50);
        });
    },
    markAsRead: async (id: number): Promise<void> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const notification = MOCK_NOTIFICATIONS.find(n => n.id === id);
                if (notification) {
                    notification.read = true;
                }
                resolve();
            }, 50);
        });
    },
    markAllAsRead: async (): Promise<void> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                MOCK_NOTIFICATIONS.forEach(n => {
                    n.read = true;
                });
                resolve();
            }, 50);
        });
    }
};
