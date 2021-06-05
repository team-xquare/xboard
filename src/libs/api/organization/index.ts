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
    getReposProject(owner: string, repo_name: string){
        return request({
            url: `/repos/${owner}/${repo_name}/projects`,
            method: "get",
            headers: {
                "Accept": "application/vnd.github.inertia-preview+json",
                "Authorization" : "Bearer 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"
            }
        })
    }
}