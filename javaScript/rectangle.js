const INCHES_TO_MM = 25.4 / 1.0
const MM_TO_INCHES = 1.0 / INCHES_TO_MM

const THOUSANDTHS = 1000
const HUNDREDTHS = 100
const TENTHS = 10

module.exports = function () {
  console.log("rectangle.js")

  onChangeDimension = function($input, $output, conversion, precision){
    $output.addClass("orange")
    $input.on("input", function(){
      let value = this.value
      let $outputVal = $output.find(".js-value")
      if(value != undefined && value.length && value > 0){
        $output.addClass("teal")
        $output.removeClass("orange")
        value *= conversion
      }
      else{
        $output.removeClass("teal")
        $output.addClass("orange")
        value = 0
      }
      $outputVal.html(Math.round(value * precision) / precision)
    })
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
  ;


  // Small Rectangles
  onChangeDimension($(".js-input-small-x"), $(".js-output-small-x"), MM_TO_INCHES, THOUSANDTHS)
  onChangeDimension($(".js-input-small-y"), $(".js-output-small-y"), MM_TO_INCHES, THOUSANDTHS)

  // Large Rectangle
  onChangeDimension($(".js-input-large-x"), $(".js-output-large-x"), INCHES_TO_MM, TENTHS)
  onChangeDimension($(".js-input-large-y"), $(".js-output-large-y"), INCHES_TO_MM, TENTHS)
}
