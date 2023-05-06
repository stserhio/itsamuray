import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id:1, message:'Hi how are you', likesCount:'12 likes'},
        {id:2, message:'it is my first post', likesCount:'15 likes'},
        {id:2, message:'Lorem ipsum', likesCount:'10 likes'},
        {id:2, message:'Lorem loren', likesCount:'2 likes'}

    ]

    let postsElements = posts.map(p=> <Post message={p.message} likescount ={p.likesCount}/>)
    
    return(
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post </button>
                    </div>

                </div>
                <div className={s.posts}>
                    {postsElements}


                </div>

            </div>

    )
}

export default MyPosts