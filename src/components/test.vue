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
    </div>
</template>

<script>
export default {
    name: "test", 
    data() {
        return{
            heading: "Hello, Vue!",
            status: 0,
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
