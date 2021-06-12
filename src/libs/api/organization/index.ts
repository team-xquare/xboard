import request from '../../axios';
const org = "team-xquare"

export default {
    getOrganizations() {
        return request({
          url: ``,
          method: "get",
        });
      },
    getOrgRepos(){
        return request({
            url: `/orgs/${org}/repos?per_page=`,
            method: "get"
        })
    },
    getOrgProject(){
        return request({
            url: `/orgs/${org}/projects`,
            method: "get",
            headers: {
                "Accept" : "application/vnd.github.inertia-preview+json"
            }
        })
    },
    getReposProject(repo_name: string){
        return request({
            url: `/repos/${org}/${repo_name}/projects`,
            method: "get",
            headers: {
                "Accept": "application/vnd.github.inertia-preview+json",
                "Authorization" : "Bearer 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"
            }
        })
    }
}