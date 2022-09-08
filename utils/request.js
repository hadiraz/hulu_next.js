const API_KEY = process.env.API_KEY ;
const endpoints = [
    {
        title : "Trending" ,
        url : `/trending/all/week?api_key=${API_KEY}&language=en-US`
    } , 
]
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    trending : {
        title : "Trending" ,
        url : `/trending/all/week?api_key=${API_KEY}&language=en-US`
    } ,
    topRated : {
        title : "Top Rated" ,
        url : `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    } ,
    action : {
        title : "Action" ,
        url : `/discover/movie?api_key=${API_KEY}&with_genres=28`
    } ,
    comedy : {
        title : "Comedy" ,
        url : `/discover/movie?api_key=${API_KEY}&with_genres=35`
    } ,
    horror : {
        title : "Horror" ,
        url : `/discover/movie?api_key=${API_KEY}&with_genres=27`
    } ,
}