//1. 박스 2개 만들기
//2. 드랍다운 리스트 만들기
//3. 환율정보 들고오기
//4. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
//5. 금액을 입력하면 환전이 된다.
//6. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 변환이 됨
//7. 숫자를 한국어로 읽어줌
//8. 반대로 밑 박스에서 숫자를 바꿔도 박스에 환율이 적용된다.

let currencyRatio = {
        USD:{
            KRW : 1246.17,
            USD : 1,
            UGX : 3755.97 ,
            unit : "달러"
        },
        KRW:{
            KRW : 1,
            USD : 0.00080,
            UGX : 3.01,
            unit : "원"
        },
        UGX:{
            KRW : 0.33,
            USD : 0.00027,
            UGX : 1,
            unit : "실링"
        }
}

let yfromCurrenc = "USD";
let toCurrency = "USD";

document.querySelectorAll("#from-currency-list a")
.forEach((menu)=>menu.addEventListener("click", function(){
    //1. 버튼 가져오기
    //document.getElementById("from-button")
    //2. 버튼 값 바꾸기
    document.getElementById("from-button").textContent = this.textContent;
    //3. 선택된 currency 값을 변수에 저장
    fromCurrency = this.textContent;
    convert();
}));


document.querySelectorAll("#to-currency-list a")
.forEach((menu)=>menu.addEventListener("click", function(){
    //1. 버튼 가져오기
    //document.getElementById("to-button")
    //2. 버튼 값 바꾸기
    document.getElementById("to-button").textContent = this.textContent;
    //3. 선택된 currency 값을 변수에 저장
    toCurrency = this.textContent;
    convert();
}))

//1. 키를 입력하는 순간
//2. 환전이 되어서
//3. 환전된 값이 보인다.

function convert() {
    //1. 무슨돈을 얼마 환전? 어떤돈으로 환전?
    //돈 * 환율 = 환전금액
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    
    console.log("환전 결과!", convertedAmount);

    document.getElementById("to-input").value = convertedAmount;
}

/*
function change_option(currencyRatio) {
    if(currencyRatio == "USD") {
        document.querySelectorAll("#money").innerText = "달러";
    } else if (currencyRatio == "KRW") {
        document.querySelectorAll("#money").innerText = "원";
    } else (currencyRatio == "UGX") {
        document.querySelectorAll("#money").innerText = "실링";
    }*/
