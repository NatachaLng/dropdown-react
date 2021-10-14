import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

import './styles/Dropdown.css'

/**
 *
 * @param selectValue - Default value
 * @param handleSelectChange - Handle change
 * @param selectLabel - Label name
 * @param selectList - List to display in the dropdown
 * @param selectName - Name
 * @param isOpen - Check if the dropdown is opened
 * @param handleOpen - Function to open
 * @return {JSX.Element}
 * @constructor
 */
const Dropdown = ({
                      selectValue,
                      handleSelectChange,
                      selectLabel,
                      selectList,
                      selectName,
                      isOpen,
                      handleOpen,
                  }) => {
    const [activeDescendant, setActiveDescendant] = useState(
        `option-${selectValue.text}`
    );

    return (
        <div className="dropdown-wrapper">
            <label htmlFor={`${selectName}-btn`} className="dropdown-label">
                {selectLabel}
            </label>
            <span
                className="dropdown"
                id={`${selectName}-btn`}
                tabIndex="0"
                aria-expanded={isOpen}
                aria-controls={`${selectName}-menu`}
                aria-activedescendant={activeDescendant}
                aria-labelledby={activeDescendant}
                aria-haspopup={true}
            >
        <span className="dropdown-btn" onClick={() => handleOpen(selectName)}>{selectValue.text} {isOpen ? <FontAwesomeIcon icon={faChevronUp} className='arrow_dropdown' onClick={() => handleOpen(selectName)}/> :
            <FontAwesomeIcon icon={faChevronDown} className='arrow_dropdown' onClick={() => handleOpen(selectName)}/>}</span>
      </span>
            <div className={isOpen ? "dropdown-options active" : "dropdown-options"}>
                <ul className="dropdown-list" id={`${selectName}-menu`}>
                    {selectList.map((elt) => (
                        <li
                            key={elt.value}
                            value={elt}
                            onClick={() => {
                                handleSelectChange(selectName, elt);
                                setActiveDescendant(`option-${elt.text}`);
                                handleOpen(selectName);
                            }}
                            id={`option-${elt.text}`}
                            className="dropdown-option"
                            tabIndex="-1"
                        >
                            {elt.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;