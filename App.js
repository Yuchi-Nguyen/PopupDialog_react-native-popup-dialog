import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { BottomSheet } from 'react-native-btr';
import { SocialIcon } from '@rneui/themed';

const App = () => {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Example of Bottom Sheet in React Native
        </Text>
        <Button
          onPress={toggleBottomNavigationView}
          title="Show Bottom Sheet"
        />
        <BottomSheet
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}
        >
          <View style={styles.bottomNavigationView}>
            <View style={styles.bottomSheetContent}>
              <Text style={styles.shareText}>
                Share Using
              </Text>
              <View style={styles.iconRow}>
                <SocialIcon
                  type="twitter"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('twitter');
                  }}
                />
                <SocialIcon
                  type="facebook"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('facebook');
                  }}
                />
                <SocialIcon
                  type="instagram"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('instagram');
                  }}
                />
                <SocialIcon
                  type="linkedin"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('linkedin');
                  }}
                />
                <SocialIcon
                  type="medium"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('medium');
                  }}
                />
              </View>
            </View>
          </View>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheetContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  shareText: {
    textAlign: 'center',
    padding: 20,
    fontSize: 20
  },
  iconRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
