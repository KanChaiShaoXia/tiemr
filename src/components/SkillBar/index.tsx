/* eslint-disable jsx-quotes */
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { skillChange } from "../../store";
import { list } from "../../constant";
import style from "./style.module.scss";

export default function SkillBar(props) {
  console.log(list);

  return (
    <View className={style.wrapper}>
      <View className={style.btns}>
        <View className={style.btn} onClick={skillChange}>
          返回
        </View>
        <View className={style.btn}>保存</View>
      </View>
      <View className={style.userBox}>
        <Image className={style.userAva} src="" />
        <Image className={style.userAva} src="" />
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
