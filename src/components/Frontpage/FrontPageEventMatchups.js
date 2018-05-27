import React from 'react'
import { connect } from 'react-redux'
import { Image, List } from 'semantic-ui-react'
import FrontPageMatchupRow from './FrontPageMatchupRow'

const FrontPageEventMatchups = ({  matchups } ) => {
    const getFirstRow = () => {
        return matchups.slice(0, 4);
    }

    const getSecondRow = () => {
        return matchups.slice(4, 8);
    }

    const getThirdRow = () => {
        return matchups.slice(8);
    }
    return (
        <div>
            <FrontPageMatchupRow matchups={getFirstRow()} />
            <FrontPageMatchupRow matchups={getSecondRow()} />
            <FrontPageMatchupRow matchups={getThirdRow()} />
        </div>
    )
}


export default FrontPageEventMatchups

