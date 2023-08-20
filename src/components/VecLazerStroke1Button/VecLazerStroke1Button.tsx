
import React,{FC} from 'react'
import './VecLazerStroke1Button.css';

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

    backGroundStyle?:any,
    group1Color?:string,
    group2Color?:string,
    group3Color?:string,
    group4Color?:string,
    group5Color?:string,
    strokeWidth?:string,

    onClick:() => void,

}


const VecLazerStroke1Button:FC<Props>=({
    preserveAspectRatio="none",
    children,
    type="button",
    disabled=false,

    defaultHoverAnimation=true,
    defaultClickAnimation=true,
    defaultInitAnimation=true,

    buttonStyle,
    textStyle,
    backGroundStyle,

    group1Color="#fdc13b",
    group2Color="#d92424",
    group3Color="#7456d1",
    group4Color="#21a9dd",
    group5Color="#14ed93",
    strokeWidth="1",

    onClick
})=>{


    const generateUniqueId = () => Math.random().toString(36).substring(2, 7);
    const uniqueId = generateUniqueId()

return (
            <>
               <button


                    type={type}
                    disabled={disabled}
                    onClick={onClick}
                    id="lazerstroke1button"
                    style={buttonStyle}
                    className={`${defaultInitAnimation ?  'initAnimation-lazerstroke1button'  : ''} customClass-lazerstroke1button`}


                    >
                        <svg
                        viewBox="0 0 41.228001 9.5312882"
                        id="svglazerstroke1button"
                        preserveAspectRatio={preserveAspectRatio}
                        className={`${defaultHoverAnimation ?  'hoverAnimation-lazerstroke1button'  : ''} ${defaultClickAnimation ? 'clickAnimation-lazerstroke1button' : ''}`}
                        xmlns="http://www.w3.org/2000/svg">
                    
                    <path
                        id="background-lazerstroke1button"
                        style={{fill:'none',strokeWidth:.3,stroke:'#000',...backGroundStyle}}
                        d="M1 0a1 1 0 0 0-.5.133A1 1 0 0 0 .135.5 1 1 0 0 0 0 1V8.531a1 1 0 0 0 .135.5 1 1 0 0 0 .365.365 1 1 0 0 0 .5.135h39.227a1 1 0 0 0 .5-.135 1 1 0 0 0 .367-.365 1 1 0 0 0 .025-.047 1 1 0 0 0 .024-.046 1 1 0 0 0 .02-.05 1 1 0 0 0 .017-.048 1 1 0 0 0 .013-.05 1 1 0 0 0 .012-.052 1 1 0 0 0 .01-.05 1 1 0 0 0 .008-.053 1 1 0 0 0 .004-.051V7.199h.002V2.313h-.002V1.04a1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.001 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0 0-.002 1 1 0 0 0-.014-.174 1 1 0 0 0-.045-.168A1 1 0 0 0 41.094.5a1 1 0 0 0-.1-.143 1 1 0 0 0-.123-.125 1 1 0 0 0-.144-.1 1 1 0 0 0-.157-.071 1 1 0 0 0-.17-.047A1 1 0 0 0 40.227 0H1z"/>
                    
                        <defs>
                                <g id={`strokes-lazerstroke1button-${uniqueId}`}>             
                                    <path
                                    style={{strokeLinecap:'round',strokeWidth:strokeWidth}}
                                    d="M1.114 1.04h39"/>
                                </g>
                        </defs>




                        <g  
                        className={`${defaultInitAnimation ?  'initAnimation1-lazerstroke1button': ''}`}>
                            <use 
                                id="stroke-a1-lazerstroke1button"
                                href={`#strokes-lazerstroke1button-${uniqueId}`}
                                className={`${defaultHoverAnimation ?  'strokeAnimation1-lazerstroke1button': ''}`}
                                style={{stroke:group4Color,strokeDasharray:'69% 69%',strokeDashoffset:'-18%'}}
                            />
                        
                            <use 
                                id="stroke-a2-lazerstroke1button"
                                href={`#strokes-lazerstroke1button-${uniqueId}`}
                                className={`${defaultHoverAnimation ?  'strokeAnimation2-lazerstroke1button': ''}`}
                                style={{stroke:group5Color,strokeDasharray:'50% 100%',strokeDashoffset:'-19%'}}
                                />
                            
                            <use 
                                id="stroke-a3-lazerstroke1button"
                                href={`#strokes-lazerstroke1button-${uniqueId}`}
                                className={`${defaultHoverAnimation ?  'strokeAnimation3-lazerstroke1button': ''}`}
                                style={{stroke:group1Color,strokeDasharray:'30% 100%',strokeDashoffset:'-13%'}}
                                />
                            
                            
                            
                            
                            <use 
                                id="stroke-b1-lazerstroke1button"
                                y="13%" 
                                href={`#strokes-lazerstroke1button-${uniqueId}`}
                                className={`${defaultHoverAnimation ?  'strokeAnimation1-lazerstroke1button': ''}`}
                                style={{stroke:group2Color,strokeDasharray:'22% 69%',strokeDashoffset:'-19%'}}
                                />

                            <use 
                                id="stroke-b2-lazerstroke1button"
                                y="13%" 
                                href={`#strokes-lazerstroke1button-${uniqueId}`}
                                className={`${defaultHoverAnimation ?  'strokeAnimation2-lazerstroke1button': ''}`}
                                style={{stroke:group4Color,strokeDasharray:'4% 136%'}}
                                />
                            
                            
                            
                            
                            <use 
                                id="stroke-c1-lazerstroke1button"
                                y="26%" 
                                href={`#strokes-lazerstroke1button-${uniqueId}`}
                                className={`${defaultHoverAnimation ?  'strokeAnimation3-lazerstroke1button': ''}`}
                                style={{stroke:group4Color,strokeDasharray:'42% 110%',strokeDashoffset:'-19%'}}
                                />
                            
                            <use 
                                id="stroke-c2-lazerstroke1button"
                                y="26%" 
                                href={`#strokes-lazerstroke1button-${uniqueId}`}
                                className={`${defaultHoverAnimation ?  'strokeAnimation2-lazerstroke1button': ''}`}
                                style={{stroke:group2Color,strokeDasharray:'16% 136%',strokeDashoffset:'3%'}}
                               
                            
                                />
                            
                            
                            
                            
                            
                                <use
                                id="stroke-d1-lazerstroke1button"
                                y="39%" 
                                href={`#strokes-lazerstroke1button-${uniqueId}`}
                                className={`${defaultHoverAnimation ?  'strokeAnimation2-lazerstroke1button': ''}`}
                                style={{stroke:group4Color,strokeDasharray:'27% 80%',strokeDashoffset:'-3%'}}
                                />
                            
                            
                                <use
                                id="stroke-d2-lazerstroke1button"
                                y="39%" 
                                href={`#strokes-lazerstroke1button-${uniqueId}`}
                                className={`${defaultHoverAnimation ?  'strokeAnimation1-lazerstroke1button': ''}`}
                                style={{stroke:group3Color,strokeDasharray:'21% 97% 57%',strokeDashoffset:'-6%'}}
                                />
                            
                            
                            
                            
                            
                                <use 
                                id="stroke-e1-lazerstroke1button"
                                y="52%" 
                                href={`#strokes-lazerstroke1button-${uniqueId}`}
                                className={`${defaultHoverAnimation ?  'strokeAnimation2-lazerstroke1button': ''}`}
                                style={{stroke:group2Color,strokeDasharray:'38% 59%',strokeDashoffset:'-56%'}}
                                />
                            
                            
                            
                            
                            
                            
                                <use
                                    id="stroke-f1-lazerstroke1button"
                                    y="65%" 
                                    href={`#strokes-lazerstroke1button-${uniqueId}`}
                                    className={`${defaultHoverAnimation ?  'strokeAnimation2-lazerstroke1button': ''}`}
                                    style={{stroke:group3Color,strokeDasharray:'45% 37% 57%',strokeDashoffset:'-7%'}}
                                />
                            
                                <use
                                    id="stroke-f2-lazerstroke1button" 
                                    y="65%" 
                                    href={`#strokes-lazerstroke1button-${uniqueId}`}
                                    className={`${defaultHoverAnimation ?  'strokeAnimation2-lazerstroke1button': ''}`}
                                    style={{stroke:group1Color,strokeDasharray:'27% 75% 57%',strokeDashoffset:'-3%'}}
                                />
                            
                            
                            
                                
                                <use 
                                    id="stroke-g2-lazerstroke1button"
                                    y="78%" 
                                    href={`#strokes-lazerstroke1button-${uniqueId}`}
                                    className={`${defaultHoverAnimation ?  'strokeAnimation2-lazerstroke1button': ''}`}
                                    style={{stroke:group5Color,strokeDasharray:'38%, 23% 52%',strokeDashoffset:'-19%'}}
                                />
                            
                            
                                <use 
                                    id="stroke-g1-lazerstroke1button"
                                    y="78%" 
                                    href={`#strokes-lazerstroke1button-${uniqueId}`}
                                    className={`${defaultHoverAnimation ?  'strokeAnimation1-lazerstroke1button': ''}`}
                                    style={{stroke:group2Color,strokeDasharray:'22% 69%',strokeDashoffset:'-3%'}}
                                />

                        </g>
                    


                    
                    </svg>
                    <div id="text-lazerstroke1button"  style={textStyle}>
                    {children}
                    </div>

                </button>
            </>
)
}

export default VecLazerStroke1Button