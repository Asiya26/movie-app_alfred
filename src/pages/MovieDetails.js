import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import VideoSection from '../components/VideoSection';



const MovieDetails = () => {

  const [videoKey, setVideoKey] = useState();
  const [movieDetails, setMovieDetails] = useState();
  const { id } = useParams(); 

  const baseUrl = "https://api.themoviedb.org/3";
  const movieDetailsUrl = `${baseUrl}/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;
  const videoUrl = `${baseUrl}/movie/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;
  const imgUrl = "https://image.tmdb.org/t/p/w1280";

//   useEffect(() => { 
//     axios.get(movieDetailsUrl).then(res => { console.log(res.data);  setMovieDetails(res.data) })
//     axios.get(videoUrl).then(res=> setVideoKey(res.data.results[0].key))
//   }, [movieDetails, videoKey , id])

useEffect(() => {
    axios
      .get(movieDetailsUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((err) => console.log(err));
  }, [movieDetails]);

  return (
		<div className="py-5 page" style={{ backgroundColor: "#555" }}>
			<div className="container">
				<div className="card mb-3 bg-dark text-light shadow-lg">
					<div className="row">
						<div className="col-md-4">
							<img
								src={imgUrl + movieDetails?.poster_path}
								className="img-fluid"
							/>
							<ul className="list-group list-group-flush">
								<li className="list-group-item d-flex justify-content-between">
									<b>Release Date: </b>
									<span>{movieDetails?.release_date}</span>
								</li>
								<li className="list-group-item d-flex justify-content-between">
									<b>Rate: </b>
									<span>{movieDetails?.vote_average}</span>
								</li>
								<li className="list-group-item d-flex justify-content-between">
									<b>Total Vote: </b>
									<span>{movieDetails?.vote_count}</span>
								</li>
								<li className="list-group-item text-center">
									<Link to={-1} className="btn btn-primary">
										{" "}
										Go Link
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-8 d-flex flex-column">
							<div className="card-body">
								<h3 className="text-center">{movieDetails?.title} </h3>
                { videoKey && <VideoSection videoKey={ videoKey } /> }
                <h5 className='card-title mt-4'>Overview</h5>
                <p className='card-text'>{ movieDetails?.overview} </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MovieDetails