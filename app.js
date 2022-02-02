const app=Vue.createApp({
    data(){
        return{
            count:0,
            lockBoard: true,
            firstCard:null,
            secondCard:null,
            isCardFlip:false,
            cards:[
                {
                    dataName: 'angular',
                    frontImg: 'img/angular.svg',
                    backImg: "img/js-badge.svg",
                },
                {
                    dataName: 'vue',
                    frontImg: 'img/vue.svg',
                    backImg: "img/js-badge.svg",
                },
                {
                    dataName: 'aurelia',
                    frontImg: 'img/aurelia.svg',
                    backImg: "img/js-badge.svg",
                },
                {
                    dataName: 'angular',
                    frontImg: 'img/angular.svg',
                    backImg: "img/js-badge.svg",
                },
                {
                    dataName: 'vue',
                    frontImg: 'img/vue.svg',
                    backImg: "img/js-badge.svg",
                },
                {
                    dataName: 'aurelia',
                    frontImg: 'img/aurelia.svg',
                    backImg: "img/js-badge.svg",
                },
                {
                    dataName: 'backbone',
                    frontImg: 'img/backbone.svg',
                    backImg: "img/js-badge.svg",
                },
                {
                    dataName: 'ember',
                    frontImg: 'img/ember.svg',
                    backImg: "img/js-badge.svg",
                },
                {
                    dataName: 'react',
                    frontImg: 'img/react.svg',
                    backImg: "img/js-badge.svg",
                },
                {
                    dataName: 'backbone',
                    frontImg: 'img/backbone.svg',
                    backImg: "img/js-badge.svg",
                },
                {
                    dataName: 'ember',
                    frontImg: 'img/ember.svg',
                    backImg: "img/js-badge.svg",
                },
                {
                    dataName: 'react',
                    frontImg: 'img/react.svg',
                    backImg: "img/js-badge.svg",
                }
            ]
        } 
    },
    methods:{
        flipCard(event){
            if(this.lockBoard) return;
            let target=event.target.parentElement;
            if(target===this.firstCard) return;
            target.classList.add('flip');
            if(!this.isCardFlip){
                this.isCardFlip=true;
                this.firstCard=target;
            }else{
                this.isCardFlip=false;
                this.secondCard=target;
                if(this.secondCard===this.firstCard) return
                if(this.firstCard.dataset.name!==this.secondCard.dataset.name){
                    let that=this;
                    this.lockBoard=true;
                    setTimeout(function(){
                        that.firstCard.classList.remove('flip');
                        that.secondCard.classList.remove('flip');
                        that.resetBoard()
                    },1500)    
                }
                this.count++;   
            }
              
        },
        resetBoard(){
            this.firstCard=null;
            this.secondCard=null;
            this.lockBoard=false;
            this.isCardFlip=false
        },
        resetGame(){
            window.location.reload();
        },
        startGame(){
            this.lockBoard=false;
        }
    }
   
});

app.mount("#game");