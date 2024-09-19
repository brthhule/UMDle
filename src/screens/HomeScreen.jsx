import React, { useState } from 'react';
import campus from '../assets/UMD-campus.jpg';
import '../styles/HomeScreen.css';
import Model from '../script';

const HomeScreen = () => {
    const [guess, setGuess] = useState('');
    const [guesses, setGuesses] = useState([]);

    const handleInputChange = (event) => {
        setGuess(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addGuess(guess);
    };

    const addGuess = (newGuess) => {
        setGuesses([...guesses, newGuess]);
        Model.main(newGuess);
        setGuess(''); // Clear the input field after adding the guess
    };

    const printGuesses = () => {
        return guesses.map((guess, index) => (
            <div key={index}>{guess}</div>
        ));
    };

    return (
        <>
            <body id="body">
                <div id="left-container">
                    <h1>UMDle</h1>
                    <form id="user-form">
                        <div id="input-container">
                            <label id="input-prompt" htmlFor="name">Enter building name here:  </label>
                            <input id="input-field" type="text" name="name" required/>
                        </div>                        
                    </form>
                    <button id="button" type="submit" onClick={handleSubmit}>Enter</button>
                    <p id="output"></p>
                </div>

                <div id="guesses">
                    <p id="guesses-text">Guesses: <printGuesses/>
                    </p>
                </div>
                

                <div id="bottom-container">
                    <img id="image" src={campus}></img>
                </div>   
            </body>

            
        </>       
    )
}


export default HomeScreen;