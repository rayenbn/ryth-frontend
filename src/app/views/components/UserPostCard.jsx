import React from "react";
import { Card, CardImg } from "react-bootstrap";
// import { profileImg } from "/assets/images/faces/1.jpg";

const UserPostCard = ({ name, children, className, profession, content }) => {
  return (
    <Card className={className}>
      <Card.Body>

        <div className="ul-widget4__item ul-widget4__users" style={{borderBottom: 'none'}}>
            <div className="ul-widget4__img">
                <img className="profile-picture avatar-sm rounded-circle" style={{width: '3.5rem'}} 
                src="/assets/images/faces/4.jpg" alt="" />
            </div>
            <div className="ul-widget2__info ul-widget4__users-info">
            
                {name && <a className="ul-widget2__title" href="">{name}</a>}
                {profession && <span className="ul-widget2__username text-mute" href="">{profession}</span>}

                <span type="button" style={{color: 'red',cursor: 'pointer'}} 
                // onclick="deletePost({{$post->id}})" 
                className="ul-widget2__username ">Delete</span>
            </div>
            
        </div>

        {/* <img className="d-block w-100 rounded" src="" alt="Second slide" /> */}

        <p>postdesc</p>
        <div className="ul-widget-card__rate-icon --version-2">
            <form action="#" method="POST" >
                <input name="postid" type="hidden" value="id" />
                <span>
                <button className="btn-custom" style={{all: 'unset',cursor: 'pointer'}} type="button" 
                    id="likebtn"
                    // onClick="giveLike(id)"
                    >

                    <i className="i-Like @if(!auth()->user()->islikedThisPost($post)) text-primary @else text-success @endif"></i>
                </button> 
                <span id="likesnb{{$post->id }}">231</span></span>
            </form>
            <span><a href=""><i className="i-Speach-Bubble-3 text-primary"></i></a> 21 </span>
        </div>

        <div id="commentsBlock">
            <div className="d-flex mb-4 user" id="comment{{$comment->id}}">
                <img className="avatar-xs rounded-circle mr-3" src="/assets/images/faces/2.jpg" alt="alt" style={{border: 'none'}} />
                <div className="message flex-grow-1">
                    <div className="d-flex">
                        <p className="mb-1 text-title text-16 flex-grow-1" style={{lineHeight: '1'}}>David <br/>
                        <span className="text-small text-muted"> 2 days ago </span></p>
                        
                        <button className="btn bg-white _r_btn border-0 " type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="_dot _inline-dot bg-light"></span>
                            <span className="_dot _inline-dot bg-light"></span>
                            <span className="_dot _inline-dot bg-light"></span>
                        </button>
                        <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 33px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
                            <button className="dropdown-item" type="button" 
                            // onclick="deleteComment({{$comment->id}})"
                            >Delete</button>
                        </div>
                    </div>
                    <p className="m-0">commentcomment </p>
                </div>
            </div>
        </div>
        <form action="#" method="POST" encType="multipart/form-data" id="commentForm-{{ $post->id }}">
            <div className="input-group">
                <input className="form-control" type="text" name="comment" placeholder="Write comment" aria-label="comment" />
                <div className="input-group-append">
                    <button className="btn btn-primary" id="button-comment2" type="button" 
                    // onclick="postComment({{$post->id}})"
                    >
                        <i className="i-Paper-Plane"></i>
                    </button>
                </div>
            </div>
        </form>

        {children}
      </Card.Body>
    </Card>
  );
};


export default UserPostCard;
