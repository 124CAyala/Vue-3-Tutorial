const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: false,
            productdetails: ["30% cotton", "60% wool", "20% polyester"],
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },
        removeCart(id){
            if (this.cart.length === 0){
                this.cart.length === 0;

            }

             else{
                this.cart.pop(id);   

            }
        }
    }
})

