import React from 'react'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'
import WeightClassNavbars from '../Fighters/WeightClassNavbars'
import FightersPageTitleHolders from '../Fighters/FightersPageTitleHolders'

const FightersFrontPage = (weightclass) => {

    return (
        <div>
            <WeightClassNavbars />

            <FightersPageTitleHolders />
        </div>
    )
}

export default FightersFrontPage