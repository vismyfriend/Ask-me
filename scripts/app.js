const askMe = document.querySelector(".ask")
const check = document.querySelector(".check")
const next = document.querySelector(".next")
const card = document.querySelector(".card")
const cardValue = document.querySelector(".card__value")
const cardHint = document.querySelector(".card__hint")
const manual1 = document.querySelector(".manual-1")
const manual2 = document.querySelector(".manual-2")
const manual3 = document.querySelector(".manual-3")
const hint = document.querySelector(".notebook__hint")
let randomNumber = null
let min = null
let max = null
let value = null
function getAnswers() {
    card.classList.remove("open")
    showCheckManual()
    min = answers[0].id
    max = min + answers.length
    setRandomNumber()
    console.log(randomNumber)
    value = answers.find(n => n.id === randomNumber)
    cardHint.classList.remove("show")
    // ищет объект в массиве и сравнивает с id
    setTimeout(function () { card.classList.add("open") }, 0);
    card.style.border = "solid 4px rgb(235, 70, 70)";
    cardValue.textContent = value.eng
    cardHint.textContent = value.ru
}
function setRandomNumber() {
    randomNumber = Math.floor(Math.random() * (max - min) + min)

}
function showQuestionsManual() {

    manual1.textContent = "Прочитай сперва молча, про себя, не вслух. Постарайся запомнить вопрос."
    manual2.textContent = "Если хочется убедиться, что поняли вопрос, нажмите кнопку 'перевод'"
    manual3.textContent = "Набери воздуха в легкие и уверенно, с вопросительной интоннацией задай этот вопрос вслух. Не читай по словам, а произнести всё естественно и целиком."
    hint.textContent = "Не торопись, без спешки. Тренируйся повторять вопросы четко и внятно. Repetition is a key to learning ;)" 
    // hint.textContent = "Можно задать дополнительные вопросы, если хочется: When... Why... Where... What... How often... Who... How?"
    // manual1.textContent = "Переведите вслух. Нажмите на карточку или “CHECK”, чтобы проверить."
    // manual2.textContent = "Нажмите на “ASK ME”, чтобы спросили вас и вы составили ответ."
    // manual3.textContent = "Нажмите на карточку или на кнопку “NEXT” чтобы задать вопрос."
    // hint.textContent = "Запиши в тетрадь, чтобы увеличить свои шансы запомнить (записывая мы развиваем и тренируем память.)"
}
function showCheckManual() {
    manual1.textContent = "Тренируй разные варианты, когда хочешь переспросить"
    manual2.textContent = "Эти фразы позволяют точнее услышать вопрос"
    manual3.textContent = "А еще благодаря им появляется время подумать над ответом"
    hint.textContent = "Если хочется можно добавить деталей в свйой ответ: When / How often / Who / Where"
}




// глагол на первом месте
function getquestions() {
    min = questions[0].id
    max = min + questions.length
    card.classList.remove("open")
    setRandomNumber()
    setTimeout(function () { card.classList.add("open") }, 0);
    value = questions.find(n => n.id === randomNumber)
    cardHint.classList.remove("show")
    // обновляет blur на каждой новой карточке
    cardValue.textContent = value.eng
    cardHint.textContent = value.ru
    card.style.border = "solid 4px rgb(5, 184, 5)";
    showQuestionsManual()
}




check.addEventListener("click", () => {
    cardHint.classList.toggle("show")
})

askMe.addEventListener("click", getAnswers)

next.addEventListener("click", getquestions)
card.addEventListener("click", () => {
    card.classList.contains("open") ? null : getquestions()
})