function start() {
        var carOne = 0;
        var vertical = false;
        var finish = true;
        document.addEventListener('keydown', (event) => {
            var name = event.key;
            if (name == "ArrowRight") {
                let car1 = document.querySelector(".carImg");
                car1.style.transform = "translateX(" + carOne + "px)";
                carOne += 10;
                if (carOne == 1400 && finish == true) {
                    var modal = document.querySelector(".modal");
                    modal.style.display = "block";
                    var text = document.querySelector(".text");
                    text.textContent = "Siz yutdingiz!!!"
                    finish = false;
                    return;
                }
            } else if (name == "ArrowLeft") {
                let car1 = document.querySelector(".carImg");
                car1.style.transform = "translateX(" + carOne + "px)";
                carOne -= 10;
            } else if (name == "ArrowUp" && vertical == true) {
                let car1 = document.querySelector(".carImg");
                car1.style.top = "65%";
                vertical = false;
            } else if (name == "ArrowDown" && vertical == false) {
                let car1 = document.querySelector(".carImg");
                car1.style.top = "70%";
                vertical = true;
            }
        }, true);

        let car2 = document.querySelector(".carImg2");
        car2.style.transform = "translateX(1400px)";
        function sayHi() {
            if(finish){
                var modal = document.querySelector(".modal");
                modal.style.display = "block";
                var text = document.querySelector(".text");
                text.textContent = "Siz yutqazdingiz";
                finish = false;
                return;
            }
        }
        setTimeout(sayHi, 10000);

}





