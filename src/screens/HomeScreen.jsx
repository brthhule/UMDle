import React, { useState } from 'react';
import campus from '../assets/UMD-campus.jpg';
import '../styles/HomeScreen.css';
import model from '../script';

const MainPage = () => {
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
        model.main(newGuess);
        setGuess(''); // Clear the input field after adding the guess
    };

    const printGuesses = () => {
        return guesses.map((guess, index) => (
            <div key={index}>{guess}</div>
        ));
    };

    return (
        <div id="body">
            <div id="left-container">
                <h1>UMDle</h1>
                <form id="userForm" onSubmit={handleSubmit}>
                    <label htmlFor="name">Enter building name here:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={guess} 
                        onChange={handleInputChange} 
                        required 
                    />
                    <br />
                    <button type="submit">Enter</button>
                </form>
                <p id="output">Your Guesses:</p>
                {printGuesses()}
            </div>
            <div id="right-container">
                <img id="image" src={campus} alt="UMD Campus"/>
            </div>
        </div>
    );
};

export default MainPage;