import React, { useEffect, useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';

export default function App() {
  const [myFriendsArray, setMyFriendsArray] = useState();

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/KevinTMtz/AndroidApps/master/Friends.json'
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setMyFriendsArray(responseJson);
      })
      .catch((e) => alert(e));
  }, []);

  const renderItem = (itemData: any) => (
    <Row friend={itemData.item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Friends</Text>
      <FlatList
        style={styles.myFriendsContainer}
        data={myFriendsArray}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(friend) => friend.name}
      />
    </SafeAreaView>
  );
}

const Row = (props: any) => {
  return (
    <TouchableOpacity
      style={styles.myFriendRow}
      onPress={() =>
        alert(
          `Name: ${props.friend.name}\n` +
            `Hobby: ${props.friend.hobby}\n` +
            `Age: ${props.friend.age}\n` +
            `Phone: ${props.friend.phone}\n` +
            `Address: ${props.friend.address}\n`
        )
      }
    >
      <Text style={styles.rowTitle}>{props.friend.name}</Text>
      <Text>{`Hobby: ${props.friend.hobby}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    paddingBottom: 64,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  myFriendsContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
  },
  myFriendRow: {
    borderWidth: 1,
    borderColor: '#b0b0b0',
    marginBottom: 16,
    padding: 16,
    borderRadius: 10,
  },
  rowTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 18,
  },
});
