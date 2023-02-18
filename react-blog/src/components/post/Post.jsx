import "./post.css"

export default function Post() {
  return (
    <div className="post">
     <img 
     className="postImg"
     src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg" 
     alt="" />
     <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum, dolor sit amet 
        </span>
        <hr />
        <span className="postDate1"> 1 hr ago</span>
    </div>
          <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repudiandae rem harum voluptatibus alias odio, ipsa quod cum eos, reprehenderit hic veritatis vel in animi deserunt, sint tempore quis modi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repudiandae rem harum voluptatibus alias odio, ipsa quod cum eos, reprehenderit hic veritatis vel in animi deserunt, sint tempore quis modi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repudiandae rem harum voluptatibus alias odio, ipsa quod cum eos, reprehenderit hic veritatis vel in animi deserunt, sint tempore quis modi.
    </p>
    </div>
  );
}
