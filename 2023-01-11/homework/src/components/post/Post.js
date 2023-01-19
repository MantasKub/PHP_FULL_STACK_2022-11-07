import './Stilius.css'

const Post = (props) => {
  return (

    <div className="post col-8">
      <img src={props.post.image} alt="Italian Trulli" />
      <p className="category">{props.post.category}</p>
      <p className="date">{props.post.date}</p>
      <p className="title">{props.post.title}</p>
      <p className="content">{props.post.content}</p>
      <a href="https://github.com/MantasKub">Continue reading</a>
    </div>
  )
}

export default Post;

