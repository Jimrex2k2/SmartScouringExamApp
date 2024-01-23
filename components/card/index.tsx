import { View, Image, Text } from 'react-native';
import style from './movie-card.scss';

const Card = () => {
    return (
        <View style={style.card}>
            <Image
            source={require('../../assets/images/sample-poster.png')}
            style={style.moviePoster}
            />
            <View>
                <Text style={style.movieTitle}>Movie Title</Text>
                <Text style={style.movieDate}>Date Release</Text>
            </View>
        </View>
    )
}

export default Card;