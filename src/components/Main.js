import React from "react";



function Main() {

    const moviesArr = [
        {
            id: 1,
            title: "Billy Elliot",
            rating: 9
        },
        {
            id: 2,
            title: "Forest Gump",
            rating: 9
        },
        {
            id: 3,
            title: "The Lion King",
            rating: 10
        }

    ];

    return (
        <>
            {moviesArr.map((movie, index) => {
                return (
                    <div key={movie.id}>
                        <h2>Title: {movie.title}</h2>
                        Rating: {movie.rating}
                    </div>
                );
            })}
        </>
    );
};

export default Main;