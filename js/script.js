'use strict';
	var gen = {
		title: "Тест по программированию",
		questions: ["Вопрос №1","Вопрос №2","Вопрос №3"],
		answers : [["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
		["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
		["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3",]],

    gen_title: function(title) {
			var div = document.createElement('h1');
				div.innerHTML = title;
				document.body.appendChild(div);
	},

		gen_question: function check() {
			var q = this.questions.length;
			var answ, ul, li, p, textElem ;
			for (var i = 0; i < q; i++) {
				p = document.createElement('p');
				p.innerHTML = this.questions[i];
				document.body.appendChild(p);
				ul = document.createElement('ul');
				p.appendChild(ul);

				answ = this.answers[i].length;

				for (var j = 0; j < answ; j++) {

						li = document.createElement('li');
						ul.appendChild(li);
						textElem = document.createTextNode(this.answers[i][j]);
						li.appendChild(textElem);

				}
			}
			var btn = document.createElement('BUTTON');
			var t = document.createTextNode("Проверить результат");
			btn.appendChild(t);
			document.body.appendChild(btn);
		}
}
  localStorage.setItem('quest', JSON.stringify(gen));
	var test = localStorage.getItem('quest');
	console.log(test);
  gen.gen_title("Тест по программированию");
	gen.gen_question();
