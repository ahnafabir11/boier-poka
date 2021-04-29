import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import darkBg from './images/background-dark.jpg';
import lightBg from './images/background-light.jpg';
import facebookIcon from './images/Facebook-logo.png';
import instagramIcon from './images/instagram-logo.png';
import youtubeIcon from './images/youtube-logo.png';
import twitterIcon from './images/twitter-logo.png';
import marinImg from './images/marin-image.jpg';
import roarpImg from './images/roarp-image.jpg';
import promyImg from './images/promy-image.jpg';

export default function App() {
  const [isBgDark, setIsBgDark] = useState(true);
  const [showMembers, setShowMembers] = useState(false);

  return (
    <ImageBackground source={isBgDark ? darkBg : lightBg} style={styles.container}>
        <Text 
          style={styles.logo}
          onPress={() => setIsBgDark(!isBgDark)}
        >
          বইয়ের পোকা
        </Text>

        <View style={!showMembers && {display: 'none'}}>
          <View style={styles.allMembersContainer}>
            <View style={styles.singleMemberContainer}>
              <Image source={marinImg} style={styles.memberImg} />
              <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                <Text style={styles.memberName}>Marin Sophia</Text>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/marin43')}>
                    <Image
                      source={facebookIcon}
                      style={{width: 40, height: 40}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/marin.sophia/')}>
                    <Image
                      source={instagramIcon}
                      style={{ width: 40, height: 40 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          <View style={styles.roarpContainer}>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
              <Text style={styles.memberName}>Rafiqur Rahman</Text>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/ruqifar.namhar/')}>
                  <Image
                    source={facebookIcon}
                    style={{ width: 40, height: 40 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/rafiqurrahmanpriyam/')}>
                  <Image
                    source={instagramIcon}
                    style={{ width: 40, height: 40 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Image source={roarpImg} style={styles.roarpImgCustom} />
          </View>
          <View style={styles.singleMemberContainer}>
            <Image source={promyImg} style={styles.memberImg} />
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
              <Text style={styles.memberName}>Sugofta Promy</Text>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/sugofta.promy/')}>
                  <Image
                    source={facebookIcon}
                    style={{ width: 40, height: 40 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/sugoftapromy/')}>
                  <Image
                    source={instagramIcon}
                    style={{ width: 40, height: 40 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <View>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/BoierPokaFB/')}>
              <Image
                source={facebookIcon}
                style={styles.icons}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/teamboierpoka/')}>
              <Image
                source={instagramIcon}
                style={styles.icons}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/channel/UCKM3nsUq8i4LbDV6q8iemvA')}>
              <Image
                source={youtubeIcon}
                style={styles.icons}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/TeamBoierPoka')}>
              <Image
                source={twitterIcon}
                style={styles.icons}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.meetBtn} onPress={() =>{ setIsBgDark(!isBgDark); setShowMembers(!showMembers);}}>
            meet us
          </Text>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  logo: {
    width: 186,
    color: '#1ED760',
    fontSize: 30,
    borderWidth: 2,
    borderColor: 'white',
    borderStyle: 'dotted',
    borderRadius: 1,
    marginTop: 32, 
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 5,
    paddingBottom: 4,
    textAlign: 'center',
  },
  meetBtn: {
    width: 110,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 25,
    borderWidth: 2,
    borderColor: '#D71672',
    borderStyle: 'dotted',
    borderRadius: 1,
    paddingTop: 4,
    paddingBottom: 4,
    textAlign: 'center',
  }, 
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 10,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  icons: {
    height: 50, 
    width: 50,
  }, 
  allMembersContainer: {
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  singleMemberContainer: {
    backgroundColor: '#00000077',
    padding: 10, 
    width: '100%',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10
  }, 
  roarpContainer: {
    backgroundColor: '#00000077',
    padding: 10,
    width: '100%',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  memberName: {
    color: 'white',
    fontSize: 24,
  }, 
  memberImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  }, 
  roarpImgCustom: {
    width: 100,
    height: 100,
    borderRadius: 10,
  }
})