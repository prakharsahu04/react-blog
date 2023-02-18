import "./header.css"

export default function header() {
  return (
    <div className="header">
    <div className="headerTitles">
      <span className="headerTitleSm">React & Node</span>
      <span className="headerTitlesLg">Blog</span>
    </div>
    <img 
    className="headerImg"
    src="https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_960_720.jpg" alt="" />
    </div>
  )
}
