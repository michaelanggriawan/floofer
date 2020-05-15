import React from "react";
import {StyleSheet, View} from "react-native";
import {Checkbox as CB} from 'exoflex';

import { COLORS } from '../constants/colors';

type Props = {
  isSelected: boolean;
  color: string;
  onSetSelection: () => void;
  label: string;
}

function CheckBox(props: Props) {
  let { isSelected, color, label, onSetSelection} = props;
  return (
    <View style={styles.container}>
      <CB
        checked={isSelected}
        style={{ 
          backgroundColor: COLORS.white,  
        }}
        color={color}
        size={30}
        onPress={onSetSelection}
        label={label}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CheckBox;
