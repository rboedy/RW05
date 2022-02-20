Vue.filter('fsah', function (value, slihat) {
  var result = [];
  if (!slihat) {
    return value;
  }
  slihat = slihat.trim().toLowerCase();
  result = value.filter(function (itemz) {
    if (itemz.rt.toLowerCase().indexOf(slihat) !== -1) {
      return itemz;
    }
  })
  return result;
})

Vue.filter('fnama', function (value, caristring) {
  var result = [];
  if (!caristring) {
    return value;
  }
  caristring = caristring.trim().toUpperCase();
  result = value.filter(function (item) {
    b = item.nama + item.alamat;
    if (b.toUpperCase().indexOf(caristring) !== -1) {
      return item;
    }
  })
  return result;
});


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


    xlogin: function () {
      test.pesane = 'Login gagal';
      alert('qw');
    },

    pilket: function (message) {
      this.pketerangan = message;
      document.getElementById("TextArea1").value = this.pketerangan.isi;
      test.tipesurat = this.pketerangan.nama;
      //      this.surat=message;
      //      ShowObject('Layer4', 1);
    },

    lihat: function (bahan) {
      
      bbb = JSON.stringify(bahan);
      localStorage.setItem('bahan', bbb);    
      bbb = JSON.stringify(test.userlogin);
      localStorage.setItem('userlogin', bbb);    
      window.location.href='./page2.html';return false;
    },

    res: function () {
      ShowObject('Layer4', 0);
      test.snama = '';
      document.getElementById('Layer4').scroll({ top: 0, behavior: 'smooth' });
    },

    say: function (message, i) {
      //alert(i);
      //alert(message.nama);
      test.snama = message.nama;
      this.surat = message;
      //ShowObject('Layer4', 1);
      ShowObjectWithEffect('Layer4', 1, 'slideright', 200);
      last_layar='Layer4';
    },

  }

})
ShowObject('Layer5', 0);
baca_user();
baca_keterangan();
baca_sah();
test.res();
last_layar='';

jj = localStorage.getItem('userlogin');
log = 0;
if (jj == null) {
  log = 1;
}
else {
  xx = JSON.parse(jj);
  test.userlogin = xx;
  if (test.userlogin[0].nama == '') {
    log = 1;
  }
}
if (log == 1) {
  ShowObject('Layer5', 1);
} else {
  test.userid=test.userlogin[0].kode;
  test.userpass=test.userlogin[0].password;
  login();
}



function baca_sah() {
  //localStorage.removeItem('sah');
  jj = localStorage.getItem('sah');
  if (jj==null) {
    q = 'https://json.extendsclass.com/bin/45f0b6b3b6ba';
    qq = bacaurl(q);
    ww = JSON.parse(qq);
    test.sah = ww;
    bbb = ww;
    bbb = JSON.stringify(bbb);
    localStorage.setItem('sah', bbb);
  } else {
    xx = JSON.parse(jj);
    //alert(xx[1].nama);
    test.sah = xx;
  };
}

function baca_user() {
//localStorage.removeItem('user');
jj = localStorage.getItem('user');
if (jj == null) {
  var q = 'https://json.extendsclass.com/bin/74ddb2908e69';
  qq = bacaurl(q);
  ww = JSON.parse(qq);
  test.user = ww.user;
  bbb = ww.user;
  //alert(bbb[0].nama);
  bbb = JSON.stringify(bbb);
  localStorage.setItem('user', bbb);
} else {
  xx = JSON.parse(jj);
  //alert(xx[1].nama);
  test.user = xx;
};
}


function baca_keterangan() {

localStorage.removeItem('template');
jj = localStorage.getItem('template');
if (jj == null) {
  var q = 'https://json.extendsclass.com/bin/9d415ade361f';
  qq = bacaurl(q);
  //alert(qq);
  ww = JSON.parse(qq);
  test.aketerangan = ww.surat;
  bbb = ww.surat;
  bbb = JSON.stringify(bbb);
  localStorage.setItem('template', bbb);
} else {
  xx = JSON.parse(jj);
  //alert(xx[1].nama);
  test.aketerangan = xx;
};
var filtered = test.aketerangan.filter(function (value, index, arr) {
  return value.nama != "";
});
test.keterangan = filtered;

}





function simpan_template() {
  var q = 'https://json.extendsclass.com/bin/9d415ade361f';
  qq = bacaurl(q);
  ww = JSON.parse(qq);
  aa = ww;
  ww.surat = test.aketerangan;
  bbb = ww.surat;
  bbb = JSON.stringify(bbb);
  localStorage.setItem('template', bbb);
  bbb = JSON.stringify(ww);
  tulisurl(q, bbb);
  var filtered = test.aketerangan.filter(function (value, index, arr) {
    return value.nama != "";
  });
  test.keterangan = filtered;
  alert('Proses Update berhasil');
}

function bacawarga() {
  q = 'x';
  q2 = 'x';
  test.warga = [];
  test.ssah = test.userlogin[0].rt;
  if (test.userid == '002') {
    q = 'https://json.extendsclass.com/bin/282b6b99c251?12345';
    q2 = 'x';
  };
  if (test.userid == '003') {
    q = 'https://json.extendsclass.com/bin/386e5d2d0942';
    q2 = 'https://json.extendsclass.com/bin/06dca4cc2c35';
  };
  if (test.userid == '004') {
    q = 'https://json.extendsclass.com/bin/44f049b79413';
    q2 = 'https://json.extendsclass.com/bin/06dca4cc2c35';
  };
  if (test.userid == '005') {
    return;
    q = 'https://json.extendsclass.com/bin/44f049b79413';
    q2 = 'https://json.extendsclass.com/bin/06dca4cc2c35';
  };
  if (test.userid == '006') {
    return;
    q = 'https://json.extendsclass.com/bin/44f049b79413';
    q2 = 'https://json.extendsclass.com/bin/06dca4cc2c35';
  };
  if (test.userid == '001') {
    return;
    q = 'https://json.extendsclass.com/bin/44f049b79413';
    q2 = 'https://json.extendsclass.com/bin/06dca4cc2c35';
  };
  if (test.userid == '000') {

    return;
    q = 'https://json.extendsclass.com/bin/44f049b79413';
    q2 = 'https://json.extendsclass.com/bin/06dca4cc2c35';
  };


  fw = 'warga' + test.userlogin[0].rt;
  //alert(fw); 
  //localStorage.removeItem(fw);
  jj = localStorage.getItem(fw);
  //alert('f'+fw+jj);
  if (jj == null) {
    //alert('simpan');

    if (q2 == 'x') {
      qq = bacaurl(q);
      ww = JSON.parse(qq);
      test.warga = ww.data;
      bbb = ww.data;
      bbb = JSON.stringify(bbb);
      localStorage.setItem(fw, bbb);
    } else {
      qq = bacaurl(q);
      ww = JSON.parse(qq);
      test.warga = ww.data;
      test.warga2 = test.warga;
      qq = bacaurl(q2);
      ww = JSON.parse(qq);
      test.warga = ww.data;
      test.warga = test.warga.concat(test.warga2);
      bbb = test.warga; //ww.data;
      bbb = JSON.stringify(bbb);
      //alert('2  '+bbb);
      localStorage.setItem(fw, bbb);

    };
  } else {
    //alert('e  '+jj);
    xx = JSON.parse(jj);
    test.warga = xx;
  };
}

function login() {

  test.userlogin = test.user.filter(function (elem) {
    if (elem.kode == test.userid) { return elem };
  });

  if (test.userlogin.length > 0) {
    if (test.userpass != test.userlogin[0].password) {
      test.userid = '';
      test.userpass = '';
      test.pesane = 'User id / Password Salah';
      return;
    }
  }
  else {
    test.userid = '';
    test.userpass = '';
    test.pesane = 'User id / Password Salah';
    return;
  };
  bacawarga();
  if (q == '') {
    test.pesane = 'User Id Salah';
    return;
  }
  bbb = JSON.stringify(test.userlogin);
  localStorage.setItem('userlogin', bbb);    
  ShowObject('Layer6', 0);
  ShowObject('Layer7', 0);
  ShowObjectWithEffect('Layer5', 0, 'slideleft', 500);
}

function bersih(ly) {
  test.res();
  
  if (last_layar=='Layer4') {
    ShowObject('Layer6', 0);
    ShowObject('Layer7', 0);
    ShowObjectWithEffect(last_layar, 0, 'slideleft', 500)
  };
  if (last_layar=='Layer6') {
    ShowObject('Layer4', 0);
    ShowObject('Layer7', 0);
    ShowObjectWithEffect(last_layar, 0, 'slideleft', 500)
  };
  if (last_layar=='Layer7') {
    ShowObject('Layer6', 0);
    ShowObject('Layer4', 0);
    ShowObjectWithEffect(last_layar, 0, 'slideleft', 500)
  }
  ShowObjectWithEffect(ly, 1, 'slideright', 500);
  document.getElementById(ly).scroll({ top: 0, behavior: 'smooth' });
  last_layar=ly;
}

function bacadata(q) {
  qq = bacaurl(q);
  ww = JSON.parse(qq);
  test.warga = ww.data;
};




function bacaurl(theUrl) {
  let xmlhttp;

  if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      return xmlhttp.responseText;
    }
  }
  url = theUrl;
  //alert(url + ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime());
  xmlhttp.open("GET", url + ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime(), false);
  xmlhttp.send();

  //xmlhttp.open("GET", theUrl, false);
  //xmlhttp.send();

  return xmlhttp.response;
}



function terbit() {
  q = 'https://json.extendsclass.com/bin/45f0b6b3b6ba';
  qq = bacaurl(q);
  ww = JSON.parse(qq);
  test.surat.srt = '1';
  test.surat.rt = test.userlogin[0].rt;
  test.surat.ket = document.getElementById("TextArea1").value;
  test.surat.sek = test.userlogin[0].alamat;
  test.surat.namart = test.userlogin[0].nama;
  test.surat.hprt = test.userlogin[0].hp;
  test.surat.nohp = test.tipesurat;
  test.surat.no = '';
  xx = test.surat;


  var ter = test.sah; //create an array
  ter.splice(0, ter.length);
  ter = ter.concat(xx);
  ter = ter.concat(ww);
  xx = JSON.stringify(ter);
  //alert(ter[0].nama );
  //alert(ter[1].nama );
  b = tulisurl(q, xx);
  test.sah = ter;

  alert('Proses sukses');
  ShowObject('Layer4', 0);
  ShowObject('Layer6', 1);
  test.snama = '';
  document.getElementById('Layer4').scroll({ top: 0, behavior: 'smooth' });
}

function tulisurl(theUrl, isi) {
  let xmlhttp;

  if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      return xmlhttp.responseText;
    }
  }

  url = theUrl;
  xmlhttp.open("PUT", url, false);
  xmlhttp.send(isi);


  return xmlhttp.response;
}

function update() {
  
  localStorage.removeItem('template');
  localStorage.removeItem('user');
  localStorage.removeItem('sah');
  //alert(2); 
  baca_keterangan();
  //alert(4); 
  baca_sah();
  //alert(5); 
  fw = 'warga' + test.userlogin[0].rt;
  localStorage.removeItem(fw);
  //alert(6); 
  bacawarga();
  //alert(7); 
  baca_user();
  alert('update selesai');
  //alert(3); 
}


//q = 'https://json.extendsclass.com/bin/45f0b6b3b6ba';
//qq = bacaurl(q);
//ww = JSON.parse(qq);
//test.sah = ww;
//alert(test.sah[0].nama + test.sah[1].nama);


