import { useState, useEffect } from "@tarojs/taro";
import { Store } from "laco";
import { deepClone } from "noahsark";
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
  {
    userList: [
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
    ]
  },
  "timers"
);

// 全局计时器
export const timerInterval = new Store(
  setInterval(() => {
    const userList = deepClone(timers.get().userList);
    for (let i = 0; i < userList.length; i++) {
      for (let j = 0; j < userList[i].skill.length; j++) {
        const item = userList[i].skill[j];
        if (item.time > 0) item.time--;
      }
    }
    timers.set(() => ({ userList }), "timerInterval");
  }, 1000)
);

// 修改技能
export const changeTimer = agres => {
  const { userList } = timers.get();
  const result = userList.map(item => {
    if (item.name === agres.name) item = agres;
    return item;
  });
  timers.set(() => ({ userList: result }), "changeTimer");
};

// 选中的人物
export const checkUser = new Store(
  {
    name: "中单",
    skill: [data["shanxian"], data["yinran"]]
  },
  "checkUser"
);

// 切换选中人物
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

// 开始技能倒计时
export const resetTimer = (uesr, skill, rightClick = false) => {
  const userList = deepClone(timers.get().userList);
  for (let i = 0; i < userList.length; i++) {
    const item = userList[i];
    if (item.name === uesr.name) {
      const skillName = item.skill.filter(s => s.name === skill.name)[0];
      // 尚未冷却完毕，再次点击则快进5s
      if (skillName.time > 0) {
        skillName.time = skillName.time - 5;
      } else {
        // 开始计时
        skillName.time = skillName.resetTime;
      }
      // 右键重置时间，或者快进到时间结束
      if (skillName.time <= 0 || rightClick) {
        skillName.time = 0;
      }
    }
  }
  timers.set(() => ({ userList }), "resetTimer");
};
