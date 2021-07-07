/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
import request from '../../axios';
const org = "team-xquare"

export default {
    getToken(userCode: any) {
        return axios({
          url: `http://localhost:3001/auth`,
          method: "post",
          data: {
            code: userCode,
        }
        });
    },
}