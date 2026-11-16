import {useState} from 'react';
import {TextInput, FlatList, Text, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Note } from '../types/Note';


export default function Notes () {

  const [note, setNote]= useState ('');

  const [noteslist, setNoteslist] = useState <Note[]>([]); 

  const handleSave = ()=> {
    setNoteslist([Note]);
  }

  return ( 
      <SafeAreaView style={styles.container}>
        <TextInput 
          style={{fontSize: 18, width: 200}} 
          placeholder='Add new note' 
          value = {note}
          onChangeText={text => setNote(text)}
        />
        <Button title="Save" onPress={handleSave} />
        <FlatList>
        </FlatList>
      </SafeAreaView>
  );
}