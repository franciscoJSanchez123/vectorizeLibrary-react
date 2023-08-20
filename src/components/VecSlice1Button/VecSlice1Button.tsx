import React,{FC} from 'react'
import './VecSlice1Button.css';


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

    piece1Style?:any,
    piece2Style?:any,
    piece3Style?:any,
    piece4Style?:any,

    onClick:() => void,

}



const VecSlice1Button:FC<Props>=({

    preserveAspectRatio="none",
    children,
    type="button",
    disabled=false,

    defaultHoverAnimation=true,
    defaultClickAnimation=true,
    defaultInitAnimation=true,

    buttonStyle,
    textStyle,

    piece1Style,
    piece2Style,
    piece3Style,
    piece4Style,

    onClick
})=>{


    return (
        <>
            <button 
          
                type={type}
                disabled={disabled}
                onClick={onClick}
                id="slice1button"
                style={buttonStyle}
                className={`${defaultInitAnimation ?  'initAnimation-slice1button'  : ''} customClass-slice1button`}
            
                >
            
            
                <svg
                    viewBox="0 0 41.226601 9.5312501"
                    id="svgSlice1button"
                    preserveAspectRatio={preserveAspectRatio}
                    className={`${defaultHoverAnimation ?  'hoverAnimation-slice1button'  : ''} ${defaultClickAnimation ? 'clickAnimation-slice1button' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                >
            
                    <g
                        id="piece-group-slice1button"
                        className={`${defaultHoverAnimation ?  'piece-slice1button'  : ''}`}
            
                        >
                        <path 
                            id="piece1-slice1button"
                            style={{strokeWidth:.2,stroke:'#000',...piece1Style}}
                            d="M41.227 7.12H0V8.53a1 1 0 0 0 .135.5 1 1 0 0 0 .365.365 1 1 0 0 0 .5.135h39.227a1 1 0 0 0 .5-.135 1 1 0 0 0 .367-.365 1 1 0 0 0 .025-.047 1 1 0 0 0 .024-.046 1 1 0 0 0 .02-.05 1 1 0 0 0 .017-.048 1 1 0 0 0 .013-.05 1 1 0 0 0 .012-.052 1 1 0 0 0 .01-.05 1 1 0 0 0 .008-.053 1 1 0 0 0 .004-.051v-.117z"/>
            
                        <path 
                            id="piece2-slice1button"
                            style={{strokeWidth:.2,stroke:'#000',...piece2Style}}
                            d="M41.227 4.756H0v2.363h41.227v-.187z"/>
                        <path
                            id="piece3-slice1button" 
                            style={{strokeWidth:.2,stroke:'#000',...piece3Style}}
                            d="M41.227 2.383H0v2.363h41.227V2.6z"/>
                        <path 
                            id="piece4-slice1button"
                            style={{strokeWidth:.2,stroke:'#000',...piece4Style}}
                            d="M40.352.01H.962A1 1 0 0 0 .5.133 1 1 0 0 0 .135.5 1 1 0 0 0 0 1v1.373h41.227V1.041a1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.001 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0-.014-.174 1 1 0 0 0-.045-.168A1 1 0 0 0 41.094.5a1 1 0 0 0-.1-.143 1 1 0 0 0-.123-.125 1 1 0 0 0-.144-.1 1 1 0 0 0-.157-.071 1 1 0 0 0-.17-.047 1 1 0 0 0-.048-.004z"/>
            
            
                    </g>
                </svg>
            
            
            
                <div id="text-slice1button" style={textStyle}>
                {children}
                </div>
            
            </button>

        </>
    )
}

export default  VecSlice1Button