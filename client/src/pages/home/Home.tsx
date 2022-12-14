import axios from "axios"
import React, { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import { IPost } from "../../interface"


function Home () {
    const [posts, setPosts] = useState<Array<IPost>>([])

    useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/post/")
      setPosts(res.data)
    }
    fetchPosts()
  }, [])

    return (
        <>
            <Header/>
            <Posts posts={posts}/>
        </>
    )
}

export default Home