var posts=["2024/01/20/如何搭建个人博客/","2024/01/18/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };