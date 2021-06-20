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
    postCardMoves(card_id: string, move_id: string){
        return request({
            url: `project/columns/cards/${card_id}/moves`,
            method: 'post',
            data : {
                postition: `after:${move_id}`
            }
        })
    }
}