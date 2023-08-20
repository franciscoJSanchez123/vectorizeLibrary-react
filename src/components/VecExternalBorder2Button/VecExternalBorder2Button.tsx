import React,{FC} from 'react'
import './VecExternalBorder2Button.css';


interface Props {
    children?: React.ReactNode,
    preserveAspectRatio?:string,
    type?: any,
    disabled?: boolean,
    borderLayers?:number,

    defaultHoverAnimation?:boolean,
    defaultClickAnimation?:boolean,
    defaultInitAnimation?:boolean,

    buttonStyle?:any,
    centerStyle?:any
    textStyle?:any,

    onClick:() => void,

}

const VecExternalBorder2Button:FC<Props> =({
    preserveAspectRatio="none",
    children,
    type="button",
    disabled=false,
    borderLayers=1,

    defaultHoverAnimation=true,
    defaultClickAnimation=true,
    defaultInitAnimation=true,

    buttonStyle,
    centerStyle,
    textStyle,
    onClick

})=>{

   
    const ids=(i:number)=>{
        return `border${i+1}-externalborder2button`
    }

    const generateElement=(Layers:number)=> {
        const useElements = [];
      
        for (let i = 0; i < Layers; i++) {
            useElements.push(<use
            key={i}
            id={ids(i)}
            style={{ fill: 'none', stroke: '#000000', strokeWidth: 0.2 }}
            href="#border-externalborder2button"
            />);
        }
      
        return useElements;
      }

    return (
        <>
                
                <button
                    type={type}
                    disabled={disabled}
                    onClick={onClick}
                    id="externalborder2button"
                    style={buttonStyle}
                    className={`customClass-externalborder2button`}
                   
                        >
                    <svg
                        viewBox="0 0 41.229 9.5819998"
                        id="svgExternalborder2button"
                        preserveAspectRatio={preserveAspectRatio}
                        className={`${defaultClickAnimation ?  'clickAnimation-externalborder2button': ''}`}
                    
                        xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <g id="border-externalborder2button">             
                                <path  
                                    d="M4.83 0.1A4.73 4.69 0 0 0 0.1 4.79a4.73 4.69 0 0 0 4.73 4.69H36.4a4.73 4.69 0 0 0 4.73 -4.69A4.73 4.69 0 0 0 36.4 0.1z"/>
                            </g>
                        </defs>
                        <defs>
                            <g id="center-externalborder2button">             
                                <path    
                                    d="M4.79 0.89a4 3.9 0 0 0 -4 3.9a4 3.9 0 0 0 4 3.9h31.65a4 3.9 0 0 0 4 -3.9a4 3.9 0 0 0 -4 -3.9z"/>
                            </g>
                        </defs>
                    
                        <g 
                        className={`${defaultHoverAnimation ?  'hoverAnimation-externalborder2button'  : ''} ${defaultInitAnimation ? 'initAnimation-externalborder2button' : ''}`}
                        id="visibleArea"
                        >
                       
                        
                        {generateElement(borderLayers)}

                        <use 
                            id="centerPiece-externalborder2button" 
                            style={{ fill: 'none', stroke: '#000000', strokeWidth: 0.2 ,...centerStyle}}
                            href="#center-externalborder2button" 
                        />
                        </g>


                    </svg>
                    <div className={`${defaultInitAnimation ?  'initAnimation-text': ''}`}  id="text-externalborder2button"  style={textStyle}>
                    {children}
                    </div>
                </button>
        </>
    )
}



export default VecExternalBorder2Button