import React, {useState} from 'react'
import PropTypes from "prop-types";


export default function Formatter({ text, value, config }) {
    const { maxTextLength = 5, showUnformatted = false } = config || {};
    const [isHovered, setIsHovered] = useState(false);

     const formatValue = (val) => {
       if (val >= 1000000) {
         return val >= 10000000
           ? ">"
           : `${Math.round((val / 1000000) * 10) / 10}M`;
       } else if (val >= 1000) {
         return `${Math.round((val / 1000) * 10) / 10}K`;
       } else {
         return Math.round(val);
       }
     };

     const formattedText = `${text.slice(0, maxTextLength)}${
       text.length > maxTextLength ? "..." : ""
     }`;

     const handleMouseEnter = () => setIsHovered(true);
     const handleMouseLeave = () => setIsHovered(false);
  
    return (
      <>
        <span
          data-testid="text"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {formattedText}
        </span>
        <span
          data-testid="value"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {formatValue(value)}
        </span>
      {isHovered && showUnformatted && (
        <span>{`${text}: ${value}`}</span>
      )}
      </>
    );
}

Formatter.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  config: PropTypes.shape({
    maxTextLength: PropTypes.number,
    showUnformatted: PropTypes.bool,
  }),
};

// TASK:
 
// implement a react component that formats the input according to config
// passed as properties and rules specified in the description.

// 1. The Formatter Component schould accept three properties: 
//    - text (string): text to be displayed according to the formatting rules.
//    - value (number): numerical value to be displayed according to the formatting rules.
//    - config (object) consisting of two properties: 
//        . maxTextLength (optional number)
//        . showUnformatted (optional boolean)

// 2. Formatter should use three separate elements:
//     1. A separate element with (data-testid) property set to (text) for formatted (text)
//     2. A separate element with (data-testid) property set to (value) for formatted (value)
//     3. A separate elements to display the unformatted text when someone hovers over the (text) or (value) elements mentioned above.

// 3. The value passed as an input property will be greater that 0 and less that 10000000(0 < value < 10000000). 
//    The value should be formatted according to the following set of rules:
//         . if a value is greater than one million, it should add the "M" sufix and display the number of millions rounded
//         with one digit precision(4500000.2i -> 4.5M);
//         . if a value is equal to one million it sould display 1M (without a decimal poin)
//         . if a value is greater than one thousand, it should add the "K" suffix and display the number of thousands rounded 
//         with one digit precision (25650.2 -> 25.7K)
//         . if a value is equal to one thousand it sould display 1K (without a decimal point)
//         . otherwise the value should be rounded to the closest integer value(657.123 -> 657)

// 4. The (text) should be formatted according to the property in the config parameter:
//     maxTextLength (Optional number, 5 by default): Maximum number of characters to be displayed (relates only to the (text) property). 
//         if (text) is longer than maxTextLength, display the first maxTextLength characters and add three dots(...).

// 5. The formatted text should never be displayed if the (showUnformatted) property from the (config) object does not equal (true), 
// otherwise it should be displayed when someone hovers over (text) or (value). The unformatted text should be displayed in a separate element in the following form:
//     (text): (value).