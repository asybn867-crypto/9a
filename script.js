(function () {
  "use strict";

  // ==========================================
  // 1. DATA JADWAL (SUDAH DIPERBAIKI & LENGKAP)
  // ==========================================
  var DATA = {
    "mapel": {"A":"AL-QUR'AN HADITS","B":"AQIDAH AKHLAK","C":"FIQIH","D":"SKI","E":"PENDIDIKAN PANCASILA","F":"BAHASA INDONESIA","G":"BAHASA ARAB","H":"BAHASA INGGRIS","I":"MATEMATIKA","J":"IPA","K":"IPS","L":"SENI TEATER","M":"PENJAS ORKES","N":"INFORMATIKA","O":"MULOK (RISET)","P":"CODING/AI","Q":"KORKULIKULER","R":"BIMBINGAN KONSELING"},
    "guru": {
      "1": "Arsyad, S.Pd., M.Pd", "2": "Wa Ode Raslimin, S.Pd", "3": "Ernawati Angi, S.Pd", "4": "Drs. Samsul",
      "5": "Sitti Rahmatia I.J., S.Pd., M.M", "6": "Halimah, S.Pd.I", "7": "Bayu, S. Or", "8": "La Ode Boy Susanto, S.Pd.",
      "9": "Saswal Daud, S. Pd", "10": "Wa Ode Rustiani, S.Pd", "11": "Nurdiana, S.Pd", "12": "Samsul Akbar, S.Pd",
      "13": "Wa Ode Muhsanah, S.Pd.", "14": "La Ode Arwan, S.Pd", "15": "Mariani, S.Pd.", "16": "Agusriansyah, S.Pd.I",
      "17": "Wa Suriadi, S.Pd", "18": "Istiqomah NuryanI, S.Pd", "19": "Sumila, S.Pd", "20": "Maulana, S.Pd",
      "21": "Muhsiri. A, S.H", "22": "Andi Sriwanti, S.Pd.I", "23": "Nur Syuaiba, S.Mat", "24": "Wa Ode Uka, S.Pd",
      "25": "Rino, S.Pd.", "26": "Nusiasti, S.Pd", "27": "Nur Asti, S.Pd", "28": "Sitti Asriejah S.Si",
      "29": "Amaliyah Sriyanti, S.Pd", "30": "Wa Ode Rika Santika, S.Pd", "31": "Wulandari Rahmatwati, S.Pd",
      "32": "Neneng Apriliyanti, S.Pd", "33": "Tiansi, S.Si", "34": "Wa ode irda Rahmah diangsari, S.Pd", "35": "M.Ikbal Ode, S.S"
    },
    "kelas": ["VII-A","VII-B","VII-C","VII-D","VII-E","VII-F","VII-G","VIII-A","VIII-B","VIII-C","VIII-D","VIII-E","IX-A","IX-B","IX-C","IX-D","IX-E","IX-F"],
    "hari": {
      "SENIN": {"rows": [
        {"type":"lain","label":"UPACARA BENDERA","start":"07:00","end":"07:40"},
        {"type":"kbm","jam":"I","start":"07:40","end":"08:15","e":[["P",12],["I",24],["C",17],["H",11],["M",8],["P",33],["F",2],["I",20],["M",7],["F",19],["P",35],["A",21],["G",29],["J",28],["F",3],["L",34],["B",4],["C",16]]},
        {"type":"kbm","jam":"II","start":"08:15","end":"08:50","e":[["P",12],["I",24],["C",17],["H",11],["M",8],["P",33],["F",2],["I",20],["M",7],["F",19],["P",35],["A",21],["G",29],["J",28],["F",3],["L",34],["B",4],["C",16]]},
        {"type":"kbm","jam":"III","start":"08:50","end":"09:25","e":[["I",24],["A",21],["D",6],["H",11],["Q",8],["H",27],["Q",2],["K",18],["J",28],["F",19],["E",30],["J",33],["G",29],["E",25],["F",3],["A",13],["Q",4],["P",35]]},
        {"type":"lain","label":"ISTIRAHAT I","start":"09:25","end":"10:00"},
        {"type":"kbm","jam":"IV","start":"10:00","end":"10:35","e":[["I",24],["A",21],["D",6],["G",34],["L",15],["H",27],["O",9],["K",18],["J",28],["B",4],["E",30],["J",33],["I",20],["E",25],["G",29],["A",13],["F",3],["P",35]]},
        {"type":"kbm","jam":"V","start":"10:35","end":"11:15","e":[["D",6],["Q",21],["I",24],["G",34],["L",15],["H",27],["O",9],["K",18],["F",19],["B",4],["N",31],["P",35],["I",20],["A",13],["G",29],["O",32],["F",3],["H",11]]},
        {"type":"kbm","jam":"VI","start":"11:15","end":"11:50","e":[["D",6],["F",2],["I",24],["G",34],["H",27],["A",22],["E",30],["J",28],["F",19],["I",23],["N",31],["P",35],["N",12],["A",13],["G",29],["O",32],["F",3],["H",11]]},
        {"type":"lain","label":"ISTIRAHAT II","start":"11:50","end":"12:25"},
        {"type":"kbm","jam":"VII","start":"12:25","end":"13:00","e":[["C",17],["F",2],["L",13],["L",15],["H",27],["A",22],["E",30],["J",28],["I",24],["I",23],["J",33],["N",31],["N",12],["F",3],["E",25],["J",5],["P",35],["H",11]]},
        {"type":"kbm","jam":"VIII","start":"13:00","end":"13:40","e":[["C",17],["Q",2],["L",13],["L",15],["H",27],["Q",22],["Q",30],["Q",28],["I",24],["Q",23],["J",33],["N",31],["Q",12],["F",3],["E",25],["J",5],["P",35],["Q",11]]},
        {"type":"lain","label":"APEL SIANG","start":"13:40","end":"13:55"}
      ]},
      "SELASA": {"rows": [
        {"type":"lain","label":"APEL PAGI","start":"07:00","end":"07:15"},
        {"type":"kbm","jam":"I","start":"07:15","end":"07:55","e":[["M",9],["C",17],["B",15],["K",18],["F",2],["M",8],["H",27],["I",20],["F",19],["N",12],["C",21],["H",35],["H",11],["G",29],["F",3],["B",4],["M",7],["A",13]]},
        {"type":"kbm","jam":"II","start":"07:55","end":"08:35","e":[["M",9],["C",17],["B",15],["K",18],["F",2],["M",8],["H",27],["I",20],["F",19],["N",12],["C",21],["H",35],["H",11],["G",29],["F",3],["B",4],["M",7],["A",13]]},
        {"type":"kbm","jam":"III","start":"08:35","end":"09:15","e":[["Q",9],["N",12],["A",13],["K",18],["Q",2],["Q",8],["H",27],["Q",20],["F",19],["D",26],["Q",21],["H",35],["H",11],["G",29],["C",16],["Q",4],["O",32],["M",7]]},
        {"type":"lain","label":"ISTIRAHAT I","start":"09:15","end":"09:50"},
        {"type":"kbm","jam":"IV","start":"09:50","end":"10:30","e":[["J",28],["N",12],["A",13],["F",2],["E",30],["G",34],["A",22],["L",29],["N",35],["D",26],["K",18],["L",27],["Q",11],["F",3],["C",16],["N",31],["O",32],["M",7]]},
        {"type":"kbm","jam":"V","start":"10:30","end":"11:10","e":[["J",28],["D",6],["Q",13],["F",2],["E",30],["G",34],["A",22],["L",29],["N",35],["J",33],["K",18],["L",27],["I",20],["F",3],["O",32],["N",31],["K",10],["J",5]]},
        {"type":"kbm","jam":"VI","start":"11:10","end":"11:50","e":[["H",35],["D",6],["F",19],["Q",2],["Q",30],["G",34],["Q",22],["Q",29],["G",12],["J",33],["K",18],["Q",27],["I",20],["F",3],["O",32],["Q",31],["K",10],["J",5]]},
        {"type":"lain","label":"ISTIRAHAT II","start":"11:50","end":"12:20"},
        {"type":"kbm","jam":"VII","start":"12:20","end":"13:00","e":[["H",35],["J",28],["F",19],["O",9],["I",24],["C",17],["P",33],["D",22],["G",12],["I",23],["D",26],["E",30],["C",16],["O",11],["I",20],["F",3],["K",10],["L",34]]},
        {"type":"kbm","jam":"VIII","start":"13:00","end":"13:40","e":[["H",35],["J",28],["Q",19],["O",9],["I",24],["C",17],["P",33],["D",22],["G",12],["I",23],["D",26],["E",30],["C",16],["O",11],["I",20],["F",3],["Q",10],["L",34]]},
        {"type":"lain","label":"APEL SIANG","start":"13:40","end":"13:55"}
      ]},
      "RABU": {"rows": [
        {"type":"lain","label":"APEL PAGI","start":"07:00","end":"07:15"},
        {"type":"kbm","jam":"I","start":"07:15","end":"07:55","e":[["J",28],["B",15],["J",33],["M",9],["I",24],["F",2],["N",31],["M",8],["K",18],["E",30],["G",29],["C",21],["J",5],["M",7],["K",10],["I",20],["L",34],["F",3]]},
        {"type":"kbm","jam":"II","start":"07:55","end":"08:35","e":[["J",28],["B",15],["J",33],["M",9],["I",24],["F",2],["N",31],["M",8],["K",18],["E",30],["G",29],["C",21],["J",5],["M",7],["K",10],["I",20],["L",34],["F",3]]},
        {"type":"kbm","jam":"III","start":"08:35","end":"09:15","e":[["N",12],["O",8],["I",24],["Q",9],["B",15],["Q",2],["D",6],["J",28],["K",18],["J",33],["G",29],["Q",21],["M",7],["I",20],["K",10],["H",11],["A",22],["F",3]]},
        {"type":"lain","label":"ISTIRAHAT I","start":"09:15","end":"09:50"},
        {"type":"kbm","jam":"IV","start":"09:50","end":"10:30","e":[["N",12],["O",8],["I",24],["F",2],["B",15],["N",31],["D",6],["J",28],["L",29],["J",33],["F",19],["K",18],["M",7],["I",20],["Q",10],["H",11],["A",22],["B",4]]},
        {"type":"kbm","jam":"V","start":"10:30","end":"11:10","e":[["O",8],["L",13],["P",26],["F",2],["O",9],["N",31],["I",24],["N",35],["L",29],["Q",33],["F",19],["K",18],["P",12],["L",34],["I",20],["H",11],["C",16],["B",4]]},
        {"type":"kbm","jam":"VI","start":"11:10","end":"11:50","e":[["O",8],["L",13],["P",26],["F",2],["O",9],["K",10],["I",24],["N",35],["Q",29],["L",27],["J",33],["K",18],["P",12],["L",34],["I",20],["Q",11],["C",16],["Q",4]]},
        {"type":"lain","label":"ISTIRAHAT II","start":"11:50","end":"12:20"},
        {"type":"kbm","jam":"VII","start":"12:20","end":"13:00","e":[["L",13],["I",24],["O",8],["N",31],["D",6],["K",10],["L",29],["O",26],["A",22],["L",27],["J",33],["F",19],["E",25],["J",28],["P",35],["I",20],["F",3],["J",5]]},
        {"type":"kbm","jam":"VIII","start":"13:00","end":"13:40","e":[["L",13],["I",24],["O",8],["N",31],["D",6],["K",10],["L",29],["O",26],["A",22],["Q",27],["J",33],["F",19],["E",25],["J",28],["P",35],["I",20],["F",3],["J",5]]},
        {"type":"lain","label":"APEL SIANG","start":"13:40","end":"13:55"}
      ]},
      "KAMIS": {"rows": [
        {"type":"lain","label":"APEL PAGI","start":"07:00","end":"07:15"},
        {"type":"kbm","jam":"I","start":"07:15","end":"07:55","e":[["G",12],["M",9],["E",30],["I",24],["C",17],["F",2],["J",28],["H",32],["B",16],["M",8],["M",7],["G",29],["K",10],["H",11],["N",31],["G",21],["I",20],["E",25]]},
        {"type":"kbm","jam":"II","start":"07:55","end":"08:35","e":[["G",12],["M",9],["E",30],["I",24],["C",17],["F",2],["J",28],["H",32],["B",16],["M",8],["M",7],["G",29],["K",10],["H",11],["N",31],["G",21],["I",20],["E",25]]},
        {"type":"kbm","jam":"III","start":"08:35","end":"09:15","e":[["G",12],["Q",9],["Q",30],["P",26],["J",33],["F",2],["I",24],["H",32],["D",22],["P",35],["L",27],["G",29],["K",10],["H",11],["Q",31],["G",21],["J",5],["I",20]]},
        {"type":"lain","label":"ISTIRAHAT I","start":"09:15","end":"09:50"},
        {"type":"kbm","jam":"IV","start":"09:50","end":"10:30","e":[["F",2],["G",12],["K",18],["P",26],["J",33],["J",28],["I",24],["C",15],["D",22],["P",35],["L",27],["F",19],["Q",10],["Q",11],["B",4],["F",3],["J",5],["I",20]]},
        {"type":"kbm","jam":"V","start":"10:30","end":"11:10","e":[["F",2],["G",12],["K",18],["J",33],["P",26],["J",28],["C",17],["C",15],["E",25],["A",21],["Q",27],["F",19],["L",34],["D",6],["B",4],["F",3],["H",11],["K",10]]},
        {"type":"kbm","jam":"VI","start":"11:10","end":"11:50","e":[["F",2],["G",12],["K",18],["J",33],["P",26],["E",30],["C",17],["Q",15],["E",25],["A",21],["I",23],["F",19],["L",34],["D",6],["Q",4],["F",3],["H",11],["K",10]]},
        {"type":"lain","label":"ISTIRAHAT II","start":"11:50","end":"12:20"},
        {"type":"kbm","jam":"VII","start":"12:20","end":"13:00","e":[["I",24],["J",28],["J",33],["D",6],["N",31],["E",30],["B",4],["F",19],["P",12],["O",27],["I",23],["D",26],["A",13],["I",20],["J",5],["E",25],["H",11],["K",10]]},
        {"type":"kbm","jam":"VIII","start":"13:00","end":"13:40","e":[["I",24],["J",28],["J",33],["D",6],["N",31],["Q",30],["B",4],["F",19],["P",12],["O",27],["Q",23],["D",26],["A",13],["I",20],["J",5],["E",25],["Q",11],["Q",10]]},
        {"type":"lain","label":"APEL SIANG","start":"13:40","end":"13:55"}
      ]},
      "JUMAT": {"rows": [
        {"type":"lain","label":"SENAM SEHAT & GEBASIS","start":"07:00","end":"07:50"},
        {"type":"kbm","jam":"I","start":"07:50","end":"08:20","e":[["F",2],["K",18],["F",19],["A",22],["G",34],["J",28],["M",8],["E",25],["H",32],["G",29],["H",35],["J",33],["F",3],["B",26],["J",5],["M",7],["I",20],["N",31]]},
        {"type":"kbm","jam":"II","start":"08:20","end":"08:50","e":[["F",2],["K",18],["F",19],["A",22],["G",34],["J",28],["M",8],["E",25],["H",32],["G",29],["H",35],["J",33],["F",3],["B",26],["J",5],["M",7],["I",20],["N",31]]},
        {"type":"kbm","jam":"III","start":"08:50","end":"09:15","e":[["Q",2],["K",18],["F",19],["Q",22],["G",34],["O",9],["Q",8],["P",12],["H",32],["G",29],["H",35],["Q",33],["F",3],["Q",26],["H",11],["D",6],["E",25],["Q",31]]},
        {"type":"lain","label":"ISTIRAHAT","start":"09:15","end":"09:30"},
        {"type":"kbm","jam":"IV","start":"09:30","end":"10:10","e":[["A",13],["F",2],["H",27],["E",30],["A",22],["O",9],["K",10],["P",12],["C",15],["K",18],["F",19],["I",20],["B",26],["N",31],["H",11],["D",6],["E",25],["G",21]]},
        {"type":"kbm","jam":"V","start":"10:10","end":"10:50","e":[["A",13],["F",2],["H",27],["E",30],["A",22],["I",24],["K",10],["B",17],["C",15],["K",18],["F",19],["I",20],["B",26],["N",31],["H",11],["J",5],["D",6],["G",21]]},
        {"type":"kbm","jam":"VI","start":"10:50","end":"11:20","e":[["Q",13],["F",2],["H",27],["Q",30],["Q",22],["I",24],["K",10],["B",17],["Q",15],["K",18],["F",19],["Q",20],["Q",26],["Q",31],["Q",11],["J",5],["D",6],["G",21]]},
        {"type":"lain","label":"APEL SIANG","start":"11:20","end":"11:30"}
      ]},
      "SABTU": {"rows": [
        {"type":"lain","label":"APEL PAGI & ROHIS","start":"07:00","end":"07:30"},
        {"type":"kbm","jam":"I","start":"07:30","end":"08:05","e":[["K",18],["P",31],["M",9],["C",17],["F",2],["I",24],["G",34],["G",12],["J",28],["F",19],["B",4],["M",7],["F",3],["K",10],["A",13],["C",16],["G",21],["I",20]]},
        {"type":"kbm","jam":"II","start":"08:05","end":"08:45","e":[["K",18],["P",31],["M",9],["C",17],["F",2],["I",24],["G",34],["G",12],["J",28],["F",19],["B",4],["M",7],["F",3],["K",10],["A",13],["C",16],["G",21],["I",20]]},
        {"type":"kbm","jam":"III","start":"08:45","end":"09:25","e":[["K",18],["E",25],["Q",9],["I",24],["F",2],["P",33],["G",34],["G",12],["Q",28],["H",32],["O",27],["B",4],["O",11],["K",10],["M",7],["P",35],["G",21],["D",6]]},
        {"type":"lain","label":"ISTIRAHAT I","start":"09:25","end":"09:55"},
        {"type":"kbm","jam":"IV","start":"09:55","end":"10:30","e":[["B",15],["E",25],["G",34],["I",24],["K",18],["P",33],["F",2],["F",19],["O",26],["H",32],["O",27],["B",4],["O",11],["Q",10],["M",7],["P",35],["N",31],["D",6]]},
        {"type":"kbm","jam":"V","start":"10:30","end":"11:05","e":[["B",15],["E",25],["G",34],["I",24],["K",18],["P",33],["F",2],["F",19],["O",26],["H",32],["O",27],["B",4],["O",11],["Q",10],["M",7],["P",35],["N",31],["D",6]]},
        {"type":"kbm","jam":"VI","start":"11:05","end":"11:40","e":[["B",15],["E",25],["G",34],["I",24],["K",18],["P",33],["F",2],["F",19],["O",26],["H",32],["O",27],["B",4],["O",11],["Q",10],["M",7],["P",35],["N",31],["D",6]]},
        {"type":"lain","label":"APEL SIANG","start":"11:40","end":"12:00"}
      ]}
    }
  };

  var HARI = ["SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU"];
  var MP = DATA.mapel;
  var kelasIdx = 12; // IX-A index
  var STUDY_START = 19 * 60 + 45;
  var STUDY_END = 20 * 60 + 30;

  var ICON_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
  var ICON_FLAME = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>';

  // ==========================================
  // 2. FUNGSI UTILITAS
  // ==========================================
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (m) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]; }); }
  function toMin(t) { var p = t.split(":"); return +p[0] * 60 + +p[1]; }
  function fmt(t) { return t.replace(":", "."); }
  function durText(m) { var h = Math.floor(m / 60), r = m % 60; return (h > 0 ? h + " jam " : "") + (r > 0 ? r + " menit" : (h === 0 ? "0 menit" : "")); }
  function dateStr(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function dayNum(s) { return Math.floor(new Date(s + "T00:00:00").getTime() / 86400000); }
  function numToStr(n) { var d = new Date(n * 86400000); return dateStr(d); }

  var now = new Date();
  var todayJs = now.getDay(); 
  var selDay = todayJs >= 1 && todayJs <= 6 ? todayJs - 1 : 0;

  // ==========================================
  // 3. LOGIKA RENDER JADWAL
  // ==========================================
  function blocks(day, ci) {
    var out = [];
    if (!DATA.hari[day]) return out;
    DATA.hari[day].rows.forEach(function (r) {
      if (r.type === "lain") { out.push({ t: "brk", label: r.label, start: r.start, end: r.end }); return; }
      var e = r.e[ci], m = e[0], g = e[1], last = out[out.length - 1];
      if (last && last.t === "les" && last.m === m && last.g === g) { last.end = r.end; last.jam.push(r.jam); }
      else out.push({ t: "les", m: m, g: g, start: r.start, end: r.end, jam: [r.jam] });
    });
    return out;
  }

  function jamLabel(j) { return j.length === 1 ? "Jam " + j[0] : "Jam " + j[0] + "–" + j[j.length - 1]; }

  function renderDay() {
    var day = HARI[selDay];
    var bl = blocks(day, kelasIdx);
    var isToday = (selDay + 1) === todayJs;
    var nm = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
    
    if(bl.length === 0) {
        document.getElementById("dayPanel").innerHTML = '<div class="dayhead"><h2>' + esc(day) + '</h2></div><p class="note">Tidak ada jadwal.</p>';
        return;
    }

    var first = bl[0].start, last = bl[bl.length - 1].end;
    var nLes = 0; DATA.hari[day].rows.forEach(function (r) { if (r.type === "kbm") nLes++; });
    var h = '<div class="dayhead"><h2>' + esc(day.charAt(0) + day.slice(1).toLowerCase()) + '</h2><span class="meta">' + fmt(first) + ' – ' + fmt(last) + ' · ' + nLes + ' jam pelajaran</span></div>';
    if (todayJs === 0) h += '<p class="note">Hari ini Minggu, libur. Yang tampil jadwal ' + esc(day.charAt(0) + day.slice(1).toLowerCase()) + '.</p>';
    
    bl.forEach(function (b) {
      var s = toMin(b.start), e = toMin(b.end);
      var cls = "", prog = 0;
      if (isToday) {
        if (nm >= e) cls = " past";
        else if (nm >= s) { cls = " now"; prog = Math.max(0, Math.min(100, (nm - s) / (e - s) * 100)); }
      }
      if (b.t === "brk") {
        h += '<div class="brk' + cls + '"><span>' + esc(b.label) + '</span><span>' + fmt(b.start) + ' – ' + fmt(b.end) + '</span></div>';
      } else {
        h += '<div class="les' + cls + '">' +
          '<div class="tm"><span><i>masuk</i>' + fmt(b.start) + '</span><span><i>keluar</i>' + fmt(b.end) + '</span></div>' +
          '<div><span class="live">Berlangsung</span><div class="mp-line"><div class="mp">' + esc(MP[b.m] || DATA.mapel[b.m]) + '</div><span class="jk">' + esc(jamLabel(b.jam)) + '</span></div>' +
          '<div class="gr">' + esc(DATA.guru[b.g]) + '</div></div>' +
          (cls === " now" ? '<div class="bar"><b style="width:' + prog.toFixed(1) + '%"></b></div>' : '') + '</div>';
      }
    });
    document.getElementById("dayPanel").innerHTML = h;
  }

  function renderDays() {
    var h = "";
    HARI.forEach(function (d, i) {
      var full = d.charAt(0) + d.slice(1).toLowerCase();
      h += '<button type="button" role="tab" data-i="' + i + '" aria-selected="' + (i === selDay) + '" class="' + ((i + 1) === todayJs ? "today" : "") + '"><span class="full">' + full + '</span><span class="abbr">' + full.slice(0, 3) + '</span></button>';
    });
    var el = document.getElementById("days");
    el.innerHTML = h;
  }

  document.getElementById("days").addEventListener("click", function (ev) {
    var b = ev.target.closest("button[data-i]");
    if (!b) return;
    selDay = +b.getAttribute("data-i");
    var all = this.querySelectorAll("button");
    for (var i = 0; i < all.length; i++) all[i].setAttribute("aria-selected", String(i === selDay));
    renderDay();
  });

  // ==========================================
  // 4. LOGIKA BELAJAR MALAM (STREAK & POIN)
  // ==========================================
  var done = {};
  try { done = JSON.parse(lsGet("jp26:done") || "{}") || {}; } catch (e) { done = {}; }
  function saveLocal() { lsSet("jp26:done", JSON.stringify(done)); }

  function calc(doneMap, todayStr) {
    var nums = Object.keys(doneMap).filter(function (k) { return doneMap[k]; }).map(dayNum).sort(function (a, b) { return a - b; });
    var set = {}; nums.forEach(function (n) { set[n] = 1; });
    var run = 0, best = 0, pts = 0, prev = null;
    nums.forEach(function (n) {
      run = (prev !== null && n === prev + 1) ? run + 1 : 1;
      prev = n; if (run > best) best = run;
      pts += 10 + 2 * Math.min(run - 1, 10);
    });
    
    var t = dayNum(todayStr);
    function back(from) { var c = 0; while (set[from]) { c++; from--; } return c; }
    var doneToday = !!set[t];
    var cur = back(doneToday ? t : t - 1);
    var endYesterday = back(t - 1);
    var todayPts = 10 + 2 * Math.min((doneToday ? cur : endYesterday + 1) - 1, 10);
    
    return { cur: cur, best: best, pts: pts, doneToday: doneToday, todayPts: todayPts, endYesterday: endYesterday };
  }

  function renderStudy() {
    var n = new Date(), mins = n.getHours() * 60 + n.getMinutes(), ts = dateStr(n);
    var c = calc(done, ts);
    var phase = mins < STUDY_START ? "before" : (mins < STUDY_END ? "during" : "after");
    var status;
    if (phase === "before") status = "Mulai pukul 19.45, " + durText(STUDY_START - mins) + " lagi.";
    else if (phase === "during") status = "Sedang berlangsung, sisa " + durText(STUDY_END - mins) + ".";
    else status = "Sesi hari ini selesai pukul 20.30.";
    var lead, sub;
    if (c.doneToday) { lead = "Sudah dicentang hari ini"; sub = "+" + c.todayPts + " poin masuk. Sampai ketemu besok malam."; }
    else if (phase === "before") { lead = "Belum bisa dicentang"; sub = "Tombol terbuka mulai pukul 19.45."; }
    else { lead = "Centang kalau sudah belajar"; sub = "Bernilai " + c.todayPts + " poin" + (c.endYesterday > 0 ? ", streak " + c.endYesterday + " harimu lanjut." : "."); }
    
    var locked = !c.doneToday && phase === "before";
    var h = '<div class="study"><div><div class="lab">Jadwal belajar · setiap hari</div><h2>19.45 – 20.30</h2><p class="sub">45 menit. ' + esc(status) + '</p></div>' +
      '<div class="checkrow"><button type="button" class="check" id="checkBtn" aria-pressed="' + c.doneToday + '" aria-label="Centang belajar hari ini"' + (locked ? " disabled" : "") + '>' + ICON_CHECK + '</button>' +
      '<div class="tx"><b>' + esc(lead) + '</b><span>' + esc(sub) + '</span></div></div></div>' +
      '<div class="score"><div><div class="k">' + ICON_FLAME + 'Streak</div><div class="v">' + c.cur + '<small>hari</small></div><div class="h">' +
      (c.cur === 0 ? "Mulai streak pertamamu malam ini." : (c.doneToday ? "Terpanjang " + c.best + " hari." : "Centang malam ini supaya tidak putus.")) + '</div></div>' +
      '<div><div class="k">Poin</div><div class="v">' + c.pts + '<small>poin</small></div><div class="h">10 poin per sesi, +2 tiap hari beruntun (maks +20).</div></div></div>';
    document.getElementById("studyPanel").innerHTML = h;
    document.getElementById("navChip").innerHTML = ICON_FLAME + " " + c.cur;
    return c;
  }

  function renderCal(c) {
    var n = new Date(), todayN = dayNum(dateStr(n));
    var weekStart = todayN - ((n.getDay() + 6) % 7);
    var start = weekStart - 21;
    var h = '<h3>4 minggu terakhir</h3><div class="grid7">';
    ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].forEach(function (d) { h += '<div class="dn">' + d + '</div>'; });
    for (var i = 0; i < 28; i++) {
      var dn = start + i, ds = numToStr(dn), cls = "cell", inner = ds.slice(8);
      if (dn > todayN) cls += " fut";
      else if (done[ds]) { cls += " done"; inner = ICON_CHECK; }
      if (dn === todayN) cls += " today";
      h += '<div class="' + cls + '" title="' + ds + '">' + inner + '</div>';
    }
    h += '</div><p class="legend">Kotak biru berarti sesi belajar dicentang. Lingkaran oranye adalah hari ini.</p>';
    document.getElementById("calPanel").innerHTML = h;

    var marks = [3, 7, 14, 30], mh = '<h3>Capaian streak</h3><div class="mrow">';
    marks.forEach(function (m) { mh += '<span class="mile' + (c.best >= m ? " on" : "") + '">' + ICON_FLAME + m + ' hari</span>'; });
    mh += '</div>';
    var next = marks.filter(function (m) { return c.best < m; })[0];
    mh += '<p class="rule">' + (next ? "Streak terpanjangmu " + c.best + " hari. Tinggal " + (next - c.best) + " hari lagi ke " + next + " hari." : "Semua capaian terbuka. Streak terpanjangmu " + c.best + " hari.") + '</p>';
    document.getElementById("milesPanel").innerHTML = mh;
  }

  function renderAllStudy() { var c = renderStudy(); renderCal(c); }

  document.getElementById("studyPanel").addEventListener("click", function (ev) {
    var b = ev.target.closest("#checkBtn");
    if (!b || b.disabled) return;
    var n = new Date(), ts = dateStr(n), mins = n.getHours() * 60 + n.getMinutes();
    if (done[ts]) delete done[ts];
    else if (mins >= STUDY_START) done[ts] = 1;
    else return;
    saveLocal(); renderAllStudy();
  });

  // ==========================================
  // 5. NAVIGASI TAB (JADWAL / BELAJAR)
  // ==========================================
  var tabJ = document.getElementById("tabJadwal"), tabB = document.getElementById("tabBelajar");
  
  function setView(v) {
    var j = v === "jadwal";
    tabJ.setAttribute("aria-selected", String(j)); 
    tabB.setAttribute("aria-selected", String(!j));
    document.getElementById("viewJadwal").hidden = !j;
    document.getElementById("viewBelajar").hidden = j;
    if (!j) renderAllStudy();
  }

  tabJ.addEventListener("click", function() { setView("jadwal"); });
  tabB.addEventListener("click", function() { setView("belajar"); });

  // ==========================================
  // 6. JALANKAN
  // ==========================================
  renderDays();
  renderDay();
  setView("jadwal");

})();
