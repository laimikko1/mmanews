import React from 'react'

const HeadlineThumbnail = ({ headline, handleClick }) => {
    console.log(`are we here`);
    return (
        <li onClick={handleClick}>
            <img src={headline.thumbnail} alt="a picture" />
        </li>

    )
}

export default HeadlineThumbnail