/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { PropsWithChildren, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: 'black'
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: 'black'
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const AppTitle = "EduCMR";
  const headerTitle = "Navigate your way to University in Cameroon easily!";
  const menu1 = "All Universities";
  const menu2 = "Find Hostels";
  const menu3 = "Concours";
  const menu4 = "Announcements";
  const [searchTerm, setSearchTerm] = useState('');
  function setTerm(input:string) {
    setSearchTerm(input);
  }
  function pop(){
    Alert.alert(searchTerm);
  }
  const colleges = {
    college1: "University Of Yaounde 1",
    college2: "The ICT University",
    college3: "University Of Yaounde 1",
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <View style={styles.header}>
            <Text style={styles.AppTitle}> {AppTitle} </Text>
            <Text style={styles.headerTitle}> {headerTitle} </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title=''>
           
            <View style={styles.searchView}>
              <TextInput placeholder="Enter join link" onChangeText={setTerm} style={styles.searchInput} />
              <Pressable style={styles.searchBtn} onPress={pop} android_ripple={{ color: 'black' }}>
                <Text style={{ color: '#DADAE6', fontSize: 19, padding: 3, }}>{"Join class"}</Text>
              </Pressable>
            </View>
          </Section>
          <Section title="Explore">
            <View style={styles.MenuflexView}>
              <View style={styles.btnFlex}>
                <Pressable style={styles.button} android_ripple={{ color: '#2929CC' }}>
                  <Text style={styles.btnText}>{menu1}</Text>
                </Pressable>
              </View>
              <View style={styles.btnFlex}>
                <Pressable style={styles.button} android_ripple={{ color: '#2929CC' }}>
                  <Text style={styles.btnText}>{menu2}</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.MenuflexView}>
              <View style={styles.btnFlex}>
                <Pressable style={styles.button} android_ripple={{ color: '#2929CC' }}>
                  <Text style={styles.btnText}>{menu3}</Text>
                </Pressable>
              </View>
              <View style={styles.btnFlex}>
                <Pressable style={styles.button} android_ripple={{ color: '#2929CC' }}>
                  <Text style={styles.btnText}>{menu4}</Text>
                </Pressable>
              </View>
            </View>
          </Section>
          <Section title='Popular Choices'>
            <View style={styles.popularViews}>
              <Image style={styles.img} source={require('./assets/images/college1.jpg')} />
              <Text style={styles.collegeText}>{colleges.college1}</Text>
            </View>
            <View style={styles.popularViews}>
              <Image style={styles.img} source={require('./assets/images/college2.jpg')} />
              <Text style={styles.collegeText}>{colleges.college2}</Text>
            </View>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //Section and Header Stylings
  sectionContainer: {
    marginTop: 15,
    paddingHorizontal: 5,
    fontFamily: "RobotoSlab",
  },
  sectionTitle: {
    fontSize: 24,
    color: "#141466",
    textDecorationLine: "underline",
    width: "auto",
    fontWeight: '600',
    padding: 8,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  header: {
    width: '100%',
    height: 200,
    fontFamily: "RobotoSlab",
    backgroundColor: '#141466',
    justifyContent: 'center',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  AppTitle: {
    color: "#fff",
    fontSize: 28,
    fontFamily: "RobotoSlab",
    marginLeft: 10,
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: 'RobotoSlab',
    color: '#DADAE6',
    padding: 2,
    marginLeft: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '65%'
  },

  //Menu Content Section
  MenuflexView: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 15,
    marginLeft: 5,
  },
  btnFlex: {
    width: 180,
    fontSize: 30,
    marginLeft: 10,
    height: 'auto',
    padding: 5
  },

  button: {
    fontSize: 20,
    backgroundColor: '#141466',
    paddingVertical: 10,
    paddingHorizontal: 'auto',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 10
  },
  btnText: {
    color: '#DADAE6',
    fontSize: 18,
    fontWeight: '600'

  },
  //Search Input:
  searchView: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    width: 350,
    justifyContent: 'space-around',
    padding: 5,
    marginVertical: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#142466',
    borderRadius: 2,
    fontSize: 24,
    fontFamily: 'RobotoSlab',
    padding: 5,
    color: 'grey',
    width: '70%',
    height: 40,
  },
  searchBtn: {
    marginBottom: 10,
    backgroundColor: '#142466',
    marginStart: 3,
    border: '1px solid',
    borderRadius: 5,
    padding: 5,
  },

  //Popular Universities Section:
  popularViews: {
    marginHorizontal: 10,
    padding: 10,
    elevation: 10
  },
  img: {
    width: 240,
    height: 200,
    padding: 5,
    margin: 5,
    borderRadius: 5
  },
  collegeText: {
    marginLeft: 10,
    padding: 5,
    fontWeight: 'bold',
  },
});


export default App;
