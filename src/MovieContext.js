import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props, name) => {
    const [movies, setMovies] = useState ([
        // {
        //     name: 'Richmond ',
        //     price: '240-505-2212',
        //     id: 21334
        // },
        // {
        //     name: ' John Lino',
        //     price: '301-221-2232',
        //     id: 21334
        // }

    ]);
    return (
        <MovieContext.Provider  value={[movies,setMovies]}>
        {props.children}
        </MovieContext.Provider>
    );

}