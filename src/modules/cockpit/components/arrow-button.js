// NPM Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Public Dependencies
import upArrow from '../../../../public/img/up-arrow.svg';
import downArrow from '../../../../public/img/down-arrow.svg';
import leftArrow from '../../../../public/img/left-arrow.svg';
import rightArrow from '../../../../public/img/right-arrow.svg';

const arrowDictionary = {
    up: upArrow,
    down: downArrow,
    left: leftArrow,
    right: rightArrow
};

const buttonStyle = { width: '100%' };

const ArrowButton = ({
    control, onTouchStart, onTouchEnd
}) => (
    <button
        onTouchStart={() => onTouchStart({ control })}
        onTouchEnd={() => onTouchEnd({ control })}
        style={{
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            width: '100%'
        }}
    >
        <img
            style={buttonStyle}
            src={arrowDictionary[control]}
            alt={`${control} arrow button`}
        />
    </button>
);

ArrowButton.propTypes = {
    control: PropTypes.string.isRequired,
    onTouchStart: PropTypes.func.isRequired,
    onTouchEnd: PropTypes.func.isRequired
};

export default ArrowButton;
