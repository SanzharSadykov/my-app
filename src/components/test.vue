<template>
    <div>
        <div>
            <h1 v-if="status === 1">{{ heading }}</h1>
            <p v-else>{{ roma }}</p>
            <button @click="toggleSwitch()">Click me!</button>
        </div>
        <div v-for="item in arr" :key="item.id">
            <p>{{ item.id }}</p>
            <h1>{{ item.nickname }}</h1>
            <small>{{ item.name }}</small>
        </div>
        <input type="text" v-model="inp">
        <p>{{ inp }}</p>
        <!-- <div class="flex flex-wrap justify-center items-center">
            <div class="block w-1/3 p-4">
                <div class="flex justify-start items-center">
                    <div class="block p-2">
                        <p class="text-center">ДЛЯ ОБРАЗОВАНИЯ</p>
                        <div class="color-gray rounded-full"></div>
                    </div>
                    <div class="block p-2">
                        <p class="text-center">ДЛЯ БИЗНЕСА</p>
                    </div>                    
                </div>            
                <div>
                    <img class="mx-auto" src="@/assets/img/whiteboard-horizontal.svg" alt="">
                    <p class="w-1/2 mx-auto text-center py-4 text-gray-600 text-xl">Доступ в один клик к видеозвонкам, приложениям и календарям.</p>
                </div>
            </div>
            <div class="block w-1/3 p-4">
                <div><img class="w-1/2 mx-auto" src="@/assets/img/snowflake-horizontal.svg" alt=""></div>
                <p class="w-1/2 mx-auto text-center py-4 text-gray-600 text-xl">Создавайте интерактивные занятия или присоединяйтесь к онлайн-сообществу, чтобы скачать уже созданные уроки.</p>
            </div> 
            <div class="block w-1/3 p-4 mx-auto">
                <div><img class="w-1/2 mx-auto" src="@/assets/img/cleverstore-logo-2.svg" alt=""></div>
                <p class="w-1/2 mx-auto text-center py-4 text-gray-600 text-xl">Более 100 бесплатных приложений на любые темы для всех возрастных групп на разных языках. От обучения до игр – у нас найдётся подходящее приложение!</p>
            </div>                      
        </div> -->
    </div>
</template>

<script>
export default {
    name: "test", 
    data() {
        return{
            heading: "Hello, Vue!",
            status: 0,
            inp: '',
            arr: [
                {
                    'id': 1,
                    'name': 'Roma',
                    'nickname': 'roma'
                },
                {
                    'id': 2,
                    'name': 'Oljas',
                    'nickname': 'aljas69'
                }
            ],
        };
    },
    props: [ 'roma' ],
    methods: {
        toggleSwitch() {
            if (this.status === 0) {
                this.status = 1;
            } else {
                this.status = 0;
            }
        }
    }
}
</script>
