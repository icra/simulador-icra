/*
  ESBÓS SIMULADOR ESCENARIS ICRA

  - poder calcular "indicadors" (cada un tindrà una fórmula) a partir
    d'introduir dades de:
    - personal
    - projectes
    - despeses

  - exemple
    "crea un projecte europeu que comença el 2027 amb 1 ip i 3 predocs"
    "posali una previsió de despeses"
    "calcula estrés (% de la despesa total)"
    "crea 20 projectes i calcula el pressupost total"
*/

class Escenari{
  constructor(){
    this.nom="icra durant el 2030";

    this.projectes=[]; //array objectes Projecte

    //taula de variables globals
    this.constants={
      "Pujada salarial anual":0.01, //1%
    };
  }
}

//projecte dins d'un Escenari
class Projecte{
  constructor(){
    this.nom = "descripció projecte"; //exemple: "projecte europeu que comença el 2027"

    this.durada={
      inici: "2027-01-01",
      final: "2030-01-01",
    };

    this.tipus=[
      "estructural",   //del mateix centre, a.k.a. "patrons"

      "competitiu - europeu - gran",    //recerca
      "competitiu - europeu - petit",   //recerca
      "competitiu - espanyol",          //recerca
      "competitiu - espanyol - català", //recerca

      "transferència", //SCT, consultoria, ...
      "mecenatge",     //donacions

      "SCTs",
      "CAPEX",

      "altres",        //poder inventar-se altres tipus?
    ];

    this.ingressos=[
      //objectes Despesa
    ];
    this.despeses=[
      //objectes Despesa
    ];
  }

  calcula_pressupost(){
    //diners a demanar = despeses - ingressos
    return 0;
  }
}

//despesa o ingrés dins d'un Projecte
class Despesa{
  constructor(){
    this.nom   = "descripció despesa";
    this.any   = 2024;
    this.euros = 0;     //euros

    this.rrhh  = false; //personal (salari) ò compra d'un equip ò manteniment d'un aparell ò compra fungibles
  }
}

//Persona dins d'una Despesa
class Persona{
  constructor(){
    this.tipus     = ""; //recerca|admin;
    this.categoria = ""; //ip|predoc|postdoc|...?????
    this.permanent = 1;  //bool: eventual o permanent
  }
}

