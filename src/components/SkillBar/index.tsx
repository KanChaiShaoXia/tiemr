/* eslint-disable jsx-quotes */
import Taro, { useState } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { deepClone } from "noahsark";
import cx from "classnames";
import { skillChange, checkUser, changeTimer, useStore } from "../../store";
import { list } from "../../constant";
import style from "./style.module.scss";

export default function SkillBar() {
  const { user } = useStore(checkUser);
  const [current, setCurrent] = useState(deepClone(user));
  const [active, setActive] = useState(null);

  const backClick = () => {
    setActive(null);
    setCurrent(deepClone(user));
    skillChange();
  };

  const saveClick = () => {
    changeTimer(current);
    backClick();
  };

  const skillClick = item => {
    if (active === item.type) return;
    let result = current.skill.map(i => {
      if (i.type === active) i = item;
      return i;
    });
    if (result[0].type === result[1].type) {
      result = current.skill.reverse();
    }
    setCurrent({ name: current.name, skill: result });
    setActive(item.type);
  };

  return (
    <View className={style.wrapper}>
      <View className={style.btns}>
        <View className={style.btn} onClick={backClick}>
          返回
        </View>
        <View className={style.btn} onClick={saveClick}>
          保存
        </View>
      </View>
      <View className={style.userBox}>
        {current.skill.map(item => {
          return (
            <Image
              key={item.type}
              className={cx(
                style.userAva,
                item.type === active && style.active
              )}
              src={item.path}
              onClick={() => setActive(item.type)}
            />
          );
        })}
      </View>
      <View className={style.skills}>
        {active &&
          list.map(item => {
            return (
              <Image
                className={cx(
                  style.skillImg,
                  active === item.type && style.active
                )}
                key={item.type}
                src={item.path}
                onClick={() => skillClick(item)}
              />
            );
          })}
      </View>
    </View>
  );
}
