
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "style-module__wrapper___2rmnN": {
    "paddingTop": scalePx2dp(15),
    "paddingRight": scalePx2dp(15),
    "paddingBottom": scalePx2dp(15),
    "paddingLeft": scalePx2dp(15)
  },
  "style-module__swiperWrapper___24-o5": {
    "height": scalePx2dp(150)
  },
  "style-module__swiperItem___2p0SH": {
    "marginBottom": scalePx2dp(10),
    "width": "100%",
    "backgroundColor": "#ffffff",
    "borderWidth": scalePx2dp(1.5),
    "borderStyle": "solid",
    "borderColor": "rgba(0, 0, 0, 0.12)",
    "borderRadius": scalePx2dp(6)
  },
  "style-module__listWrapper___3LfiF": {
    "backgroundColor": "#ffffff",
    "width": "100%",
    "height": "90%",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-evenly"
  },
  "style-module__itemLrR___mTf6_": {
    "width": "45%"
  },
  "style-module__block___1n5Hb": {
    "borderRadius": scalePx2dp(6),
    "marginTop": scalePx2dp(7.5),
    "marginRight": 0,
    "marginBottom": scalePx2dp(7.5),
    "marginLeft": 0,
    "borderWidth": scalePx2dp(1.5),
    "borderStyle": "solid",
    "borderColor": "rgba(0, 0, 0, 0.1)",
    "display": "flex",
    "alignItems": "center"
  },
  "style-module__title___24lQS": {
    "color": "#00438a",
    "fontSize": scalePx2dp(16),
    "fontWeight": "bold",
    "textAlign": "center"
  },
  "style-module__active___8PYFY": {
    "color": "#fff200",
    "backgroundColor": "#00438a"
  },
  "style-module__textActive___30yE2": {
    "color": "#fff200"
  }
})
