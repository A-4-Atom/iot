import React from 'react';
import { View, Text, StyleSheet, ProgressBarAndroid } from 'react-native';

const Status = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>System Status</Text>
      <Text style={styles.label}>
        Last Watered: 2 hours ago</Text>
      <Text style={styles.label}>Water Tank:</Text>
      <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        progress={0.78}
        style={styles.progressBar}
      />
      <Text style={styles.label}>System: Active </Text>
      <Text style={styles.percentage}>78%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginVertical: 5,
  },
  value: {
    fontSize: 14,
    marginBottom: 10,
  },
  progressBar: {
    width: '100%',
    height: 10,
    marginBottom: 10,
  },
  percentage: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    fontSize: 14,
  },
  status: {
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default Status;