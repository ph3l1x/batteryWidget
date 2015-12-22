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
        	
   
            
            if(batLevel > 70) {
                centerImage.style.width = batLevel * 1.52 + 'px';
                rightImage.style.left = batLevel * 1.52 + 18 + 'px';
            } else if(batLevel > 50)  {
            	centerImage.style.width = batLevel * 1.75 + 5 + 'px';
                rightImage.style.left = batLevel * 1.75 + 23 + 'px';
            } else {
            	centerImage.style.width = batLevel * 1.75 + 'px';
                rightImage.style.left = batLevel * 1.75 + 18 + 'px';	
            }
            
            if (batLevel < 3) {
            	leftImage.style.left = '18px';
            	rightImage.style.display = 'none';
            	centerImage.style.display = 'none';
            } else {
            	leftImage.style.display = "block";
            	rightImage.style.display = "block";
            	centerImage.style.display = "block";
            }
            textSelector.textContent = batLevel + '%';// 50%
        	console.log(batLevel);
        }, false);