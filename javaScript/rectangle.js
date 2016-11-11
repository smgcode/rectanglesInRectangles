const INCHES_TO_MM = 25.4 / 1.0
const MM_TO_INCHES = 1.0 / INCHES_TO_MM

const THOUSANDTHS = 1000
const HUNDREDTHS = 100
const TENTHS = 10

module.exports = function () {
  console.log("rectangle.js")
  let $dimXmmVal = $(".js-x-mm")
  let $dimXinVal = $(".js-x-in-val")
  let $dimXin = $(".js-x-in")
  let $dimYmmVal = $(".js-y-mm")
  let $dimYinVal = $(".js-y-in-val")
  let $dimYin = $(".js-y-in")

  $dimXin.addClass("grey")
  $dimYin.addClass("grey")

  $dimXmmVal.on("input", function(){
    let valXmm = this.value
    let valXin = 0
    if(valXmm != undefined && valXmm.length && valXmm > 0){
      $dimXin.addClass("teal")
      $dimXin.removeClass("grey")
      valXin = valXmm * MM_TO_INCHES
    }
    else{
      $dimXin.removeClass("teal")
      $dimXin.addClass("grey")
      valXin = 0
    }
    valX = Math.round(valXin * THOUSANDTHS) / THOUSANDTHS
    $dimXinVal.html(valX)
  })

  $dimYmmVal.on("input", function(){
    let valYmm = this.value
    let valYin = 0
    if(valYmm != undefined && valYmm.length && valYmm > 0){
      $dimYin.addClass("teal")
      $dimYin.removeClass("grey")
      valYin = valYmm * MM_TO_INCHES
    }
    else{
      $dimYin.removeClass("teal")
      $dimYin.addClass("grey")
      valYin = 0
    }
    valY = Math.round(valYin * THOUSANDTHS) / THOUSANDTHS
    $dimYinVal.html(valY)
  })
}
