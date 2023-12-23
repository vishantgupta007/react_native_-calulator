import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { styles } from "./style";
import React, { useState } from "react";
import { buttonsLayout } from "./data";

const App = () => {
  // State to store the current input and result
  const [input, setInput] = useState(""); // for  addding input field
  const [result, setResult] = useState(""); // for result display
  const [history, setHistory] = useState([]); // for history display
  const [memory, setMemory] = useState([]); // for storing value into memory

  // Function to handle button presses
  const handlePress = (value) => {
    if (value === "=") {
      try {
        // History feature
        const history = Number(eval(input)).toFixed(3).toString();

        const ans = Number(eval(input).toFixed(3)).toString();
        setResult(ans);

        setHistory((prev) => [...prev, history]);
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
      setHistory([]);
      setInput("");
      setResult("");
      setMemory([]);
    }

    // For delete value
    else if (value === "DL") {
      setInput(input.substring(0, input.length - 1));
    }

    // for memory display
    else if (value === "M+") {
      setMemory((prev) => [...prev, input]);
    } 
    
    else if (value === "MR") {
      const lastMemoryValue = memory[memory.length - 1];
      if (lastMemoryValue) {
        setInput((prevInput) => prevInput + lastMemoryValue);
      }
    } 
    
    else if (value === "MC") {
      setMemory([]);
    }
    
    else {
      setInput((prevInput) => prevInput + value);
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      {/* History Display */}

      <View style={styles.history}>
        {/* <Text style={styles.historyTitle}>History:</Text> */}
        <FlatList
          data={history}
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
