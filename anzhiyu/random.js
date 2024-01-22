var posts=["2024/01/18/hello-world/","2024/01/20/如何搭建个人博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };