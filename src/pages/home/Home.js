import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../../components/item/Item'


const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const r = await getMovies("Godfather", null, null, null)

            if (r.data.success) {
                console.log(r);
                setMovies(r.data.result);
            }
        };
        fetchData();
    }, []);

    async function getMovies(query, year, type) {
        var url = "https://api.collectapi.com/imdb/imdbSearchByName";
        var params = {
            query: query,
            year: year,
            type: type
        }

        return axios.get(
            url,
            {
                params: params,
                headers: {
                    Authorization: 'apikey 5gDTw6tDGDcanEAhhhMh7H:2osY7FuXLoGpIbRQ3iTYwT'
                }
            }
        )
            .then((result) => result);
    };

    return (
        movies.map(movie => <Item key={movie.imdbID} data={movie} />)
    )

}
export default Home;