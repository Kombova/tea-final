
export let swipeControle = {
    swipe: null,

    touchStartX: null,
    touchStartY: null,
    touchEndX:null,
    touchEndY:null,
    
    trackStartSwipe:function(start){
        this.touchStartX = start.changedTouches[0].clientX;
        this.touchStartY = start.changedTouches[0].clientY;
    },
    trackEndSwipe: function(end){
        this.touchEndX = end.changedTouches[0].clientX;
        this.touchEndY = end.changedTouches[0].clientY;
        
        let diffX = this.touchStartX - this.touchEndX;
        let diffY = this.touchStartY - this.touchEndY;

        if(Math.abs(diffX) > Math.abs(diffY)){
            diffX > 0 ? this.swipe = 'Left' : this.swipe = 'Right';
        }else if(Math.abs(diffX) < Math.abs(diffY)){
            diffY > 0 ? this.swipe = 'Up' : this.swipe = 'Down';
        }    
    },
}