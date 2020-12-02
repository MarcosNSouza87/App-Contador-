import React,{useState,useEffect} from 'react';
import { RefreshControl,FlatList } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ItemCounter from '../../components/CounterItem'


import {Container,Header,HeaderText,EmptyState,EmptyText} from './styles';


export default function Home(){
    const activeCounter = useSelector(state => state.activeCounter);
    const counters = useSelector(state => state.counters);
    const dispatch = useDispatch();
    
    const [refreshing,setRefreshing] = useState(false);
    const [selectedId, setSelectedId] = useState(1);

    useEffect(()=>{
        
        if(counters.length == 1)
        {
            toggleCounter(counters[0]);
            
        }
        
    },[]);
    
   
    const onRefresh = () => {
        setRefreshing(false);
    }
    
    function toggleCounter(counter){
        setSelectedId(counter.id)
        dispatch({type: 'TOGGLE_COUNTER',counter})
    }


    const renderItem = ({ item }) => {       
        if(selectedId == 0) setSelectedId(1);
        const backgroundColor = item.id == selectedId ? "#d8d8d8" : "#6dadd1";
        const color = item.id == selectedId ? "#333333": "#33333344";
        console.log(selectedId);
        return (           
                <ItemCounter
                item={item}
                onPress={() => {toggleCounter(item)}}
                style={{backgroundColor}}
                styledSubtitle = {{color}}
                keyExtractor={item => item.id.toString()}
                />        
        );
    };

    return(
        <Container>
            <Header>
                <HeaderText>Counters</HeaderText>
            </Header>
            {counters.length>0?
            <FlatList
                refreshControl = {
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/> 
                }
                data={counters}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                extraData={selectedId}
            />:
            <EmptyState>
                <EmptyText>Voce ainda não tem nenhum contador salvo!</EmptyText>
            </EmptyState>
            }
        </Container>
    )
}