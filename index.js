import React from 'react';
import {useBurgerButton} from './hooks'
import styles from './BurgerMenu.module.css';
import cn, {applyButtonElementsStyles, finalizeLineSyles, calculateButtonDimensions, getMenuAnimationStyle} from './helpers';

const BurgerMenu = ({
    children, 
    width,
    height, 
    isOpen ,
    transitionDuration = 0.4, 
    onEnter, 
    onEntering, 
    onEntered,
    onExit, 
    onExiting, 
    onExited,
    onMenuItemClick,
    menuAnimation = "slideLeft",  // use from const in helpers
    menuBarTop,
    buttonBorder,
    classes = {}
}) => {


    const { isOpened,
            containerHeight,
            containerWidth, 
            toggle,
            containerRef, 
            burgerLineRef,
            menuContainerRef,
            onMenuItemClickIn } = useBurgerButton(onEntering, onEntered, onEnter, onExit, onExiting, onExited, isOpen , onMenuItemClick)

    const   {buttonFinalWidth, buttonFinalHeight} = calculateButtonDimensions(width , containerWidth , height, containerHeight);

    const { buttonStyle, 
            topBottLinesStyle, 
            middleLineStyle, 
            topLineOpenedStyle, 
            bottomLineOpenedStyle,  
            menuContainerStyle  } = applyButtonElementsStyles( buttonFinalWidth , buttonFinalHeight , transitionDuration , menuBarTop, buttonBorder)
    
    const   menuAnimationCss = styles[getMenuAnimationStyle(menuAnimation)]

    const   buttonClassName = isOpened && styles.opened 

    const { topLineStyle, 
            bottomLineStyle } = finalizeLineSyles(isOpened ,topBottLinesStyle, topLineOpenedStyle, bottomLineOpenedStyle)

    return (
        <div className={cn(styles.bm_main_container, buttonClassName, classes.mainContainer)} ref={containerRef}>
            <div className={cn(styles.bm_icon_container, classes.buttonContainer)} onClick={toggle} style={buttonStyle}  >
                <div className={cn(styles.bar1, classes.line)} style={topLineStyle} ref={burgerLineRef}></div>
                <div className={cn(styles.bar2, classes.line)} style={middleLineStyle}></div>
                <div className={cn(styles.bar3, classes.line)} style={bottomLineStyle }></div>
            </div>
            <div className={cn(styles.bm_links_container, menuAnimationCss, classes.menuContainer)} ref={menuContainerRef} style = {menuContainerStyle}>
                <ul className = {cn(classes.menuUl)}>
                    {children.map((child, index) => (
                        <li className = {cn(classes.menuLi)} key={index} onClick={onMenuItemClickIn}> {child} </li>
                    ))}
                </ul>
            </div>
        </div>  
    );
}
  

  export default BurgerMenu;