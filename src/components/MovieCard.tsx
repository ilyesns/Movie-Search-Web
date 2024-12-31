import React from "react";
import testImg from "../assets/images/image-1.jpg";
import { Movie } from "../models/movie";
import { useNavigate } from "react-router-dom";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${movie.imdbID}`); // Navigate to MovieDetails page with ID
  };
  return (
    <div onClick={handleClick}>
      <div className="py-3 max-w-[350px]  hover:cursor-pointer sm:mx-auto">
        <div className="bg-white shadow-lg border-gray-100 h-80	 border sm:rounded-3xl p-8 flex space-x-8">
          <img
            className="rounded-3xl w-52 h-60 shadow-lg"
            src={movie.Poster}
            alt="img"
          />

          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-lg md:text-1xl font-bold">
                {movie.Title != undefined && movie!.Title.length > 30
                  ? `${movie!.Title.slice(0, 30)}...`
                  : movie.Title}
              </h2>
            </div>
            <div>
              <div className="text-sm text-gray-400">{movie.Type}</div>
              <div className="text-lg text-gray-800">{movie.Year}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
