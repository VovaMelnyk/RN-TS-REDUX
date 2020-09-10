import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ITodo } from "../../interfaces";
import styles from "./TodoItemStyle";

interface IProps {
  item: ITodo;
  deleteHandler: (id: number) => void;
}

const TodoItem = ({ item, deleteHandler }: IProps) => {
  return (
    <TouchableOpacity onPress={() => deleteHandler(item.id)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;
