document.addEventListener('DOMContentLoaded', () => {
    // Card options
    const cardArray = [
        {
            name: 'one',
            img: 'images/img1.jpg'
        },
        {
            name: 'two',
            img: 'images/img2.jpg'
        },
        {
            name: 'three',
            img: 'images/img3.jpg'
        },
        {
            name: 'four',
            img: 'images/img4.jpg'
        },
        {
            name: 'five',
            img: 'images/img5.jpg'
        },
        {
            name: 'six',
            img: 'images/img6.jpg'
        },
        {
            name: 'one',
            img: 'images/img1.jpg'
        },
        {
            name: 'two',
            img: 'images/img2.jpg'
        },
        {
            name: 'three',
            img: 'images/img3.jpg'
        },
        {
            name: 'four',
            img: 'images/img4.jpg'
        },
        {
            name: 'five',
            img: 'images/img5.jpg'
        },
        {
            name: 'six',
            img: 'images/img6.jpg'
        }
    ];
    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid');
    console.log(grid)
    const resultDisplay = document.querySelector('#result')
    var cardsChoosen = []
    var cardsChoosenId = []
    var cardsWon = []
    //Creating Board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    createBoard();

    // Check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        console.log('cards', cards)
        const optionOneId = cardsChoosenId[0]
        const optionTwoId = cardsChoosenId[1]
        if (cardsChoosen[0] === cardsChoosen[1]) {
            alert("You Found A match")
            cards[optionOneId].setAttribute('src', 'images/white.jpg')
            cards[optionTwoId].setAttribute('src', 'images/white.jpg')
            cardsWon.push(cardsChoosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.jpg')
            cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
            alert("sorry,Try Again")
        }
        cardsChoosen = []
        cardsChoosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations !!! You Find them All'
        }
    }



    // flip your card.
    function flipCard() {
        var cardId = this.getAttribute("data-id");
        cardsChoosen.push(cardArray[cardId].name)
        cardsChoosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChoosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }



})