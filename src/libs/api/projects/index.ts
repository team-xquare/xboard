/* eslint-disable import/no-anonymous-default-export */
import request from '../../axios';

export default {
    getColumns(project_id : number){
        return request({
            url: `/projects/${project_id}/columns`,
            method: "get",
            headers : {
                "Accept" : "application/vnd.github.inertia-preview+json",
                "Authorization" : "Bearer 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"
            }
        })
    },
    getCards(columns_id : number){
        return request({
            url: `projects/columns/${columns_id}/cards`,
            method: 'get',
            headers : {
                "Accept" : "application/vnd.github.inertia-preview+json",
                "Authorization" : "Bearer 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"
            }
        })
    },
    createCard(column_id : number, note : string){
        return request({
            url: `/projects/columns/${column_id}/cards`,
            method: 'post',
            data : {
                note : note
            },
            headers : {
                "Accept" : "application/vnd.github.inertia-preview+json",
                "Authorization" : "Bearer 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"
            }
        })
    },
    postCardMoves(card_id: any, move_id: any){

        return request({
            url: `/projects/columns/cards/${card_id}/moves`,
            method: 'post',
            data : {
                position: `after:${move_id}`
            },
            headers : {
                "Accept" : "application/vnd.github.inertia-preview+json",
                "Authorization" : "Bearer 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"
            }
        })
    },
    postColumnMoves(column_id: any, move_id: any){
        return request({
            url: `/projects/columns/${column_id}/moves`,
            method: 'post',
            data: {
                position: `after:${move_id}`
            },
            headers: {
                "Accept" : "application/vnd.github.inertia-preview+json",
                "Authorization" : "Bearer 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"
            }
        })
    }
}