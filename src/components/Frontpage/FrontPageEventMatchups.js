import React from 'react'
import { connect } from 'react-redux'
import { Image, List } from 'semantic-ui-react'
import FrontPageMatchupRow from './FrontPageMatchupRow'

const FrontPageEventMatchups = ({ matchups } ) => {
    const getFirstRow = () => {
        try {
            return matchups.slice(0, 4);

        } catch (error) {
            console.log(error)
        }
    }

    const getSecondRow = () => {
        try {
            return matchups.slice(4, 8);

        } catch (error) {
            console.log(error)
        }
    }

    const getThirdRow = () => {
        try {
            return matchups.slice(8);
        } catch (error) {
            console.log(error)
        }
    }
    if (matchups) {
        return (
            <div>
                <FrontPageMatchupRow matchups={getFirstRow()} />
                <FrontPageMatchupRow matchups={getSecondRow()} />
                <FrontPageMatchupRow matchups={getThirdRow()} />
            </div>
        )
    }
    return (
        <div>
            No matchups found!
        </div>
    )


}


export default FrontPageEventMatchups

