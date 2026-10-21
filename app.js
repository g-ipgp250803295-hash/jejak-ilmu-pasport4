const KEY='jejak_ilmu_pasport_v5';
const MISSIONS=[
 {id:'mula',title:'Mula Meneroka',icon:'🚪',desc:'Mulakan perjalanan muzium.',next:'https://sites.google.com/moe-dl.edu.my/edup6023ainnasuha/jejak-sejarah',nextLabel:'TERUSKAN KE JEJAK SEJARAH'},
 {id:'sejarah',title:'Jejak Sejarah',icon:'🕰️',desc:'Terokai sejarah pendidikan.',next:'https://sites.google.com/moe-dl.edu.my/edup6023ainnasuha/galeri-pendidikan',nextLabel:'TERUSKAN KE GALERI PENDIDIKAN'},
 {id:'galeri',title:'Galeri Pendidikan',icon:'🖼️',desc:'Kenali aliran persekolahan.',next:'https://sites.google.com/moe-dl.edu.my/edup6023ainnasuha/arkib-laporan',nextLabel:'TERUSKAN KE ARKIB LAPORAN'},
 {id:'arkib',title:'Arkib Laporan',icon:'📜',desc:'Selidik laporan dan akta.',next:'https://sites.google.com/moe-dl.edu.my/edup6023ainnasuha/cabaran-refleksi',nextLabel:'TERUSKAN KE CABARAN & REFLEKSI'},
 {id:'cabaran',title:'Cabaran & Refleksi',icon:'🏅',desc:'Selesaikan cabaran dan refleksi.',next:'index.html',nextLabel:'LIHAT PASPORT & SIJIL'}
];
function read(){try{const v=JSON.parse(localStorage.getItem(KEY)||'{}');return {name:typeof v.name==='string'?v.name:'',stamps:Array.isArray(v.stamps)?v.stamps.filter(x=>MISSIONS.some(m=>m.id===x)):[]}}catch(e){return {name:'',stamps:[]}}}
function write(v){try{localStorage.setItem(KEY,JSON.stringify(v));return true}catch(e){return false}}
function mark(id){const v=read();if(!v.stamps.includes(id))v.stamps.push(id);return write(v)}
function count(){return read().stamps.length}
