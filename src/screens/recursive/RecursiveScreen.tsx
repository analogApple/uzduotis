import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Dialog from 'react-native-dialog';
import {ITreeItem} from '../../types/interfaces/ITreeItem';
import {renderTabs} from '../../utils/rederTabs';

const INITIAL_STATE: Record<number, ITreeItem> = {
  0: {
    depth: 0,
    key: '00',
    itemsIds: [],
    name: 'TREE',
    id: 0,
  },
};

const RecursiveScreen = () => {
  const [itemsByIds, setItemsByIds] = useState(INITIAL_STATE);
  const [selectedItem, setSelectedItem] = useState<ITreeItem>();
  const [itemName, setItemName] = useState('');

  const addItem = () => {
    if (selectedItem) {
      const id = Object.keys(itemsByIds).length + 1;

      setItemsByIds((cv) => {
        const depth = cv[selectedItem.id].depth + 1;
        const key = `${depth} ${cv[selectedItem.id].itemsIds.length + 1}`;

        return {
          ...cv,
          [selectedItem.id]: {
            ...cv[selectedItem.id],
            itemsIds: [...cv[selectedItem.id].itemsIds, id],
          },
          [id]: {
            depth: cv[selectedItem.id].depth + 1,
            key,
            itemsIds: [],
            name: itemName,
            id,
          },
        };
      });
    }
    setSelectedItem(undefined);
    setItemName('');
  };

  const renderTreeItem = (id: number) => {
    return (
      <>
        <Text
          onPress={() => setSelectedItem(itemsByIds[id])}
          key={itemsByIds[id].key}>
          {renderTabs(itemsByIds[id].depth)}
          {itemsByIds[id].name}
        </Text>
        {itemsByIds[id].itemsIds.map(renderTreeItem)}
      </>
    );
  };

  const closeDialog = () => {
    setSelectedItem(undefined);
  };

  return (
    <View>
      {renderTreeItem(0)}
      <Dialog.Container visible={!!selectedItem}>
        <Dialog.Title>Enter tree item name</Dialog.Title>
        <Dialog.Input onChangeText={setItemName} />
        <Dialog.Button label="Cancel" onPress={closeDialog} />
        <Dialog.Button label="OK" onPress={addItem} />
      </Dialog.Container>
    </View>
  );
};

export default RecursiveScreen;
