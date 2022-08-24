function checkInput() {
    let filterName = /^[a-z ,.'-]+$/i
    let filterCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
    let filterMMYY = /^[0-9]{2}$/
    let filterCVC = /^[0-9]{3,4}$/
    let cardNumReg = new RegExp(".{" + 4 + "}","g")

    let ErrNumber = 0;

    //input fields
    const name = document.querySelector(".Cardholder-Name")
    const carnNumber = document.querySelector(".Card-Number")
    const expMM = document.querySelector(".Card-Month")
    const expYY = document.querySelector(".Card-Year")
    const CVC = document.querySelector(".Card-CVC")
    //error messages
    const errName = document.querySelector(".errormsgname")
    const errCard = document.querySelector(".errormsgcard")
    const errMMYY= document.querySelector(".errormsgMMYY")
    const errCVC= document.querySelector(".errormsgCVC")
    //animation card fields
    const animCVC = document.querySelector(".Img-CVC")
    const animCarnNumber = document.querySelector(".Img-Number")
    const animName = document.querySelector(".Img-Name")
    const animMMYY = document.querySelector(".Img-MMYY")
    //go to final page displays
    const containerName = document.querySelector(".name")
    const containerCard = document.querySelector(".card")
    const containerOther = document.querySelector(".otherinfo")
    const containerConfirmBtn = document.querySelector(".confirmbtn")
    const complete = document.querySelector(".complete")
    const containerUserInput = document.querySelector(".user-info-input")

    if(String(name.value).search(filterName) === -1){ ///test name
        errName.innerHTML = "Wrong Name"
        name.style.border = "solid 1px hsl(0, 100%, 66%)"
        ErrNumber = 1
    } else {
        errName.innerHTML = ""
        name.style.border = "solid 1px var(--Light-grayish-violet)"
        animName.innerHTML = name.value
    }
    if(String(carnNumber.value).search(filterCard) === -1){ ///test card number
        errCard.innerHTML = "Wrong format, numbers only"
        carnNumber.style.border = "solid 1px hsl(0, 100%, 66%)"
        ErrNumber++
    } else {
        errCard.innerHTML = ""
        carnNumber.style.border = "solid 1px var(--Light-grayish-violet)"
        animCarnNumber.innerHTML = carnNumber.value.replace(cardNumReg, function (a, b, c) {
            return a + ' ';
        });
    }
    if(String(expMM.value).search(filterMMYY) === -1){ ///test card MM exp date
        errMMYY.innerHTML = "Can't be blank"
        expMM.style.border = "solid 1px hsl(0, 100%, 66%)"
        ErrNumber++
    } else {
        errMMYY.innerHTML = ""
        expMM.style.border = "solid 1px var(--Light-grayish-violet)"
    }
    if(String(expYY.value).search(filterMMYY) === -1){ ///test card YY exp date
        errMMYY.innerHTML = "Can't be blank"
        expYY.style.border = "solid 1px hsl(0, 100%, 66%)"
        ErrNumber++
    } else {
        errMMYY.innerHTML = ""
        expYY.style.border = "solid 1px var(--Light-grayish-violet)"
    }
    if(String(CVC.value).search(filterCVC) === -1){ ///test card CVC
        errMMYY.innerHTML = "Can't be blank"
        CVC.style.border = "solid 1px hsl(0, 100%, 66%)"
        ErrNumber++
    } else {
        errMMYY.innerHTML = ""
        CVC.style.border = "solid 1px var(--Light-grayish-violet)"
        animCVC.innerHTML = CVC.value
    }
    
    if(String(expMM.value).search(filterMMYY) !== -1 && String(expYY.value).search(filterMMYY) !== -1) { ///animate MM/YY on card picture
        animMMYY.innerHTML = expMM.value + "/" + expYY.value
    }

    if(ErrNumber <= 0){ /// go to thank-you page
        console.log(true)

        complete.style.display = "flex"
        containerUserInput.style.display = "none"
    } else {
        console.log(ErrNumber)
    }
}

// 2141241242345445