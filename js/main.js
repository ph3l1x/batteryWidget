       var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;

        window.addEventListener('load', function (e) {
            document.querySelector('#charging').textContent = battery.charging ? 'charging' : 'not charging';
            document.querySelector('#chargingTime').textContent = battery.chargingTime / 60;
            document.querySelector('#dischargingTime').textContent = battery.dischargingTime / 60;
            document.querySelector('#level').textContent = battery.level;
        }, false);

        battery.addEventListener('chargingchange', function () {
            // battery.charging : true or false
            document.querySelector('#charging').textContent = battery.charging ? 'charging' : 'not charging';
        }, false);

        battery.addEventListener('chargingtimechange', function () {
            // battery.chargingTime : second(ex: 3600) or Infinity
            document.querySelector('#chargingTime').textContent = battery.chargingTime;// second(ex: 3600) or Infinity
        }, false);

        battery.addEventListener('dischargingtimechange', function () {
            // battery.dischargingTime : second(ex: 3600) or Infinity
            document.querySelector('#dischargingTime').textContent = battery.dischargingTime;
        }, false);

        battery.addEventListener('levelchange', function () {
            // battery.level : between 0 and 1 (ex: 0.50)
            document.querySelector('#level').textContent = Math.floor(battery.level * 100) + '%';// 50%

            if (battery.level < 0.05) {
                alert('battery level below 5%!');
            }
        }, false);