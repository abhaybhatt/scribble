import React from 'react'
import './Toolbar.css'
import pencil from '../../Assets/pencil-svg.svg'
import pen from '../../Assets/paint-brush.svg'
import brush from '../../Assets/paint-brush.svg'
import clear from '../../Assets/delete-svg.svg'
import download from '../../Assets/download-svg.svg'
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';

const Toolbar = ({ setBrush }) =>{
    const handleBrush = (type,val) =>{
        setBrush( prevState =>({...prevState,[type]:val}))
    }
    const handleEraser = () =>{
        setBrush(prevState=>({size:40,color:"#ffffff"}))
    }
    return(
        <div class="tool-bar">
            <div class="strokes">
                <div class="pencil" onClick={()=>handleBrush("size",5)}>
                    <img
                        src={pencil}
                        alt="Eraser"
                        height="30px"
                        width="50px" />
                </div>
                <div class="pen" onClick={()=>handleBrush("size",10)}>
                    <img
                        src={pen}
                        alt="Eraser"
                        height="30px"
                        width="50px" />
                </div>
                <div class="brush" onClick={()=>handleBrush("size",20)}>
                    <img
                        src={brush}
                        alt="Eraser"
                        height="30px"
                        width="50px" />
                </div>
            </div>

            <div class="colors">
                <div class="color red" onClick={()=>handleBrush("color","#ff0000")}></div>
                <div class="color green" onClick={()=>handleBrush("color","#006400")}></div>
                <div class="color blue" onClick={()=>handleBrush("color","#0018f5")}></div>
                <div class="color black" onClick={()=>handleBrush("color","#030303")}></div>
            </div>

            <div class="undo-redo-btns">
                <div class="undo-btn">
                    <UndoIcon />
                </div>
                <div class="redo-btn">
                    <RedoIcon />
                </div>
            </div>
            <div class="eraser" onClick={()=>handleEraser()}>
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