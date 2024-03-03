import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <NavLink to={`/details/${props.imdbid}`}>
    <main className="bg-white drop-shadow-md rounded-md overflow-hidden hover:shadow-md shadow-slate-200 cursor-pointer">
      <img
        // eslint-disable-next-line react/prop-types
        src={props?.big_image}
        alt="movie_poster"
        className="h-64 w-full object-cover object-top"
      />
      <div className="p-2">
        <h1 className="text-base">{props.title}</h1>

        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-wrap gap-1">
            {props.genre.map((genre, idx) => (
              <button
                key={idx}
                className="text-sm bg-gray-400 rounded-full px-1 py-0.5 text-white"
              >
                {genre}
              </button>
            ))}
          </div>
          <p className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
           {props.rating}
          </p>
        </div>
      </div>
    </main>
    </NavLink>
  );
};

export default Card;
