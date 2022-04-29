import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b95e/ad83/0eb10610789f908cbac72f18a06996bc"
        }}
        style={styles.ImageBackground_31_56}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1175/5c5b/d5bd1516557653a526a023c658be14f7"
        }}
        style={styles.ImageBackground_31_57}
      />
      <View style={styles.View_20_55} />
      <View source={{ uri: "null" }} style={styles.View_31_51} />
      <View style={styles.View_20_68}>
        <Text style={styles.Text_20_68}>홍길동 님</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70af/9998/05cbf5a24ae9c38aa0f02b644f579c4f"
        }}
        style={styles.ImageBackground_20_69}
      />
      <View style={styles.View_20_76}>
        <Text style={styles.Text_20_76}>혈압</Text>
      </View>
      <View style={styles.View_20_104} />
      <View style={styles.View_23_161} />
      <View style={styles.View_23_154}>
        <View style={styles.View_20_77}>
          <Text style={styles.Text_20_77}>혈압</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/c9f1/54d18ea8634a508651a1f0c3ddc40944"
          }}
          style={styles.ImageBackground_23_135}
        />
      </View>
      <View style={styles.View_23_155}>
        <View style={styles.View_20_109}>
          <Text style={styles.Text_20_109}>맥박</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23a9/cb41/2fb5aec6e41588185b6e2c31a8e87257"
          }}
          style={styles.ImageBackground_23_138}
        />
      </View>
      <View style={styles.View_23_156}>
        <View style={styles.View_20_110}>
          <Text style={styles.Text_20_110}>산소포화도</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9691/84bc/e79fcc233a98abb2948e828100ab4dcc"
          }}
          style={styles.ImageBackground_23_140}
        />
      </View>
      <View style={styles.View_28_42}>
        <View style={styles.View_28_43}>
          <Text style={styles.Text_28_43}>산소포화도</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9691/84bc/e79fcc233a98abb2948e828100ab4dcc"
          }}
          style={styles.ImageBackground_28_44}
        />
      </View>
      <View style={styles.View_28_45}>
        <View style={styles.View_28_46}>
          <Text style={styles.Text_28_46}>호흡수</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9691/84bc/e79fcc233a98abb2948e828100ab4dcc"
          }}
          style={styles.ImageBackground_28_47}
        />
      </View>
      <View style={styles.View_23_164}>
        <View style={styles.View_20_111}>
          <Text style={styles.Text_20_111}>심전도 그래프</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81c2/988c/33f687c35416f51c1b87b687e15ae68d"
          }}
          style={styles.ImageBackground_23_141}
        />
      </View>
      <View style={styles.View_23_165} />
      <View style={styles.View_28_39} />
      <View style={styles.View_28_40} />
      <View style={styles.View_28_41} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30d7/a044/641b5c393375b3656bc195a8e0c94004"
        }}
        style={styles.ImageBackground_23_168}
      />
      <View style={styles.View_23_169}>
        <Text style={styles.Text_23_169}>Castella 2.0</Text>
      </View>
      <View style={styles.View_28_3} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ff/b286/9ad72cd83c6cbe486bf1f94c1c7ff38b"
        }}
        style={styles.ImageBackground_28_7}
      />
      <View style={styles.View_28_30}>
        <View style={styles.View_28_26}>
          <View style={styles.View_20_82}>
            <Text style={styles.Text_20_82}>의료장비 연결</Text>
          </View>
          <View style={styles.View_28_10} />
          <View style={styles.View_28_14}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9638/f8d1/e5143a829a8c513e3f2750ae05e5f229"
              }}
              style={styles.ImageBackground_28_13}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_28_38}>
        <View style={styles.View_23_146}>
          <Text style={styles.Text_23_146}>mmHg</Text>
        </View>
        <View style={styles.View_23_145}>
          <Text style={styles.Text_23_145}>120</Text>
        </View>
      </View>
      <View style={styles.View_28_36}>
        <View style={styles.View_23_147}>
          <Text style={styles.Text_23_147}>회/min</Text>
        </View>
        <View style={styles.View_23_148}>
          <Text style={styles.Text_23_148}>180</Text>
        </View>
      </View>
      <View style={styles.View_31_48}>
        <View style={styles.View_31_49}>
          <Text style={styles.Text_31_49}>회/min</Text>
        </View>
        <View style={styles.View_31_50}>
          <Text style={styles.Text_31_50}>180</Text>
        </View>
      </View>
      <View style={styles.View_28_37}>
        <View style={styles.View_23_149}>
          <Text style={styles.Text_23_149}>SpO2</Text>
        </View>
        <View style={styles.View_23_150}>
          <Text style={styles.Text_23_150}>98</Text>
        </View>
      </View>
      <View style={styles.View_28_31}>
        <View style={styles.View_28_25}>
          <View style={styles.View_28_16}>
            <Text style={styles.Text_28_16}>상담 기록</Text>
          </View>
          <View style={styles.View_28_17} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/888e/82d2/57391a5bec6cfa1cf624a734093fdf70"
            }}
            style={styles.ImageBackground_28_20}
          />
        </View>
      </View>
      <View style={styles.View_28_29}>
        <View style={styles.View_20_83}>
          <Text style={styles.Text_20_83}>측정 기록</Text>
        </View>
        <View style={styles.View_28_24} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce3e/7f0f/2098e14a7cb998e6f2e5b8a5558eab01"
          }}
          style={styles.ImageBackground_28_27}
        />
      </View>
      <View style={styles.View_28_32}>
        <View style={styles.View_20_75}>
          <Text style={styles.Text_20_75}>비대면 상담</Text>
        </View>
        <View style={styles.View_28_23} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a99/31d7/33d44b8115573c42ed25ae5870e4f2fb"
          }}
          style={styles.ImageBackground_28_28}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d636/e8ce/653bd22b5cdc7f40550f4003799efc65"
        }}
        style={styles.ImageBackground_31_53}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(39, 50, 61, 1)" },
  View_2: { height: hp("219%") },
  ImageBackground_31_56: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("203%"),
    minHeight: hp("203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("-103%")
  },
  ImageBackground_31_57: {
    width: wp("114%"),
    minWidth: wp("114%"),
    height: hp("400%"),
    minHeight: hp("400%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-13%"),
    top: hp("-244%")
  },
  View_20_55: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 49, 60, 1)"
  },
  View_31_51: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111%")
  },
  View_20_68: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_20_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_20_69: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("11%")
  },
  View_20_76: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("-35%"),
    justifyContent: "flex-start"
  },
  Text_20_76: {
    color: "rgba(139, 137, 137, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_104: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("138%"),
    backgroundColor: "rgba(45, 61, 74, 1)"
  },
  View_23_161: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("141%"),
    backgroundColor: "rgba(36, 48, 56, 1)"
  },
  View_23_154: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("167%")
  },
  View_20_77: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_20_77: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_135: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_23_155: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("166%")
  },
  View_20_109: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_20_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_138: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_23_156: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("164%")
  },
  View_20_110: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_20_110: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_140: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_28_42: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("164%")
  },
  View_28_43: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_28_43: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_44: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_28_45: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("164%")
  },
  View_28_46: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_28_46: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_47: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_23_164: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("147%")
  },
  View_20_111: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_20_111: {
    color: "rgba(100, 108, 128, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_141: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_23_165: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%")
  },
  View_28_39: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("176%")
  },
  View_28_40: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("186%"),
    minHeight: hp("186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%")
  },
  View_28_41: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("186%"),
    minHeight: hp("186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("26%")
  },
  ImageBackground_23_168: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    resizeMode: "cover"
  },
  View_23_169: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_23_169: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 56,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_3: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("9%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(155, 160, 166, 1)",
    borderWidth: 2
  },
  ImageBackground_28_7: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94%"),
    top: hp("10%"),
    resizeMode: "cover"
  },
  View_28_30: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("62%")
  },
  View_28_26: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_20_82: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_20_82: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_10: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(53, 173, 226, 1)"
  },
  View_28_14: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  ImageBackground_28_13: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_28_38: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("147%")
  },
  View_23_146: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_23_146: {
    color: "rgba(166, 172, 178, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_145: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_145: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_36: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("146%")
  },
  View_23_147: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_23_147: {
    color: "rgba(166, 172, 178, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_148: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_48: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("146%")
  },
  View_31_49: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_31_49: {
    color: "rgba(166, 172, 178, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_50: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_31_50: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_37: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("146%")
  },
  View_23_149: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_23_149: {
    color: "rgba(166, 172, 178, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_150: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_150: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_31: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("62%")
  },
  View_28_25: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_16: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_28_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_17: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 149, 14, 1)"
  },
  ImageBackground_28_20: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_28_29: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("62%")
  },
  View_20_83: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_20_83: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_24: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 199, 95, 1)"
  },
  ImageBackground_28_27: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    resizeMode: "cover"
  },
  View_28_32: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("62%")
  },
  View_20_75: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_20_75: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_23: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(201, 118, 218, 1)"
  },
  ImageBackground_28_28: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  ImageBackground_31_53: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("13%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
