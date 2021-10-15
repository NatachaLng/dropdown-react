# [dropdown-react](https://www.npmjs.com/package/dropdown-react-natacha)

Simple customizable modal component for React apps.

## Installation

To install using npm: [npm install dropdown-react-natacha]

## API Documentation

This is a simple example of dropdown being used in a React app.

You have to set a state for the dropdown in the parent component.

Create a function that will change the state and pass this function as handleClick props for the dropdown component.

Props that could be passed to dopdown component:

•	selectValue(required): the value that you want to display in the select

•	handleSelectChange(required): function that handle the change of the select value

•	selectLabel(optionnal): the text that you want to display as the title of the dropdown

•	selectList(required): the list that will appear in your dropdown

•	selectName(required): name of your select

•	isOpen(required): function that will check if your dropdown wrapper is opened or closed (return a boolean)

•	handleOpen(required): function that will handle your isOpen state change 

Example:
````
    const [isOverlayActive, setIsOverlayActive] = useState(false);
    const [openedElts, setOpenElts] = useState(initialState);
    
    const handleElementsOpening = (elt) => {
        if (openedElts[elt]) {
            setIsOverlayActive(false);
        }
        else setIsOverlayActive(true);
        setOpenElts({
            ...openedElts,
            [elt]: !openedElts[elt],
        });
    };
````
    
If you want to close the dropdown on clicking anywhere else on your window, you can add this kind of function to your project:
 ````
 window.onclick = function(event) {
        if (!event.target.closest('.dropdown-btn')) {
            setOpenElts(initialState);
            setIsOverlayActive(false);
        }}}
````
