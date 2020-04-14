/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        {/* ==================================== search bar ================================== */}
        <View
          style={{
            marginHorizontal: 17,
            flexDirection: 'row',
            paddingTop: 15,
          }}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput
              placeholder="what do you want to eat "
              style={{
                borderWidth: 1,
                borderColor: '#e8e8e8',
                borderRadius: 25,
                height: 40,
                fontSize: 13,
                paddingLeft: 45,
                paddingRight: 20,
                backgroundColor: 'white',
                marginRight: 18,
              }}
            />
            <Image
              source={require('./icon/icon/search.png')}
              style={{position: 'absolute', top: 6, left: 12}}
            />
          </View>

          <View
            style={{
              width: 35,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('./icon/icon/promo.png')} />
          </View>
        </View>
        {/* ================================== akhir search bar =============================== */}

        {/* ====================================== go pay ====================================== */}
        <View style={{marginHorizontal: 17, marginTop: 8}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#2c5fb8',
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              padding: 14,
            }}>
            <Image source={require('./icon/icon/gopay.png')} />
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
              Rp. 50.000
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              paddingBottom: 14,
              backgroundColor: '#2f65bd',
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Image source={require('./icon/icon/pay.png')} />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  marginTop: 15,
                  color: 'white',
                }}>
                Pay
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Image source={require('./icon/icon/nearby.png')} />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  marginTop: 15,
                  color: 'white',
                }}>
                Nearby
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Image source={require('./icon/icon/topup.png')} />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  marginTop: 15,
                  color: 'white',
                }}>
                Top Up
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Image source={require('./icon/icon/more.png')} />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  marginTop: 15,
                  color: 'white',
                }}>
                More
              </Text>
            </View>
          </View>
        </View>
        {/* ====================================== akhir go pay ================================ */}

        {/* ====================================== main feature ================================ */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 18,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
              marginBottom: 18,
            }}>
            <View
              style={{
                width: `${100 / 4}%`,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/icon/go-ride.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-RIDE
              </Text>
            </View>
            <View
              style={{
                width: `${100 / 4}%`,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/icon/go-car.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-CARD
              </Text>
            </View>
            <View
              style={{
                width: `${100 / 4}%`,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/icon/go-bluebird.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-BLUEBIRD
              </Text>
            </View>
            <View
              style={{
                width: `${100 / 4}%`,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/icon/go-send.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-SEND
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
            }}>
            <View
              style={{
                width: `${100 / 4}%`,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/icon/go-deals.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-DEALS
              </Text>
            </View>
            <View
              style={{
                width: `${100 / 4}%`,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/icon/go-pulsa.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-PULSA
              </Text>
            </View>
            <View
              style={{
                width: `${100 / 4}%`,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/icon/go-food.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-FOOD
              </Text>
            </View>
            <View
              style={{
                width: `${100 / 4}%`,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/icon/go-more.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                MORE
              </Text>
            </View>
          </View>
        </View>
        {/* ====================================== akhir main feature ========================== */}

        {/* ====================================== line ======================================== */}
        <View
          style={{
            height: 17,
            backgroundColor: '#f2f2f4',
            marginTop: 20,
          }}
        />
        {/* ====================================== akhir line ================================== */}

        {/* ====================================== section news ================================ */}
        <View
          style={{
            paddingTop: 16,
            paddingHorizontal: 16,
          }}>
          <View style={{position: 'relative'}}>
            <Image
              source={require('./icon/image-dummy/dummy/sepak-bola.jpg')}
              style={{height: 170, width: '100%', borderRadius: 6}}
            />
            <View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'black',
                opacity: 0.2,
                borderRadius: 6,
              }}
            />
            <View
              style={{
                height: 15,
                width: 60,
                position: 'absolute',
                top: 16,
                left: 16,
              }}>
              <Image
                source={require('./icon/logo/logo/white.png')}
                style={{
                  width: undefined,
                  height: undefined,
                  resizeMode: 'contain',
                  flex: 1,
                }}
              />
            </View>
          </View>
          <View
            style={{
              paddingTop: 16,
              paddingBottom: 20,
              borderBottomColor: '#e8e9ed',
              borderBottomWidth: 1,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>
              GO-NEWS
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'normal',
                color: '#7a7a7a',
                marginBottom: 11,
              }}>
              Dimas Drajat selamatkan penalti, Timnas U-23 kalahkan Brunei
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#61a756',
                paddingHorizontal: 12,
                paddingVertical: 11,
                alignSelf: 'flex-end',
                borderRadius: 4,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                }}>
                READ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* ====================================== akhir section news ========================= */}

        {/* ====================================== Internal Information Section ========================= */}
        <View style={{padding: 16, paddingBottom: 0}}>
          <View
            style={{
              height: 15,
              width: 60,
              marginLeft: -4,
            }}>
            <Image
              source={require('./icon/logo/logo/gojek.png')}
              style={{
                width: undefined,
                height: undefined,
                resizeMode: 'contain',
                flex: 1,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: '#1c1c1c',
              marginTop: 15,
              marginBottom: 20,
            }}>
            Complete your profile
          </Text>
          <View style={{flexDirection: 'row', marginBottom: 16}}>
            <View>
              <Image
                source={require('./icon/image-dummy/dummy/facebook-connect.png')}
              />
            </View>
            <View style={{marginLeft: 16, flex: 1}}>
              <Text
                style={{fontSize: 15, fontWeight: 'bold', color: '#4a4a4a'}}>
                Connect with Facebook
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'normal',
                  color: '#4a4a4a',
                  width: '70%',
                }}>
                Login faster without verification code
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#61a756',
              paddingHorizontal: 12,
              paddingVertical: 11,
              alignSelf: 'flex-end',
              borderRadius: 4,
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
              }}>
              CONNECT
            </Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: '#e8e9ed',
              borderBottomWidth: 1,
              marginTop: 16,
            }}
          />
        </View>
        {/* ====================================== Akhir Internal Information Section ========================= */}

        {/* ====================================== go food benner section ================================ */}
        <View style={{padding: 16}}>
          <View
            style={{
              position: 'relative',
            }}>
            <Image
              source={require('./icon/image-dummy/dummy/food-banner.jpg')}
              style={{height: 170, width: '100%', borderRadius: 6}}
            />
            <View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'black',
                opacity: 0.15,
                borderRadius: 6,
              }}
            />
            <View
              style={{
                height: 15,
                width: 60,
                position: 'absolute',
                top: 16,
                left: 16,
              }}>
              <Image
                source={require('./icon/logo/logo/white.png')}
                style={{
                  width: undefined,
                  height: undefined,
                  resizeMode: 'contain',
                  flex: 1,
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 16,
                paddingBottom: 16,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: 8,
                  }}>
                  Free GO-FOOD voucher
                </Text>
                <Text style={{fontSize: 12, fontWeight: '400', color: 'white'}}>
                  Quick, before they run out!
                </Text>
              </View>
              <View style={{flex: 1, paddingLeft: 12}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#61a756',
                    paddingHorizontal: 12,
                    paddingVertical: 11,
                    alignSelf: 'stretch',
                    borderRadius: 4,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    GET VOUCHER
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#e8e9ed',
              borderBottomWidth: 1,
              marginTop: 16,
            }}
          />
        </View>
        {/* ====================================== akhir go food benner section ========================= */}

        {/* ====================================== Nearby Go-Food ======================================= */}
        <View>
          <View
            style={{
              height: 15,
              width: 60,
              marginLeft: 16,
            }}>
            <Image
              source={require('./icon/logo/logo/go-food.png')}
              style={{
                width: undefined,
                height: undefined,
                resizeMode: 'contain',
                flex: 1,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 16,
              paddingHorizontal: 16,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1c1c1c'}}>
              Nearby Restaurant
            </Text>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61a756'}}>
              See All
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            style={{flexDirection: 'row', paddingLeft: 16}}>
            <View style={{marginRight: 16}}>
              <View
                style={{
                  width: 150,
                  height: 150,
                  backgroundColor: 'pink',
                  borderRadius: 10,
                }}>
                <Image
                  source={require('./icon/image-dummy/dummy/go-food-pak-boss.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    flex: 1,
                    borderRadius: 10,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1c1c1c',
                  marginTop: 12,
                }}>
                Ayam Bakar Pak Boss
              </Text>
            </View>
            <View style={{marginRight: 16}}>
              <View
                style={{
                  width: 150,
                  height: 150,
                  backgroundColor: 'pink',
                  borderRadius: 10,
                }}>
                <Image
                  source={require('./icon/image-dummy/dummy/go-food-kfc.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    flex: 1,
                    borderRadius: 10,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1c1c1c',
                  marginTop: 12,
                }}>
                KFC Aeon Mall
              </Text>
            </View>
            <View style={{marginRight: 16}}>
              <View
                style={{
                  width: 150,
                  height: 150,
                  backgroundColor: 'pink',
                  borderRadius: 10,
                }}>
                <Image
                  source={require('./icon/image-dummy/dummy/go-food-gm.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    flex: 1,
                    borderRadius: 10,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1c1c1c',
                  marginTop: 12,
                }}>
                Bakmi GM Aeon
              </Text>
            </View>
            <View style={{marginRight: 16}}>
              <View
                style={{
                  width: 150,
                  height: 150,
                  backgroundColor: 'pink',
                  borderRadius: 10,
                }}>
                <Image
                  source={require('./icon/image-dummy/dummy/go-food-orins.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    flex: 1,
                    borderRadius: 10,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1c1c1c',
                  marginTop: 12,
                }}>
                Martabak Orins
              </Text>
            </View>
            <View style={{marginRight: 16}}>
              <View
                style={{
                  width: 150,
                  height: 150,
                  backgroundColor: 'pink',
                  borderRadius: 10,
                }}>
                <Image
                  source={require('./icon/image-dummy/dummy/go-food-banka.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    flex: 1,
                    borderRadius: 10,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1c1c1c',
                  marginTop: 12,
                }}>
                Martabak Bangka
              </Text>
            </View>
          </ScrollView>
          <View
            style={{
              borderBottomColor: '#e8e9ed',
              borderBottomWidth: 1,
              marginTop: 16,
              marginHorizontal: 16,
              marginBottom: 20,
            }}
          />
        </View>
        {/* ====================================== akhir Nearby Go-Food ================================= */}
      </ScrollView>
      {/* ====================================== navbar ====================================== */}
      <View
        style={{
          height: 54,
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./icon/icon/home-active.png')}
          />
          <Text
            style={{
              fontSize: 10,
              marginTop: 4,
              color: '#43ab4a',
            }}>
            Home
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./icon/icon/order.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Orders
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./icon/icon/help.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Help
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./icon/icon/inbox.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Inbox
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./icon/icon/account.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Account
          </Text>
        </View>
      </View>
      {/* ====================================== akhir navbar ================================ */}
    </>
  );
};

export default App;
