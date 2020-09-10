import React from "react";
import { StyleSheet, Text, View, ViewStyle, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/Header";
import { ITodo, IRootState } from "../../interfaces";
import TodoItem from "../TodoItem/TodoItem";
import AddTodo from "../AddTodo/AddTodo";
import { deleteItem, addItem } from "../../redux/actions/list";
const Main = () => {
  const list = useSelector((state: IRootState) => state.list);
  const dispatch = useDispatch();

  const deleteHandler = (id: number) => {
    dispatch(deleteItem(id));
  };

  const addHandler = (text: string) => {
    const item: ITodo = {
      text,
      id: list.length + 1,
    };
    dispatch(addItem(item));
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo addHandler={addHandler} />
        <View style={styles.list}>
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <TodoItem item={item} deleteHandler={deleteHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

interface Styles {
  container: ViewStyle;
  content: ViewStyle;
  list: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

export default Main;
