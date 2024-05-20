import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
// Componentes de página
const PaginaInicial = () => {
 return (
<View style={styles.pagina}>
<Text style={styles.textoPagina}>Meu nome é Clarice Rodrigues,{"\n"}seja bem vindo ao meu portfolio!{"\n"}</Text>
<Image
  source={require('./assets/claricefoto.jpg')}
  style={styles.image}
/>
</View>
 );
};
const Pagina1 = () => {
 return (
<View style={styles.pagina}>
<Text style={styles.textoPagina}>Nascida e criada em Recife, tenho 18 anos e, atualmente, estou cursando Análise e Desenvolvimento de Sistemas pelo programa Embarque Digital. {"\n"}
{"\n"}Sou aspirante a Gerente de Projetos e cultivo uma paixão pela área da comunicação e artes, que instigo a partir da minha segunda graduação: Jornalismo pela UFPE.</Text>
</View>
 );
};
const Pagina2 = () => {
 return (
<View style={styles.pagina}>
<Text style={styles.textoPagina}>Sou fluente em inglês e me profissionalizei em Front End pelo curso FAST - Aceleração de Front End da Cesar School.{"\n"}
{"\n"}A partir dessas experiencias, minhas soft e hard skills para o mercado, e atingir meu objetivo de ser Gerente de Projetos.</Text>
</View>
 );
};
const Pagina3 = () => {
  const handlePress = () =>{
    Linking.openURL('https://github.com/clarirodrigues');
  }
 return (
<View style={styles.pagina}>
<Text style={styles.textoPagina}>Tive a oportunidade de botar minhas skills em prática com projetos de imersão, onde me destaquei pela liderança, criatividade e comunicação.
{"\n"}Como você pode ver, acessando o link do meu github: <Text style={styles.link} onPress={handlePress}>
{'https://github.com/clarirodrigues'}

</Text>
</Text>
</View>
 );
};
const App = () => {
 const [menuAberto, setMenuAberto] = useState(false);
 const [paginaAtual, setPaginaAtual] = useState('Página Inicial');
 const toggleMenu = () => {
   setMenuAberto(!menuAberto);
 };
 const navegarPara = (pagina) => {
   setPaginaAtual(pagina);
   setMenuAberto(false);
 };
 // Renderização condicional da página atual
 const renderizarPagina = () => {
   switch (paginaAtual) {
     case 'Página Inicial':
       return <PaginaInicial />;
     case 'Sobre mim':
       return <Pagina1 />;
     case 'Skills':
       return <Pagina2 />;
     case 'Projetos':
       return <Pagina3 />;
     default:
       return null;
   }
 };
 return (
<View style={styles.container}>
     {/* Cabeçalho */}
<View style={styles.header}>
<Text style={styles.titulo}>Clari</Text>
<TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
<Text>☰</Text>
</TouchableOpacity>
</View>
     {/* Menu */}
     {menuAberto && (
<View style={styles.menu}>
<TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
<Text style={styles.menuItemText}>Página Inicial</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Sobre mim')}>
<Text style={styles.menuItemText}>Sobre mim</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Skills')}>
<Text style={styles.menuItemText}>Skills</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Projetos')}>
<Text style={styles.menuItemText}>Projetos</Text>
</TouchableOpacity>
</View>
     )}
     {/* Conteúdo */}
<View style={styles.content}>{renderizarPagina()}</View>
</View>
 );
};
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   paddingTop: 35,
 },
 header: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: 12,
   borderBottomWidth: 1,
   borderBottomColor: '#ccc',
   backgroundColor: '#f1f1f1'
 },
 titulo: {
   fontSize: 20,
   fontWeight: 'bold',
 },
 menuIcon: {
   padding: 10,
 },
 menu: {
   backgroundColor: '#f9f9f9',
   padding: 12,
 },
 menuItem: {
   paddingVertical: 12,
   borderBottomWidth: 1,
   borderBottomColor: '#ccc',
 },
 menuItemText: {
   fontSize: 16,
 },
 content: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 pagina: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 textoPagina: {
   fontSize: 18,
 },
 image: {
  width: 210,
  height: 210,
  marginBottom: 200,
  borderRadius: 260,
},
link: {
  color: 'salmon',
  textDecorationLine: 'underline',
},

});
export default App;