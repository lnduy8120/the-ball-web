
export const config = {
  env: process.env.NODE_ENV || 'development',
  isDev: process.env.NODE_ENV !== 'production',
  isProd: process.env.NODE_ENV === 'production',

  api: {
    url: process.env.NEXT_PUBLIC_API_URL || 'https://api.football-companion.com/v1',
    timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 10000,
    retryCount: Number(process.env.NEXT_PUBLIC_API_RETRY) || 1,
  },

  i18n: {
    debug: process.env.NEXT_PUBLIC_I18N_DEBUG === 'true' || process.env.NODE_ENV !== 'production',
    fallbackLng: process.env.NEXT_PUBLIC_I18N_FALLBACK || 'vi',
  }
};
