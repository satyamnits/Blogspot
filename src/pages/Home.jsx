import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    const authStatus = useSelector((state) => state.auth.status)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (!authStatus || posts.length === 0) {
        return (
            <div className="hero h-[86vh] bg-base-100">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="text-4xl font-bold py-6">Login to read posts</h1>
                    <button className="btn text-2xl btn-primary" onClick={() => navigate("/login")}>Login in</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='w-full py-8 min-h-[86vh]'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home