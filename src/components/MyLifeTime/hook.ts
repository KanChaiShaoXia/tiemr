import Taro, { useEffect, useState } from "@tarojs/taro";
import {
  isPast,
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds
} from "date-fns";

let timer: any = null;

export default function useHook() {
  const [date, setDate] = useState(Taro.getStorageSync("date") || "");
  const [time, setTime] = useState(Taro.getStorageSync("time") || "00:00");
  const [dateInfo, setDateInfo] = useState({
    past: false,
    year: 0,
    month: 0,
    day: 0,
    h: 0,
    m: 0,
    s: 0
  });

  useEffect(() => {
    Taro.setNavigationBarTitle({ title: "时辰" });
  }, []);

  const getDate = (value: string, type: string) => {
    clearInterval(timer);
    if (type === "date") {
      getTime(value, time);
      setDate(value);
      Taro.setStorageSync("date", value);
    } else {
      getTime(date, value);
      setTime(value);
      Taro.setStorageSync("time", value);
    }
  };

  const getTime = (dateValue, timeValue) => {
    const times = [
      Number(timeValue.split(":")[0]),
      Number(timeValue.split(":")[1])
    ];
    const dates = new Date(
      Number(dateValue.split("-")[0]), // 年
      Number(dateValue.split("-")[1]) - 1, // 月
      Number(dateValue.split("-")[2]), // 日
      times[0],
      times[1]
    );
    const NewDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      new Date().getHours(),
      new Date().getMinutes(),
      new Date().getSeconds(),
      new Date().getMilliseconds()
    );
    setDateInfo({
      past: isPast(dates),
      year: differenceInYears(NewDate, dates),
      month: differenceInMonths(NewDate, dates),
      day: differenceInDays(NewDate, dates),
      h: differenceInHours(NewDate, dates),
      m: differenceInMinutes(NewDate, dates),
      s: differenceInSeconds(NewDate, dates)
    });
  };

  useEffect(() => {
    if (date) {
      timer = setInterval(() => getTime(date, time), 500);
    }
  }, [date, time]);

  return { date, time, getDate, dateInfo };
}
