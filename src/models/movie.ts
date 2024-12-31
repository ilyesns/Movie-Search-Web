interface Rating {
  Source?: string;
  Value?: string;
}

export interface Movie {
  Title?: string;
  Year?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster?: string;
  Ratings?: Rating[];
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID?: string;
  Type?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response?: string;
}

export function parseMovie(json: any): Movie {
  return {
    Title: json.Title,
    Year: json.Year,
    Rated: json.Rated,
    Released: json.Released,
    Runtime: json.Runtime,
    Genre: json.Genre,
    Director: json.Director,
    Writer: json.Writer,
    Actors: json.Actors,
    Plot: json.Plot,
    Language: json.Language,
    Country: json.Country,
    Awards: json.Awards,
    Poster: json.Poster,
    Ratings: json.Ratings?.map((rating: any) => ({
      Source: rating.Source,
      Value: rating.Value,
    })),
    Metascore: json.Metascore,
    imdbRating: json.imdbRating,
    imdbVotes: json.imdbVotes,
    imdbID: json.imdbID,
    Type: json.Type,
    DVD: json.DVD,
    BoxOffice: json.BoxOffice,
    Production: json.Production,
    Website: json.Website,
    Response: json.Response,
  };
}
