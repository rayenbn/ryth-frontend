import React from "react";
import { Card, CardImg } from "react-bootstrap";
// import { profileImg } from "/assets/images/faces/1.jpg";

const StartupPostCard = ({ name, children, className, industry }) => {
  return (
    <Card className={className}>
      <Card.Body>

        <div className="ul-widget4__item ul-widget4__users" style={{borderBottom: 'none'}}>
            <div className="ul-widget4__img">
                <img className="profile-picture avatar-sm rounded-circle" style={{width: '3.5rem'}} 
                src="/assets/images/faces/1.jpg" alt="" />
            </div>
            <div className="ul-widget2__info ul-widget4__users-info">    
                {name && <a className="ul-widget2__title" href="">{name}</a>}
                {industry && <span className="ul-widget2__username" href="">{industry}</span>}

                <span type="button" style={{color: 'red',cursor: 'pointer'}} className="ul-widget2__username ">Delete</span>
                
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

{/* <div class="card mb-4" id="post{{ $post->id }}">
    <div class="card-body">
        <div class="ul-widget4__item ul-widget4__users" style="border-bottom: none;">
            <div class="ul-widget4__img">
                <img class="profile-picture avatar-sm rounded-circle" style="width: 3.5rem;" src="/{{ $post->postable->profile_photo }}" alt="{{ $post->postable->profile_photo }}" >
            </div>
            <div class="ul-widget2__info ul-widget4__users-info">                   
                <a class="ul-widget2__title" href="{{ route('client.startup.show', [$post->postable->slug_name]) }}">{{ ucfirst($post->postable->company_name) }}</a>
                <span class="ul-widget2__username" href="{{ route('client.startup.show', [$post->postable->slug_name]) }}">{{ ucfirst($post->postable->industry) }}</span>
                @if ($post->postable->client_id == auth()->user()->id)
                <span type="button" style="color: red;cursor: pointer;" onclick="deletePost({{$post->id}})" class="ul-widget2__username ">Delete</span>
                @endif
            </div>
            
        </div>


        <!-- <img class="d-block w-100 rounded" src="{{ asset('frontend/images/products/headphone-1.jpg') }}" alt="Second slide"> -->
        <p>{{ ucfirst($post->desc) }}</p>
        <div class="ul-widget-card__rate-icon --version-2">
            <form action="#" method="POST" id="post_like_form-{{ $post->id }}">
                @csrf 
                <input name="postid" type="hidden" value="{{ $post->id }}">
                <span>
                <button class="btn-custom" style="all: unset;cursor: pointer;" type="button" 
                    id="likebtn"
                    onclick="giveLike({{$post->id}})"
                    >

                    <i class="i-Like @if(!auth()->user()->islikedThisPost($post)) text-primary @else text-success @endif"></i>
                </button> 
                <span id="likesnb{{$post->id }}">{{ $post->likes()->count() }}</span></span>
            </form>
            <span><a href=""><i class="i-Speach-Bubble-3 text-primary"></i></a>{{ $post->comments->count() }}</span>
        </div>



        <div id="commentsBlock{{ $post->id }}">
            @foreach($post->comments as $comment)
            <div class="d-flex mb-4 user" id="comment{{$comment->id}}">
                <img class="avatar-xs rounded-circle mr-3" src="/{{ $comment->client->profile_photo}}" alt="alt" style="border: none;">
                <div class="message flex-grow-1">
                    <div class="d-flex">
                        <p class="mb-1 text-title text-16 flex-grow-1" style="line-height: 1;">{{ $comment->client->name }} <br><span class="text-small text-muted">{{ $comment->created_at->diffForHumans() }}</span></p>
                        <!-- <a href="#" class="text-small text-muted">Delete</a> -->
                        @if ($comment->client_id == auth()->user()->id)
                        <button class="btn bg-white _r_btn border-0 " type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="_dot _inline-dot bg-light"></span>
                            <span class="_dot _inline-dot bg-light"></span>
                            <span class="_dot _inline-dot bg-light"></span>
                        </button>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(0px, 33px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <button class="dropdown-item" type="button" onclick="deleteComment({{$comment->id}})">Delete</button>
                        </div>
                        @endif
                    </div>
                    <p class="m-0">{{ $comment->comment }}</p>
                </div>
            </div>
            @endforeach
        </div>
        <form action="#" method="POST" enctype="multipart/form-data" id="commentForm-{{ $post->id }}">
            @csrf
            @method('PUT') 
            <div class="input-group">
                <input class="form-control" type="text" name="comment" placeholder="Write comment" aria-label="comment">
                <div class="input-group-append">
                    <button class="btn btn-primary" id="button-comment2" type="button" onclick="postComment({{$post->id}})">
                        <i class="i-Paper-Plane"></i>
                    </button>
                </div>
            </div>
        </form>
    </div>
</div> */}

export default StartupPostCard;
