// gasto medio por km 1/kmL

class CarFactory {
  id;
  brand;
  model;
  releaseYear;
  color;
  kmLt;
  ltKm;
  img;
  combustivel;
  
  constructor(id, brand, model, releaseYear, color  ,kmLt , ltKm, img, combustivel )
  {
    this.id=id;
    this.brand=brand;
    this.model=model;   
    this.releaseYear=releaseYear; 
    this.color=color; 
    this.kmLt= kmLt;
    this.ltKm = ltKm;
    this.img=img;
    this.combustivel=combustivel;
  }
  calcPriceLtKm(combustivel, travel) {
    const definePrice = ()=>{
      if(this.combustivel === "G"){
        return combustivel.gType * this.ltKm
      }else if(this.combustivel==="A"){
        return combustivel.aType * this.ltKm
      }else if(this.combustivel === "D"){
        return combustivel.dType * this.ltKm
      }
    }  
    return definePrice()*travel.kmFinal
  }
}

class TravelFactory{
  startCity;
  endCity;
  kmFinal;

constructor(startCity, endCity, kmFinal) { 
    this.startCity=startCity; 
    this.endCity=endCity;
    this.kmFinal=kmFinal;
}
}

class CombustibleFactory{
  gType;
  dType;
  aType;
  constructor(gType, dType, aType){
    this.gType=gType;
    this.dType=dType;
    this.aType=aType;
  }


}


const fuscaAzul = new CarFactory("c001", "VOLKSWAGEM", "FUSCA 1600", 1994, "#4EA3C8", 9.7, (1/9.7).toFixed(2), "https://combustivel.app/imgs/t650/consumo-fusca-1600.jpg", 'G')
const travel1 = new TravelFactory("-46.633382,-23.550651", "-58.4370894,-34.6075682", 2200.7)
const combustible1 = new CombustibleFactory(5.5, 6.15, 3.64)

const precoViagem = fuscaAzul.calcPriceLtKm(combustible1, travel1)
console.log(precoViagem)

