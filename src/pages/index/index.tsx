/* eslint-disable jsx-quotes */
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { switchSkillStatus, timers, useStore } from "../../store";
import { SkillBar } from "../../components";
import UserBox from "./userBox";
import "./index.scss";

export default function Index() {
  const { openStatus } = useStore(switchSkillStatus);
  const { userList } = useStore(timers);

  return (
    <View className="wrapper" onContextMenu={e => e.preventDefault()}>
      <View className="close">×</View>
      <View className={`${!openStatus ? "skillOpen" : "skillClose"}`}>
        <UserBox userList={userList} />
      </View>
      <View className={`${openStatus ? "skillOpen" : "skillClose"}`}>
        {openStatus && <SkillBar />}
      </View>
    </View>
  );
}
