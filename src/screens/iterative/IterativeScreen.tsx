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

const IterativeScreen = () => {
  const [itemsByIds, setItemsByIds] = useState(INITIAL_STATE);
  const [itemsIds, setItemsIds] = useState([0]);
  const [selectedItem, setSelectedItem] = useState<ITreeItem>();

  const [itemName, setItemName] = useState('');

  const addItem = () => {
    if (selectedItem) {
      const selectedItemsIndex = itemsIds.findIndex(
        (item) => item === selectedItem.id,
      );
      const id = itemsIds.length + 1;

      setItemsByIds((cv) => {
        const depth = cv[selectedItem.id].depth + 1;
        const key = `${depth} ${selectedItemsIndex}`;

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
      setItemsIds((cv) => {
        const copy = [...cv];
        copy.splice(selectedItemsIndex + 1, 0, id);
        return copy;
      });
    }

    setSelectedItem(undefined);
    setItemName('');
  };

  const handlePress = (item: ITreeItem) => {
    setSelectedItem(item);
  };

  const renderTreeItem = (id: number) => {
    return (
      <Text
        onPress={() => handlePress(itemsByIds[id])}
        key={itemsByIds[id].key}>
        {renderTabs(itemsByIds[id].depth)}
        {itemsByIds[id].name}
      </Text>
    );
  };

  const closeDialog = () => {
    setSelectedItem(undefined);
  };

  return (
    <View>
      {itemsIds.map(renderTreeItem)}
      <Dialog.Container visible={!!selectedItem}>
        <Dialog.Title>Enter tree item name</Dialog.Title>
        <Dialog.Input onChangeText={setItemName} />
        <Dialog.Button label="Cancel" onPress={closeDialog} />
        <Dialog.Button label="OK" onPress={addItem} />
      </Dialog.Container>
    </View>
  );
};

export default IterativeScreen;
