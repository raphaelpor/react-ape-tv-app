import React, {Component, useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-ape';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  slideshow: {
    position: 'absolute',
    left: 280,
    top: 0,
    backgroundColor: '#080808',
    width: width,
    height: 420,
    overflow: 'hidden',
  },
});

// These images are under creative commons CC0
const slides = [
  'https://raphamorim.io/react-ape-photo-gallery/public/slides/pexels-snapwire-730896.jpg',
  'https://raphamorim.io/react-ape-photo-gallery/public/slides/pexels-aleksandar-pasaric-2339009.jpg',
  'https://raphamorim.io/react-ape-photo-gallery/public/slides/pexels-max-avans-5072402.jpg',
];

const delay = 2500;

function Slideshow() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(
    () => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1)),
        delay
      );

      return () => {
        resetTimeout();
      };
    },
    [currentSlide]
  );

  return (
    <View style={{...styles.slideshow}}>
      <Image src={slides[currentSlide]} />
    </View>
  );
}

export default Slideshow;
