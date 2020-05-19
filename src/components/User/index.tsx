import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { Icon } from "../index";
import { skillChange, checkActiveUser } from "../../store";
import style from "./style.module.scss";

export default function User(props) {
  const { item } = props;
  const clickItem = () => {
    checkActiveUser(item);
    skillChange();
  };

  return (
    <View className={style.wrapper}>
      <View className={style.user}>
        <View className={style.change} onClick={clickItem}>
          修改
        </View>
        <View className={style.name}>{item.name}</View>
      </View>
      <View>
        {item.skill.map(skill => (
          <Icon skill={skill} uesr={item} key={skill.type} />
        ))}
      </View>
    </View>
  );
}
