"use strict";
let money, 
		income = "Фриланс",
		addExpenses,
		deposit = true,
		mission = 333333,
		period,
		expensesAmount,
		sum = 0,
		sum1 = 0;

let start = function(){
	do{
		money = prompt("Ваш месячный доход?");
		//console.log(money);
	} while (isNaN(money) || money == "" || money == null);
	return start;
 }
start();


let appData = {
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	expenses: {},
	
 getBudget: function(){
  	var accumulatedMonth = money;
  	appData.budgetMonth = (+money) - sum;
		appData.budgetDay = (Math.floor(appData.budgetMonth/30));
	return("Накопления за месяц: " + appData.budgetMonth + " Бюджет за день: " + appData.budgetDay);
},

	getTargetMonth: function(){
	let accumulatedMonth2 = (+money) - (sum);
	if (accumulatedMonth2 >= 0){
		//console.log("Цель будет достигнута");
	} else {
		console.log("Цель не будет достигнута");
	}
	return("За какой период будет достигнута цель: " + (Math.round(mission / (+accumulatedMonth2))) + " месяцев");

},

getStatusIncome: function(){
	if (appData.budgetDay >= 800) {
		return("Высокий уровень дохода");
	} else if (appData.budgetDay > 300 && appData.budgetDay < 800 ) {
		return("Средний уровень дохода");
	} else if (appData.budgetDay >= 0 && appData.budgetDay <= 300) {
		return("Низкий уровень дохода"); 
	} else if (appData.budgetDay < 0){
		return("Что-то пошло не так")
	}
},

asking: function(){
	let question, answer;
	while(isNaN(answer) || answer == "" || answer == null){
	for(let i = 0; i < 2; i++){
	  question = prompt("Какие обязательные ежемесячные расходы у вас есть?"),
		answer = +prompt("Во сколько это обойдется?");
			//console.log(question + " : " + answer);
			appData.expenses[question] = answer;
	};
}
},

getExpensesMonth: function(){
	for(let key in appData.expenses){
		sum1 += appData.expenses[key];
	}
	return sum1;
}
}
console.log(appData);	

//console.log(appData.getBudget());
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
appData.asking();
console.log("Сумма ежемесячных расходов: " + appData.getExpensesMonth() + " евро");

appData.budget = +money;
//console.log("Ваш месячный доход: " + appData.budget);
appData.budgetMonth = (+money) - sum;
appData.budgetDay = (Math.floor(appData.budgetMonth/30));
appData.expensesMonth = appData.getExpensesMonth();
//appData.expenses = appData.asking();

for (let key in appData){
	console.log("Наша программа включает в себя:  " + key + " " + appData);
}
