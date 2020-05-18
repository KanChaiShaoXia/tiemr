/* eslint-disable jsx-quotes */
import Taro, { useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { switchSkillStatus, useStore } from "../../store";
import { SkillBar } from "../../components";
import UserBox from "./userBox";
import "./index.scss";

export default function Index() {
  const { openStatus } = useStore(switchSkillStatus);
  const [userList] = useState([
    { name: "上单", skill: ["shanxian", "chuansong"] },
    { name: "打野", skill: ["shanxian", "chengjie"] },
    { name: "中单", skill: ["shanxian", "yinran"] },
    { name: "ADC", skill: ["shanxian", "zhiliao"] },
    { name: "辅助", skill: ["shanxian", "xuruo"] }
  ]);

  return (
    <View className="wrapper">
      <View className="close">×</View>
      <View className={`box ${!openStatus ? "skillOpen" : "skillClose"}`}>
        <UserBox userList={userList} />
      </View>
      <View className={`${openStatus ? "skillOpen" : "skillClose"}`}>
        <SkillBar />
      </View>
    </View>
  );
}
