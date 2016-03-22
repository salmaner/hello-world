function fun(x,y) {
    console.log(this);
    this.be = x;
    this.bu = y;
    this.me = x + y;
    
}
var ob = {
    be: 0,
    bu: 0,
    me: 0,
    ff: function(x, y) {
        this.be = x;
        this.bu = y;
        this.me = x + y;
    }
};










