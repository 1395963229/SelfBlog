import request from "./request"

//获取博客分类
export async function getBlogtype() {
  return await request.get("/api/blogtype")
}

//获取所有博客
export async function getBlog(page, limit, categoryId) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryId,
    },
  })
}

//获取单个博客
export async function getOneBlog(id) {
  //id为博客的id
  return await request.get(`/api/blog/${id}`)
}

//提交评论 comment为评论信息对象
// {
// 	nickname: "昵称",
// 	content: "评论内容，纯文本",
// 	blogId: <id>	#评论的博客id
// }
export async function sendComment(comment) {
  return await request.post("/api/comment", comment)
}

//分页获取评论
export async function getComment(
  page = 1,
  limit = 10,
  blogid = -1,
  keyword = ""
) {
  return await request.get("/api/comment", {
    params: {
      page, //当前页码
      limit, //页容量
      blogid, //所属文章
      keyword, //模糊查询关键字
    },
  })
}
