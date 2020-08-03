import React from 'react'
import cn, {stylesAdjust, buttonWidthHeight, calculateButtonDimensions} from './helpers'


describe('cn - should return string of class names', () => {
    it('null', () => {
        const classNamesList = cn(null)
        expect(classNamesList).toEqual(" ");
    });
    it('if 2 good', () => {
        const classNamesList = cn("bm_links_container", "bm_icon_container")
        expect(classNamesList).toEqual(" bm_links_container bm_icon_container");
    });
    it('nothing passes', () => {
        const classNamesList = cn()
        expect(classNamesList).toEqual("");
    });
  }); 

// NOT ALL FUNCTIONS TESTED _ ADD LATER _ NOT CRITICAL FOR NOW

// TRY TO RUN
// npm test -- --coverage

describe('stylesAdjust - should return css object', () => {
    // args ----> buttonWidth , buttonHeight, transitionTime, menuBarTop, buttonBorder
    it('pass ---> none', () => {
        const   {buttonFinalWidth, buttonFinalHeight} = buttonWidthHeight(undefined , 0 , undefined, 0);
        const a = stylesAdjust(buttonFinalWidth, buttonFinalHeight, 0.4, undefined, undefined)
        const testresults ={
            bottomLineOpenedStyle: {transform: "rotate(45deg) translate(-7.7781745930520225px, -7.7781745930520225px)"},
            buttonStyle: {width: "35px", height: "27px", padding: "0px 0px", border: " none"},
            menuContainerStyle: {top: "27px"},
            middleLineStyle: {height: "5px", margin: "6.003430531732419px 0", transition: "0.4s"},
            topBottLinesStyle: {height: "5px", transition: "0.4s"},
            topLineOpenedStyle: {transform: "rotate(-45deg) translate(-7.7781745930520225px, 7.7781745930520225px)"}
        }
        expect(a).toEqual(testresults);
    });

    it('pass ---> only height number', () => {
        const   {buttonFinalWidth, buttonFinalHeight} = buttonWidthHeight(undefined , 0 , 80, 0);
        const a = stylesAdjust(buttonFinalWidth, buttonFinalHeight, 0.4, undefined, undefined)
        const testresults ={
            bottomLineOpenedStyle: {transform: "rotate(45deg) translate(-23.0314780157904px, -23.0314780157904px)"},
            buttonStyle: {width: "104px", height: "80px", padding: "0px 0px", border: " none"},
            menuContainerStyle: {top: "80px"},
            middleLineStyle: {height: "14.857142857142858px", margin: "17.838765008576328px 0", transition: "0.4s"},
            topBottLinesStyle: {height: "14.857142857142858px", transition: "0.4s"},
            topLineOpenedStyle: {transform: "rotate(-45deg) translate(-23.0314780157904px, 23.0314780157904px)"}
        }
        expect(a).toEqual(testresults);
    });

    // it('pass ---> only height auto', () => {
    //     const   {buttonFinalWidth, buttonFinalHeight} = buttonWidthHeight(undefined , 60 , "auto", 100);
    //     const a = stylesAdjust(buttonFinalWidth, buttonFinalHeight, 0.4, undefined, undefined)
    //     const testresults ={
    //         bottomLineOpenedStyle: {transform: "rotate(45deg) translate(-23.0314780157904px, -23.0314780157904px)"},
    //         buttonStyle: {width: "104px", height: "80px", padding: "0px 0px", border: " none"},
    //         menuContainerStyle: {top: "80px"},
    //         middleLineStyle: {height: "14.857142857142858px", margin: "17.838765008576328px 0", transition: "0.4s"},
    //         topBottLinesStyle: {height: "14.857142857142858px", transition: "0.4s"},
    //         topLineOpenedStyle: {transform: "rotate(-45deg) translate(-23.0314780157904px, 23.0314780157904px)"}
    //     }
    //     expect(a).toEqual(testresults);
    // });

    it('pass ---> only width number', () => {
        const   {buttonFinalWidth, buttonFinalHeight} = buttonWidthHeight(80 , 0 , undefined, 0);
        const a = stylesAdjust(buttonFinalWidth, buttonFinalHeight, 0.4, undefined, undefined)
        const testresults ={
            bottomLineOpenedStyle: {transform: "rotate(45deg) translate(-17.73827868233682px, -17.73827868233682px)"},
            buttonStyle: {width: "80px", height: "61.6px", padding: "0px 0px", border: " none"},
            menuContainerStyle: {top: "61.6px"},
            middleLineStyle: {height: "11.428571428571429px", margin: "13.722126929674099px 0", transition: "0.4s"},
            topBottLinesStyle: {height: "11.428571428571429px", transition: "0.4s"},
            topLineOpenedStyle: {transform: "rotate(-45deg) translate(-17.73827868233682px, 17.73827868233682px)"}
        }
        expect(a).toEqual(testresults);
    });

    // it('pass ---> only width auto', () => {
    //     const   {buttonFinalWidth, buttonFinalHeight} = buttonWidthHeight("auto" , 80 , undefined, 100);
    //     const a = stylesAdjust(buttonFinalWidth, buttonFinalHeight, 0.4, undefined, undefined)
    //     const testresults ={
    //         bottomLineOpenedStyle: {transform: "rotate(45deg) translate(-17.73827868233682px, -17.73827868233682px)"},
    //         buttonStyle: {width: "80px", height: "61.6px", padding: "0px 0px", border: " none"},
    //         menuContainerStyle: {top: "61.6px"},
    //         middleLineStyle: {height: "11.428571428571429px", margin: "13.722126929674099px 0", transition: "0.4s"},
    //         topBottLinesStyle: {height: "11.428571428571429px", transition: "0.4s"},
    //         topLineOpenedStyle: {transform: "rotate(-45deg) translate(-17.73827868233682px, 17.73827868233682px)"}
    //     }
    //     expect(a).toEqual(testresults);
    // });

    it('pass ---> height width', () => {
        const   {buttonFinalWidth, buttonFinalHeight} = buttonWidthHeight(80 , 0 , 100, 0);
        const a = stylesAdjust(buttonFinalWidth, buttonFinalHeight, 0.4, undefined, undefined)
        const testresults ={
            bottomLineOpenedStyle: {transform: "rotate(45deg) translate(-28.789347519738005px, -28.789347519738005px)"},
            buttonStyle: {width: "130px", height: "100px", padding: "0px 0px", border: " none"},
            menuContainerStyle: {top: "100px"},
            middleLineStyle: {height: "18.571428571428573px", margin: "22.29845626072041px 0", transition: "0.4s"},
            topBottLinesStyle: {height: "18.571428571428573px", transition: "0.4s"},
            topLineOpenedStyle: {transform: "rotate(-45deg) translate(-28.789347519738005px, 28.789347519738005px)"}
        }
        expect(a).toEqual(testresults);
    });

    it('pass ---> transitionTime', () => {
        const   {buttonFinalWidth, buttonFinalHeight} = buttonWidthHeight(undefined , 0 , undefined, 0);
        const a = stylesAdjust(buttonFinalWidth, buttonFinalHeight, 0.6, undefined, undefined)
        const testresults ={
            bottomLineOpenedStyle: {transform: "rotate(45deg) translate(-7.7781745930520225px, -7.7781745930520225px)"},
            buttonStyle: {width: "35px", height: "27px", padding: "0px 0px", border: " none"},
            menuContainerStyle: {top: "27px"},
            middleLineStyle: {height: "5px", margin: "6.003430531732419px 0", transition: "0.6s"},
            topBottLinesStyle: {height: "5px", transition: "0.6s"},
            topLineOpenedStyle: {transform: "rotate(-45deg) translate(-7.7781745930520225px, 7.7781745930520225px)"}
                    }
        expect(a).toEqual(testresults);
    });

    it('pass ---> menuBarTop', () => {
        const   {buttonFinalWidth, buttonFinalHeight} = buttonWidthHeight(undefined , 0 , undefined, 0);
        const a = stylesAdjust(buttonFinalWidth, buttonFinalHeight, 0.4, 125, undefined)
        const testresults ={
            bottomLineOpenedStyle: {transform: "rotate(45deg) translate(-7.7781745930520225px, -7.7781745930520225px)"},
            buttonStyle: {width: "35px", height: "27px", padding: "0px 0px", border: " none"},
            menuContainerStyle: {top: "125px"},
            middleLineStyle: {height: "5px", margin: "6.003430531732419px 0", transition: "0.4s"},
            topBottLinesStyle: {height: "5px", transition: "0.4s"},
            topLineOpenedStyle: {transform: "rotate(-45deg) translate(-7.7781745930520225px, 7.7781745930520225px)"}
            }
        expect(a).toEqual(testresults);
    });

    it('pass ---> buttonBorder', () => {
        const   {buttonFinalWidth, buttonFinalHeight} = buttonWidthHeight(undefined , 0 , undefined, 0);
        const a = stylesAdjust(buttonFinalWidth, buttonFinalHeight, 0.4, undefined, true)
        const testresults ={
            bottomLineOpenedStyle: {transform: "rotate(45deg) translate(-6.222539674441618px, -6.222539674441618px)"},
            buttonStyle: {width: "28px", height: "21.6px", padding: "1.7000000000000002px 2.5px", border: "solid 1px #ceff7a"},
            menuContainerStyle: {top: "27px"},
            middleLineStyle: {height: "4px", margin: "4.802744425385935px 0", transition: "0.4s"},
            topBottLinesStyle: {height: "4px", transition: "0.4s"},
            topLineOpenedStyle: {transform: "rotate(-45deg) translate(-6.222539674441618px, 6.222539674441618px)"}
            }
        expect(a).toEqual(testresults);
    });

}); 

