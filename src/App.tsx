import RandomJokes from './components/RandomJokes.tsx';
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {Joke} from "./interfaces/Jokes.ts"

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px gray solid;
    align-items: center;
`

export default function App() {
    // Store Data using useState
    const [data, setData] = useState<Joke[]>([]);

    // Error handling and re-rendering using useEffect
    useEffect(() => {
        // Define async func to fetch data, then parse
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://official-joke-api.appspot.com/jokes/random/25"); // Get request to API to fetch list of jokes
            const jokes: Joke[] = await rawData.json() // Parse the array of jokes
            setData(jokes); // updates data state with fetched jokes
        }
        fetchData()
            .then(() => console.log('Data is successfully fetched'))
            .catch((e) => console.log("There was an error fetching data: " + e));
    }, []);
    return(
        <ParentDiv>
            <RandomJokes data={data} />
        </ParentDiv>
        // Renders RandomJokes component, passes data as a prop -> component use this data to render list of jokes
    );
}
