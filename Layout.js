'use strict';

import {PixelRatio,Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width
export default {
    pixel: 1 / PixelRatio.get(),
    tabBarHeight: 49,
    tabBarWidth: screenWidth,
};
