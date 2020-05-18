/* eslint-disable jsx-quotes */
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { data } from "../../constant";
import style from "./style.module.scss";
import cx from "classnames";

export default function Icon(props) {
  const { type, time } = props;
  return (
    <View className={cx(style.item, time === 0 && style.active)}>
      <Image mode="widthFix" className={style.img} src={data[type].path} />
      <View className={style.time}>{time}</View>
      <View className={style.mask} />
    </View>
  );
}
