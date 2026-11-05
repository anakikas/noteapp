import {useState} from 'react';
import {TextInput, View, Flatlist} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Note } from '../types/Note';


export default function Notes () {

  const [note, setNote]= useState ('');

  const [noteslist, setNoteslist] = useState <Note[]>([]); 

  const handleSave = ()=> {
    setNoteslist([Note]);
  }

const Notes = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
        <TextInput 
          style={{fontSize: 18, width: 200}} 
          placeholder='Enter a keyword' 
          value={keyword}
          onChangeText={text => setKeyword(text)} 
        />
        <Button title="Save" onPress={handleSave} />
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
};


}