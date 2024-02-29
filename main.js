const app = Vue.createApp({
    data() {
        return {
            cart: 1,
            product: 'Socks',
            description: 'They are socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.vuemastery.com/',
            inventory: 10,
            onSale: true,
            details: ['50% Cotton', '30% Wool', '20% Polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ],
            sizes: ['xsmall', 'small', 'medium', 'large', 'xlarge']
        }
    },
    methods: {
        addToCart(){
            this.cart += 1;
        },
        updateImage(variantImage) {
            this.image = variantImage;
        },
    },

    computed: {
        title() {
            return this.brand + '' + this.product
        },
        isActive(){
            return this.inventory > 0;
        },
        inStock() {
            return this.inventory > 0;
        }
    }
})

