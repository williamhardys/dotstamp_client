import * as types from "../../constants/ActionTypes"
import { IMAGE_DISPLAY_TYPE_CHARACTER } from "../../utils/image"

// 初期ステート設定
const initialState = {
    list: [],
    icon: {
        id: 0,
        fileName: "",
        select: 0
    },
    imageType: IMAGE_DISPLAY_TYPE_CHARACTER,
    load: false,
}

/**
 * アイコンを指定した状態を取得する
 *
 * @param  {object} state 状態
 * @param  {number} id    ID
 * @return {object} 状態
 */
function getSelectIconState(state, id) {
    let count = 0
    for (let value of state.list) {
        if (value.ID == id) {
            state.icon = {
                id: value.ID,
                fileName: value.FileName,
                select: count
            }
        }
        count++
    }
    return state
}

export default function List (state = initialState , action) {
    switch (action.type) {
    case types.DELETE_CHARACTER_LIST:
    case types.GET_CHARACTER_LIST: {
        if (!Array.isArray(action.response.Image)) {
            action.response.Image = []
        }

        let tmp = []

        for (let value of action.response.Image) {
            value["imageType"] = action.receiveParam.imageType
            tmp.push(value)
        }

        state.list = tmp
        state.load = true

        // アイコンの初期位置を取得
        if (action.response.Image.length > 0) {
            state = getSelectIconState(state, action.response.Image[0].ID)
        }

        return JSON.parse(JSON.stringify(state))
    }
    case types.SET_CHARACTER_LIST: {
        state = getSelectIconState(state, action.icon)

        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
