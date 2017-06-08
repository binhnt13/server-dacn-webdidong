/**
 * Created by slinker on 4/15/17.
 */
import * as actionTypes from "../constants/actionTypes";

const initialState = {
    conversations:   {
        data: [
            {
                "id": "t_mid.$cAAYNjHrtQCVhnPT3Hlba6-rQEX7g",
                "messages": {
                    "data": [
                        {
                            "from": {
                                "name": "Linh Nguyen Dieu",
                                "email": "275424452908484@facebook.com",
                                "id": "275424452908484"
                            },
                            "to": {
                                "data": [
                                    {
                                        "name": "Chatshopnodejs",
                                        "email": "1785032935073759@facebook.com",
                                        "id": "1785032935073759"
                                    }
                                ]
                            },
                            "created_time": "2017-04-16T12:54:00+0000",
                            "message": "alo]",
                            "id": "m_mid.$cAAYNjHrtQCVhqBkJT1bdtO6qvBit"
                        }
                    ],
                    "paging": {
                        "cursors": {
                            "before": "QVFIUmdSQW9JeVg0ZATI4QkNrV2NoVjFfMF85TGZAhVEgycnBXNXFkT1lBQnZAUUnA1ZAndKTzFoUmpBaFU1X0IwSlhKT2xiQUlCZA3NCVG40eTdtRlNXbHA3RlBrSmkxUGZAwVldiWlNOSXkxTldjeTkwUEFPc0hlem41enNHRExRd2NUOE94",
                            "after": "QVFIUmdSQW9JeVg0ZATI4QkNrV2NoVjFfMF85TGZAhVEgycnBXNXFkT1lBQnZAUUnA1ZAndKTzFoUmpBaFU1X0IwSlhKT2xiQUlCZA3NCVG40eTdtRlNXbHA3RlBrSmkxUGZAwVldiWlNOSXkxTldjeTkwUEFPc0hlem41enNHRExRd2NUOE94"
                        },
                        "next": "https://graph.facebook.com/v2.8/t_mid.$cAAYNjHrtQCVhnPT3Hlba6-rQEX7g/messages?access_token=EAACEdEose0cBABzVlAEa2pYhUi04SkWMZCWZBzeu2LWKjydkWkWdXZB7MpZCPgJvZBaYNqsgNI6LLFgjPfMoMtEsCZCbj3xadxIZB5CK8tEvmVg5esc1ddUrz2I3Ytu7iyMUQ4soE6bUNcVlndPgmikg7eVjakzUnSfd5mVOwDodmiUkPihxMuEkzjQe6KT2IoZD&pretty=1&fields=from%2Cto%2Ccreated_time%2Cmessage&limit=1&after=QVFIUmdSQW9JeVg0ZATI4QkNrV2NoVjFfMF85TGZAhVEgycnBXNXFkT1lBQnZAUUnA1ZAndKTzFoUmpBaFU1X0IwSlhKT2xiQUlCZA3NCVG40eTdtRlNXbHA3RlBrSmkxUGZAwVldiWlNOSXkxTldjeTkwUEFPc0hlem41enNHRExRd2NUOE94"
                    }
                }
            }
        ]
    },
    messages: []
};

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.GET_CHAT_HISTORY:
            return {
                ...state,
                conversations: action.payload
            };
            break;

        case actionTypes.GET_LIST_HISTORY_BY_SENDERID:
            return {
                ...state,
                messages: action.payload
            };
        case actionTypes.ADD_NEW_MESSAGE:
            console.log(action.payload);
            let messages = state.messages;
            messages.unshift(action.payload);
            return {
                ...state,
                messages,
            };
    }
    return state;
}
