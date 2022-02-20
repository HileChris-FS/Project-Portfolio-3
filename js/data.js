class Data {
    constructor(){
        this.fetchData();
        this.results;
    }

    fetchData() {
        fetch("blog.json")
        .then((response) => response.json())
      .then((responseAsJson) => {
        let data = responseAsJson;

        let file = data.posts[0].post;
        fetch(file)
        .then(response => response.text()
        .then(text => {let postDetail = text;
            data.posts[0].post = postDetail;
            this.view(data);
        })
        );
      })

      .catch((error) => {
        console.log("An Error Occurred:", error);
      });

    }

    view(data){

        data.posts.forEach(element => {
            console.log(element);
            const recent = document.querySelector("#recent");
            let recentPost = document.createElement("li");
            recent.append(recentPost);
        recentPost.innerHTML = `
           <a class="postLink" href="blog.html"> ${element.title} </a>
           <br>
            ${element.date}
        `
        });

        const post = document.querySelector(".post");
        let postData = document.createElement("secion");
        post.append(postData);
       
        postData.innerHTML = `
        <button class="postCat rounded-pill">${data.posts[0].category}</button>
        <h3>${data.posts[0].title}</h3>
            <div class="row">
                <div class="col-3">
                    <h5>by: ${data.posts[0].by}</h5>
                    <h5>${data.posts[0].date}</h5>
                </div>
                <div class="col-9">
                    <img class="img-fluid" src="${data.posts[0].image}" alt="Preview"></img>
                    <article>
                    <p>${data.posts[0].post}</p>
                    </article>
                </div>
            </div>
        `;

        
        

    }
    
}
     
    
