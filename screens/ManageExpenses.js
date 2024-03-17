import { View, Text, StyleSheet } from "react-native";

export default function ManageExpenses() {
  return (
    <View style={styles.container}>
      <Text>Manage Expenses</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
