import Mock from "mockjs"
Mock.mock("/api/project", "get", {
  code: 0,
  msg: "",
  "data|0-10": [
    {
      id: "@uuid",
      name: "@ctitle",
      "url|1": ["@url", null],
      "github|1": ["@url", null],
      "description|1-5": ["@cparagraph(1,5)"],
      thumb: "@image( 120x90, @color,#fff, @word)",
      "order|+1": 0,
    },
  ],
})
