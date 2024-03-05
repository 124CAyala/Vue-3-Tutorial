app.component('product-display', {
    props:{
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image" :class="{ 'out-of-stock-img': !inStock}">
        <img :src="image" alt="Green Socks">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
         
         <p v-if="inStock">In Stock</p>
         <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out!</p>
         <p v-else>Out of Stock</p>
         <!--Another way of conditional showing
          <p v-show="inStock">In Stock</p>
        -->
         <p v-show="onSale"> {{title}} is on sale!</p>
         <p>Shipping: {{shipping}} </p>
         <ul><li v-for="productdetail in productdetails">{{ productdetail }}</li>
         <p>{{ description }}</p>
         <ul><li v-for="detail in details">{{ detail}}</li>
        </ul>
       
        <div v-for="(variant, index) in variants" :key="variant.id" 
        @mouseover="updateVariant(index)" class="color-circle"
         :style="{ backgroundColor: variant.color }"></div>
        
        <ul>
        <li v-for="size in sizes"> {{ size }} </li> 
        </ul>
       <button class="button" :class="{ disabledButton: !inStock}" :disabled="!inStock" @click="addToCart"> Add to Cart </button>
       <button class="button" :class="{ disabledButton: !inStock}" :disabled="!inStock" @click="removeFromCart"> Remove Item </button>
         <p>Visit <a :href="url">VueMastery.com</a> for more</p>
         
      </div>
      
</div>
</div>`,
data() {
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        description: 'They are socks',
        selectedVariant: 0,
        url: 'https://www.vuemastery.com/',
        inventory: 10,
        onSale: true,
        details: ['50% Cotton', '30% Wool', '20% Polyester'],
        variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
        ],
        sizes: ['xsmall', 'small', 'medium', 'large', 'xlarge']
    }
},
methods: {
    addToCart(){
        this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    removeFromCart(){
        this.$emit("remove-from-cart");
    },
    updateVariant(index){
        this.selectedVariant = index;
    },
},

computed: {
    title() {
        return this.brand + '' + this.product
    },
    image(){
        return this.variants[this.selectedVariant].image;
    },
    inStock() {
        return this.variants[this.selectedVariant].quantity;
    },
    shipping(){
        if (this.premium){
            return "Free"
        }
        return 2.99
    }
}
})