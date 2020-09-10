import React from "react";
import { View, Text } from "react-native";
import styles from "./HeaderStyle";
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
};

export default Header;
