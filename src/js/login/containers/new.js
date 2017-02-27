import { connect } from "react-redux"

import New from "../components/new"
import {alert} from "../actions/new"
import {fetchPostsIfNeeded} from "../../utils/fetch"
import * as types from "../../constants/ActionTypes"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        new: (params) => {
            dispatch(fetchPostsIfNeeded(
                    "login/new/",
                    types.SET_LOGIN_USER,
                    params
                )
            )
        },
        alert: (message) => {
            dispatch(alert(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(New)
