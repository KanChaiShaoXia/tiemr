import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { Icon } from "../index";
import { skillChange } from "../../store";

import style from "./style.module.scss";

export default function User(props) {
  const { item } = props;
  console.log(item);

  return (
    <View className={style.wrapper}>
      <View className={style.user}>
        <View className={style.change} onClick={skillChange}>
          修改
        </View>
        <View className={style.name}>{item.name}</View>
      </View>
      <View>
        {item.skill.map(skill => (
          <Icon type={skill} key={skill} />
        ))}
      </View>
    </View>
  );
}
