/* eslint-disable jsx-quotes */
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { User } from "../../components";

export default function UserBox(props) {
  const { userList } = props;

  return (
    <View className="list">
      {userList.map(item => {
        return (
          <View key={item.name}>
            <User {...{ item }} />
          </View>
        );
      })}
    </View>
  );
}
