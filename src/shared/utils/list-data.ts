export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_EXERCISE_DB_HOST!,
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_EXERCISE_DB_RAPID_API_KEY!,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_YOUTUBE_SEARCH_HOST!,
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_YOUTUBE_SEARCH_RAPID_API_KEY!,
  },
};

export const listData = async (url: string, options: RequestInit) => {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error('API fetch failed');
  return await res.json();
};
