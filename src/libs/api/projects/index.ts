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
    }
}