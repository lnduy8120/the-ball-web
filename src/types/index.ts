export interface Team {
  id: string;
  name: string;
  shortName: string;
  logo: string;
}

export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore?: number;
  awayScore?: number;
  time: string;
  date: string;
  status: 'upcoming' | 'live' | 'finished';
  league: string;
  minute?: string;
}

export interface Bet {
  id: string;
  match: Match;
  type: string;
  amount: number;
  returnAmount: number;
  status: 'won' | 'lost' | 'pending';
  selection: string;
}

export interface Standing {
  rank: number;
  team: Team;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
  form: ('W' | 'D' | 'L')[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone_number?: string;
  avatar?: string;
  role: 'user' | 'admin';
}

export interface StandingRow {
  rank: number;
  team: string;
  played: number;
  record: string;
  gd: string;
  points: number;
  logo: string;
  status?: 'ucl' | 'uel' | 'relegation' | 'normal';
}

export interface Notification {
  id: number;
  type: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: string;
  color: string;
  bg: string;
  targetUrl?: string;
}