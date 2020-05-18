export const data = new Set([]);

export const list = [
  {
    name: "闪现",
    resetTime: 300,
    type: "shanxian",
    path: "",
    time: 0
  },
  {
    name: "引燃",
    resetTime: 180,
    type: "yinran",
    path: "",
    time: 0
  },
  {
    name: "传送",
    resetTime: 420,
    type: "chuansong",
    path: "",
    time: 0
  },
  {
    name: "幽灵疾步",
    resetTime: 180,
    type: "jibu",
    path: "",
    time: 0
  },
  {
    name: "治疗术",
    resetTime: 240,
    type: "zhiliao",
    path: "",
    time: 0
  },
  {
    name: "屏障",
    resetTime: 180,
    type: "pingzhang",
    path: "",
    time: 0
  },
  {
    name: "虚弱",
    resetTime: 210,
    type: "xuruo",
    path: "",
    time: 0
  },
  {
    name: "清晰术",
    resetTime: 240,
    type: "qingxishu",
    path: "",
    time: 0
  },
  {
    name: "净化",
    resetTime: 210,
    type: "jinghua",
    path: "",
    time: 0
  },
  {
    name: "惩戒",
    resetTime: 15,
    type: "chengjie",
    path: "",
    time: 0
  }
];

require
  .context("./static/icon")
  .keys()
  .map((str: string) => {
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (item.type === str.replace("./", "").replace(".png", "")) {
        item.path = require(`./static/icon/${str.replace("./", "")}`);
        data[item.type] = item;
      }
    }
  });
