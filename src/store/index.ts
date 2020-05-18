import { useState, useEffect } from "@tarojs/taro";
import { Store } from "laco";
import { data } from "../constant";

export function useStore(store) {
  const [state, setState] = useState(store.get());
  const updateState = () => setState(store.get());
  useEffect(() => {
    store.subscribe(updateState);
    return () => store.unsubscribe(updateState);
  });
  return state;
}

// 计时器列表
export const timers = new Store(
  [
    {
      name: "上单",
      skill: [data["shanxian"], data["chuansong"]]
    },
    {
      name: "打野",
      skill: [data["shanxian"], data["chengjie"]]
    },
    {
      name: "中单",
      skill: [data["shanxian"], data["yinran"]]
    },
    {
      name: "ADC",
      skill: [data["shanxian"], data["zhiliao"]]
    },
    {
      name: "辅助",
      skill: [data["shanxian"], data["xuruo"]]
    }
  ],
  "timers"
);

export const timerInterval = new Store(
  setInterval(() => {
    console.log("运行中");
    const userList = timers.get();
    for (let i = 0; i < userList.length; i++) {
      for (let j = 0; j < userList[i].skill.length; j++) {
        const item = userList[i].skill[j];
        if (item.time > 0) item.time--;
      }
    }
  }, 1000)
);

export const changeTimer = agres => {
  const userList = timers.get();
  agres.forEach(skill =>
    userList.map(item => {
      if (skill.name === item.name) {
        console.log("skill:", skill, "item:", item);
      }
    })
  );
};

// 选中的人物
export const checkUser = new Store(
  {
    name: "中单",
    skill: [data["shanxian"], data["yinran"]]
  },
  "checkUser"
);

export const checkActiveUser = agres => {
  checkUser.set(() => ({ user: agres }), "checkActiveUser");
};

// 开关
export const switchSkillStatus = new Store(
  { openStatus: false },
  "switchSkillStatus"
);

// 切换开关
export const skillChange = () => {
  const { openStatus } = switchSkillStatus.get();
  switchSkillStatus.set(() => ({ openStatus: !openStatus }), "skillChange");
};
