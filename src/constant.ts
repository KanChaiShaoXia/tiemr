export const data = new Set([]);

export const list = [
  {
    name: "闪现",
    time: 300,
    path: "",
    type: "shanxian"
  },
  {
    name: "引燃",
    time: 180,
    path: "",
    type: "yinran"
  },
  {
    name: "传送",
    time: 420,
    path: "",
    type: "chuansong"
  },
  {
    name: "幽灵疾步",
    time: 180,
    path: "",
    type: "jibu"
  },
  {
    name: "治疗术",
    time: 240,
    path: "",
    type: "zhiliao"
  },
  {
    name: "屏障",
    time: 180,
    path: "",
    type: "pingzhang"
  },
  {
    name: "虚弱",
    time: 210,
    path: "",
    type: "xuruo"
  },
  {
    name: "清晰术",
    time: 240,
    path: "",
    type: "qingxishu"
  },
  {
    name: "净化",
    time: 210,
    path: "",
    type: "jinghua"
  },
  {
    name: "惩戒",
    time: 15,
    path: "",
    type: "chengjie"
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
