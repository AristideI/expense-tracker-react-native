import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../constants/styles";

const dummyExpenses = [
  {
    id: "e1",
    description: "New Shoes",
    amount: 99.99,
    date: new Date(2021, 12, 19),
  },
  {
    id: "e2",
    description: "Groceries",
    amount: 15.99,
    date: new Date(2022, 1, 5),
  },
  {
    id: "e3",
    description: "New TV",
    amount: 699.99,
    date: new Date(2021, 12, 1),
  },
  {
    id: "e4",
    description: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 19),
  },
  {
    id: "e5",
    description: "Another Book",
    amount: 24.67,
    date: new Date(2022, 2, 18),
  },
];

export default function ExpenseOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={dummyExpenses} periodName={expensesPeriod} />
      <ExpensesList expenses={dummyExpenses} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
