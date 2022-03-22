const vazn = prompt('Vazningizni kiriting (kg siz)')
const boy = prompt('Boyingizni kiriting. Boy kiritayotganda masalan 1.5 yani 150 shu korinishda kiriting')

const bmi = Math.floor(vazn / boy ** 2)

if (bmi <= 18.5){
    alert('siz ozginsiz odamsiz')
} else if (bmi > 18.5 && bmi < 24.9){
    alert('siz normal odamsiz')
} else if (bmi > 24.9 && bmi < 25){
    alert('siz semizsiz odamsiz')
} else {
    alert('siz juda semizsiz odamsiz')
}

console.log(bmi)
