const INCHES_TO_MM = 25.4 / 1.0
const MM_TO_INCHES = 1.0 / INCHES_TO_MM

const THOUSANDTHS = 1000
const HUNDREDTHS = 100
const TENTHS = 10

// TODO: create as a rectangle class
//   This class will contain
//   ratio, width, height

module.exports = function () {
  console.log("rectangle.js")

  onChangeDimension = function($input, $output, conversion, precision){
    $output.addClass("orange")
    $input.on("input", function(){
      let value = this.value
      if(value != undefined && value.length && value > 0){
        value *= conversion
        value = Math.round(value * precision) / precision
        _setOutput($output, value)
      }
      else{
        _resetOutput($output, 0)
      }
    })
  }

  _setOutput = function($output, value){
    let $outputVal = $output.find(".js-value")
    $output.addClass("teal")
    $output.removeClass("orange")
    $outputVal.html(value)
  }

  _resetOutput = function($output, value=0){
    let $outputVal = $output.find(".js-value")
    $output.removeClass("teal")
    $output.addClass("orange")
    $outputVal.html(value)
  }

  onReset = function(outputs){
    $("button[type='reset']").on("click", function(){
      for (let output of outputs)
        _resetOutput(output)
    })
  }

  onSubmit = function(){
    $("button[type='submit']").on("click", function(event){
      event.preventDefault()
      let x = $(".js-output-large-x").find(".js-value").html() * 1
      let y = $(".js-output-large-y").find(".js-value").html() * 1
      let el = $(".js-render-large")
      height = _calculateHeight(el, x, y)
      el.height(height)
      console.log("submitting form")
    })
  }

  // setting the width of the large rectangle box as the anchor
  // calculate the height
  _calculateHeight = function($el, x, y){
    width = $el.width()
    if (y < x)
      ratio = y / x
    else
      ratio = x / y
    return width * ratio
  }


  $('.js-form-small')
    .form({
      on: 'blur',
      fields: {
        integer: {
          identifier  : 'integer',
          rules: [
            {
              type   : 'integer[1..]',
              prompt : 'Please enter an integer value'
            }
          ]
        }
      }
    })

  $outSmallX = $(".js-output-small-x")
  $outSmallY = $(".js-output-small-y")
  $outLargeX = $(".js-output-large-x")
  $outLargeY = $(".js-output-large-y")

  outputs = [$outSmallX, $outSmallY, $outLargeX, $outLargeY]

  onReset(outputs)
  onSubmit()

  // Small Rectangles
  onChangeDimension($(".js-input-small-x"), $outSmallX, MM_TO_INCHES, THOUSANDTHS)
  onChangeDimension($(".js-input-small-y"), $outSmallY, MM_TO_INCHES, THOUSANDTHS)

  // Large Rectangle
  onChangeDimension($(".js-input-large-x"), $outLargeX, INCHES_TO_MM, TENTHS)
  onChangeDimension($(".js-input-large-y"), $outLargeY, INCHES_TO_MM, TENTHS)
}
