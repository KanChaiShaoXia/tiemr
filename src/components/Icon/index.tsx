/* eslint-disable jsx-quotes */
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import cx from "classnames";
import { data } from "../../constant";
import style from "./style.module.scss";
import { resetTimer } from "../../store";

export default function Icon(props) {
  const { skill, uesr } = props;

  return (
    <View
      className={cx(style.item, skill.time === 0 && style.active)}
      onClick={() => resetTimer(uesr, skill)}
      onContextMenu={() => resetTimer(uesr, skill, true)}
    >
      <Image
        mode="widthFix"
        className={style.img}
        src={data[skill.type].path}
      />
      <View className={style.time}>{skill.time}</View>
      {/* <View className={style.mask} /> */}
    </View>
  );
}
