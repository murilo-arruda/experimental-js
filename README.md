# Experimental project for testing, macros and LEARNING!

## Test #1

Status: Basic functionallity done.
Task: Automate creation of an component
Description:
Create a node executable to automate the creation proccess

1- Create a folder inside the components folder containing the component file
with React arrow function and a .css file.

2 - Create a 'dumb' index.js just to mirror the real react file. Just for looking better
in text editors when alot 'index.js' files are open.

3 - (Optional, for future) - Customizable Component: sass, hooks etc...

## Test #2

Task: Create a custom placeholder like gmail login. 
Status: Done!

1 - Create a wrapper with position relative and put the input field and the placeholder element

2 - Placeholder element must have absolute positon and the left and bottom position need to be adjusted to fit inside
the input field

3 - When focus occur on input field: The placeholder active an animation that use transform/translateY/scale to adjust the position
of the placeholder.

4 - if the value of input as length greater than 0. the placeholder will be fixed on top of input field

5 - To achive this state i've used React.useRef and useState to create some logic behind it.


