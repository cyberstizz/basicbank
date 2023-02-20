import { useState, useEffect } from 'react'



const TestRoute = () => {


    const [data, setData] = useState();

    useEffect(() => {


  const apiCall = async () => {
  
    const API_HOST = 'http://localhost:8000';

  let _csrfToken = null;

  const getCsrfToken = async () => {
    if (_csrfToken === null) {
      const response = await fetch(`${API_HOST}/csrf/`, {
        credentials: 'include',
      });
      const data = await response.json();
      _csrfToken = data.csrfToken;
    }
    return _csrfToken;
  }


    const getAccountObject = await fetch(`http://localhost:8000/testroute`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': await getCsrfToken()
        },
        credentials: 'include',
      })
    
      const responseComplete = await getAccountObject.json();

      console.log(responseComplete.data)

       await setData(responseComplete.data.username)
    }

    apiCall();

    },[])


    return(
        <div>
        {data}
        </div>
    )
};

export default TestRoute;
