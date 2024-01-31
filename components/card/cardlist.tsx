import { View } from 'react-native';
import cardsData from '../../constants/tempCardData.js';
import Card from './card'
import styles from './movie-card.scss';

const CardList = () => {
    return (
      <View style={styles.cardContainer}>
        {
          cardsData.map((card) => {
            return (<Card key={card.id} {...card} />);
          })
        }
      </View>
    );
  };
  
  export default CardList;