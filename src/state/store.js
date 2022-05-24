
let store = {
    question : [
        {
            questionNumber: 'Вопрос: 1',
            question: 'Сколько спутников у Марса?',
            var1: '13',
            var2: '2',
            var3: '50',
            var4: '7',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            value4: 'no',
            path: '/1',
            link: '/2',
            next: 'Дальше',
            q: 'q1'
        },
        {
            questionNumber: 'Вопрос: 2',
            question: 'Самый большой вулкан Солнечной системы называется «Гора Олимп». Где он находится?',
            var1: 'Юпитер',
            var2: 'Земля',
            var3: 'Венера',
            var4: 'Марс',
            value1: 'no',
            value2: 'no',
            value3: 'no',
            value4: 'yes',
            path: '/2',
            link: '/3',
            next: 'Дальше',
            q: 'q2'
        },
        {
            questionNumber: 'Вопрос: 3',
            question: 'Какая планета ближе всех расположена к Солнцу?',
            var1: 'Земля',
            var2: 'Венера',
            var3: 'Меркурий',
            var4: 'Нептун',
            value1: 'no',
            value2: 'no',
            value3: 'yes',
            value4: 'no',
            path: '/3',
            link: '/4',
            next: 'Дальше',
            q: 'q3'
        },
        {
            questionNumber: 'Вопрос: 4',
            question: 'Из чего в основном состоит Солнце?',
            var1: 'жидкая лава',
            var2: 'расплавленный метал',
            var3: 'газ',
            var4: 'камень',
            value1: 'no',
            value2: 'no',
            value3: 'yes',
            value4: 'no',
            path: '/4',
            link: '/5',
            next: 'Дальше',
            q: 'q4'
        },
        {
            questionNumber: 'Вопрос: 5',
            question: 'Из чего в основном состоят кометы?',
            var1: 'ядовитая жидкость',
            var2: 'лед и пыль',
            var3: 'ржавый металл',
            var4: 'расплавленный камень',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            value4: 'no',
            path: '/5',
            link: '/6',
            next: 'Дальше',
            q: 'q5'
        },
        {
            questionNumber: 'Вопрос: 6',
            question: 'К какой планете принадлежат спутники Оберон и Титания?',
            var1: 'Юпитер',
            var2: 'Уран',
            var3: 'Венера',
            var4: 'Земля',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            value4: 'no',
            path: '/6',
            link: '/7',
            next: 'Дальше',
            q: 'q6'
        },
        {
            questionNumber: 'Вопрос: 7',
            question: 'Какой из вариантов лучше всего описывает атмосферу, окружающую Венеру?',
            var1: 'яркая и солнечная',
            var2: 'холодная и снежная',
            var3: 'холодная и влажная',
            var4: 'горячая и ядовитая',
            value1: 'no',
            value2: 'no',
            value3: 'no',
            value4: 'yes',
            path: '/7',
            link: '/8',
            next: 'Дальше',
            q: 'q7'
        },
        {
            questionNumber: 'Вопрос: 8',
            question: 'Где находится пояс астероидов?',
            var1: 'между Юпитером и Сатурном',
            var2: 'Земля и Венерой',
            var3: 'Марсом и Юпитером',
            var4: 'Землей и Марсом',
            value1: 'no',
            value2: 'no',
            value3: 'yes',
            value4: 'no',
            path: '/8',
            link: '/9',
            next: 'Дальше',
            q: 'q8'
        },
        {
            questionNumber: 'Вопрос: 9',
            question: 'Какая из этих планет самая маленькая?',
            var1: 'Юпитер',
            var2: 'Уран',
            var3: 'Земля',
            var4: 'Меркурий',
            value1: 'no',
            value2: 'no',
            value3: 'no',
            value4: 'yes',
            path: '/9',
            link: '/10',
            next: 'Дальше',
            q: 'q9'
        },
        {
            questionNumber: 'Вопрос: 10',
            question: 'Какие две планеты вращаются в обратном направлении от остальных?',
            var1: 'Уран и Венера',
            var2: 'Венера и Плутон',
            var3: 'Меркурий и Юпитер',
            var4: 'Земля и Нептун',
            value1: 'yes',
            value2: 'no',
            value3: 'no',
            value4: 'no',
            path: '/result',
            next: 'Закончить',
            q: 'q10'
        },
    ]
}

export default store