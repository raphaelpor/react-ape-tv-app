import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-ape';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    height: 200,
    width: 300,
  },
  image: {
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    height: 200,
    width: 300,
  },
});

const ProductItem = () => (
    <View style={styles.container}>
      <Image key="grid-image" src="https://picsum.photos/300/200" style={styles.image} />
    </View>
);

export default ProductItem;