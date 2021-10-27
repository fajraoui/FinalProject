import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import {currentDonate,logout} from '../../redux/actions/actions'
import { getMyPosts } from '../../redux/actions/actionsPosts'
import FoodCard from '../FoodCard'
const Dashboard = () => {
    const history=useHistory()
const dispatch=useDispatch()
    useEffect(() => {
        dispatch(currentDonate())
        dispatch(getMyPosts())
    }, [])
    const donate = useSelector(state => state.DonateReducer.donate)
    const loading = useSelector(state => state.DonateReducer.loading)
    const posts=useSelector(state=>state.PostReducer.myPosts)
   
    return (
        loading?<h1>loading...</h1>:
        <div className="post">
          <div className='btn2'> 
             <button class="custom-btn btn-13" onClick={()=>{dispatch(logout());history.push("/login")}}>
             Log Out
              </button>
              <Link  to='/add'>
              <Button id="B2" inverted color='purple'>
        Add Post
      </Button>
       </Link>
      </div>
           <h1>Welcome {donate&&donate.FullName}</h1>
          
          <h4> your posts:{posts&&posts.title}</h4>
       <div className="foodcard"> 
      
      
       {posts.map(p=><FoodCard key={p._id} p={p}/>)}
       </div>
      
        </div>
    )
}

export default Dashboard