import styled from "styled-components";
import {Joke} from "../interfaces/Jokes.ts";

const JokesPreviewDiv = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    margin: 2vh auto;
    padding: 1rem;
    max-width: 70%;
    background-color: lightsalmon;
`;

const SingleJokesDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 90%;
    padding: 1rem;
    margin: 2vh 2vw;
    background-color: lightgoldenrodyellow;
    border: 3px orangered solid;
    text-align: center;
`

export default function RandomJokes(props : {data: Joke[]}) {
    return (
        <JokesPreviewDiv>
            {
                props.data.map((joke: Joke) =>
                    <SingleJokesDiv key={joke.id}>
                        <h3>Type of Joke: {joke.type}</h3>
                        <p>{joke.setup}</p>
                        <p>{joke.punchline}</p>
                        <p>ID: {joke.id}</p>
                    </SingleJokesDiv>
                )
            }
        </JokesPreviewDiv>
    );
}