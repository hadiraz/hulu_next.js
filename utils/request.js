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
        url : `/trending/all/week?api_key=${API_KEY}&language=en-US`
    } ,
    action : {
        title : "Action" ,
        url : `/trending/all/week?api_key=${API_KEY}&language=en-US`
    } ,
    comedy : {
        title : "Comedy" ,
        url : `/trending/all/week?api_key=${API_KEY}&language=en-US`
    } ,
    horror : {
        title : "Horror" ,
        url : `/trending/all/week?api_key=${API_KEY}&language=en-US`
    } ,
}