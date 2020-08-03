
const MENU_ANIMATIONS_TYPES = {
    slideLeft:{
        value: 'slideLeft',
        className: 'slideLeft' 
    },
    fallDown:{
        value: 'fallDown',
        className: 'fallDown' 
    }
}

export function getMenuAnimationStyle(animationType){
    return MENU_ANIMATIONS_TYPES[animationType].className
}

function cn(){
    const args = [...arguments];
    const cn = args.reduce((acc,value)=>{
        acc += value ? " " + value : " "
        return acc
    }, "")
    return cn;
}

export function applyButtonElementsStyles(buttonWidth , buttonHeight, transitionTime, menuBarTop, buttonBorder){

    const WITH_BORDER_SIZE_RATIO = 0.8
    const WITH_BORDER_PADDING_RATIO = 0.2
    const NONE_BORDER_SIZE_RATIO = 0.9
    const NONE_BORDER_PADDING_RATIO = 0.1

    const padding = buttonBorder? (buttonHeight*WITH_BORDER_PADDING_RATIO/2-1) + "px " +( buttonWidth*WITH_BORDER_PADDING_RATIO/2-1) + "px" : (buttonHeight*NONE_BORDER_PADDING_RATIO/2) + "px " +( buttonWidth*NONE_BORDER_PADDING_RATIO/2)+ "px"
    const newWidth = buttonBorder ? buttonWidth*WITH_BORDER_SIZE_RATIO : buttonWidth *NONE_BORDER_SIZE_RATIO
    const newHeight = buttonBorder ? buttonHeight*WITH_BORDER_SIZE_RATIO : buttonHeight *NONE_BORDER_SIZE_RATIO
    const border = buttonBorder ? "solid 1px #ceff7a" : " none"
    const menuContainerTop =Number.isInteger(menuBarTop)  ? menuBarTop : buttonHeight
    const lineHeight =  newWidth / 7 
    const midLineHeight = ( (newHeight / 2) - (lineHeight / 2) ) / Math.sqrt(2) 


    const inLineStyle = { 
        buttonStyle:{ 
            width :  newWidth + "px",
            height : newHeight + "px",
            padding : padding,
            border : border
        },
        topBottLinesStyle: {
            height : newWidth / 7 +"px",
            transition: transitionTime + "s"
        },
        middleLineStyle: {
            height : newWidth / 7 +"px",
            margin : newWidth / 5.83 + "px 0",
            transition: transitionTime + "s"
        },
        topLineOpenedStyle: {transform: `rotate(-45deg) translate(-${midLineHeight}px, ${midLineHeight}px)`},
        bottomLineOpenedStyle: { transform: `rotate(45deg) translate(-${midLineHeight}px, -${midLineHeight}px)`},
        menuContainerStyle: {top : `${menuContainerTop}px`}
    }
    return inLineStyle;
}


export function calculateButtonDimensions(width, parantWidth, height, parantHeight){
    const HEIGHT_MODIFIER = 1.3
    const WIDTH_MODIFIER = 0.77
    const calculateButtonDimensions = (num, modifier) =>{
        return {
            buttonFinalWidth: num * modifier,
            buttonFinalHeight: num
        }
    }
    if(height !== undefined){
        if(Number.isInteger(height)) return calculateButtonDimensions(height, HEIGHT_MODIFIER)
        if(height === "auto")        return calculateButtonDimensions(parantHeight, HEIGHT_MODIFIER)

    } else if(width !== undefined){
        if(Number.isInteger(width)) return calculateButtonDimensions(width, WIDTH_MODIFIER)
        if( width === "auto")       return calculateButtonDimensions(parantWidth , WIDTH_MODIFIER) 
    }
    return calculateButtonDimensions(35, HEIGHT_MODIFIER)
}

export function finalizeLineSyles(isOpened , topBottLinesStyle, topLineOpenedStyle, bottomLineOpenedStyle){
    return{
        topLineStyle : isOpened ? {...topBottLinesStyle, ...topLineOpenedStyle } : topBottLinesStyle,
        bottomLineStyle : isOpened ? {...topBottLinesStyle, ...bottomLineOpenedStyle } : topBottLinesStyle
    }
}

export default cn;

