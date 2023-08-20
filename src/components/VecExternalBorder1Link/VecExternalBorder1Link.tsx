import React,{FC} from 'react'
import './VecExternalBorder1Link.css';

interface Props {
    children?: React.ReactNode,
    preserveAspectRatio?:string,
    href?:string,
    target?:string,
    borderLayers?:number,

    defaultHoverAnimation?:boolean,
    defaultClickAnimation?:boolean,
    defaultInitAnimation?:boolean,

    buttonStyle?:any,
    centerStyle?:any
    textStyle?:any,


}

const VecExternalBorder1Link:FC<Props> =({
    preserveAspectRatio="none",
    children,
    href="#",
    target,
    borderLayers=1,

    defaultHoverAnimation=true,
    defaultClickAnimation=true,
    defaultInitAnimation=true,

    buttonStyle,
    centerStyle,
    textStyle,

})=>{

   
    const ids=(i:number)=>{
        return `border${i+1}-externalborder1button`
    }

    const generateElement=(Layers:number)=> {
        const useElements = [];
      
        for (let i = 0; i < Layers; i++) {
            useElements.push(<use
            key={i}
            id={ids(i)}
            style={{ fill: 'none', stroke: '#000000', strokeWidth: 0.3 }}
            href="#border-externalborder1button"
            />);
        }
      
        return useElements;
      }

    return (
        <>
              

            <a 
                href={href}
                target={target} 
                rel="noopener noreferrer"
                id="externalborder1button"
                style={buttonStyle}
                className={`customClass-externalborder1button`}
                >

                    <svg
                        viewBox="0 0 41.5266 9.8312884"
                        id="svgExternalborder1button"
                        preserveAspectRatio={preserveAspectRatio}
                        className={`${defaultClickAnimation ?  'clickAnimation-externalborder1button': ''}`}
                        xmlns="http://www.w3.org/2000/svg">

                        <defs>

                            <g id="border-externalborder1button">             
                                <path 
                                    d="M1.15 0.15a1 1 0 0 0 -0.5 0.13A1 1 0 0 0 0.28 0.65a1 1 0 0 0 -0.13 0.5v7.53a1 1 0 0 0 0.14 0.5a1 1 0 0 0 0.36 0.37a1 1 0 0 0 0.5 0.13h39.23a1 1 0 0 0 0.5 -0.13a1 1 0 0 0 0.37 -0.37a1 1 0 0 0 0.02 -0.05a1 1 0 0 0 0.02 -0.05a1 1 0 0 0 0.02 -0.05a1 1 0 0 0 0.02 -0.05a1 1 0 0 0 0.01 -0.05a1 1 0 0 0 0.01 -0.05a1 1 0 0 0 0.01 -0.05a1 1 0 0 0 0.01 -0.05a1 1 0 0 0 0 -0.05V1.19a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0a1 1 0 0 0 0 0A1 1 0 0 0 41.36 0.98A1 1 0 0 0 41.32 0.81A1 1 0 0 0 41.24 0.65a1 1 0 0 0 -0.1 -0.14A1 1 0 0 0 41.02 0.38a1 1 0 0 0 -0.14 -0.1A1 1 0 0 0 40.72 0.21A1 1 0 0 0 40.55 0.16A1 1 0 0 0 40.38 0.15z"/>
                            </g>

                        </defs>
                        <defs>

                            <g id="center-externalborder1button">             
                                <path 
                                    d="M2.577 1.525a.927.711 0 0 0-.464.095.927.711 0 0 0-.338.26.927.711 0 0 0-.125.357V7.595a.927.711 0 0 0 .125.356.927.711 0 0 0 .338.26.927.711 0 0 0 .464.095H38.95a.927.711 0 0 0 .463-.096.927.711 0 0 0 .34-.26.927.711 0 0 0 .024-.033.927.711 0 0 0 .022-.033.927.711 0 0 0 .018-.035.927.711 0 0 0 .016-.035.927.711 0 0 0 .013-.036.927.711 0 0 0 .01-.036.927.711 0 0 0 .01-.036.927.711 0 0 0 .007-.038.927.711 0 0 0 .004-.036V2.266a.927.711 0 0 0 0-.002.927.711 0 0 0 0-.001.927.711 0 0 0 0-.001.927.711 0 0 0 0-.002.927.711 0 0 0 0-.001.927.711 0 0 0 0-.002.927.711 0 0 0 0-.001.927.711 0 0 0 0-.001.927.711 0 0 0 0-.002.927.711 0 0 0 0-.001.927.711 0 0 0 0-.002.927.711 0 0 0 0-.001.927.711 0 0 0 0-.001.927.711 0 0 0 0-.002.927.711 0 0 0 0-.001.927.711 0 0 0 0-.002.927.711 0 0 0 0-.002.927.711 0 0 0 0-.002.927.711 0 0 0 0-.001.927.711 0 0 0 0-.001.927.711 0 0 0-.013-.124.927.711 0 0 0-.042-.12.927.711 0 0 0-.068-.112.927.711 0 0 0-.093-.102.927.711 0 0 0-.114-.089.927.711 0 0 0-.134-.07.927.711 0 0 0-.145-.052.927.711 0 0 0-.157-.033.927.711 0 0 0-.161-.01z"/>
                                
                            </g>

                        </defs>

                            <g 

                                className={`${defaultHoverAnimation ?  'hoverAnimation-externalborder1button'  : ''} ${defaultInitAnimation ? 'initAnimation-externalborder1button' : ''}`}
                                
                                id="visibleArea"
                                >

                                    {generateElement(borderLayers)}

                                    <use 
                                        id="centerPiece-externalborder1button"
                                        style={{ fill: 'none', stroke: '#000000', strokeWidth: 0.3 ,...centerStyle}}
                                        href="#center-externalborder1button" 
                                    />

                            </g>


                    </svg>
                    <div className={`${defaultInitAnimation ?  'text-initAnimation': ''}`}  id="text-externalborder1button"  style={textStyle}>
                      {children}
                    </div>

                </a>
        </>
    )
}



export default VecExternalBorder1Link