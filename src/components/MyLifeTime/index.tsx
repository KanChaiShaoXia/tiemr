/* eslint-disable jsx-quotes */
import Taro from "@tarojs/taro";
import { View, Swiper, SwiperItem, Text, Picker } from "@tarojs/components";
import useHook from "./hook";
import style from "./style.module.scss";

export default function MyLifeTime() {
  const { date, time, getDate, dateInfo } = useHook();

  const timeList = [
    {
      title: "年月日",
      content: [
        `${dateInfo.year} 年`,
        `${dateInfo.month} 月`,
        `${dateInfo.day} 天`,
        `${dateInfo.h} 时`,
        `${dateInfo.m} 分`,
        `${dateInfo.s} 秒`
      ]
    }
  ];

  return (
    <View className={style.wrapper}>
      <Text className={style.title}>
        人寿几何，逝如朝霜。时无重至，华不再扬。
      </Text>
      <Swiper autoplay interval={8000} className={style.swiper}>
        {timeList.map(item => {
          return (
            <SwiperItem key={item.title} className={style.swiperItem}>
              <View className={style.shadow}>
                <View className={style.timeBox}>
                  <View className={style.flexBox}>
                    {item.content.map(d => (
                      <Text key={d}>{d}</Text>
                    ))}
                  </View>
                </View>
              </View>
            </SwiperItem>
          );
        })}
      </Swiper>
      <View className={style.time}>
        <Picker
          value={date}
          mode="date"
          onChange={e => getDate(e.detail.value, "date")}
        >
          <Text>
            诞生于
            {date ? date.replace("-", "年").replace("-", "月") + "日" : " ？"}
          </Text>
        </Picker>
        {date && (
          <Picker
            value={time}
            mode="time"
            onChange={e => getDate(e.detail.value, "time")}
          >
            <Text className={style.date}>{time}</Text>
          </Picker>
        )}
      </View>
    </View>
  );
}