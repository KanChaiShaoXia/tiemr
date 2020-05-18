/* eslint-disable jsx-quotes */
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { skillChange, checkUser } from "../../store";
import { list, data } from "../../constant";
import style from "./style.module.scss";

export default function SkillBar() {
  const {
    user = {
      name: "中单",
      skill: [data["shanxian"], data["yinran"]]
    }
  } = checkUser.get();

  return (
    <View className={style.wrapper}>
      <View className={style.btns}>
        <View className={style.btn} onClick={skillChange}>
          返回
        </View>
        <View className={style.btn}>保存</View>
      </View>
      <View className={style.userBox}>
        {user.skill.map(item => {
          return (
            <Image key={item.type} className={style.userAva} src={item.path} />
          );
        })}
      </View>
      <View className={style.skills}>
        {list.map(item => {
          return (
            <Image className={style.skillImg} key={item.type} src={item.path} />
          );
        })}
      </View>
    </View>
  );
}
