import React from 'react';
import Game from '../components/Game';
import {changeCardColor, switchTurn} from '../store/actions';
import { connect } from 'react-redux';
const GamePage = ({cards, changeCardColor, switchTurn, playerOne, playerTwo}) => {
    if(playerOne.turn === false){ //Switch playerOne's turn first this if statement needs to handle switching turns between playerOne and playerTwo
        switchTurn(playerOne);
    }

    return (<Game cards={cards} changeCardColor={changeCardColor} playerOne={playerOne} playerTwo={playerTwo} switchTurn={switchTurn}/>);
};
const mapStateToProps = state => ({cards: state.cards, playerOne: state.playerOne, playerTwo: state.playerTwo});
const mapDispatchToProps = dispatch => ({changeCardColor: (id, color) => dispatch(changeCardColor(id, color)), switchTurn: player => dispatch(switchTurn(player))});
export default connect(mapStateToProps, mapDispatchToProps)(GamePage);

