const mainList = [1, 2, 1, 3, 4, 4, 1, 2, 3, 4, 5, 6, 7, 6];
//assumptions:
// -same numbers together
// - exclusions can't be next to one another
// - groups may or may not be together
// asumptions have priority as listed

const exclusions = [[3, 4]];
const groups = [
  [1, 4, 3, 6],
  [2, 5]
];
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
  if (_.intersection(list, ...exclusions).length !== 2) return;
  exclusions.forEach((elist) => {
    console.log(list, "presort");
    list = sortNeighbors(list, elist);
    console.log(list);
  });
});

