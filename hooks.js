import  {useState, useCallback, useRef, useEffect }from "react";

function typeofFunc(func){
    if (typeof func == 'function') { 
        return func(); 
    }
}


export const useBurgerButton = (onEntering, onEntered, onEnter, onExit, onExiting, onExited, isOpen,onMenuItemClick) => {
    const [isOpened, setIsOpened] = useState(isOpen)
    const [containerHeight, setHeightBurgerContainer] = useState(null);
    const [containerWidth, setWidthBurgerContainer] = useState(null);
    const burgerLineRef = useRef()
    const menuContainerRef = useRef();
    // TODO: think if there is resize of container - button should resize too -> not for now
    const containerRef = useCallback(node => {
        if (node !== null) {
            setHeightBurgerContainer(node.getBoundingClientRect().height);
            setWidthBurgerContainer(node.getBoundingClientRect().width);
        }
    }, []);

    useEffect(()=>   { 
        const burgerLine = burgerLineRef.current
        burgerLine.addEventListener("transitionstart",  isOpened ? typeofFunc(onEntering) :typeofFunc(onExiting))   // typeofFunc -> bad naming
        burgerLine.addEventListener("transitionend", isOpened ? typeofFunc(onEntered) : typeofFunc(onExited))
        return ()=>{
            burgerLine.removeEventListener("transitionstart",  isOpened ? typeofFunc(onEntering) :typeofFunc(onExiting))
            burgerLine.removeEventListener("transitionend",isOpened ? typeofFunc(onEntered) : typeofFunc(onExited))
        }
    },[isOpened, onEntered, onEntering, onExiting, onExited])

    const onMenuItemClickIn = (e) =>{
        onMenuItemClick( e )
        toggle()
    }
   
    const toggle = () => {
        isOpened ? typeofFunc(onExit) : typeofFunc(onEnter)
        setIsOpened((preState)=>{
            return !preState
        })
    }

    return {
        isOpened,
        containerHeight,
        containerWidth,
        toggle,
        containerRef,
        burgerLineRef,
        menuContainerRef,
        onMenuItemClickIn
    }
}

