import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DataContext from './context/DataContext';

const EditPost = () => {
  const {posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle}= useContext(DataContext)
  const { id } = useParams();
  const post = posts.find(post => post.id && post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  
  const onSubmit = (e) => {
    e.preventDefault();
    
    if (!editTitle || !editBody) {
      alert("Both title and body are required!");
      return;
    }
    handleEdit(post.id);
  };

  return (
    <main className="NewPost">
      {editTitle ? (
        <>
          <h2>Edit post</h2>
          <form className="newPostForm" onSubmit={onSubmit}>
            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />

            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />

            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <>
          <h2>Post not found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to="/">Visit Our Homepage</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
