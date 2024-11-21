import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Button,
} from 'react-native';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';

const App = () => {
  const [defaultAnimationDialog, setDefaultAnimationDialog] = useState(false);
  const [scaleAnimationDialog, setScaleAnimationDialog] = useState(false);
  const [slideAnimationDialog, setSlideAnimationDialog] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Ví dụ về Popup Dialog trong React Native</Text>
       
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() => setDefaultAnimationDialog(true)}>
          <Text style={styles.buttonTextStyle}>Default Animation Dialog</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() => setScaleAnimationDialog(true)}>
          <Text style={styles.buttonTextStyle}>Scale Animation Dialog</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() => setSlideAnimationDialog(true)}>
          <Text style={styles.buttonTextStyle}>Slide Animation Dialog</Text>
        </TouchableHighlight>

        <Dialog
          onDismiss={() => setDefaultAnimationDialog(false)}
          width={0.9}
          visible={defaultAnimationDialog}
          rounded
          actionsBordered
          dialogTitle={<DialogTitle title="Default Animation Dialog" />}
          footer={
            <DialogFooter>
              <DialogButton
                text="CANCEL"
                onPress={() => setDefaultAnimationDialog(false)}
              />
              <DialogButton
                text="OK"
                onPress={() => setDefaultAnimationDialog(false)}
              />
            </DialogFooter>
          }>
          <DialogContent>
            <Text>Đây là ví dụ về hộp thoại với hoạt ảnh mặc định</Text>
          </DialogContent>
        </Dialog>

        <Dialog
          onTouchOutside={() => setScaleAnimationDialog(false)}
          width={0.9}
          visible={scaleAnimationDialog}
          dialogAnimation={new ScaleAnimation()}
          dialogTitle={<DialogTitle title="Scale Animation Dialog" />}>
          <DialogContent>
            <Text>Đây là ví dụ về hộp thoại với hoạt ảnh phóng to</Text>
            <Button title="Đóng" onPress={() => setScaleAnimationDialog(false)} />
          </DialogContent>
        </Dialog>

        <Dialog
          onTouchOutside={() => setSlideAnimationDialog(false)}
          visible={slideAnimationDialog}
          dialogTitle={<DialogTitle title="Slide Animation Dialog" />}
          dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}>
          <DialogContent>
            <Text>Đây là ví dụ về hộp thoại với hoạt ảnh trượt</Text>
          </DialogContent>
        </Dialog>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    padding: 16,
  },
  buttonStyle: {
    minWidth: '100%',
    padding: 10,
    backgroundColor: '#f5821f',
    margin: 15,
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
  titleStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
});
