function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data Fetched")
        }, 2000);
    })
}

function fetchCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment data fetched.")
        }, 3000);
    })
}

async function getBlogData() {
    try {
        console.log("Fetching Blog Data");
        // const blogData = await fetchPostData()
        // const CommentData = await fetchCommentData()

        const [postData, commentData] = await Promise.all([
            fetchPostData(),
            fetchCommentData(),
        ])

        console.log(blogData);
        console.log(CommentData);
        console.log("fetch complete");

    } catch (error) {
        console.error("Error fetching blog data", error);

    }
}
// getdata();
getBlogData();