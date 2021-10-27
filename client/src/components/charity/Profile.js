import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { currentCharity, logout } from '../../redux/actions/actionsCharity'

const Profile = () => {
    const history=useHistory()
const dispatch=useDispatch()
    useEffect(() => {
        dispatch(currentCharity())
    }, [])
    const charity = useSelector(state => state.CharityReducer.charity)
    const loading = useSelector(state => state.CharityReducer.loading)

    return (
        loading?<h1>loading...</h1>:
        <div>
 <button class="custom-btn btn-13" onClick={()=>{dispatch(logout());history.push("/signIn")}}>
             Log Out
              </button>
           <h1>Welcome {charity&&charity.FullName}</h1>
        </div>
    )
}

export default Profile
