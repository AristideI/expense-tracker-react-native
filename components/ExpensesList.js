import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpensesItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpensesItem}
    />
  );
}
