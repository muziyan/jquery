function Jquery(arg) {
    if (!(this instanceof Jquery )){
        return new Jquery(arg);
    }else{
        return this.init(arg);
    }
}

Jquery.prototype.log = function(arr){
    return console.log(arr);
};

//获取元素
Jquery.prototype.init = function (arg) {
    console.log(typeof arg);
    // console.log(typeof document.querySelectorAll(arg)[1]);
    if (arg instanceof HTMLElement || arg instanceof HTMLCollection ){
        this.selected = [arg];
    }else{
        this.selected = [...document.querySelectorAll(arg)];
    }
    return this;
};

//添加类名
Jquery.prototype.addClass = function (className) {
    console.log(className);
    this.selected.forEach(function (dom,index) {
        // console.log(dom);
        dom.classList.add(className);
    });
    return this;
};

//删除类名
Jquery.prototype.removeClass = function(className){
    this.selected.forEach(function (dom) {
        dom.classList.remove(className);
    });
    return this;
};

//查找数组中的元素
Jquery.prototype.eq = function (i) {
    // return Jquery(this.selected[i])
    // console.log(this.selected[i]);
    // return this.selected[i];
    // let arg = this.selected[i];
    return new Jquery(this.selected[i]);
};

//获取数组的长度
Jquery.prototype.size = function () {
    return this.selected.length;
};

//获取节点内容
Jquery.prototype.html = function () {
    // return this.eq().innerHTML;
    // console.log(this.selected);
    // return this.selected[0].innerHTML;
    // console.log(this.selected[0].innerHTML);
    return this.selected[0].innerHTML;
};

//事件委托
Jquery.prototype.on = function (eventName,func) {
    // this.selected[0].oneventName = func;
    this.selected.forEach(function (dom) {
        // console.log(dom);
        // console.log(eventName);
        // console.log(func);
        dom.addEventListener(eventName,func);
    });
    return this;
};

//hide效果
Jquery.prototype.hide = function (time) {
    this.selected.forEach(function (dom) {
        dom.style.opacity = "0";
    });
    return this;
};


//show效果
Jquery.prototype.show = function (time) {
    let index = 1;
    this.selected.forEach(function (dom) {
        let timer = setTimeout(()=>{
            index++;
            console.log(index /10);
            dom.style.opacity = parseInt(index / 10);
            if (index / 10 >= 1){
                clearInterval(timer)
            }
        },time)
    });
    return this;
};


//寻找所有兄弟节点
Jquery.prototype.brother = function () {
    console.log(this.selected[0].parentNode.children);
    return new Jquery(this.selected[0].parentNode.children);
};

//寻找上一个节点
Jquery.prototype.prev = function () {
    // console.log(this.selected[0].previousElementSibling instanceof HTMLElement);
    return new Jquery(this.selected[0].previousElementSibling);
};

//寻找下一个节点
Jquery.prototype.next = function () {
    return new Jquery(this.selected[0].nextElementSibling);
};



const $ = Jquery;
const {log} = console;

