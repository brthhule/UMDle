import campus from '../assets/UMD-campus.jpg'
import '../styles/HomeScreen.css'
import model from '../script'

const MainPage = () => {
    function processClick() {
        document.getElementById('userForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const input = document.getElementById('name').value;
            model.main(input);
        });
    }

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
                        
                        <br></br><br></br>
                        <button id="button" type="submit" onClick={processClick}>Enter</button>
                    </form>
                    <p id="output"></p>
                </div>

                <div id="guesses">
                    <p id="guesses-text">Guesses: ...</p>
                </div>
                

                <div id="bottom-container">
                    <img id="image" src={campus}></img>
                </div>   
            </body>

            
        </>       
    )
}


export default MainPage;
