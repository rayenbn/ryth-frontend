import React from "react";
import { Card } from "react-bootstrap";
import CommentForm from "../CommentForm";

const StartupProfileTimeline = ({avatar,companyName,industry,content,commentsCount, likesCount}) => {
  return (
    <>
        <div className="card mb-4" >
            <div className="card-body">
                <div className="ul-widget4__item ul-widget4__users" style={{borderBottom: 'none'}}>
                    <div className="ul-widget4__img">
                        {avatar && <img className="profile-picture avatar-sm rounded-circle" style={{width: '3.5rem'}} src={avatar} alt="startup->profile_photo" />}
                    </div>
                    <div className="ul-widget2__info ul-widget4__users-info">                   
                        {companyName && <a className="ul-widget2__title" href="{{ route('client.startup.show', [$startup->slug_name]) }}">{companyName}</a>}
                        {industry && <span className="ul-widget2__username" href="{{ route('client.startup.show', [$startup->slug_name]) }}">{industry}</span>}
                        <span type="button" style={{color: 'red',cursor: 'pointer'}} onclick="deletePost({{$post->id}})" className="ul-widget2__username ">Delete</span>
                    </div>
                    
                </div>
                {/* <!-- <img className="d-block w-100 rounded" src="{{ asset('frontend/images/products/headphone-1.jpg') }}" alt="Second slide"> --> */}
                {content && <p>{content}</p>}
                <div className="ul-widget-card__rate-icon --version-2">
                    {likesCount && 
                        <span>
                            <button class="btn-custom" style={{all: 'unset',cursor: 'pointer'}} type="button" id="likebtn">
                                <i class="i-Like text-primary"></i>
                            </button> <span >{likesCount}</span></span>
                    }
                    {commentsCount && <span><i className="i-Speach-Bubble-3 text-primary"></i>{commentsCount}</span>}
                </div>
                <div id="commentsBlock{{ $post->id }}">
                    {/* @foreach($post->comments as $comment) */}
                    <div className="d-flex mb-4 user" >
                        <img className="avatar-xs rounded-circle mr-3" src="/assets/images/faces/face-2.jpg" alt="alt" style={{border: 'none'}} />
                        <div className="message flex-grow-1">
                            <div className="d-flex">
                                <p className="mb-1 text-title text-16 flex-grow-1">Rayen<br/><span className="text-small text-muted">25min ago</span></p>
                                {/* @if ($comment->client_id == auth()->user()->id) */}
                                    <button className="btn bg-white _r_btn border-0 " type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="_dot _inline-dot bg-light"></span>
                                        <span className="_dot _inline-dot bg-light"></span>
                                        <span className="_dot _inline-dot bg-light"></span>
                                    </button>
                                    <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 33px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
                                        <button className="dropdown-item" type="button" onclick="deleteComment({{$comment->id}})">Delete</button>
                                    </div>
                                {/* @endif */}
                            </div>
                            <p className="m-0">comment content here</p>
                        </div>
                    </div>
                    {/* @endforeach */}
                </div>
                {/* <form action="#" method="POST" enctype="multipart/form-data" id="commentForm-{{ $post->id }}">
                    @csrf
                    @method('PUT')  */}
                <CommentForm />
                {/* </form> */}

            </div>
        </div>
    </>
  );
};

export default StartupProfileTimeline;