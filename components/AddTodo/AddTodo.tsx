import React from "react";
import { View, TextInput, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../interfaces";
import { inputChange, inputClear } from "../../redux/actions/input";

interface IProps {
  addHandler: (text: string) => void;
}

const AddTodo = ({ addHandler }: IProps) => {
  const value = useSelector((state: IRootState) => state.input);
  const dispatch = useDispatch();

  const inputHandler = (text: string) => {
    dispatch(inputChange(text));
  };

  const addItem = () => {
    addHandler(value);
    dispatch(inputClear());
  };

  return (
    <View>
      <TextInput
        placeholder="new todo..."
        value={value}
        onChangeText={inputHandler}
      />
      <Button title="Add todo" onPress={addItem} color="coral" />
    </View>
  );
};

export default AddTodo;
