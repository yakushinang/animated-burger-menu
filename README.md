# animated-burger-menu

An overlay React Menu with a collection of effects and styles using CSS transitions.


## Demo & examples

Live demo: [here](https://yakushinang.github.io/burgermenu/)


##  Installation

The easiest way to use animated-burger-menu is to install it from npm and include it in your own React build process (using  [Browserify](https://browserify.org/),  [Webpack](https://webpack.github.io/), etc).

```
npm install animated-burger-menu
```


## Usage

Items for the sidebar should be passed as child elements of the component using JSX.

    import  BurgerMenu  from  'animated-burger-menu'
    
    function  App() {
    return (
    <BurgerMenu>
	    <a href="/">about</a>
	    <button data-href="#contact">contact</button>
    </BurgerMenu>


## Props

|Name|Type  |Default |Description
|--|--|--|--|
|children  | node ||Can accept any tag. 
|classes| object | | Override or extend the styles applied to the component. **See CSS API below for more details**.
|onEnter| func| | Callback fired before the Menu enters.
|onEntered | func | |Callback fired when the Menu has entered.
|onEntering | func | |Callback fired when the Menu is entering.
|onExit| func||Callback fired before the Menu exits.
|onExited|func||Callback fired when the Menu has exited.
|onExiting|func||  Callback fired when the Menu is exiting.
|onMenuItemClick|func||Callback fired when menu item was clicked. Returns item data
|isOpen|boolean| false |If `true`, the menu is visible.
|transitionDuration| object| 0.4s| Duration of button transition. `<BurgerMenu transitionDuration={'0.3s'}>` or `<BurgerMenu transitionDuration={'500ms'}>`
|height*|object| 27px|Pass the height of the menu icon in px or pass `auto` to get the wrapper height. `<BurgerMenu height={50}>` or `<BurgerMenu height={'auto'}>`. 
|width*|object| 35px| Pass the width of the menu icon in px or pass `auto` to get the wrapper width. `<BurgerMenu width={50}>` or `<BurgerMenu width={'auto'}>`. 
|buttonBorder | boolean | false | Add border to button. Style: solid 1px. 
| menuAnimation| text| `slideLeft` | Menu animation type. Available: `slideLeft` or `fallDown` .
|menuBarTop| number | `top : button height` | Adjust menu top position. `<BurgerMenu menuBarTop={50}>`


*height/width - The menu size is regulated only by one measurement `height` or` width`. If you pass the both props to the component the `height` prop will win. 


# CSS API

    classes={{
			      buttonContainer:  "my_buttonContainer_className",
			      line: "my_line_className",
			      menuContainer: "my_menuContainer_className",
			      menuUl : "my_menuUl_className",
			      menuLi : "my_menuLi_className"
		      }}

