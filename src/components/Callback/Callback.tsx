import { useEffect } from 'react';
import qs from 'qs';
import { useHistory, useLocation } from 'react-router-dom';
import login from 'src/libs/api/login';

const Callback = () => {
    const history = useHistory();
    const location = useLocation();

  useEffect(() => {
    function getToken() {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      login.getToken(code)
      .then((res) => {
        console.log(res.data.token)
        localStorage.setItem('access_token', res.data.token)
        history.push('/')
      })
      .catch((res) => {
        console.log(res)
      })
    }

    getToken();
    
  }, [location, history]);
  return (
    <div>asdwa</div>
  )
}

export default Callback;
