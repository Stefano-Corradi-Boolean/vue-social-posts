// in classe hanno visto export default
// vale la pena mstrare che quello che conoscono vale anche qui
import  posts  from './db.js'
const { createApp } = Vue;

createApp({
  data(){
    return{
        posts, // ricordare che è la stessa cosa di posts: posts
        // ID dei like con "mi piace"
        userLiked: [3454, 23432]
    }
  },

  methods: {
    // fare notare che possono passare direttamente tutto l'oggetto e che la stesaa cosa la può gestire passando l'indice
    toggleLike(post){
        // se l'id non è presente lo pusho nell'array dei liked
        if(!this.userLiked.includes(post.id)){
            this.userLiked.push(post.id)
            post.likes++;
        }else{
            // se non è incluslo lo tolgo
            const indexToRemove = this.userLiked.findIndex( likeId => likeId === post.id )
            this.userLiked.splice(indexToRemove, 1)
            post.likes--;
        }
    },

    getProfileInitials(name){
       const letters = name.split(' ').map(nameSplit => nameSplit[0])
        return letters.join('')
      }

  },

  mounted(){
    // verifica del corretto caricamento del "db"
    console.log(this.posts);
  }
  
}).mount('#app')
