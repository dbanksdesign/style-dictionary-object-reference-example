const body = {
  "fontSize": {
    "value": "{size.font.body.value}"
  },
  "lineHeight": {
    "value": "{size.lineHeight.body.value}"
  },
  "font": {
    "value": "{font.family.body.value}"
  },
  "letterSpacing": {
    "value": "{letterspacing.body.value}"
  },
  "textTransform": {
    "value": "none"
  }
}

module.exports = {
  textStyle: {
    body: body,
    textInput: {
      label: body
    }
  }
}