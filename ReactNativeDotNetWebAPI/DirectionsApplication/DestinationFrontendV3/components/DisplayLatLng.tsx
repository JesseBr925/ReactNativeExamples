import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import MapView, {MAP_TYPES} from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class DisplayLatLng extends React.Component<any, any> {
  map: any;
  constructor(props: any) {
    super(props);

    this.state = {
      region: {
        latitude: props.latitude,
        longitude: props.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }

  onRegionChange(region: any) {
    this.setState({region});
  }

  jumpRandom() {
    this.setState({region: this.randomRegion()});
  }

  animateRandom() {
    this.map.animateToRegion(this.randomRegion());
  }

  animateRandomCoordinate() {
    this.map.animateCamera({center: this.randomCoordinate()});
  }

  animateToRandomBearing() {
    this.map.animateCamera({heading: this.getRandomFloat(-360, 360)});
  }

  animateToRandomViewingAngle() {
    this.map.animateCamera({pitch: this.getRandomFloat(0, 90)});
  }

  getRandomFloat(min: any, max: any) {
    return Math.random() * (max - min) + min;
  }

  randomCoordinate() {
    const region = this.state.region;
    return {
      latitude:
        region.latitude + (Math.random() - 0.5) * (region.latitudeDelta / 2),
      longitude:
        region.longitude + (Math.random() - 0.5) * (region.longitudeDelta / 2),
    };
  }

  randomRegion() {
    return {
      ...this.state.region,
      ...this.randomCoordinate(),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          ref={ref => {
            this.map = ref;
          }}
          mapType={MAP_TYPES.TERRAIN}
          style={{height:300, width:300, margin:10, padding:10}}
          initialRegion={this.state.region}
          onRegionChange={region => this.onRegionChange(region)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    flexDirection: 'column'
    },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex:1
  }
});

export default DisplayLatLng;