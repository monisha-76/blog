import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import DataContext from './context/DataContext';


const PostPage = () => {
  const {posts,handleDelete}= useContext(DataContext)
  const {id} = useParams();
  const post = posts && Array.isArray(posts) 
  ? posts.find(post => post && post.id && post.id.toString() === id) 
  : null;
  return (
    <main className='PostPage'>
      <article className="post">
        {post &&
        <>
        <h2> {post.title}</h2>
        <p className='postDate'>{post.datetime}</p>
        <p className='postBody'>{post.body}</p>
        <Link to={`/edit/${post.id}`}><button className='editButton'> Edit Posts </button></Link>
        <button className='deleteButton' onClick={()=>
          handleDelete(post.id)}>
            Delete Post
          </button>
        </>}
        {!post &&
        <>
        <h2>Post Not found</h2>
        <p> well ,that's disappointing.</p>
        <p>
          <Link to='/'> Visit our Homepage </Link>
        </p>
        </>}
      </article>
   
    
    </main>
  )
}

export default PostPage