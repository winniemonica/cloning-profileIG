
const container = document.querySelector(".image-container")


fetch('https://pixabay.com/api/?key=27288807-7c18b43e45aba5d7e6b6f5102&q=yellow+flowers&image_type=photo')
    .then(res => res.json())
    .then(data => {
        console.log(data.hits)
        data.hits.forEach(d => {
            console.log(d)
            const imageWrapper = document.createElement("div")
            const img = document.createElement("img");
            const src = d.webformatURL
            img.src = src;
            imageWrapper.setAttribute("class", "image-wrapper")

            const imageInfo = document.createElement("div");
            imageInfo.setAttribute("class", "image-info")

            imageWrapper.append(img)
            imageWrapper.append(imageInfo)

            const likeInfo = document.createElement("div");
            likeInfo.setAttribute("class", "like-info")
            const likeiconwrapper = document.createElement("div");
            likeiconwrapper.setAttribute("class", "like-icon-wrapper")
            const imglike = document.createElement("img")
            imglike.src = "./assets/png/like.png"
            const span1 = document.createElement("span")
            span1.innerHTML = d.likes
            likeiconwrapper.append(imglike)
            likeInfo.append(likeiconwrapper)
            likeInfo.append(span1)

            const commentInfo = document.createElement("div");
            commentInfo.setAttribute("class", "comment-info")
            const commenticonwrapper = document.createElement("div");
            commenticonwrapper.setAttribute("class", "comment-icon-wrapper")
            const imgcomment = document.createElement("img")
            imgcomment.src = "./assets/png/comment.png"
            const span2 = document.createElement("span")
            span2.innerHTML = d.comments
            commenticonwrapper.append(imgcomment)
            commentInfo.append(commenticonwrapper)
            commentInfo.append(span2)

            imageInfo.append(likeInfo)
            imageInfo.append(commentInfo)
            container.append(imageWrapper)
            imageInfo.addEventListener("mouseenter", (e) => {
                e.target.classList.add('visible')
            })
            imageInfo.addEventListener("mouseleave", (e) => {
                e.target.classList.remove('visible')
            })


        });
    })

