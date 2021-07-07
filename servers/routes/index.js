const express = require('express');
const router = express.Router();
const axios = require('axios') 

const client_id = "5501c893e29dcc08c38f";
const client_secret = "7a4f1944978f7c4fd02539b490d5d6a32ecb03c5";

router.post('/', async (req, res) => {
    const { code } = req.body;
  
    const response = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        code,
        client_id, // 내 APP의 정보
        client_secret, // 내 APP의 정보
      },
      {
        headers: {
          accept: 'application/json',
        },
      },
    );

    const token = response.data.access_token;
  
    return res.json({ token });
  });
  

module.exports = router;