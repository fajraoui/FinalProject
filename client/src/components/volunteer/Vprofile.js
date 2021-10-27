import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useHistory } from 'react-router'
import { currentVolunteer,logout } from '../../redux/actions/actionsVolunteer'
import Loading from '../Loading';

import{getAllPosts, getPosts}from '../../redux/actions/actionsPosts'
import Cards from '../Card';
import { getAllCharities, getAllCharity } from '../../redux/actions/actionsCharity';

import CardCharity from '../CardCharity';
import {Button, Input } from "semantic-ui-react";
const Vprofile = () => {
    const history=useHistory()
    const [query,setQuery]=useState("")
    const [city, setCity] = useState("")
const dispatch=useDispatch()
    useEffect(() => {
        dispatch(currentVolunteer())
        if(query)
       { dispatch(getPosts(query))
        dispatch(getAllCharity(query))}
        else
        { dispatch(getAllPosts())
            dispatch(getAllCharities())}
    }, [query])
    const volunteer = useSelector(state => state.VolunteerReducer.volunteer)
    const loading = useSelector(state => state.VolunteerReducer.loading)
    const posts=useSelector(state=>state.PostReducer.posts)
    const Charities=useSelector(state=>state.CharityReducer.allCharity)
    const handleChange=(e)=>{
        e.preventDefault() 
        setCity(e.target.value)

    }
    const Search=(e)=>{
        e.preventDefault()
        setQuery(city)
    }
    return (
        loading?<Loading/>:
        <div>
            
            <button class="custom-btn btn-13" onClick={()=>{dispatch(logout());history.push("/vlogin")}}
            style={{marginLeft:1100}}>
             Log Out
              </button>
             
              <div>
                  <form> 
          <h2 style={{color:"darkslateblue"}}>Choose position</h2>
          <Input
            onChange={handleChange}
            placeholder="Search..."
          />
                <Button id="B2" inverted color='purple' onClick={Search}>
        Search
      </Button>
      </form>
          </div>
         
           <h1 style={{color:"darkBlue"}}>Welcome {volunteer&&volunteer.FullName}</h1>

           <div style={{display: "flex", flexWrap: "wrap ",marginLeft:100 }}> 
            {posts.map(post=><Cards key={post._id} post={post}/>)} 
            {Charities.map(Charity=><CardCharity key={Charity._id} Charity={Charity}/>)}
            </div>
           
 </div>
    )
}

export default Vprofile