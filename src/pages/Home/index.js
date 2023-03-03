import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header  name = "Anderson Lomba"/>
      
      <Balance saldo ="7.770.00" gastos="-230.40"/>

      <Actions/>

      <Text style={styles.title} >Últimas movimentações</Text>

      <FlatList
       
       style={styles.list}
       data= {list}
       keyExtractor={(item) => String(item.id)}
       showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Movements data={item}/>}
      />

    </View>
  );
}

const list = [
  {
    id: 1,
    label: 'Boleto da Internet',
    value: '79,90',
    date: '17/07/2023',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pagamento',
    value: '7007,50',
    date: '22/09/2023',
    type: 1 // receita
  },
  {
    id: 3,
    label: 'Pix de Cliente A',
    value: '709,90',
    date: '07/07/2023',
    type: 1 // receita
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
