import Mock from "mockjs"

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
      title: "人生之路",
      description:
        "人生的旅途，前途很远，也很暗。然而不要怕，不怕的人的面前才有路。",
    },
    {
      id: "2",
      midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031205551.jpg",
      title: "珍惜时间",
      description: "所谓天才，只不过是把别人喝咖啡的功夫都用在工作上了。",
    },
    {
      id: "3",
      midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031204403.jpg",
      title: "学无止境",
      description:
        "对自己，“学而不厌”，对人家，“诲人不倦”，我们应取这种态度。",
    },
  ],
})
