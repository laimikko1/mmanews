import React from 'react'
import { List } from 'semantic-ui-react'
import weightclasses from '../../weightclasses'


const WeightClassNavbars = () => {
    const listItemStyle = {
        background: "#2f3033",
        transform: "skew(-20deg)",
        padding: 5,
        margin: 0,
        border: "solid",
        borderWidth: "thin",
        borderColor: "white",
        marginTop: 10,
        color: "white" /* INVERSE SKEW */
    }

    const genderListItemStyle = {
        color: "white",
        background: "#2f3033",
        transform: "skew(-20deg)",
        padding: 5,
        margin: 0,
        border: "solid",
        borderWidth: "thin",
        borderColor: "white",
        marginTop: 10,
        background: "red",
        /* INVERSE SKEW */

    }

    return (
        <div>
            <List horizontal>
                <List.Item style={genderListItemStyle}>
                    MEN'S
            </List.Item>
                {weightclasses.men.map(m =>
                    <List.Item style={listItemStyle}>
                        {m}
                    </List.Item>
                )}
            </List>
            <List horizontal>
                <List.Item style={genderListItemStyle}>
                    WOMEN'S
            </List.Item>
                {weightclasses.women.map(m =>
                    <List.Item style={listItemStyle}>
                        {m}
                    </List.Item>)
                }
            </List>
        </div>
    )
}

export default WeightClassNavbars