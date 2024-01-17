import { useState, useEffect } from "react";

type Image = {
  height: number;
  url: string;
  width: number;
};

type Genre = {
  id: string;
  name: string;
  images: Image[]; // array of objects
};

type ApiResponse = {
  content: {
    items: Genre[];
  };
};

const Discover = () => {
  const [genres, setGenres] = useState<ApiResponse | null>(null);

  useEffect(() => {
    fetch(
      "https://spotify23.p.rapidapi.com/genre_view/?id=0JQ5DAqbMKFEC4WFtoNRpw&content_limit=10&limit=20",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "500c59cb80msh5d07d939ffc7ab6p1c628ajsn87442eeabd17",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGenres(data);
      });
  }, []); // dependency array ensures that this effect will only run once

  return (
    <div className="flex flex-wrap gap-6">
      {genres?.content.items.map((genre) => (
        <div
          key={genre.id}
          className="flex bg-black p-3 rounded-3xl text-center justify-center items-center w-52 h-60 text-white"
          style={{
            backgroundImage:
              genre.images && genre.images.length > 0
                ? `url(${genre.images[0].url})`
                : `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          }}
        >
          <h1>{genre.name}</h1>
        </div>
      ))}
      ;
    </div>
  );
};

export default Discover;
