import React,{FC} from 'react'
import './VecMetamorph1Link.css';


interface Props {
    children?: React.ReactNode,
    preserveAspectRatio?:string,
    href?:string,
    target?:string,

   
    defaultClickAnimation?:boolean,
    defaultInitAnimation?:boolean,

    buttonStyle?:any,
    textStyle?:any,


    buttonColor?:string,
    reverseMetamorph?:boolean

}

const VecMetamorph1Link:FC<Props>=({

    preserveAspectRatio="none",
    children,
    href="#",
    target,

  
    defaultClickAnimation=true,
    defaultInitAnimation=true,

    buttonStyle,
    textStyle,

    buttonColor="#000",
    reverseMetamorph=false,
})=>{

    const toggleEstado = (state:boolean) => {
        const state1:string="3.9571797971874996,0.5 4.27146885875,0.5 4.585757920312499,0.5 4.900046981875,0.5 5.2143360434375,0.5 5.528625105,0.5 5.842914166562499,0.5 6.157203228125,0.5 6.4714922896875,0.5 6.78578135125,0.5 7.100070412812499,0.5 7.414359474375,0.5 7.7286485359375,0.5 8.0429375975,0.5 8.3572266590625,0.5 8.671515720624999,0.5 8.985804782187499,0.5 9.300093843749998,0.5 9.614382905312498,0.5 9.928671966874997,0.5 10.242961028437499,0.5 10.557250089999998,0.5 10.871539151562498,0.5 11.185828213125,0.5 11.500117274687499,0.5 11.814406336249998,0.5 12.128695397812498,0.5 12.442984459374998,0.5 12.757273520937497,0.5 13.071562582499997,0.5 13.385851644062496,0.5 13.700140705624996,0.5 14.014429767187497,0.5 14.328718828749997,0.5 14.643007890312496,0.5 14.957296951874998,0.5 15.271586013437497,0.5 15.585875074999997,0.5 15.900164136562497,0.5 16.214453198124996,0.5 16.528742259687498,0.5 16.843031321249995,0.5 17.157320382812497,0.5 17.471609444374998,0.5 17.785898505937496,0.5 18.100187567499997,0.5 18.4144766290625,0.5 18.728765690624996,0.5 19.043054752187498,0.5 19.35734381375,0.5 19.671632875312497,0.5 19.985921936875,0.5 20.3002109984375,0.5 20.614500059999997,0.5 20.928789121562495,0.5 21.243078183124997,0.5 21.557367244687498,0.5 21.871656306249996,0.5 22.185945367812497,0.5 22.500234429375,0.5 22.814523490937496,0.5 23.128812552499998,0.5 23.4431016140625,0.5 23.757390675624997,0.5 24.071679737187498,0.5 24.38596879875,0.5 24.700257860312497,0.5 25.014546921875,0.5 25.3288359834375,0.5 25.643125044999998,0.5 25.957414106562496,0.5 26.271703168124997,0.5 26.5859922296875,0.5 26.900281291249996,0.5 27.214570352812498,0.5 27.528859414375,0.5 27.843148475937497,0.5 28.157437537499998,0.5 28.4717265990625,0.5 28.786015660624997,0.5 29.1003047221875,0.5 29.41459378375,0.5 29.728882845312498,0.5 30.043171906875,0.5 30.3574609684375,0.5 30.67175003,0.5 30.986039091562496,0.5 31.300328153124997,0.5 31.6146172146875,0.5 31.928906276249997,0.5 32.243195337812494,0.5 32.557484399375,0.5 32.8717734609375,0.5 33.186062522499995,0.5 33.5003515840625,0.5 33.814640645625,0.5 34.128929707187496,0.5 34.44321876875,0.5 34.7575078303125,0.5 35.071796891874996,0.5 35.3860859534375,0.5 35.700375015,0.5 36.0146640765625,0.5 36.328953138125,0.5 36.6432421996875,0.5 36.95753126125,0.5 37.2718203228125,0.5 37.586109384375,0.5 37.9003984459375,0.5 38.2146875075,0.5 38.5289765690625,0.5 38.843265630625,0.5 39.1575546921875,0.5 39.47184375375,0.5 39.7861328153125,0.5 40.100421876875004,0.5 40.4147109384375,0.5 40.729,0.5 40.729,0.7682 40.729,1.0364 40.729,1.3046 40.729,1.5728 40.729,1.8409 40.729,2.1091 40.729,2.3773 40.729,2.6455 40.729,2.9137 40.729,3.1819 40.729,3.4501 40.729,3.7183 40.729,3.9864 40.729,4.2546 40.729,4.5228 40.729,4.791 40.729,5.0592 40.729,5.3274 40.729,5.5956 40.729,5.8638 40.729,6.1319 40.729,6.4001 40.729,6.6683 40.729,6.9365 40.729,7.2047 40.729,7.4729 40.729,7.7411 40.729,8.0093 40.729,8.2774 40.729,8.5456 40.729,8.8138 40.729,9.082 40.4147109384375,9.082 40.100421876875004,9.082 39.7861328153125,9.082 39.47184375375,9.082 39.1575546921875,9.082 38.843265630625,9.082 38.5289765690625,9.082 38.2146875075,9.082 37.9003984459375,9.082 37.586109384375,9.082 37.2718203228125,9.082 36.95753126125,9.082 36.6432421996875,9.082 36.328953138125,9.082 36.0146640765625,9.082 35.700375015,9.082 35.3860859534375,9.082 35.071796891874996,9.082 34.7575078303125,9.082 34.44321876875,9.082 34.128929707187496,9.082 33.814640645625,9.082 33.5003515840625,9.082 33.186062522499995,9.082 32.8717734609375,9.082 32.557484399375,9.082 32.243195337812494,9.082 31.928906276249997,9.082 31.6146172146875,9.082 31.300328153124997,9.082 30.986039091562496,9.082 30.67175003,9.082 30.3574609684375,9.082 30.043171906875,9.082 29.728882845312498,9.082 29.41459378375,9.082 29.1003047221875,9.082 28.786015660624997,9.082 28.4717265990625,9.082 28.157437537499998,9.082 27.843148475937497,9.082 27.528859414375,9.082 27.214570352812498,9.082 26.900281291249996,9.082 26.5859922296875,9.082 26.271703168124997,9.082 25.957414106562496,9.082 25.643125044999998,9.082 25.3288359834375,9.082 25.014546921875,9.082 24.700257860312497,9.082 24.38596879875,9.082 24.0716797371875,9.082 23.757390675625,9.082 23.4431016140625,9.082 23.1288125525,9.082 22.814523490937503,9.082 22.500234429375002,9.082 22.1859453678125,9.082 21.871656306250003,9.082 21.5573672446875,9.082 21.243078183125,9.082 20.928789121562502,9.082 20.61450006,9.082 20.3002109984375,9.082 19.985921936875002,9.082 19.6716328753125,9.082 19.35734381375,9.082 19.0430547521875,9.082 18.728765690625,9.082 18.4144766290625,9.082 18.1001875675,9.082 17.785898505937503,9.082 17.471609444375,9.082 17.1573203828125,9.082 16.843031321250002,9.082 16.5287422596875,9.082 16.214453198125,9.082 15.9001641365625,9.082 15.585875075,9.082 15.271586013437501,9.082 14.957296951875001,9.082 14.6430078903125,9.082 14.32871882875,9.082 14.0144297671875,9.082 13.700140705625,9.082 13.3858516440625,9.082 13.0715625825,9.082 12.7572735209375,9.082 12.442984459375001,9.082 12.1286953978125,9.082 11.81440633625,9.082 11.5001172746875,9.082 11.185828213125,9.082 10.8715391515625,9.082 10.55725009,9.082 10.2429610284375,9.082 9.928671966875001,9.082 9.6143829053125,9.082 9.30009384375,9.082 8.9858047821875,9.082 8.671515720624999,9.082 8.3572266590625,9.082 8.0429375975,9.082 7.7286485359375,9.082 7.414359474375,9.082 7.100070412812499,9.082 6.78578135125,9.082 6.4714922896875,9.082 6.157203228125,9.082 5.842914166562499,9.082 5.528625105,9.082 5.2143360434375,9.082 4.900046981875,9.082 4.585757920312499,9.082 4.27146885875,9.082 3.9571797971874996,9.082 3.6428907356249995,9.082 3.3286016740625,9.082 3.0143126125,9.082 2.7000235509375,9.082 2.385734489375,9.082 2.0714454278125,9.082 1.75715636625,9.082 1.4428673046875,9.082 1.128578243125,9.082 0.8142891815625,9.082 0.50000012,9.082 0.50000012,8.8138 0.50000012,8.5456 0.50000012,8.2774 0.50000012,8.0093 0.50000012,7.7411 0.50000012,7.4729 0.50000012,7.2047 0.50000012,6.9365 0.50000012,6.6683 0.50000012,6.4001 0.50000012,6.1319 0.50000012,5.8638 0.50000012,5.5956 0.50000012,5.3274 0.50000012,5.0592 0.50000012,4.791 0.50000012,4.5228 0.50000012,4.2546 0.50000012,3.9864 0.50000012,3.7183 0.50000012,3.4501 0.50000012,3.1819 0.50000012,2.9137 0.50000012,2.6455 0.50000012,2.3773 0.50000012,2.1091 0.50000012,1.8409 0.50000012,1.5728 0.50000012,1.3046 0.50000012,1.0364 0.50000012,0.7682 0.50000012,0.5 0.8142891815625,0.5 1.1285782431249998,0.5 1.4428673046874998,0.5 1.7571563662499998,0.5 2.0714454278125,0.5 2.385734489375,0.5 2.7000235509375,0.5 3.0143126125,0.5 3.3286016740625,0.5 3.6428907356249995,0.5"
        const state2:string="5.325000314518647,0.1 5.6691261361337375,0.1 5.823592429037333,0.1 6.322184543555991,0.1 6.357377779363919,0.1 6.820776658074649,0.1 7.045629422594101,0.1 7.319368772593307,0.1 7.733881065824283,0.1 7.8179608871119655,0.1 8.316553001630623,0.1 8.422132709054464,0.1 8.815145116149282,0.1 9.110384352284646,0.1 9.31373723066794,0.1 9.798635995514829,0.1 9.812329345186598,0.1 10.310921459705256,0.1 10.48688763874501,0.1 10.809513574223914,0.1 11.175139281975191,0.1 11.308105688742572,0.1 11.80669780326123,0.1 11.863390925205373,0.1 12.305289917779888,0.1 12.551642568435554,0.1 12.803882032298546,0.1 13.239894211665735,0.1 13.302474146817204,0.1 13.801066261335876,0.1 13.928145854895917,0.1 14.299658375854534,0.1 14.616397498126098,0.1 14.798250490373192,0.1 15.29684260489185,0.1 15.304649141356279,0.1 15.795434719410508,0.1 15.99290078458646,0.1 16.294026833929166,0.1 16.68115242781664,0.1 16.792618948447824,0.1 17.291211062966497,0.1 17.369404071046823,0.1 17.789803177485155,0.1 18.057655714277004,0.1 18.288395292003813,0.1 18.745907357507186,0.1 18.78698740652247,0.1 19.28557952104113,0.1 19.434159000737367,0.1 19.784171635559787,0.1 20.122410643967548,0.1 20.282763750078445,0.1 20.781355864597103,0.1 20.81066228719773,0.1 21.27994797911576,0.1 21.49891393042791,0.1 21.77854009363442,0.1 22.187165573658092,0.1 22.277132208153077,0.1 22.775724322671735,0.1 22.875417216888273,0.1 23.274316437190407,0.1 23.563668860118455,0.1 23.772908551709065,0.1 24.251920503348636,0.1 24.271500666227723,0.1 24.77009278074638,0.1 24.940172146578817,0.1 25.26868489526504,0.1 25.628423789809,0.1 25.767277009783697,0.1 26.265869124302355,0.1 26.31667543303918,0.1 26.764461238821013,0.1 27.00492707626936,0.1 27.26305335333967,0.1 27.693178719499542,0.1 27.76164546785833,0.1 28.260237582376988,0.1 28.381430362729724,0.1 28.758829696895646,0.1 29.069682005959905,0.1 29.257421811414304,0.1 29.75601392593296,0.1 29.757933649190086,0.1 30.254606040451634,0.1 30.446185292420267,0.1 30.753198154970292,0.1 31.13443693565045,0.1 31.25179026948895,0.1 31.750382384007608,0.1 31.82268857888063,0.1 32.248974498526266,0.1 32.51094022211081,0.1 32.747566613044924,0.1 33.19919186534099,0.1 33.24615872756358,0.1 33.74475084208225,0.1 33.887443508571174,0.1 34.243342956600905,0.1 34.575695151801355,0.1 34.74193507111956,0.1 35.24052718563822,0.1 35.263946795031536,0.1 35.73911930015688,0.1 35.95219843826172,0.1 36.23771141467554,0.1 36.64033906615884,0.1095 36.73602975061199,0.1117 37.23066214160938,0.1726 37.322413224060185,0.1938 37.716216822766185,0.2848 37.98475682480753,0.3774 38.18735136298714,0.4473 38.6167304065971,0.648 38.63884868574563,0.6583 39.06568469800601,0.9155 39.19763494345965,1.0154 39.46307472298104,1.2163 39.722242176625734,1.4594 39.82652378906908,1.5573 40.151883443883094,1.9347 40.178565065639255,1.9733 40.43538137016337,2.3446 40.54863894567741,2.5526 40.67373897015988,2.7823 40.83678410483848,3.1766 40.86416655797138,3.2428 41.00441073230415,3.721 41.025377084135094,3.8374 41.092781644305035,4.2115 41.114715402010724,4.5188 41.128255644206206,4.7086 41.11042428208879,5.2063 41.11041280154451,5.2066 41.039432605875184,5.6999 40.99254851063823,5.8836 40.91618535008094,6.1827 40.78365993325836,6.5383 40.74214330683673,6.6497 40.51935528816601,7.0955 40.481032883266074,7.1553 40.25042895885655,7.5151 40.08713158018632,7.7186 39.93852107793718,7.9038 39.62075408240188,8.2235 39.587235275245156,8.2573 39.20059300655637,8.5717 39.08131348740242,8.6494 38.78296906297782,8.8436 38.48705135660659,8.9947 38.33907731322117,9.0702 37.87386967035839,9.2489 37.850922004080545,9.2551 37.392500243797585,9.3779 37.1814842747347,9.4114 36.900273185463604,9.4559 36.49729157979456,9.477 36.40259180000603,9.482 35.903999685487356,9.482 35.80916992109812,9.482 35.4054075709687,9.482 35.120918277867936,9.482 34.90681545645004,9.482 34.432666634637755,9.482 34.40822334193138,9.482 33.909631227412724,9.482 33.744414991407574,9.482 33.411039112894066,9.482 33.05616334817739,9.482 32.91244699837541,9.482 32.41385488385675,9.482 32.36791170494721,9.482 31.915262769338085,9.482 31.67966006171703,9.482 31.416670654819427,9.482 30.99140841848685,9.482 30.91807854030077,9.482 30.41948642578211,9.482 30.303156775256667,9.482 29.920894311263446,9.482 29.614905132026486,9.482 29.422302196744788,9.482 28.926653488796305,9.482 28.92371008222613,9.482 28.42511796770747,9.482 28.238401845566123,9.482 27.926525853188814,9.482 27.550150202335942,9.482 27.427933738670156,9.482 26.92934162415149,9.482 26.86189855910576,9.482 26.430749509632832,9.482 26.17364691587558,9.482 25.932157395114174,9.482 25.4853952726454,9.482 25.433565280595516,9.482 24.93497316607686,9.482 24.797143629415217,9.482 24.4363810515582,9.482 24.108891986185036,9.482 23.937788937039542,9.482 23.439196822520877,9.482 23.420640342954854,9.482 22.94060470800222,9.482 22.732388699724673,9.482 22.44201259348356,9.482 22.044137056494492,9.482 21.9434204789649,9.482 21.44482836444624,9.482 21.355885413264307,9.482 20.946236249927583,9.482 20.667633770034126,9.482 20.447644135408925,9.482 19.979382126803944,9.482 19.94905202089026,9.482 19.450459906371602,9.482 19.291130483573763,9.482 18.951867791852944,9.482 18.602878840343582,9.482 18.453275677334286,9.482 17.954683562815628,9.482 17.9146271971134,9.482 17.456091448296966,9.482 17.22637555388321,9.482 16.95749933377831,9.482 16.53812391065302,9.482 16.458907219259647,9.482 15.960315104740989,9.482 15.849872267422828,9.482 15.461722990222327,9.482 15.161620624192636,9.482 14.96313087570367,9.482 14.473368980962448,9.482 14.464538761185011,9.482 13.965946646666353,9.482 13.78511733773226,9.482 13.467354532147695,9.482 13.096865694502071,9.482 12.96876241762903,9.482 12.470170303110372,9.482 12.408614051271876,9.482 11.971578188591714,9.482 11.720362408041687,9.482 11.472986074073056,9.482 11.032110764811499,9.482 10.974393959554394,9.482 10.475801845035736,9.482 10.343859121581307,9.482 9.977209730517075,9.482 9.655607478351115,9.482 9.478617615998417,9.482 8.980025501479759,9.482 8.967355835120927,9.482 8.481433386961097,9.482 8.279104191890735,9.482 7.98284127244244,9.482 7.590852548660547,9.482 7.484249157923782,9.482 6.985657043405124,9.482 6.902600905430359,9.482 6.487064928886462,9.482 6.214349262200167,9.482 5.988472814367802,9.482 5.526097618969977,9.482 5.489880699849144,9.482 4.991288585330483,9.482 4.8378882723550785,9.4784 4.492970249382102,9.4703 4.1523012552939065,9.4284 3.9983378583624702,9.4094 3.5127831771601126,9.2972 3.479918674261287,9.2858 3.041648636876082,9.1347 2.838122236004933,9.0396 2.5901513143709782,8.9237 2.235105108360437,8.7097 2.1633153020532156,8.6665 1.7659252770075549,8.3657 1.688567509265107,8.2932 1.4024762108447995,8.0247 1.2092513249237904,7.8006 1.0771165559619997,7.6473 0.8007285064636291,7.2477 0.7936186299118246,7.2374 0.5552610298410059,6.7997 0.48747507544017965,6.6358 0.36483344198150347,6.3392 0.26147133947759493,5.9867 0.22458926774174542,5.861 0.13621835570008062,5.3705 0.13203010923849462,5.3118 0.10074435580027002,4.8734 0.10965002578839833,4.6249 0.1185871985041793,4.3754 0.1810616677467694,3.9412 0.18956739408134707,3.8821 0.31281464992810676,3.3993 0.35827753514969773,3.2773 0.4868566932539622,2.9323 0.6299455560821938,2.646 0.7096447116987251,2.4865 0.9785710410871296,2.0669 0.9858409155135941,2.0579 1.290478922094842,1.6782 1.4325206269564488,1.5353 1.6417647248743241,1.3247 1.9454268489067954,1.0778 2.0284069932611426,1.0103 2.446030936920014,0.7384 2.519900061903376,0.7007 2.8899226867451198,0.5118 3.1445963499208593,0.414 3.3551303296582615,0.3331 3.8020659554026337,0.2133 3.8364997562458996,0.2041 4.328726814578198,0.1261 4.482754076653726,0.118 4.8264082,0.1"

        return state?state1:state2
      };

    const generateUniqueId = () => Math.random().toString(36).substring(2, 7);
    const uniqueId = generateUniqueId()

    return(
        <>
                <a 
                href={href}
                target={target} 
                rel="noopener noreferrer"
                id="metamorph1button"
                style={buttonStyle}
                className={`${defaultInitAnimation ?  'initAnimation-metamorph1button'  : ''} customClass-metamorph1button`}
                >




                        
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 41.229 9.7135821" 
                        id="svgmetamorph1button" 
                        preserveAspectRatio={preserveAspectRatio}
                        className={`${defaultClickAnimation ?  'clickAnimation-metamorph1button'  : ''}`}

                        >
                            <polygon id={`polygonmetamorph1button${uniqueId}`}
                            style={{fill:buttonColor,stroke:buttonColor,strokeWidth:0.4,strokeLinecap:'butt',strokeLinejoin:'round',strokeOpacity:1}} 
                            points={toggleEstado(!reverseMetamorph)}
                          
                            >
                            
                                <animate 
                                    attributeName="points" 
                                    dur="0.6s"  
                                    fill="freeze"     
                                    begin={`polygonmetamorph1button${uniqueId}.mouseover`}     
                                    from={toggleEstado(!reverseMetamorph)}
                                    to={toggleEstado(reverseMetamorph)}
                        
                                    />


                                <animate 
                                    attributeName="points" 
                                    dur="0.6s"  
                                    fill="freeze"      
                                    begin={`polygonmetamorph1button${uniqueId}.mouseout`}  
                                    keyTimes="0; 0.2; 0.9; 1"   
                                    from={toggleEstado(reverseMetamorph)}
                                    to={toggleEstado(!reverseMetamorph)}
                                    />



                                

                            </polygon>
                        
                        </svg>
                        <div id="text-metamorph1button" style={textStyle}>
                        {children}
                        </div>
                </a>
        </>
    )
}

export default VecMetamorph1Link