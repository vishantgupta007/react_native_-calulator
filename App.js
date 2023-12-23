import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from "react-native";
import {styles} from "./style"
import React, { useState } from "react";

const App = () => {
  // State to store the current input and result
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [memory, setMemory] = useState([]);

  // Function to handle button presses
  const handlePress = (value) => {
    if (value === "=") {
      try {
        // History feature

        const history = Number(eval(input)).toFixed(3).toString();

        const ans = Number(eval(input).toFixed(3)).toString();
        setResult(ans);

        setMemory((prev) => [...prev, history]);
      } catch (error) {
        setResult("Error");
      }
    }

    // or Clear value
    else if (value === "C") {
      setInput("");
      setResult("");
    }

    // For all clear
    else if (value === "AC") {
      setMemory([]);
      setInput("");
      setResult("");
    }

    // For delete value
    else if (value === "DL") {
      setInput(input.substring(0, input.length - 1));
    } else {
      setInput((prevInput) => prevInput + value);
    }

    // Scientific function
    switch (value) {
      case "sqrt":
        setInput(`Math.sqrt(${input})`);
        break;

      case "pow":
        setInput(`Math.pow(${input}, 2)`);
        break;
    }
  };

  const buttonsLayout = [
    ["C", "DL", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["AC", "0", ".", "="],
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* History Display */}

      <View style={styles.history}>
        {/* <Text style={styles.historyTitle}>History:</Text> */}
        <FlatList
          data={memory}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.historyItem}>= {item}</Text>
          )}
        />
      </View>

      {/* Display Input and Result */}

      <View style={styles.display}>
        {<Text style={styles.input}>{input}</Text>}
        <Text style={styles.result}>
          {result && <Text style={styles.result}>= {result}</Text>}
        </Text>
      </View>

      {/* Calculator Buttons */}
      <View style={styles.buttons}>
        {buttonsLayout.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={styles.button}
                onPress={() => handlePress(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default App;

// Styles

// 
