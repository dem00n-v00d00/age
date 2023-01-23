var age = prompt('введите свой возраст')

if (0 < age && age < 18) {
    age = 'Вы еще молоды,Вам нужно учиться'
}

else if (18 < age && age < 50) { age = 'вам нужно работать' }

else if (50 < age && age < 59) {age='вам скоро на пенсию' }

else if (59 < age && age < 100) {age='вы пенсионер' }

else {
    age='что-то пошло не так'
}

alert(age)