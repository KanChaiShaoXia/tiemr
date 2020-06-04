/* eslint-disable jsx-quotes */
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { switchSkillStatus, timers, useStore } from "../../store";
import Language from "../../Language";
import { SkillBar } from "../../components";
import UserBox from "./userBox";
import { sTom } from "../../tools";
import "./index.scss";

export default function Index() {
  const { openStatus } = useStore(switchSkillStatus);
  const { userList } = useStore(timers);

  const outList = () => {
    let result = "";
    for (let i = 0; i < userList.length; i++) {
      const user = userList[i];
      let str = ``;
      for (let j = 0; j < user.skill.length; j++) {
        const item = user.skill[j];
        if (item.time > 0) {
          const time = sTom(item.time);
          str += `${item.name} ${time} `;
        }
      }
      if (str) result += `|| ${user.name}: ${str}`;
    }
    Taro.setClipboardData({ data: result });
  };

  return (
    <View className="wrapper" onContextMenu={e => e.preventDefault()}>
      <View className="moveBar" />
      <View className={`${!openStatus ? "skillOpen" : "skillClose"}`}>
        <UserBox userList={userList} />
      </View>
      <View className={`${openStatus ? "skillOpen" : "skillClose"}`}>
        {openStatus && <SkillBar />}
      </View>
      <View className="copy" onClick={outList}>
        {Language.chinese.copy}
      </View>
    </View>
  );
}
