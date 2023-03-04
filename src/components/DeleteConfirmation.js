import './DeleteConfirmation.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const DeleteConfirmation = (props) => {


    const delete_account = useSelector((state) => state.delete.delete_account)


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
    
    
    
    const makeDeletion = async () => {
      console.log('i am the makewithdrawal function and I have been called')
    
    //make post request to server
    const deleteCall = await fetch('http://localhost:8000/delete', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': await getCsrfToken()
    },
    credentials: 'include',
    body: JSON.stringify({
        delete_account: delete_account,
        })
    })
    
    console.log(deleteCall.status)
    if(deleteCall.status == 200){
      alert('success! your account has been deleted')
      window.location.reload();
    }
    
    
    //if request is succesful alert success
    // if(withdrawCall.status() == 201){
    //   alert(`you have sucessfully withdrawn $${amouunt} from account# ${accountNumber}`)
    // }
    }
    
    
        return (
    <div className='thefulldeleteComponent'>
              
              
              <div className='toprow'>
                <div className='Xout' onClick={props.xoutHandler}>&#9747;</div>
                <div className='thedeleteHeader'>Are you sure?</div>
              </div>
    
              <div className='deleteSection'>
                <div className='deleteSectionHeader'>Deletion Confirmation</div>
                <div className='thedeleteField'>you will be deleting account # {delete_account}</div>
              </div>
              <button onClick={makeDeletion} className='deleteButton'>Make Deletion</button>
              
              
              </div>    
    )
}

export default DeleteConfirmation;