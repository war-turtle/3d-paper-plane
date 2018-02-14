
// TweenMax.set("container",{scale:0.5});
// TweenMax.set("#lside",{scale:0.5});
// TweenMax.set("#rside",{scale:0.5});
// TweenMax.set("#lwing",{scale:0.5});
// TweenMax.set("#rwing",{scale:0.5});

var time = new TimelineMax();
time
  .to(".container",10,{rotation:"+=360deg_cw",transformOrigin:"center center"})
  .to(".container",10,{rotationY:"+=360deg_cw",transformOrigin:"center center"},"-=10")
  .to(".container",10,{rotationX:"+=360deg_cw",transformOrigin:"center center"},"-=20")
  // .to(".container",5,{xPercent:"100",rotation:"+=10deg"})
  // .to(".container",5,{xPercent:"-100",rotation:"-=20deg"})
//  .to(".container",5,{yPercent:"-100",rotationY:"+=20deg"})
//  .to(".container",5,{yPercent:"100",rotationY:"-=40deg"})
// .set(".container",{scale:0.5})