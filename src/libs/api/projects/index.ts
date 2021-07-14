/* eslint-disable import/no-anonymous-default-export */
import request from '../../axios';

export default {
    getColumns(project_id : number){
        return request({
            url: `/projects/${project_id}/columns`,
            method: "get",
            headers : {
                "Accept" : "application/vnd.github.inertia-preview+json",
                "Authorization" : `Bearer ${localStorage.getItem('access_token')}`
            }
        })
    },
    getCards(columns_id : number){
        return request({
            url: `projects/columns/${columns_id}/cards`,
            method: 'get',
            headers : {
                "Accept" : "application/vnd.github.inertia-preview+json",
                "Authorization" : `Bearer ${localStorage.getItem('access_token')}`
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
                "Authorization" : `Bearer ${localStorage.getItem('access_token')}`
            }
        })
    },
    postCardMoves(card_id: number, location: string, column_id: number){

        return request({
            url: `/projects/columns/cards/${card_id}/moves`,
            method: 'post',
            data : {
                position: location,
                column_id: column_id
            },
            headers : {
                "Accept" : "application/vnd.github.inertia-preview+json",
                "Authorization" : `Bearer ${localStorage.getItem('access_token')}`
            }
        })
    },
    postColumnMoves(column_id: any, location: string){
        console.log(column_id, location)
        return request({
            url: `/projects/columns/${column_id}/moves`,
            method: 'post',
            data: {
                position: location
            },
            headers: {
                "Accept" : "application/vnd.github.inertia-preview+json",
                "Authorization" : `Bearer ${localStorage.getItem('access_token')}`
            }
        })
    }
}