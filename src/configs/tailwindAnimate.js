'use strict'
const keyFrames = {
  fadeIn: {
    '0%': { opacity: 0 },
    '100%': { opacity: 100 },
  },
  fadeOut: {
    '100%': { opacity: 100 },
    '0': { opacity: 0 },
  },
}

const animates = {
  fadeIn: 'fadeIn 1s ease-in',
}

module.exports ={ keyFrames, animates }
