import React from 'react'
import './Toolbar.css'
import pencil from '../../Assets/pencil-svg.svg'
import pen from '../../Assets/paint-brush.svg'
import brush from '../../Assets/paint-brush.svg'
import clear from '../../Assets/delete-svg.svg'
import download from '../../Assets/download-svg.svg'
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';

const Toolbar = () =>{
    return(
        <div class="tool-bar">
            <div class="strokes">
                <div class="pencil">
                    <img
                        src={pencil}
                        alt="Eraser"
                        height="30px"
                        width="50px" />
                </div>
                <div class="pen">
                    <img
                        src={pen}
                        alt="Eraser"
                        height="30px"
                        width="50px" />
                </div>
                <div class="brush">
                    <img
                        src={brush}
                        alt="Eraser"
                        height="30px"
                        width="50px" />
                </div>
            </div>

            <div class="colors">
                <div class="color red"></div>
                <div class="color green"></div>
                <div class="color blue"></div>
                <div class="color orange"></div>
            </div>

            <div class="undo-redo-btns">
                <div class="undo-btn">
                    <UndoIcon />
                </div>
                <div class="redo-btn">
                    <RedoIcon />
                </div>
            </div>
            <div class="eraser">
                <img
                    src="https://d29fhpw069ctt2.cloudfront.net/icon/image/49319/preview.svg"
                    alt="Eraser"
                    height="30px"
                    width="50px" />
            </div>
            <div class="clear-btn">
                <img
                    src={clear}
                    alt="Clear"
                    height="30px"
                    width="50px" />
            </div>
            <div class="download-btn">
                <img
                    src={download}
                    alt="Download"
                    height="40px"
                    width="40px" />
            </div>
        </div>
    )
}
    
        
    

export default Toolbar