function app(){
    const myBday = ()=>{
        console.log("happy birthday");
    }

    const addNum = (n1, n2, n3)=>{
        return n1+n2+n3;
    }

    console.log("inside app");
    myBday();
    console.log(addNum(2,3,8));
}

app();
