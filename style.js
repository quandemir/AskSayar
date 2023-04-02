var startDate = new Date("December 6, 2022");
    var currentDate = new Date();
    var diffInMilliseconds = currentDate - startDate;
    var diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    //document.write("Geçen gün sayısı: " + diffInDays + " gün");
    document.getElementById("result1").innerHTML = "Geçen gün sayısı: " + diffInDays ;

    var startDate = new Date("December 6, 2022");
    var currentDate = new Date();
    var diffInMilliseconds = currentDate - startDate;
    var diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    var diffInWeeks = Math.floor(diffInDays / 7);
    var weekdays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var startWeekday = weekdays[startDate.getDay()];
    var weeksSinceStart = 0;

    for (var i = 0; i <= diffInDays; i++) {
      var day = new Date(startDate.getTime() + i * (1000 * 60 * 60 * 24));
      if (day.getDay() === 2) {
        weeksSinceStart++;
      }
    }

    document.getElementById("result2").innerHTML = "Geçen salı sayısı: "+ (weeksSinceStart-1) ;
