console.log("shimmy")

$(document).ready(function () {
  startTime()
  $("#startMenu").hide()

  $("#start").click(function () {
    $("#startMenu").toggle()
    $(this).toggleClass("startClick")
  })

  $("#desktop").click(function () {
    console.log("click")
    // $("#startMenu").toggle()
    // $("#start").removeClass("startClick").addClass("startRest")
  })

  $(".desktopIcon").dblclick(function () {
    alert($(this).text())
  })
})

function startTime() {
  var today = new Date()
  var h = today.getHours()
  var m = today.getMinutes()
  var s = today.getSeconds()
  // add a zero in front of numbers<10
  m = checkTime(m)
  s = checkTime(s)
  var hd = h
  $("#clock").html(
    (hd = 0 ? "12" : hd > 12 ? hd - 12 : hd) +
      ":" +
      m +
      " " +
      (h < 12 ? "AM" : "PM")
  )
  t = setTimeout(function () {
    startTime()
  }, 500)
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  }
  return i
}
