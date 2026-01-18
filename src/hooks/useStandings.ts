import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { teamService } from '../services/teamService';

export const useStandings = () => {
  const [filter, setFilter] = useState('overall'); // overall, home, away
  
  const { data = [], isLoading: loading } = useQuery({
      queryKey: ['standings', 'PL'],
      queryFn: () => teamService.getStandings('PL'),
      staleTime: 1000 * 60 * 60, // 1 hour (standings don't change often)
  });

  const displayData = useMemo(() => {
    if (filter === 'overall') return data;

    return data.map(team => {
      const seed = team.team.charCodeAt(0); 
      const homeStrength = 0.55 + ((seed % 20) / 100); 
      const ratio = filter === 'home' ? homeStrength : (1 - homeStrength);
      
      const played = Math.ceil(team.played / 2);
      const points = Math.round(team.points * ratio);
      
      const wins = Math.floor(points / 3);
      const draws = Math.max(0, points - (wins * 3));
      const losses = Math.max(0, played - wins - draws);
      
      const gdVal = parseInt(team.gd);
      const gd = Math.round(gdVal * ratio);
      
      return {
        ...team,
        played,
        points,
        record: `${wins}-${draws}-${losses}`,
        gd: gd > 0 ? `+${gd}` : `${gd}`
      };
    }).sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        return parseInt(b.gd) - parseInt(a.gd);
    }).map((item, index) => ({
      ...item,
      rank: index + 1
    }));
  }, [filter, data]);

  return {
    filter,
    setFilter,
    displayData,
    loading
  };
};