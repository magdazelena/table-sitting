import _ from 'lodash';

export default function calculateTables(mainList, groups, exclusions) {
  //first let's group
  let mainListCopy = [...mainList];
  const groupedLists = [];
  for (const group of groups) {
    const tempList = _.filter(mainList, (i) => group.includes(i));
    mainListCopy = _.difference(mainListCopy, group);
    groupedLists.push(tempList);
  }
  groupedLists.push(mainListCopy);
  //let's exclude now
  //1. let's pick a group that contains exclusions and skip the rest
  groupedLists.forEach((list) => {
    list.sort()
    if (_.intersection(list, ...exclusions).length !== 2) return list;
    //find last index of exclusion
  });
  return groupedLists
}


function interfere(list, exclusions) {
  //find indexes of possible exclusions
  let indexes = getIndexes(list, exclusions)
  do {
    //interefring
    const i = findIndexOfFirstConsecutivePair(indexes)
    const items = mapItemsToKeys(list)


  } while (isConsecutive(indexes))
  return list
}

function findIndexOfFirstConsecutivePair(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1] - 1) return array[i]
  }
}

function isConsecutive(array) {
  return array.reduce((output, lastest) => (output ? (output + 1 === lastest ? lastest : false) : false));
}

function getIndexes(source, array) {
  return array.map(item => source.indexOf(item))
}
function mapItemsToKeys(array) {
  const object = []
  for (let i = 0; i < array.length; i++) {
    if (Object.keys(object).includes(array[i])) {
      object[array[i]].push(i)
    } else {
      object.push({
        [array[i]]: [i]
      })
    }
  }
  return object
}