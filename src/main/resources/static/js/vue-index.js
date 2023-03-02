var clock = new Vue({
    el: '#clock',
    delimiters : ['{{', '}}'],  //修改vue默认的取值符号解决时钟无法显示问题，原因是vue默认的取值{{}}和Flask的jinja2的{{}}冲突
    data: {
        time: '',
        date: ''
    }
});

function updateTime() {
    var cd = new Date();
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
};

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}

var week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
var timerID = setInterval(updateTime, 1000);
updateTime();
