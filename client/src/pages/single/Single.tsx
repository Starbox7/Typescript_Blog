import axios from "axios"
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"

function Single () {
    const [post, setPost] = useState([])
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    useEffect(() => {
        const findPost = async () => {
            try {
                const res = await axios.get(`/api/post/single/${path}`)
                setPost(res.data)
            } catch (err: unknown) {
                console.log(err)
            }
        }
        findPost()
    }, [path])
    
    return (
        <>
        <Header/>
        <Posts posts={post}/>
        </>
    )
}

export default Single