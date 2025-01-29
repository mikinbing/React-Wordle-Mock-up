/* eslint-disable react/react-in-jsx-scope */
// import './Instructions.css'

export default function Instructions(){
    return (
        <div id="modal_container">
            <h2>How To Play</h2>
            <h3>Guess the Wordle in 6 tries</h3>
            <ul>
                <li>Each guess must be a 5-letter word.</li>
                <li>The color of the tiles will change to show how close your guess was to the word</li>
            </ul>
            <h4>Examples</h4>
            <div className="tiles">
                <div className="tile corr_spot">W</div>
                <div className="tile">O</div>
                <div className="tile">R</div>
                <div className="tile">D</div>
                <div className="tile">Y</div>
            </div>
            <p><b>W</b> is in the word and in the correct spot.</p>
            <div className="tiles">
                <div className="tile">L</div>
                <div className="tile wro_spot">I</div>
                <div className="tile">G</div>
                <div className="tile">H</div>
                <div className="tile">T</div>
            </div>
            <p><b>I</b> is in the word but in the wrong spot.</p>
            <div className="tiles">
                <div className="tile">R</div>
                <div className="tile">O</div>
                <div className="tile">G</div>
                <div className="tile wrong">U</div>
                <div className="tile">E</div>
            </div>
            <p><b>U</b> is not in the word in any spot.</p>
        </div>
    )
}