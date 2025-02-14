import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Context } from '../contexts/Contexts'
import InstructModal  from './InstructModal'
import SettingsModal  from './SettingsModal'

export default function Main(){
    // temporary for testing the tiles
    const [wordToGuess, setWordToGuess] = React.useState(['R','E','A','C','H'])
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
    const { 
        isKeyboardDisabled, 
        showInstructions, 
        setShowInstructions, 
        showSettings, 
        setShowSettings 
    } = React.useContext(Context)

    React.useEffect(() =>{
        if(!isKeyboardDisabled){
            document.addEventListener('keydown', keyboardEventHandler)
            return () => {
                document.removeEventListener('keydown', keyboardEventHandler)
            }
        }
    }, [isKeyboardDisabled])

    React.useEffect(() => {
        const url = "https://random-word-api.vercel.app/api?words=1&length=5&type=uppercase"
        fetch(url).then(res => res.json()).then(data => setWordToGuess(data[0].split("")))
    }, [])

    // build the game board
    let gameBoard = []
    for (const guess in guesses){
        const tiles = guesses[guess].letters.map((x, i) => {
            let divClass = getResultClass(guess, x, i)
            return <div key={i} className={divClass}>{x}</div>
        })
        gameBoard.push(
            <div key={guess} id={guess} className="tiles">
                {tiles}
            </div>
        )
    }

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

    function removeLetter(arr){
        let result = [...arr]
        result = result.reverse()
        for (const [i, val] of result.entries()){
            if(val !== ''){
                result[i] = ''
                break
            }
        }
        return result.reverse()
    }

    function getResultClass(key, value, index){
        let divClass = 'tile'
        if(guesses[key].isSet){
            if (wordToGuess[index] === value){
                divClass = 'tile corr_spot'
            }else if (wordToGuess.includes(value)){
                divClass = 'tile wro_spot'
            }else{
                divClass = 'tile wrong'
            }
        }
        return divClass
    }

    async function isValidWord(word){
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        return (await fetch(url)).json()
    }

    // build the keyboard
    function handleKeyClick(event){
        setGuesses((prevGuesses) => {
            for (const guess in prevGuesses){
                if(!prevGuesses[guess].isSet){
                    switch (event.target.value){
                        case 'send':
                            if(!prevGuesses[guess].letters.includes(''))
                            {
                                isValidWord(prevGuesses[guess].letters.join('')).then(res => {
                                    if(res.length !== undefined)
                                        setGuesses({
                                            ...prevGuesses,
                                            [guess]: {...prevGuesses[guess], isSet: true}
                                        })
                                    else
                                        setGuesses(prevGuesses)
                                })
                                break
                            }
                            else
                                return prevGuesses
                        
                        case 'del':
                            var newLetters = removeLetter(prevGuesses[guess].letters)
                            return {
                                ...prevGuesses,
                                [guess]: {...prevGuesses[guess], letters: newLetters}
                            }
                        
                        default:
                            newLetters = addLetter(event.target.value, prevGuesses[guess].letters)
                            return {
                                ...prevGuesses,
                                [guess]: {...prevGuesses[guess], letters: newLetters}
                            }
                            
                    }
                }
            }
        })
    }

    const keyboardEventHandler = (event) => {
        let actionKeys = document.getElementsByClassName('action_keys')
        if(event.key >= 'a' && event.key <= 'z'){
            let key = document.getElementById(`key${event.key.toUpperCase()}`)
            key.click()
        }

        if(event.key === 'Enter')
            actionKeys[0].click()

        if(event.key === 'Backspace')
            actionKeys[1].click()

    }

    const keyboardKeysArr = "QWERTYUIOP-ASDFGHJKL-ZXCVBNM".split('-').map(keyGroups => keyGroups.split(''))
    const keyboardKeysDivs = keyboardKeysArr.map(
        (keyRow) => {
            return keyRow.map((letter) => {
                const keyid = `key${letter}`
                return <button id={keyid} onClick={handleKeyClick} key={letter} className="keys" value={letter}>{letter}</button>
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
                        <FontAwesomeIcon icon={faDeleteLeft}/>
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
            {showInstructions && <InstructModal show={showInstructions} setShow={setShowInstructions}/>}
            {showSettings && <SettingsModal show={showSettings} setShow={setShowSettings}/>}
        </main>
    )
}
