import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  display: {
    backgroundColor: "#fff",
    padding: 10,
    alignItems: "flex-end",
  },
  input: {
    fontSize: 42,
    marginBottom: 10,
  },
  result: {
    fontSize: 28,
    color: "gray",
  },
  buttons: {
    borderTopWidth: 0.5,
    borderColor: "#e5e5e5",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  buttonText: {
    fontSize: 26,
    fontWeight: "normal",
    color: "#f35b04",
  },

  historyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  historyItem: {
    fontSize: 26,
    marginBottom: 5,
    textAlign: "right",
    paddingRight: 10,
    color: "lightgray",
  },
});
