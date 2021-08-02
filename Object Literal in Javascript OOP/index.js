var reactingle={
    width:100,
    height:50,

    drow:function(){
        console.log('i am Rectangle')
        console.log('my width is ' + this.width)
        console.log('my height is '+ this.height)
    }
}

reactingle.drow()

reactingle.width=300
reactingle.height=100

reactingle.drow()