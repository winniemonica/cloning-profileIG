
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
            const likeIconWrapper = document.createElement("div");
            likeIconWrapper.setAttribute("class", "like-icon-wrapper")
            const imgLike = document.createElement("img")
            imgLike.src = "./assets/png/like.png"
            const spanLike = document.createElement("span")
            spanLike.innerHTML = d.likes
            likeIconWrapper.append(imgLike)
            likeInfo.append(likeIconWrapper)
            likeInfo.append(spanLike)

            const commentInfo = document.createElement("div");
            commentInfo.setAttribute("class", "comment-info")
            const commentIconWrapper = document.createElement("div");
            commentIconWrapper.setAttribute("class", "comment-icon-wrapper")
            const imgComment = document.createElement("img")
            imgComment.src = "./assets/png/comment.png"
            const spanComment = document.createElement("span")
            spanComment.innerHTML = d.comments
            commentIconWrapper.append(imgComment)
            commentInfo.append(commentIconWrapper)
            commentInfo.append(spanComment)

            imageInfo.append(likeInfo)
            imageInfo.append(commentInfo)
            container.append(imageWrapper)

            const imagesWrapper = Array.from(
                document.getElementsByClassName("image-wrapper"),
            )
            imagesWrapper.forEach(imageWrapper => {
                imageWrapper.addEventListener("mouseenter", function () {
                    Array.from(this.children)
                        .find(child => child.classList.contains("image-info"))
                        .classList.add('visible')

                })
            })
            imagesWrapper.forEach(imageWrapper => {
                imageWrapper.addEventListener("mouseleave", function () {
                    Array.from(this.children)
                        .find(child => child.classList.contains("image-info"))
                        .classList.remove('visible')

                })
            })
            // imageInfo.addEventListener("mouseenter", (e) => {
            //     e.target.classList.add('visible')
            // })
            // imageInfo.addEventListener("mouseleave", (e) => {
            //     e.target.classList.remove('visible')
            // })


        });
    })

