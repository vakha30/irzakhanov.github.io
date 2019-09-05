
(function ($) {
    $(function () {
        price = 1800; // Стоимость сваи
        priceSetting = 2000; // Стоимость с установкой


        calculate();
        jQuery('#calculator input').keyup(function () {
            this.value = this.value.replace(/[^0-9\.,]/g, '');
            this.value = this.value.replace(/[,]/, '.');
        });
        jQuery('#calculator input, #calculator select').change(function () {
            calculate();
        });
        jQuery('#calculator input').keyup(function () {
            calculate();
        });
        function calculate() {
            let widthInput = document.querySelector('#width-input').value;
            let lengthInput = document.querySelector('#length-input').value;
            let countInput = document.querySelector('#count-input');
            let totalSum = document.querySelector('#total-sum');
            let hiddenInput = document.querySelector('#hidden-input');
            totalSvai = ((Math.ceil(widthInput / 3)) + 1) * ((Math.ceil(lengthInput / 3)) + 1)
            if ((widthInput === '' || lengthInput === '') || (widthInput === '0' && lengthInput === '0')) {
                totalSvai = 0;
            }

            let check = document.querySelector('#check');
            if (check.checked) {
                priceShow = priceSetting;
            } else {
                priceShow = price;
            }
            countInput.value = totalSvai;

            totalPrice = totalSvai * priceShow;

            hiddenInput.value = totalPrice;

            totalSum.innerHTML = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' руб.';
        }

    });
})(jQuery);
;