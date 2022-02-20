var test = new Vue({
  el: '#app',
  data: {
    tipesurat: '',
    sah: {},
    ssah: '03',
    kosong: {},
    gabung: {},
    userlogin: {},
    pesane: '',
    userid: '003',
    userpass: '3333',
    coba: '123',
    snama: '',
    sket: 'KTP  ',
    sinput: '',
    searchString: "",
    carimeja: 'a',
    caristring: "",
    cariket: "",
    carikey: "",
    message: "",
    surat: {},
    keterangan: {},
    pketerangan: {},
    aketerangan: {},
    user: {},
    puser: {},
    warga2: {},
    xxx: [],
    "warga": [
      {
        "nama": "TEGAR RAMADHAN NANI",
        "alamat": "JL ANTAPANI I NO  1",
        "kk": "3273202406110002",
        "nk": "3273201301990001\t",
        "kelamin": "Laki-laki",
        "lahir": "BANDUNG",
        "tgl_lahir": "13-01-1999",
        "status": "Belum kawin",
        "agama": "ISLAM",
        "pendidikan": "SMA/MAHASISWA",
        "pekerjaan": "PELAJAR/MAHASISWA",
        "keluarga": "Anak kandung",
        "darah": "O",
        "menetap": "2011",
        "rumah": "MILIK SENDIRI",
        "pindah": "",
        "hp": "081807264745",
        "rt": "",
        "rfw": ""
      },
    ],
    "sah": [],

  },

  mounted: function () {
    window.test = this;
  },

  methods: {

  }

})

function awal() {
jj = localStorage.getItem('bahan');
xx = JSON.parse(jj);
test.surat = xx;
jj = localStorage.getItem('userlogin');
xx = JSON.parse(jj);
test.userlogin = xx;
tItem('userlogin', bbb);    
}

awal()