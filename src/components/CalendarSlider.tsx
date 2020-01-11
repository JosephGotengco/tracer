import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import * as Font from "expo-font";
import Carousel from "react-native-snap-carousel";

export default class CalendarSlider extends Component {
  _carousel: any;
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      dates: [],
      currentIndex: 0
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "RobotoMono-Regular": require("./../assets/fonts/RobotoMono-Regular.ttf")
    });

    function getTodaysDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();

      var todayDate = `${yyyy}-${mm}-${dd}`;
      return todayDate;
    }

    function getLastYearsDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear() - 1;

      var lastYearsDate = `${yyyy}-${mm}-${dd}`;
      return lastYearsDate;
    }

    function dateRange(startDate, endDate) {
      var start = startDate.split("-");
      var end = endDate.split("-");
      var startYear = parseInt(start[0]);
      var endYear = parseInt(end[0]);
      var dates = [];
      var months = {
        1: "jan",
        2: "feb",
        3: "mar",
        4: "apr",
        5: "may",
        6: "jun",
        7: "jul",
        8: "aug",
        9: "sept",
        10: "oct",
        11: "nov",
        12: "dec"
      };

      for (var i = startYear; i <= endYear; i++) {
        var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
        var startMon = i === startYear ? parseInt(start[1]) - 1 : 0;
        for (
          var j = startMon;
          j <= endMonth;
          j = j > 12 ? j % 12 || 11 : j + 1
        ) {
          var month = j + 1;
          var displayMonth = month < 10 ? "0" + month : month;
          var monthObject = {
            month: months[month],
            index: [i, displayMonth, "01"].join("-")
          };
          dates.push(monthObject);
        }
      }
      return dates;
    }

    var dates = dateRange(getLastYearsDate(), getTodaysDate());
    var currentIndex = dates.length - 1;
    this.setState({ fontLoaded: true, dates, currentIndex });
  }

  changeIndex = currentIndex => {
    this.setState({ currentIndex });
  };

  _renderItem = ({ item, index }) => {
    return (
      <View>
        {item.month === "jan" ? (
          <Text
            style={{
              color: "#F2F2F2",
              fontFamily: "RobotoMono-Regular",
              fontSize: 24
            }}
          >
            {item.month} 2019
          </Text>
        ) : (
          <Text
            style={{
              color: "#F2F2F2",
              fontFamily: "RobotoMono-Regular",
              fontSize: 24
            }}
          >
            {item.month}
          </Text>
        )}
      </View>
    );
  };

  render() {
    const { fontLoaded, dates } = this.state;

    return (
      <View style={styles.container}>
        {fontLoaded ? (
          <Carousel
            data={dates}
            renderItem={this._renderItem}
            sliderWidth={200}
            onSnapToItem={this.changeIndex}
            itemWidth={75}
            firstItem={dates.length - 1}
            useScrollView
          />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
