import React, { useState } from 'react';
import campus from '../assets/UMD-campus.jpg';
import '../styles/HomeScreen.css';
import model from '../script';

const MainPage = () => {
    const [guess, setGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const woods = {"name": "Woods", "xCoord": 38.98520825094225, "yCoord": -76.94178927335166};
    const maryMount = {"name": "Mary Mount", "xCoord": 38.9851333833028, "yCoord": -76.94086354821499};
    const dorchester = {"name": "Dorchester", "xCoord": 38.98684874201056, "yCoord": -76.9461386886941};
    const pyonChen = {"name": "Pyon Chen", "xCoord": 38.99217621364386, "yCoord": -76.94490983773476};

    //all building variables defined
    const buildings = [this.woods, this.maryMount, this.dorchester, this.pyonChen];
    //array of all buildings
    let list = [];
    //list for guesses, ordered closest to furthests
    let answer = this.pyonChen;
    let guessed = false;

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

    const displayOutput = () => {
        if (guessed == true) {
            console.log("end game");
            document.getElementById('output').textContent = `You Won!`;
        } else {
            document.getElementById('output').textContent = `Closests:`;
            list.sort((a, b) => calculateDistance(a, answer) - calculateDistance(b, answer));
            for (let i = 0; i < list.length; i++) {
                if (i != 0) {
                    document.getElementById('output').textContent += ',';
                }
                document.getElementById('output').textContent += ' ' + list[i].name;
            }
        }  
    }

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
                {displayOutput()}
            </div>
            <div id="right-container">
                <img id="image" src={campus} alt="UMD Campus"/>
            </div>
        </div>
    );
};

export default MainPage;