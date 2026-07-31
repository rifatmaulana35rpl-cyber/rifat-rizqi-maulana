console.log("nama : Rifat Rizqi Maulana");//string
console.log("kelas : RPL 4");//number

const mobil = {
    Merek: "Toyota",
    Model: "Avanza",
    Tahun: 2022,
    Bekas: false,
    PlatNomor: null
};
console.log("Merek : " + mobil.Merek); //string
console.log("Model : " + mobil.Model); //string
console.log("Tahun : " + mobil.Tahun); //number
console.log("Bekas : " + mobil.Bekas); //boolean
console.log("Plat Nomor : " + mobil.PlatNomor); //null
//template literal
console.log(`Merek : ${mobil.Merek}, Model : ${mobil.Model}, Tahun : ${mobil.Tahun}, Bekas : ${mobil.Bekas}, Plat Nomor : ${mobil.PlatNomor}`);