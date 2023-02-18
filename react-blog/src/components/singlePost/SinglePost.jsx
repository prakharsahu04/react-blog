import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
<div className="singlePostWrapper">
  <img 
  src="https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg" 
  alt="" 
  className="singlePostImg" 
  />
  <h1 className="singlePostTitle">
    Lorem ipsum dolor sit amet consectetu.
    <div className="singlePostEdit">
    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
    <i className="singlePostIcon fa-solid fa-trash"></i>
    </div>
  </h1>
  <div className="singlePostInfo">
    <span className="singlePostAuthor">
      Author: <b>Prakhar</b>
    </span>
    <span className="singlePostdATE">1 hour ago</span>
  </div>
  <p className="singlePostDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, dolorem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem natus itaque hic excepturi aliquid sunt praesentium repellendus quo, exercitationem libero molestias consectetur eum? Nisi aut harum laudantium odit ipsam neque.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil tempore molestias. Sunt, nesciunt. Animi, exercitationem. Non, molestias debitis? Labore eos quidem asperiores voluptates minus. Modi, ab aperiam? Tempora, ipsam magnam? Illo hic blanditiis quidem aspernatur quia soluta dolorem magnam.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos rem sequi soluta earum ipsam modi repellendus ut? Soluta, modi officia nobis rerum eos nesciunt culpa, incidunt nihil unde nisi alias a ea! Commodi hic quas ea assumenda omnis alias exercitationem.
  </p>
</div>
</div>
  );
}
