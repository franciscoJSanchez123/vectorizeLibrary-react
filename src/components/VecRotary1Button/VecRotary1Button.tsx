
import React,{FC} from 'react'
import './VecRotary1Button.css';

interface Props {
    children?: React.ReactNode,
    preserveAspectRatio?:string,
    type?: any,
    disabled?: boolean,

    defaultHoverAnimation?:boolean,
    defaultClickAnimation?:boolean,
    defaultInitAnimation?:boolean,

    buttonStyle?:any,
    textStyle?:any,

    buttonColor?: string,
    lineColor?:string,
   
    onClick:() => void,

}


const VecRotary1Button:FC<Props>=({
    preserveAspectRatio="xMidYMid meet",
    children,
    type="button",
    disabled=false,

    defaultHoverAnimation=true,
    defaultClickAnimation=true,
    defaultInitAnimation=true,

    buttonStyle,
    textStyle,

    buttonColor="#2f81e7",
    lineColor="#000000",

    onClick
})=>{
    const generateUniqueId = () => Math.random().toString(36).substring(2, 7);
    const uniqueId = generateUniqueId()


    return(
        <>
                <button
                        type={type}
                        disabled={disabled}
                        onClick={onClick}
                        id="rotary1button"
                        style={buttonStyle}
                        className={`${defaultInitAnimation ?  'initAnimation-rotary1button'  : ''} customClass-rotary1button`}
                       
                        
                        
                        >
                            
                        <svg
                            viewBox="0 0 41.028999 9.382"
                            id="svgrotary1button"
                            preserveAspectRatio={preserveAspectRatio}
                            className={`${defaultClickAnimation ?  'clickAnimation-rotary1button'  : ''} `}
                                                  

                            xmlns="http://www.w3.org/2000/svg">



                            <defs>
                                <g id={`rotatingPiece-rotary1button-${uniqueId}`}>             
                                
                            
                                    <path
                                    id="path2381"
                                    style={{fill:buttonColor,strokeWidth:.3,stroke:buttonColor}}
                                    d="M4.691 0A4.691 4.691 0 0 1 0 4.691A4.691 4.691 0 0 1 -4.691 0A4.691 4.691 0 0 1 0 -4.691A4.691 4.691 0 0 1 4.691 0z"/>
                                    <path
                                     style={{strokeLinecap:'round',strokeWidth:.25,stroke:lineColor}}
                                    d="M 0,-4.9910002 V 4.9910002"
                                    id="path2160" />
                                    <path
                                    style={{strokeLinecap:'round',strokeWidth:.25,stroke:lineColor}}
                                    d="M -4.9910002,0 H 4.9910002"
                                    id="path2698" />


                                </g>
                            </defs>



                            <g 
                            id="groupOfParts-rotary1button"
                            className={`${defaultHoverAnimation ?  'hoverAnimation-rotary1button'  : ''} `}

                            >

                                <path
                                
                                id="centerPiece-rotary1button"
                                style={{fill:buttonColor,strokeWidth:.3,stroke:buttonColor}}
                                d="M4.73 0a4.69 4.69 0 0 1 0.2 0.01a4.69 4.69 0 0 1 0.23 0.02a4.69 4.69 0 0 1 0.23 0.03a4.69 4.69 0 0 1 0.23 0.04a4.69 4.69 0 0 1 0.22 0.05A4.69 4.69 0 0 1 6.05 0.2a4.69 4.69 0 0 1 0.22 0.07a4.69 4.69 0 0 1 0.21 0.08A4.69 4.69 0 0 1 6.7 0.45a4.69 4.69 0 0 1 0.21 0.1a4.69 4.69 0 0 1 0.2 0.11A4.69 4.69 0 0 1 7.3 0.79a4.69 4.69 0 0 1 0.19 0.13a4.69 4.69 0 0 1 0.18 0.14a4.69 4.69 0 0 1 0.18 0.15a4.69 4.69 0 0 1 0.17 0.16a4.69 4.69 0 0 1 0.16 0.17a4.69 4.69 0 0 1 0.15 0.17A4.69 4.69 0 0 1 8.46 1.9a4.69 4.69 0 0 1 0.13 0.19a4.69 4.69 0 0 1 0.12 0.2a4.69 4.69 0 0 1 0.11 0.2a4.69 4.69 0 0 1 0.1 0.21A4.69 4.69 0 0 1 9.03 2.9a4.69 4.69 0 0 1 0.08 0.21a4.69 4.69 0 0 1 0.07 0.22a4.69 4.69 0 0 1 0.06 0.22a4.69 4.69 0 0 1 0.05 0.22A4.69 4.69 0 0 1 9.33 4a4.69 4.69 0 0 1 0.03 0.23a4.69 4.69 0 0 1 0.02 0.23a4.69 4.69 0 0 1 0.01 0.23A4.69 4.69 0 0 1 9.33 5.36A4.69 4.69 0 0 1 9.19 6.01A4.69 4.69 0 0 1 8.96 6.64A4.69 4.69 0 0 1 8.64 7.23a4.69 4.69 0 0 1 -0.4 0.54A4.69 4.69 0 0 1 7.76 8.24a4.69 4.69 0 0 1 -0.54 0.4A4.69 4.69 0 0 1 6.64 8.96A4.69 4.69 0 0 1 6.01 9.19A4.69 4.69 0 0 1 5.36 9.33A4.69 4.69 0 0 1 4.71 9.38a4.73 4.69 0 0 0 0.01 0H36.3a4.73 4.69 0 0 0 0.02 0A4.69 4.69 0 0 1 35.67 9.33A4.69 4.69 0 0 1 35.02 9.19A4.69 4.69 0 0 1 34.39 8.96A4.69 4.69 0 0 1 33.8 8.64a4.69 4.69 0 0 1 -0.54 -0.4A4.69 4.69 0 0 1 32.79 7.76a4.69 4.69 0 0 1 -0.4 -0.54A4.69 4.69 0 0 1 32.07 6.64A4.69 4.69 0 0 1 31.84 6.01A4.69 4.69 0 0 1 31.7 5.36A4.69 4.69 0 0 1 31.65 4.69A4.69 4.69 0 0 1 31.7 4.02a4.69 4.69 0 0 1 0.14 -0.65a4.69 4.69 0 0 1 0.23 -0.63a4.69 4.69 0 0 1 0.32 -0.59a4.69 4.69 0 0 1 0.4 -0.54a4.69 4.69 0 0 1 0.47 -0.47a4.69 4.69 0 0 1 0.54 -0.4a4.69 4.69 0 0 1 0.59 -0.32a4.69 4.69 0 0 1 0.63 -0.23a4.69 4.69 0 0 1 0.65 -0.14A4.69 4.69 0 0 1 36.32 0A4.73 4.69 0 0 0 36.3 0H4.73z" />


                                <use 
                                
                                id="rotatingPiece1-rotary1button" 
                                href={`#rotatingPiece-rotary1button-${uniqueId}`}
                                />

                                <use 
                                
                                id="rotatingPiece2-rotary1button"
                                href={`#rotatingPiece-rotary1button-${uniqueId}`}

                                />



                            </g>

                        </svg>
                        <div id="text-rotary1button" style={textStyle}>
                        {children}
                        </div>
                </button>
        </>
    )
}

export default VecRotary1Button