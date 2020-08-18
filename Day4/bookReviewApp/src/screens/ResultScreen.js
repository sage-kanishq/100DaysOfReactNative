import React, {useEffect, useState} from 'react';
import {Button, FlatList, View, Text, Image} from 'react-native';
import Search from '../components/Search';
import {Card} from 'react-native-paper';
export default function Result() {
  const [books, setBooks] = useState('');
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);

  const getResultBooks = (query) => {
    const apiKey = 'xSDZcZ05hVR1LzvvqkJg';
    const parseString = require('react-native-xml2js').parseString;

    const url = `https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${query}`;
    fetch(url)
      .then((resp) => resp.text())
      .then((data) => {
        parseString(data, function (err, result) {
          setBooks(data);
        }).catch((err) => {
          console.log(err);
        });
      });
  };

  const parseBooks = async (bookName) => {
    const booksInfo = [];
    const XMLParser = require('react-xml-parser');
    getResultBooks(bookName);
    let xml = new XMLParser().parseFromString(books);

    const query = xml.getElementsByTagName('best_book');

    query.map((item) => {
      let bookInfo = {};
      item.children.map((attr) => {
        if (attr.name === 'title') {
          bookInfo.title = attr.value;
        } else if (attr.name === 'author') {
          bookInfo.author = attr.children[1].value;
        } else if (attr.name === 'image_url') {
          bookInfo.image_url = attr.value;
        } else if (attr.name === 'id') {
          bookInfo.id = `${attr.value}`;
        }
      });
      booksInfo.push(bookInfo);
    });
    await setInfo(booksInfo);
  };

  return (
    <View style={{flex: 1}}>
      <Search pressHandler={getResultBooks} parseResult={parseBooks} />
      <FlatList
        data={info}
        style={{flex: 1}}
        renderItem={({item}) => {
          return (
            <Card style={{elevation: 25, margin: 10, padding: 30}}>
              <Image
                source={{uri: item.image_url}}
                style={{height: 250, width: 160}}
              />
              <Text style={{fontSize: 19}}>{item.title}</Text>
              <Text style={{fontSize: 17}}>by {item.author}</Text>
            </Card>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
