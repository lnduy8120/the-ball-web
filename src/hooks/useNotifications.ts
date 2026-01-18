import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { notificationService } from '../services/notificationService';
import { Notification } from '@/types';

export const useNotifications = () => {
    const queryClient = useQueryClient();

    const {
        data: notifications = [],
        isLoading,
        isFetching,
        refetch
    } = useQuery({
        queryKey: ['notifications'],
        queryFn: () => notificationService.getNotifications(),
        staleTime: 1000 * 30, // 30 seconds
    });

    const unreadCount = notifications.filter(n => !n.read).length;

    const markAsReadMutation = useMutation({
        mutationFn: (id: number) => notificationService.markAsRead(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notifications'] });
        }
    });

    const markAllAsReadMutation = useMutation({
        mutationFn: () => notificationService.markAllAsRead(),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notifications'] });
        }
    });

    return {
        notifications,
        unreadCount,
        isLoading: isLoading || (isFetching && notifications.length === 0),
        markAsRead: markAsReadMutation.mutate,
        markAllAsRead: markAllAsReadMutation.mutate,
        refetch
    };
};
