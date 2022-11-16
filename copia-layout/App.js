import { ScrollView, StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { AntDesign, FontAwesome, Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';



export default function App() {
  return (
    <View style={styles.dimetrodonte}>

      <StatusBar style="auto" />
      <View style={styles.diplodoco}>
        <View style={styles.trike}>
          <AntDesign name="youtube" size={30} color="red" />
          <Text style={{ color: 'white', fontSize: 20 }}>Youtube</Text>
        </View>
        <View style={styles.espinossauro}>
          <FontAwesome name="bell" size={24} color="white" />
          <FontAwesome name="search" size={24} color="white" />
          <FontAwesome name="user-circle-o" size={24} color="white" />
        </View>
      </View>

      <ScrollView>
        <View style={styles.brontossauro}>
          <View style={styles.yutirano}>
            <Image source={{ uri: 'https://cdn.discordapp.com/attachments/756144018714263685/1042542653549580328/unknown.png' }} style={styles.wyvern} ></Image>
            <Image source={require('./src/assets/luffy.png')} style={styles.anquilossauro} ></Image>
            <Text style={{ color: 'white' }}>Os 5 GOLS mais ABSURDOS de PETCOVID no FLAMENGO</Text>
            <View style={styles.barionix}>
              <Text style={{ color: 'white', fontSize: '10', opacity: 0.5, alignItems:'flex-start', justifyContent: 'flex-start' }}>NBA Brasil ° 47 mil visualizações ° há 9 horas</Text>
            </View>
          </View>
        </View>
        <View style={styles.brontossauro}>
          <View style={styles.yutirano}>
            <Image source={{ uri: 'https://cdn.discordapp.com/attachments/756144018714263685/1042543939342844007/unknown.png' }} style={styles.wyvern} ></Image>
            <Image source={require('./src/assets/luffy.png')} style={styles.anquilossauro} ></Image>
            <Text style={{ color: 'white' }}>Bota um prato de comida pra mim mano</Text>
            <View style={styles.barionix}>
              <Text style={{ color: 'white', fontSize: '10', opacity: 0.5, alignItems:'flex-start', justifyContent: 'flex-start' }}>NBA Brasil ° 47 mil visualizações ° há 9 horas</Text>
            </View>
          </View>
        </View>
        <View style={styles.brontossauro}>
          <View style={styles.yutirano}>
            <Image source={{ uri: 'https://cdn.discordapp.com/attachments/756144018714263685/1042545200452608010/unknown.png' }} style={styles.wyvern} ></Image>
            <Image source={require('./src/assets/luffy.png')} style={styles.anquilossauro} ></Image>
            <Text style={{ color: 'white' }}>SPEED RUN LEGO BATMAN ANY%</Text>
            <View style={styles.barionix}>
              <Text style={{ color: 'white', fontSize: '10', opacity: 0.5, alignItems:'flex-start', justifyContent: 'flex-start' }}>NBA Brasil ° 47 mil visualizações ° há 9 horas</Text>
            </View>
          </View>
        </View>
        <View style={styles.brontossauro}>
          <View style={styles.yutirano}>
            <Image source={{ uri: 'https://cdn.discordapp.com/attachments/756144018714263685/1042543939342844007/unknown.png' }} style={styles.wyvern} ></Image>
            <Image source={require('./src/assets/luffy.png')} style={styles.anquilossauro} ></Image>
            <Text style={{ color: 'white' }}>SSSSSSSSSS</Text>
            <View style={styles.barionix}>
              <Text style={{ color: 'white', fontSize: '10', opacity: 0.5, alignItems:'flex-start', justifyContent: 'flex-start' }}>NBA Brasil ° 47 mil visualizações ° há 9 horas</Text>
            </View>
          </View>
        </View>
        <View style={styles.brontossauro}>
          <View style={styles.yutirano}>
            <Image source={{ uri: 'https://cdn.discordapp.com/attachments/756144018714263685/1042543939342844007/unknown.png' }} style={styles.wyvern} ></Image>
            <Image source={require('./src/assets/luffy.png')} style={styles.anquilossauro} ></Image>
            <Text style={{ color: 'white' }}>SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS</Text>
            <View style={styles.barionix}>
              <Text style={{ color: 'white', fontSize: '10', opacity: 0.5, alignItems:'flex-start', justifyContent: 'flex-start' }}>NBA Brasil ° 47 mil visualizações ° há 9 horas</Text>
            </View>
          </View>
        </View>
        <View style={styles.brontossauro}>
          <View style={styles.yutirano}>
            <Image source={{ uri: 'https://cdn.discordapp.com/attachments/756144018714263685/1042543939342844007/unknown.png' }} style={styles.wyvern} ></Image>
            <Image source={require('./src/assets/luffy.png')} style={styles.anquilossauro} ></Image>
            <Text style={{ color: 'white' }}>SSSSSSSSSSSSSSSSSSSSSSSSSS</Text>
            <View style={styles.barionix}>
              <Text style={{ color: 'white', fontSize: '10', opacity: 0.5, alignItems:'flex-start', justifyContent: 'flex-start' }}>NBA Brasil ° 47 mil visualizações ° há 9 horas</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.dilophosauro}>
        <View style={styles.carnotauro}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Entypo name="home" size={24} color="white" />
            <Text style={{ color: 'white' }}>Início</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <MaterialCommunityIcons name="motion-play-outline" size={24} color="white" />
            <Text style={{ color: 'white' }}>Shorts</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <AntDesign name="pluscircleo" size={40} color="white" />
            <Text></Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <MaterialIcons name="subscriptions" size={24} color="white" />
            <Text style={{ color: 'white' }}>Início</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', }}>
            <MaterialIcons name="video-library" size={24} color="white" />
            <Text style={{ color: 'white' }}>Início</Text>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  dimetrodonte: {
    flex: 1,
    backgroundColor: 'black'
  },
  diplodoco: {
    height: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  trike: {
    width: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white',
    justifyContent: 'space-between'
  },
  espinossauro: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    justifyContent: 'space-evenly'
  },
  dilophosauro: {
    height: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  carnotauro: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  brontossauro: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  yutirano: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flexstart',
    marginBottom: 10
  },
  anquilossauro: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    margin: 15
  },
  wyvern: {
    width: "100%",
    height: 200
  },
  barionix: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});