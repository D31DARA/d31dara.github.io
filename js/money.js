var earn_month = 0; // Начальное значение дохода в месяц
var delay = 100; // Задержка
var cur_earn = 0;
setInterval("startEarn()", delay);
function startEarn() {
	var earn_second = earn_month / (30 * 24 * 3600);
	cur_earn += earn_second * delay / 1000;
	document.getElementById('earn').innerHTML = cur_earn.toFixed(5);
}
function updateEarn() {
	earn_month = document.formearn.earn_month.value;
	cur_earn = 0;
}