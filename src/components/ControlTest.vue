<!--<template>
    <div class="testy">
        <div class="quiz">

        </div>
        <p class="hidden pl-6 pt-6 text-xl">Верных ответов:</p>
    </div>
</template> -->

<template>
  <div>
    <!-- <iframe width="420" height="315" :src="posts[0].video"> </iframe> -->
    <div>
      <ol>
        <li>
          <div>
            <h3>Кто купит сенсею Гориллу?</h3>
            <div class="flex items-center my-2">
              <input type="radio" name="first" class="mx-2" @click="first = 1, setFirst()">
              <p>Аружан</p>
            </div>
            <div class="flex items-center my-2">
              <input type="radio" name="first" class="mx-2" @click="first = 2, setFirst()">
              <p>Томила</p>
            </div>
            <div class="flex items-center my-2">
              <input type="radio" name="first" class="mx-2" @click="first = 3, setFirst()">
              <p>Карина</p>
            </div>
            <div class="flex items-center my-2">
              <input type="radio" name="first" class="mx-2" @click="first = 4, setFirst()">
              <p>Дима</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <h3>Что делать, когда студент просит о помощи?</h3>
            <div class="flex items-center my-2">
              <input type="radio" name="second" class="mx-2" @click="second = 1, setSecond()">
              <p>Проигнорировать</p>
            </div>
            <div class="flex items-center my-2">
              <input type="radio" name="second" class="mx-2" @click="second = 2, setSecond()">
              <p>Оттложить на потом</p>
            </div>
            <div class="flex items-center my-2">
              <input type="radio" name="second" class="mx-2" @click="second = 3, setSecond()">
              <p>Ничего не делать</p>
            </div>
            <div class="flex items-center my-2">
              <input type="radio" name="second" class="mx-2" @click="second = 4, setSecond()">
              <p>Всё вышеперечисленное</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <h3>Важно ли сенсею, что все студенты присутствовали на уроке?</h3>
            <div class="flex items-center my-2">
              <input type="radio" name="third" class="mx-2" @click="third = 1, setThird()">
              <p>Да</p>
            </div>
            <div class="flex items-center my-2">
              <input type="radio" name="third" class="mx-2" @click="third = 2, setThird()">
              <p>Нет</p>
            </div>
            <div class="flex items-center my-2">
              <input type="radio" name="third" class="mx-2" @click="third = 3, setThird()">
              <p>Без разницы</p>
            </div>
            <div class="flex items-center my-2">
              <input type="radio" name="third" class="mx-2" @click="third = 4, setThird()">
              <p>Нужно, чтобы были все кроме Расула</p>
            </div>
          </div>
        </li>
      </ol>
      <p v-if="first != 0 && second != 0 && third != 0">Результат: {{ result }} из 3</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first: 0,
      second: 0,
      third: 0,
      result: 0,
      firstBool: false,
      secondBool: false,
      thirdBool: false,
    };
  },
  methods: {
    setFirst() {
        if (this.first === 3 && this.firstBool === false) {
            this.result = this.result + 1;
            this.firstBool = true;
        } else if (this.first === 3 && this.firstBool === true) {
            this.result = this.result + 0;
        } else if (this.first != 3 && this.firstBool === true) {
            this.result = this.result - 1;
            this.firstBool = false
        }
    },
    setSecond() {
        if (this.second === 4 && this.secondBool === false) {
            this.result = this.result + 1;
            this.secondBool = true;
        } else if (this.second === 4 && this.secondBool === true) {
            this.result = this.result + 0;
        } else if (this.second != 4 && this.secondBool === true) {
            this.result = this.result - 1;
            this.secondBool = false
        }
    },  
    setThird() {
        if (this.third === 4 && this.thirdBool === false) {
            this.result = this.result + 1;
            this.thirdBool = true;
        } else if (this.third === 4 && this.thirdBool === true) {
            this.result = this.result + 0;
        } else if (this.third != 4 && this.thirdBool === true) {
            this.result = this.result - 1;
            this.thirdBool = false
        }
    }      
  }
};
</script>