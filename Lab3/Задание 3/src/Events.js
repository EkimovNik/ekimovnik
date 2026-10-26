/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
   const btn = document.createElement('button');
   btn.textContent = 'Удали меня';
   btn.addEventListener('click',() =>{
      btn.remove();
   });
   document.body.append(btn);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
   const ul = document.createElement('ul');

   for(let item of arr){
      const li = document.createElement('li');
      li.textContent = item;
      li.addEventListener('mouseover',() =>{
         li.title = li.textContent;
      });
      ul.append(li);  
   }
   document.body.append(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
   const link = document.createElement('a');
   link.href = 'https://tensor.ru/';
   link.textContent = 'tensor';

   link.addEventListener('click',(event) =>{
      event.preventDefault();
      link.textContent += ' ' + link.href;
   },{once: true});
   document.body.append(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
   const ul = document.createElement('ul');
   const btn = document.createElement('button');
   btn.textContent = 'Добавить пункт';

   const createLi = () =>{
      const li = document.createElement('li');
      li.textContent = 'Пункт';
      li.addEventListener('click',() => {
         li.textContent += '!';
      });
      return li;
   }
   ul.append(createLi());
   btn.addEventListener('click',() => {
      ul.append(createLi());
   });
   document.body.append(ul,btn);

}
