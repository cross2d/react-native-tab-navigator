'use strict';

import React from 'react';
import {
    Animated,
    Platform,
    StyleSheet,
    View,
    Image,
} from 'react-native';

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

import Layout from './Layout';

export default class TabBar extends React.Component {
    static propTypes = {
        ...Animated.View.propTypes,
        shadowStyle: View.propTypes.style,
    };

    render() {
        return (
            <Animated.View {...this.props} style={[styles.container, this.props.style]}>
                <Svg style={styles.bg} width={Layout.tabBarWidth} height={Layout.tabBarHeight}>
                    <Defs>
                        <LinearGradient id="grad" x1="0" y1="0" x2="0" y2={Layout.tabBarHeight}>
                            <Stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
                            <Stop offset="1" stopColor="#F2F2F2" stopOpacity="1" />
                        </LinearGradient>
                    </Defs>
                    <Rect  x="0"  y="0" width="100%" height="100%" fill="url(#grad)" />
                    <Line x1="0" y1="0" x2="100%" y2="0" stroke="#DDDDDD" />
                </Svg>
                {this.props.children}
                <View style={[styles.shadow, this.props.shadowStyle]}/>
            </Animated.View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: Layout.tabBarHeight,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    bg: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        // borderWidth:1,
        // backgroundColor:'red'
    },
    shadow: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        height: Layout.pixel,
        position: 'absolute',
        left: 0,
        right: 0,
        top: Platform.OS === 'android' ? 0 : -Layout.pixel,
    },
});
