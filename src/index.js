import React from 'react';
import {
  render,
  View,
  Dimensions,
  StyleSheet
} from 'react-ape';
import ProductItem from './components/ProductItem';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  surface: {
    backgroundColor: '#202020',
    width: width,
    height: height,
    position: 'absolute',
  },
});

const App = () => (
    <View style={styles.surface}>
        <ProductItem />
    </View>
);

render(<App />, document.getElementById('root'));
