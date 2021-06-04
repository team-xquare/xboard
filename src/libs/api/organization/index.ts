import request from '../../axios';
const org = "team-xquare"

export default {
    getOrganizations() {
        return request({
          url: ``,
          method: "get",
        });
      },
    getOraRepos(){
        return request({
            url: `/orgs/${org}/repos?per_page=`,
            method: "get"
        })
    },
    getReposProject(){
        return request({
            url: `/orgs/${org}/projects`,
            method: "get"
        })
    }
}