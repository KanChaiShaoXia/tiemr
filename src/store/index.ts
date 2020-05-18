import { useState, useEffect } from "@tarojs/taro";
import { Store } from "laco";

export function useStore(store) {
  const [state, setState] = useState(store.get());
  const updateState = () => setState(store.get());
  useEffect(() => {
    store.subscribe(updateState);
    return () => store.unsubscribe(updateState);
  });
  return state;
}

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
