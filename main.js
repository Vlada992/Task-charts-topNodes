


function ogradaF(){   //4
    return (function (){
    var instance;
 
    function zdravstveniSistem(){
       class Covek { //main abstract class
            constructor(ime, prezime){
                var imeNew = ime;
                if(ime.charAt(ime.length - 1) == 'o'){
                    ime = ime.slice(0, ime.length-1) + 'a'
                }else if(ime.charAt(ime.length - 1) == 'a'){
                    ime = ime.slice(0, ime.length-1) + 'e'
                }else  ime = ime + 'a'
                this.ime = ime;
                this.imeNew = imeNew;
                this.prezime = prezime;
            }
        };

        
        class Doktor extends Covek {
            constructor(ime,prezime, specijalnost){
                super(ime,prezime);
                this.specijalnost = specijalnost;
                this.arguments = arguments;
                console.log(`[${arguments[3][0]} ${arguments[3][1]}] Kreiran ${this.specijalnost}  ${this.imeNew} ${this.prezime}.`)
            };
            zakazatiPregled(pregled){
                var strRes = `[${this.arguments[3][0]} ${this.arguments[3][1]}] Pregled za ${pregled.tipPregleda}
                 je zakazan  kod doktora ${this.ime} za pacijenta ${pregled.pacijent.ime} ${pregled.pacijent.prezime}a`
                console.log(strRes)
            };
        }
        
        
        
        class Pacijent extends Covek {
            constructor(ime,prezime, JMBG, karton){
                super(ime,prezime);
                this.JMBG =JMBG;
                this.karton = karton;
                this.arguments = arguments;  
                console.log(`[${arguments[4][0]} ${arguments[4][1]}] Kreiran pacijent  ${this.imeNew} ${this.prezime}
                 sa kartonom ${this.karton}`)
            };

            izborLekara(doktor){
                this.Doktor = doktor;
                console.log(`[${this.arguments[4][0]} ${this.arguments[4][1]}] Pacijent ${this.imeNew}  bira
                 ${this.Doktor.specijalnost}a doktora ${this.Doktor.ime}`)
                return this.Doktor;
            };
        };
                
        
        class Pregled  {
            constructor(datum, vreme, pacijent, tipPregleda){
                this.datum= datum;
                this.vreme= vreme;
                this.pacijent= pacijent;
                this.tipPregleda = tipPregleda;
            };
        };
        
        
        class PregledKrvniPritisak extends Pregled {
            constructor(datum, vreme, pacijent){
                super(datum, vreme, pacijent, 'krvni pritisak')
            };
            obavitiPregled(){
                var strRes =`[${this.datum}, ${this.vreme}] Rezultat pregleda od ${this.datum}
                 za krvni pritisak za pacijenta  ${this.pacijent.ime} ${this.pacijent.prezime}a je: 
                1) gornjaVrednost: 135mmHg
                2) donjaVrednost: 95mmHg
                3) puls: 76`
                console.log(strRes) //razmisli o tome i to napravi
            };
        };
        
        
        class PregledNivoSecera extends Pregled {
            constructor(datum, vreme, pacijent){
                super(datum, vreme, pacijent, 'nivo secera')
            };
        
            obavitiPregled(){
                var strRes =`[${this.datum}, ${this.vreme}] Rezultat pregleda nivoa sećera u krvi za pacijenta ${this.pacijent.ime}
                 ${this.pacijent.prezime}a je: 
                1) vrednost: 40mg/dL
                2) vreme poslednjeg obroka: 10:25`
                console.log(strRes)
            };
        };

        

        class PregledHolesterola extends Pregled {
            constructor(datum, vreme, pacijent){
                super(datum, vreme, pacijent, 'nivo holesterola')
            };
            obavitiPregled(){
                var strRes =`[${this.datum}, ${this.vreme}] Rezultat pregleda holesterola u krvi za pacijenta ${this.pacijent.ime} ${this.pacijent.prezime}a je: 
                1) vrednost: 1.55mmol/L
                2) vreme poslednjeg obroka: 7:30`
                console.log(strRes)
            };
        };
        return [Covek, Doktor, Pacijent, Pregled, PregledKrvniPritisak, PregledNivoSecera];
    };

    return {
        getInstance: (function (){
            if (!instance){
                instance = zdravstveniSistem();
            }
            return instance;
        })() //IIFE
    };
})(); //IIFE



}; //function ograda 



 
(function PokreniApp(){
    var d = new Date(), yr;
    yr = d.getFullYear(),  mn = d.getMonth()+1,  dy = d.getDate(), sec = d.getSeconds()
    dy < 10 ? dy = '0' + dy : null
    mn < 10 ? mn = '0' + mn : null
    sec < 10 ? sec = '0' + sec : null

    var date =[`${dy}/${mn}/${yr}`, `${d.getHours()}:${d.getMinutes()}:${sec}`]


    var zdravstvo = ogradaF().getInstance;


    var Doktor =  zdravstvo[1], Pacijent = zdravstvo[2], PregledNivoSecera = zdravstvo[4], PregledKrvniPritisak = zdravstvo[5]
    var doktorZarko = new Doktor('Zarko','Kosutic', 'kardiolog', date);
    var pacijentIvan = new Pacijent('Ivan','Filomenovic', '284921431090','1/2008',date)
    pacijentIvan.izborLekara(doktorZarko);


    var pregledSecera1 =  new PregledNivoSecera(date[0], date[1], pacijentIvan);
    doktorZarko.zakazatiPregled(pregledSecera1);
    pregledSecera1.obavitiPregled();



    var pregledPritisak1 = new  PregledKrvniPritisak(date[0], date[1], pacijentIvan);
    doktorZarko.zakazatiPregled(pregledPritisak1);
    pregledPritisak1.obavitiPregled();
})() //IIFE
 //161 **************************************************************************




/*OVO GORE JE ONO STO SAM RADIO PRE NEKI DAN, VEZBAO/GLEDAO/PROUCAVAO, KADA STE MI REKLI DA CETE MI DATI ZADATAK */




/*************************************************************** */
/*OVO JE DANASNJI ZADATAK KOJI JE TREBALO DA URADIM A NISAM USPEO */
var spisakPutnikaAvion = [
    {ime: 'Ivan', prezime:'ivanovic', noFly: false,  kilaza: Math.floor(Math.random()*(100-20)) + 20, prtljag:Math.floor(Math.random()*(5-1)) + 1 },
    {ime: 'Milica', prezime:'ivanic', noFly: false,  kilaza: Math.floor(Math.random()*(100-20)) + 20, prtljag:Math.floor(Math.random()*(5-1)) + 1 },
    {ime: 'Nikola', prezime:'ivanovicevic', noFly: false,  kilaza: Math.floor(Math.random()*(100-20)) + 20, prtljag:Math.floor(Math.random()*(5-1)) + 1 },
    {ime: 'Stivor', prezime:'ivancic', noFly: false,  kilaza: Math.floor(Math.random()*(100-20)) + 20, prtljag:Math.floor(Math.random()*(5-1)) + 1 },
    {ime: 'Igor', prezime:'ivankovic', noFly: true,  kilaza: Math.floor(Math.random()*(100-20)) + 20, prtljag:Math.floor(Math.random()*(5-1)) + 1 },
    {ime: 'Mirko', prezime:'ivetic', noFly: false,  kilaza: Math.floor(Math.random()*(100-20)) + 20, prtljag:Math.floor(Math.random()*(5-1)) + 1 },
    {ime: 'Marko', prezime:'ivkovic', noFly: true,  kilaza: Math.floor(Math.random()*(100-20)) + 20, prtljag:Math.floor(Math.random()*(5-1)) + 1 },
    {ime: 'Janko', prezime:'petrovic', noFly: false,  kilaza: Math.floor(Math.random()*(100-20)) + 20, prtljag:Math.floor(Math.random()*(5-1)) + 1 },
    {ime: 'Milan', prezime:'ivanov', noFly: false,  kilaza: Math.floor(Math.random()*(100-20)) + 20, prtljag:Math.floor(Math.random()*(5-1)) + 1 },
    {ime: 'Anja', prezime: 'stingic', noFly: true,  kilaza: Math.floor(Math.random()*(100-20)) + 20, prtljag:Math.floor(Math.random()*(5-1)) + 1 }
]




class AvionskiLet {
    constructor( nazivLeta, kapacitet, spisakPut){
        this.nazivLeta = nazivLeta;
        this.spisakPut = spisakPut//
        this.kapacitet = kapacitet;

        this.spisakPut = spisakPutnikaAvion;
        console.log('u avionskom letu', this)
    };
    evidencija(spisak){
        console.log('spisak', spisak)
    }
};



class Putnik extends AvionskiLet {
    constructor(ime, prezime, kilaza, noFly){
        super()
        this.ime = ime;
        this.prezime = prezime;
        this.kilaza = kilaza;
        this.noFly = noFly;
    };
    evidencija(){ 
          this.spisakPut.map((each, ind)=>{
              if(each.ime == this.ime && each.prezime == this.prezime){
                console.log(`ime putnika (${this.ime}) je na listi, ubaciti ga`)
              }else if(this.kilaza < 100 && this.kilaza > 20){
                console.log(`Kilaza je u redu, putnik ${this.ime} prolazi`)
              } else if(!this.noFly){
                  console.log(`Moze uci u avion, nema zabranu..`)
              }
          })
    }

}


class Pilot extends AvionskiLet {
    constructor(kilaza, licenca){ //if licenca true
        super()
        this.kilaza = kilaza;
        this.licenca = licenca;
    };

    proveraLicence(){
        if(this.licenca){
            console.log('ima licencu')
        }else {
            return null
        }
        this.kilaza > 20 && this.kilaza < 100 ? console.log("pilot ima odgovaajucu tezinu") : console.log("pilot nema odgovaajucu tezinu")
    }
};



class Prtljag extends Putnik {
    constructor(rucni,predati){
        super()
        this.rucni = rucni;
        this.predati = predati;
        console.log('u prtljagu:', this)
    };
    evidencijaPrtljaga(){
      console.log('to je:', this.spisakPut[0].prtljag) //...
    
    };
};




var putnik1 = new Putnik('Ivan', 'Ivanovic', '75', false)
putnik1.evidencija();

var pilot1 = new Pilot('56', true)
console.log(pilot1.proveraLicence());


console.log(new Prtljag().evidencijaPrtljaga())

//var noviLet = new  AvionskiLet('156',10, [putnik1] )












