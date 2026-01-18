import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';

export interface NavItem {
    name: string;
    icon: string;
    path: string;
    protected: boolean;
    showBadge?: boolean;
    guestOnly?: boolean;
}

export const useNavItems = () => {
    const { t } = useTranslation();
    const { isAuthenticated } = useAuth();

    const navItems: NavItem[] = [
        { name: t('nav.matches'), icon: 'sports_soccer', path: '/matches', protected: false },
        { name: t('nav.news'), icon: 'feed', path: '/news', protected: false },
        { name: t('nav.home'), icon: 'psychology', path: '/prediction', protected: false },
        { name: t('nav.history'), icon: 'history', path: '/history', protected: true },
        { name: t('nav.standings'), icon: 'leaderboard', path: '/standings', protected: false },
        { name: t('nav.notifications'), icon: 'notifications', path: '/notifications', showBadge: true, protected: true },
        { name: t('nav.profile'), icon: 'person', path: '/profile', protected: true },
        { name: t('common.login'), icon: 'login', path: '/login', protected: false, guestOnly: true },
    ];

    const visibleNavItems = navItems.filter(item => {
        if (isAuthenticated) {
            return !item.guestOnly;
        }
        return !item.protected;
    });

    return { visibleNavItems, isAuthenticated };
};
