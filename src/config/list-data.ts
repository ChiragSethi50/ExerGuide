export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': process.env.NEXT_PUBLIC_EXERCISE_DB_HOST!,
    'x-rapidapi-key': process.env.NEXT_PUBLIC_EXERCISE_DB_RAPID_API_KEY!,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': process.env.NEXT_PUBLIC_YOUTUBE_SEARCH_HOST!,
    'x-rapidapi-key': process.env.NEXT_PUBLIC_YOUTUBE_SEARCH_RAPID_API_KEY!,
  },
};

export const listData = async (url: string, options: RequestInit) => {
  console.log('url: ', url);
  console.log('options: ', options);
  try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
};
