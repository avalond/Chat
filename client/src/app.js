/**
 * Created by kevin on 7/12/17.
 */
import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  View
} from 'react-native';



export default class chat extends Component {
  render() {
    return (
      <View style={styles.container} >
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === '首页'}
            title="首页"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            onPress={() => this.setState({ selectedTab: '首页' })}>
            <HomeComponent/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === '消息'}
            title="消息"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            onPress={() => this.setState({ selectedTab: '消息' })}>
            <MessageComponent />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === '联系人'}
            title="联系人"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            onPress={() => this.setState({ selectedTab: '联系人' })}>
            <ContactComponent />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}
let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabText: {
    color: "#000000",
    fontSize: 13
  },
  selectedTabText: {
    color: "#999999",
    fontSize: 13
  },
  icon: {
    width: 20,
    height: 20
  }
});

