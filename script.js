 function digitalclock() {
      const hour = document.getElementById("hour");
      const minute = document.getElementById("min");
      const second = document.getElementById("sec");
      const time = document.getElementById("time");
      const date = new Date();
      time.innerText = date.toLocaleDateString();


      hour.innerText = date.getHours();
      minute.innerText = date.getMinutes();
      second.innerText = date.getSeconds();
    }

    setInterval(digitalclock, 1000);