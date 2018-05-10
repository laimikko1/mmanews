import React from 'react'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'

const baseUrl = 'http://uk.ufc.com/news'

const HeadLineNewsStory = ({ headlines }) => {
    const style = {
        background: "linear-gradient(to bottom right, grey, white)",
        padding: "20px",
        paddingTop: "20px",
        borderRadius: "10px",
        ltextDecoration: "none"
    }

    return (
        <List style={style}>
            {headlines.map(headl =>
                <List.Item>
                    <List.Icon name="caret right" />
                    <List.Content style={{textDecoration: 'none', color: 'black'}} href={`${baseUrl}/${headl.url_name}`}>{headl.title}</List.Content>
                </List.Item>
            )}

        </List>
    )
}

export default HeadLineNewsStory