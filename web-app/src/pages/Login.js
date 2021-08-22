import React from 'react';
import { useHistory } from 'react-router-dom'
function Login (){
    let history = useHistory();
    return(
        <div>
              <h1>Welcome to the login Page!</h1>
              <button onClick= {() => (history.push('./profile')
              )}>Login.</button>

        </div>
    //   testing commet

       

    );
}
export default Login;