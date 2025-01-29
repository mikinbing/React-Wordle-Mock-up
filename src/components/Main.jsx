import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
export default function Main(){
    // temporary for testing the tiles
    const wordToGuess = ['R','E','A','C','H']
    const [guesses, setGuesses] = React.useState({
        guess1: {
            letters: ['','','','',''],
            isSet: false
        },
        guess2: {
            letters: ['','','','',''],
            isSet: false
        },
        guess3: {
            letters: ['','','','',''],
            isSet: false
        },
        guess4: {
            letters: ['','','','',''],
            isSet: false
        },
        guess5: {
            letters: ['','','','',''],
            isSet: false
        },
        guess6: {
            letters: ['','','','',''],
            isSet: false
        }
    })

    // build the game board
    let gameBoard = []
    for (const guess in guesses){
        const tiles = guesses[guess].letters.map((x, i) => {
            return <div key={i} className='tile'>{x}</div>
        })
        gameBoard.push(
            <div key={guess} id={guess} className="tiles">
                {tiles}
            </div>
        )
    }

    // build the keyboard
    function addLetter(letter, arr){
        let result = [...arr]
        for(const [i, val] of result.entries()){
            if(val === ''){
                result[i] = letter
                break
            }
        }
        return result
    }

    function handleKeyClick(event){
        setGuesses((prevGuesses) => {
            for (const guess in prevGuesses){
                if(!prevGuesses[guess].isSet){
                    let newLetters = addLetter(event.target.value, prevGuesses[guess].letters)
                    return {
                        ...prevGuesses, 
                        [guess]: {...prevGuesses[guess], letters: newLetters}
                    }
                }
            }
        })
    }

    const keyboardKeysArr = "QWERTYUIOP-ASDFGHJKL-ZXCVBNM".split('-').map(keyGroups => keyGroups.split(''))
    const keyboardKeysDivs = keyboardKeysArr.map(
        (keyRow) => {
            return keyRow.map((letter) => {
                return <button onClick={handleKeyClick} key={letter} className="keys" value={letter}>{letter}</button>
            })
        }
    )
    let keyboard = []
    for (const [i, row] of keyboardKeysDivs.entries()){
        keyboard.push(
            <div key={"row" + i} className="row">
                {i === 2 && <button onClick={handleKeyClick} className="keys action_keys" value="send">ENTER</button>}
                {row}
                {i === 2 && 
                    <button onClick={handleKeyClick} className="keys action_keys" value="del">
                        <FontAwesomeIcon icon={faDeleteLeft} />
                    </button>
                }
            </div>
        )
    }

    return (
        <main>
            <div id="game_board">
                {gameBoard}
            </div>

            <div id="keyboard">
                {keyboard}
            </div>
        </main>
    )
}