<template>
    <div class="container mx-auto w-full">
        <form action="">
            <h1 class="ml-4 text-2xl text-black font-bold">Регистрация</h1>
            <div class="my-5">
                <p class="ml-4 text-xl text-black font-bold">Имя</p>
                <input v-model="form.name" class="fm-1 border-2 border-gray-500 rounded-2xl w-1/2 px-4 py-2 text-xl" type="text" placeholder="Введите ваше имя">
            </div>
            <div class="my-5">
                <p class="ml-4 text-xl text-black font-bold">Номер телефона</p>
                <input v-model="form.number" class="fm-2 border-2 border-gray-500 rounded-2xl w-1/2 px-4 py-2 text-xl" type="number" placeholder="Введите ваш номер телефона">
            </div>
            <div class="my-5">
                <p class="ml-4 text-xl text-black font-bold">E-mail</p>
                <input v-model="form.email" class="fm-3 border-2 border-gray-500 rounded-2xl w-1/2 px-4 py-2 text-xl" type="email" placeholder="Введите ваш электронный адрес">
            </div>
            <div class="my-5">
                <p class="ml-4 text-xl text-black font-bold">Пароль</p>
                <input v-model="form.pass" class="fm-4 border-2 border-gray-500 rounded-2xl w-1/2 px-4 py-2 text-xl" type="password" placeholder="Введите ваш пароль">
            </div>
            <div class="my-5">
                <p class="ml-4 text-xl text-black font-bold">Подтверждение пароля</p>
                <input v-model="form.pass" class="fm-5 border-2 border-gray-500 rounded-2xl w-1/2 px-4 py-2 text-xl" type="password" placeholder="Подтвердите ваш пароль">
            </div>
            <div>
                <input @click="submitUser()" class="border-2 border-green-600 bg-green-600 rounded-2xl w-1/2 px-4 py-2 text-xl text-white font-bold" type="submit" value="Зарегистрироваться">
            </div>
        </form>
        <div v-for="user in users" :key="user.id">
            <p>{{ user.name }}</p>
            <p>{{ user.mail }}</p>
            <p>{{ user.phone }}</p>
            <p>{{ user.pass }}</p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        users: [],
        form: {
            name: '',
            email: '',
            phone: null,
            pass: ''
        }
    };
  },
  methods: {
      submitUser() {
          this.user.push(this.form)
      }
  }
};
</script>