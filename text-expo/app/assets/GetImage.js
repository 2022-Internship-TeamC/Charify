import React, {useState} from 'react';
import {View, Image, Button, Platform, SafeAreaView} from 'react-native';
import * as ImagePicker from "expo-image-picker";

const SERVER_URL = 'http://172.30.1.87:8000/';

/*
const createFormData = (body, photo  = {}) => {
  const data = new FormData();

  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });

  return data;
};
 */


const GetImage = () => {
  const [photo, setPhoto] = useState(null);

  var data = new FormData()

  const handleChoosePhoto = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setPhoto(result);
      var userimage = {
        uri: result,
        type: 'multipart/form-data',
        name: 'userimage.jpg'
      }
      data.append('id_ch', userimage)
    }
  };

  const handleUploadPhoto = () => {
    fetch(`http://172.30.1.87:8000/characterize/`, {
      method: 'POST',
      headers: {
      'content-type': 'multipart/form-data',
      },
      body: data
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {photo && (
        <View>
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300}}
          />
          <Button title="Upload Photo" onPress={handleUploadPhoto} />
        </View>
      )}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
    </SafeAreaView>
  );
};

export default GetImage;