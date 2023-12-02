
import { APIKEY } from "../config/key";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Movie, MovieList } from "./style"

export default function Home() {

    const img_path = 'https://image.tmdb.org/t/p/w500/'

    const [movies, setMovies] = useState([])

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
            setMovies(data.results)
        })
    }, [])

    /*const movies = [
        {
            title: "Interestelar",
            image_url: "https://play-lh.googleusercontent.com/em2griqrHoxmxEss_WM5Fi2iqSEKrEfLNAltjX54lREOR0nz0du__KuSi2bA_YNjS4w" 
        },

        {
            title: "Interestelar 2",
            image_url: "https://play-lh.googleusercontent.com/em2griqrHoxmxEss_WM5Fi2iqSEKrEfLNAltjX54lREOR0nz0du__KuSi2bA_YNjS4w" 
        },

        {
            title: "Interestelar 3",
            image_url: "https://play-lh.googleusercontent.com/em2griqrHoxmxEss_WM5Fi2iqSEKrEfLNAltjX54lREOR0nz0du__KuSi2bA_YNjS4w" 
        }
    ] */



    return (
        <Container>
            <h2>Catálogo</h2>
            <MovieList>

        {
            movies.map(movie => {
                return(
                    <Movie key={movie.id}>
                        <Link to = {`/details/${movie.id}`}>
                            <img src= {`${img_path}${movie.poster_path}`}  alt= {movie.title}></img>
                        </Link>

                        <span>{movie.title}</span>
                    
                    </Movie>
                )
            })
        }
            </MovieList>
        </Container>
    )
}

