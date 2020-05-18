/* eslint-disable jsx-quotes */
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { data } from "../../constant";
import style from "./style.module.scss";

export default function Icon(props) {
  const { type } = props;

  return (
    <View className={style.item}>
      <Image mode="widthFix" className={style.img} src={data[type].path} />
      <View className={style.time}>{data[type].time}</View>
      <View className={style.mask} />
    </View>
  );
}
