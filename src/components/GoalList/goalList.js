import React from "react";
import { Animated, FlatList, View, RefreshControl } from "react-native";
import styles from "./goalListStyle";
import GoalItem from "../GoaItem/goalItem";
import Header from "../Header/header";
import { useSelector, useDispatch } from "react-redux";
import { removeCompletedTodo } from "../../redux/slices/todoSlice";

function GoalList() {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const todos = useSelector((state) => state.todos.todos);
  let AnimatedHeader = new Animated.Value(0);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const renderProducts = ({ item }) => <GoalItem listDataItem={item} />;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
      dispatch(removeCompletedTodo());
    });
  }, []);

  return (
    <View style={styles.listContainer}>
      <Header onAnimate={AnimatedHeader}></Header>
      <FlatList
        style={{ marginBottom: 10 }}
        maxToRenderPerBatch={4}
        initialNumToRender={16}
        renderItem={renderProducts}
        data={todos}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: AnimatedHeader,
                },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl
            colors={["#9d7ad6", "#8b88eb", "#cb88eb"]}
            refreshing={refreshing}
            onRefresh={onRefresh}></RefreshControl>
        }></FlatList>
    </View>
  );
}

export default GoalList;
