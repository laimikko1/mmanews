import React from 'react'
import { Image } from 'semantic-ui-react'

const HeadlineThumbnail = ({ headline, handleClick }) => {
    const style = {
        listStyleType: 'none',
        padding: '5px'
    }
    return (
        <li style={style} onClick={handleClick}>
            <Image onClick={handleClick} src={headline.thumbnail} size="tiny" circular />
        </li>

    )
}

export default HeadlineThumbnail