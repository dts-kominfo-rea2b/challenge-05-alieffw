const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter1 = (nama, sort) => (sort(nama).map((item, index) => `${index+1}. ${item}`))

const sorter = (nama, sort) =>
{
  let varIndex = [];
  varIndex = sort(nama);

//   for(let index = 0; index < nama.length; index++)
//   {
//    varIndex.push(`${sort(nama[index])}`);
//   //  varIndex += index +". "+ ;
//   }
//   //sort(nama)
  
  return varIndex;
}

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = ()=>
{
  return names.sort();
}

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = () =>
{
  return names.sort().reverse();
}

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
