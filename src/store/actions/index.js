import { CHANGE_CARD_COLOR, CHANGE_CARD_ONE, ADD_POINT_P1, ADD_POINT_P2 } from '../actionTypes';
import { SWITCH_TURN } from '../actionTypes';
export const changeCardColor = (id, color) => ({type: CHANGE_CARD_COLOR, id, color}); 
export const switchTurn = playerString => ({type: SWITCH_TURN, playerString});

// export const changeTwoCards = (id1, id2, color) => (dispatch => {
//     dispatch(changeCardColor(id1, color));
//     dispatch(changeCardColor(id2, color));
// });
export const setCardOne = card => ({type: CHANGE_CARD_ONE, card});

export const flipFirstCard = (card, color) => (dispatch => { //sometimes dispatch won't call because you haven't put in your props properly.
    dispatch(changeCardColor(card.id, color));
    dispatch(setCardOne(card));
    // console.log("first");
});

export const addMatch = player => {
    let aType = "";
    // if(player.name === ADD_POINT_P1){ wrong
    if(player.name === "PLAYER_ONE"){
        aType = ADD_POINT_P1;
    }
    else{
        aType = ADD_POINT_P2;
    }
    return {type: aType, player};
}

export const flipSecondCard = (card1, card2, secondCardColor, currentPlayerObj, newPlayerString) => (dispatch => {
    dispatch(changeCardColor(card2.id, secondCardColor));
    setTimeout(() => {
        if(card1.color !== card2.color){
            dispatch(changeCardColor(card1.id, "white"));
            dispatch(changeCardColor(card2.id, "white"));
        }
        else{
            dispatch(addMatch(currentPlayerObj));
            // console.log(currentPlayerObj);
            // canSwitch = false;
        }
        dispatch(setCardOne({}));
        dispatch(switchTurn(newPlayerString));
    }, 500);
    // if(card1.color === card2.color && card1.currentColor !== "white" && card2.currentColor !== "white"){
        
    // }
});
// export const flipSecondCard = (card1, card2, secondCardColor, currentPlayerObj, newPlayerString) => {console.log("HELLO")}

