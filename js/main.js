       var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;


        window.addEventListener('load', function (e) {
            document.querySelector('.battery-text').textContent = battery.level;
        }, false);

        battery.addEventListener('levelchange', function () {
        	var batLevel = Math.floor(battery.level * 100);
            var textSelector = document.querySelector('.battery-text');
            var leftImage = document.querySelector('.battery-image-left');
            var rightImage = document.querySelector('.battery-image-right');
            var centerImage = document.querySelector('.battery-image-center');
        	
   
            centerImage.style.width = 152 * (batLevel/100) + 'px';
            rightImage.style.left = 152 * (batLevel/100) + 18 + 'px';
       
            if (batLevel < 3) {
            	rightImage.style.display = 'none';
            	centerImage.style.display = 'none';
            } else {
            	rightImage.style.display = "block";
            	centerImage.style.display = "block";
            }
            textSelector.textContent = batLevel + '%';// 50%
        }, false);
