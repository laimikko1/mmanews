import React from 'react'
import { connect } from 'react-redux'
import { Image, List } from 'semantic-ui-react'


const FrontPageMatchupRow = ({ matchups } ) => {
    console.log(matchups)
    const image = {
        width: 60,
        height: 60
    }

    const listItemStyle = {
        border: "solid",
        margin: 5,
        padding: 5
    }
    return (
        <List horizontal>
            {matchups.map(m =>
                <List.Item style={listItemStyle}>
                    <Image style={image} src={m.fighterOneImage} />
                    vs
                    <Image style={image} src={m.fighterTwoImage} />
                    <List.Item style={{textAlign: "center" }}>
                        {m.fighterOne} vs {m.fighterTwo}
                    </List.Item>
                </List.Item>

            )}
        </List>
    )

}

export default FrontPageMatchupRow