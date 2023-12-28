const fetchExplore = async () {

    const url = 'https://spotify23.p.rapidapi.com/artists/?ids=2w9zwq3AktTeYYMuhMjju8';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '500c59cb80msh5d07d939ffc7ab6p1c628ajsn87442eeabd17',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

   

    // export const shazamCoreApi = createApi({
    //   reducerPath: 'shazamCoreApi',
    //   baseQuery: fetchBaseQuery({
    //     baseUrl: 'https://shazam-core.p.rapidapi.com/',
    //     prepareHeaders: (headers) => {
    //       headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);
    
    //       return headers;
    //     },
    //   }),
    //   endpoints: (builder) => ({
    //     getTopCharts: builder.query({ query: () => 'v1/charts/world' }),
    //     getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
    //     getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
    //     getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    //     getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
    //     getSongDetails: builder.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}` }),
    //     getSongRelated: builder.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}` }),
    //   }),
    // });
    
    // export const {
    //   useGetTopChartsQuery,
    //   useGetSongsByGenreQuery,
    //   useGetSongsByCountryQuery,
    //   useGetSongsBySearchQuery,
    //   useGetArtistDetailsQuery,
    //   useGetSongDetailsQuery,
    //   useGetSongRelatedQuery,
    // } = shazamCoreApi;
}
export default fetchExplore;