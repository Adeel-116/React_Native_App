import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

function OnboardScreen() {
  type DataItem = {
    heading: string;
    paragraph: string;
    image: string;
  };

  const flatListRef = useRef<FlatList<DataItem>>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);


  const scrollToNext = () => {
    if (currentIndex < data.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    }
  };


  const scrollToPrevious = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
      setCurrentIndex(currentIndex - 1);
    }
  };

  const data = [
    {
      heading: 'Choose Product',
      paragraph: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      image: require('../assests/images/spash_1.png'),
    },
    {
      heading: 'Get Payment',
      paragraph: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      image: require('../assests/images/spash_2.png'),
    },
    {
      heading: 'Placed Order',
      paragraph: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      image: require('../assests/images/spash_3.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text}>1/3</Text>
          <Text style={styles.text}>Skip</Text>
        </View>
      </View>

      <View style={styles.box2}>
        <FlatList
          data={data}
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={{ width: width }}>
              <View style={[styles.card]}>
                <Image source={item.image} style={{ width: '100%', height: 250 }} resizeMode="contain" />
                <Text style={styles.headingText}>{item.heading}</Text>
                <Text style={styles.paragraph}>{item.paragraph}</Text>
              </View>
            </View>
          )}
        />
      </View>


      <View style={styles.box3}>
        <TouchableOpacity onPress={scrollToPrevious}>
          <Text style={styles.text}>Prev</Text>
        </TouchableOpacity>

        <View style={styles.paginationContainer}>
          {data.map((_, index) => {
            if (index === currentIndex) {
              return <View key={index} style={styles.pagination1} />;
            } else if (index < currentIndex) {
              return <View key={index} style={styles.pagination2} />;
            } else {
              return <View key={index} style={styles.pagination2} />;
            }
          })}
        </View>


        <TouchableOpacity onPress={scrollToNext}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OnboardScreen;

const styles = StyleSheet.create({
  card: {
    width: "95%",
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
  },
  box1: {
    width: '100%',
  },
  box2: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  headingText: {
    fontSize: 30,
    padding: 5,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 15,
    color: '#A8A8A9',
    textAlign: 'center',
  },
  paginationContainer: {
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    alignItems: 'center',
  },
  pagination1: {
    width: 40,
    height: 6,
    backgroundColor: 'red',
    borderRadius: 60,
  },

  pagination2: {
    width: 8,
    height: 8,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
});
