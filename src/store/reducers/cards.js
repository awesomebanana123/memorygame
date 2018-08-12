import REVEAL_CARD_COLOR from "../actions";

const CardState = {
    SHOW: 0,
    HIDE: 1,
    MATCHING: 2
}
const defaultCards = [
    {id: 0, show: CardState.HIDE, onClickable: true, color: 'red', currentColor: 'white'},
    {id: 1, show: CardState.HIDE, onClickable: true, color: 'red', currentColor: 'white'},
    {id: 2, show: CardState.HIDE, onClickable: true, color: 'blue', currentColor: 'white'},
    {id: 3, show: CardState.HIDE, onClickable: true, color: 'blue', currentColor: 'white'},
    {id: 4, show: CardState.HIDE, onClickable: true, color: 'green', currentColor: 'white'},
    {id: 5, show: CardState.HIDE, onClickable: true, color: 'green', currentColor: 'white'},
    {id: 6, show: CardState.HIDE, onClickable: true, color: 'purple', currentColor: 'white'},
    {id: 7, show: CardState.HIDE, onClickable: true, color: 'purple', currentColor: 'white'},
    {id: 8, show: CardState.HIDE, onClickable: true, color: 'pink', currentColor: 'white'},
    {id: 9, show: CardState.HIDE, onClickable: true, color: 'pink', currentColor: 'white'},
    {id: 10, show: CardState.HIDE, onClickable: true, color: 'brown', currentColor: 'white'},
    {id: 11, show: CardState.HIDE, onClickable: true, color: 'brown', currentColor: 'white'},
    {id: 12, show: CardState.HIDE, onClickable: true, color: 'orange', currentColor: 'white'},
    {id: 13, show: CardState.HIDE, onClickable: true, color: 'orange', currentColor: 'white'},
    {id: 14, show: CardState.HIDE, onClickable: true, color: 'black', currentColor: 'white'},
    {id: 15, show: CardState.HIDE, onClickable: true, color: 'black', currentColor: 'white'}
];

const cards = (state=defaultCards, action) => {
    switch(action.type){
        case REVEAL_CARD_COLOR:
            return action.color;
        default: return state;
    }
}

export default cards;

