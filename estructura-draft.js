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

//taula de variables globals
const Constants={
  "Pujada salarial anual": 0.1, //10%
};

//personal del centre disponible "teòric" per assignar als projectes
class Persona{
  constructor(){
    this.tipus     = ""; //recerca|admin;
    this.categoria = ""; //ip|predoc|postdoc|...?????
    this.permanent = 1;  //bool: eventual o permanent
  }
}

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

//els projectes generen despeses
class Despesa{
  constructor(){
    this.nom   = "descripció despesa";
    this.any   = 2024;
    this.rrhh  = false; //personal (salari) ò compra d'un equip ò manteniment d'un aparell ò compra fungibles
    this.euros = 0;     //euros
  }
}
