import request from '../../axios';

export default {
    getIssues(issues_url){
        return request({
            url: issues_url,
            method: "get",
            headers : {
                "Accept" : "application/vnd.github.inertia-preview+json",
                "Authorization" : `Bearer ${localStorage.getItem('access_token')}`
            }
        })
    },
}