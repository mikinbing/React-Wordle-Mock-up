import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Main(){
    return (
        <main>
            <div id="game_board">
                <div className="tiles enabled" id="row_1">
                    <div className="tile">S</div>
                    <div className="tile">W</div>
                    <div className="tile">A</div>
                    <div className="tile">Y</div>
                    <div className="tile">S</div>
                </div>
                <div className="tiles disabled" id="row_2">
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                </div>
                <div className="tiles disabled" id="row_3">
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                </div>
                <div className="tiles disabled" id="row_4">
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                </div>
                <div className="tiles disabled" id="row_5">
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                </div>
                <div className="tiles disabled" id="row_6">
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                </div>
            </div>

            <div id="keyboard">
                <div className="top_row">
                    <div className="keys">Q</div>
                    <div className="keys">W</div>
                    <div className="keys">E</div>
                    <div className="keys">R</div>
                    <div className="keys">T</div>  
                    <div className="keys">Y</div>
                    <div className="keys">U</div>
                    <div className="keys">I</div>
                    <div className="keys">O</div>
                    <div className="keys">P</div>
                </div>
                <div className="mid_row">
                    <div className="keys">A</div>
                    <div className="keys">S</div>
                    <div className="keys">D</div>
                    <div className="keys">F</div>
                    <div className="keys">G</div>
                    <div className="keys">H</div>
                    <div className="keys">J</div>
                    <div className="keys">K</div>
                    <div className="keys">L</div>
                </div>
                <div className="bot_row">
                    <div className="keys action_keys">ENTER</div>
                    <div className="keys">Z</div>
                    <div className="keys">X</div>
                    <div className="keys">C</div>
                    <div className="keys">V</div>
                    <div className="keys">B</div>
                    <div className="keys">N</div>
                    <div className="keys">M</div>
                    <div className="keys action_keys"><FontAwesomeIcon icon={faDeleteLeft} /></div>
                </div>
            </div>
        </main>
    )
}