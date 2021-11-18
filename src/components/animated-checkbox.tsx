import React, { useEffect, memo } from 'react'
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedProps,
  withTiming,
  interpolateColor
} from 'react-native-reanimated'
import Svg, { Path, Defs, ClipPath, G } from 'react-native-svg'

const MARGIN = 10
const vWidth = 64 + MARGIN
const vHeight = 64 + MARGIN
const checkMarkPath = 'M8 32.5C18 39 26 47 26 47C26 47 33 28 63.5 4'
const outlineBoxPath =
  'M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z'

const AnimartedPath = Animated.createAnimatedComponent(Path)

interface Props {
  checked?: boolean
}

const AnimatedCheckbox = (props: Props) => {
  const { checked } = props
  const checkMarkColor = '#000000'
  const highLightColor = '#ff0000'
  const boxOutlineColor = ' #000000'
  return (
    <Svg
      viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(' ')}
    >
      <Path d={outlineBoxPath} stroke="black" />
      <Path d={checkMarkPath} stroke="black" />
    </Svg>
  )
}

export default AnimatedCheckbox
