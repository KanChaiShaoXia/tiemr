import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem, Text, ScrollView } from "@tarojs/components";
import cx from "classnames";
import style from "./style.module.scss";

const swiperList = [
  { title: "我，活了多久？", path: "/components/MyLifeTime/index" }
];

const items = [
  {
    list: [
      { title: "?", height: "45%", path: "", active: false },
      { title: "?", height: "13%", path: "", active: false },
      { title: "?", height: "30%", path: "", active: false }
    ]
  },
  {
    list: [
      {
        title: "时辰",
        height: "13%",
        path: "/components/MyLifeTime/index",
        active: true
      },
      { title: "?", height: "13%", path: "", active: false },
      { title: "?", height: "13%", path: "", active: true },
      { title: "?", height: "45%", path: "", active: false }
    ]
  }
];

Taro.showShareMenu({ withShareTicket: true });

export default class Index extends Component {
  config: Taro.Config = {
    navigationBarTitleText: "孤舟"
  };

  render() {
    return (
      <ScrollView scrollY enableBackToTop className={style.wrapper}>
        {/* 上 */}
        <View className={style.swiperWrapper}>
          <Swiper className={style.swiper}>
            {swiperList.map(item => {
              return (
                <SwiperItem key={item.title} className={style.swiperItemBox}>
                  <View
                    onClick={() => Taro.navigateTo({ url: item.path })}
                    className={style.swiperItem}
                  >
                    <Text>{item.title}</Text>
                  </View>
                </SwiperItem>
              );
            })}
          </Swiper>
        </View>
        {/* 下 */}
        <View className={style.listWrapper}>
          {items.map((item, i) => {
            return (
              <View key={String(i)} className={style.itemLrR}>
                {item.list.map(list => {
                  return (
                    <View
                      key={list.title}
                      onClick={() =>
                        list.path && Taro.navigateTo({ url: list.path })
                      }
                      className={cx(style.block, list.active && style.active)}
                      style={{ height: list.height }}
                    >
                      <Text
                        className={cx(
                          style.title,
                          list.active && style.textActive
                        )}
                      >
                        {list.title}
                      </Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
