import React from 'react';
import {Container,Header,HeaderText,CounterOptions,TitleConfig,CounterOptionsButton,CounterOptionsButtonText,
CounterControls,CounterEdit,CtrlButton,TextButton} from './styles';
import { useSelector,useDispatch } from 'react-redux'

function Config(){
    const activeCounter = useSelector(state => state.activeCounter);
    const counters = useSelector(state => state.counters);
    const dispatch = useDispatch();


    function newCount(num){
        dispatch({type: 'NEW_COUNTER',payload:{new:{id:num,title:`Counter ${num}`,count:0}}});
    }
    function removeCount(activeCounter){
        dispatch({type: 'REMOVE_COUNTER',payload:{activeCounter,counters}})
    }


    function incrementCount(id){
        dispatch({type: 'INCREMENT_IN_COUNT',id});
    }
    function decrementCount(id){
        dispatch({type: 'DECREMENT_IN_COUNT',id});
    }
    function resetCount(id){
        dispatch({type: 'RESET_IN_COUNT',id});
    }

    return(
        <Container>
            <Header>
                <HeaderText>Config</HeaderText>
            </Header>
            <CounterOptions>
                <CounterOptionsButton  onPress={()=>{newCount(counters.length+1)}}>
                    <CounterOptionsButtonText>Add Counter</CounterOptionsButtonText>
                </CounterOptionsButton>
                <CounterOptionsButton  onPress={()=>{removeCount(activeCounter)}}>
                    <CounterOptionsButtonText >Remove Counter</CounterOptionsButtonText>
                </CounterOptionsButton>
            </CounterOptions>
            <CounterEdit>
                <TitleConfig>Selected Counter </TitleConfig>
                <CounterControls>
                    <CtrlButton  onPress={()=>{incrementCount(activeCounter.id)}}>
                        <TextButton>Incrementar</TextButton>                   
                    </CtrlButton>
                    <CtrlButton  onPress={()=>{decrementCount(activeCounter.id)}}>
                        <TextButton>Decrementar</TextButton>
                    </CtrlButton >
                    <CtrlButton  onPress={()=>{resetCount(activeCounter.id)}}>
                        <TextButton>Resetar</TextButton>
                    </CtrlButton>
                </CounterControls>
            </CounterEdit>
        </Container>
    )
}

export default Config;