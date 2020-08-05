/* tslint:disable:max-line-length */
import {commonRes} from "./common-res";
import {ICategoriesRes} from "../api_iarena/responses";

export const categoriesRes: ICategoriesRes = {
  count: 194,
  data: [
    {
      "idInterestArea": 1001,
      "idFather": 0,
      "idMainFather": 1001,
      "levelNode": 1,
      "description": "Vita",
      "fullDescription": "Vita",
      "fullPath": "Vita",
      "descriptionuk": "Life",
      "fullPathuk": "Life"
    }, {
      "idInterestArea": 1002,
      "idFather": 1001,
      "idMainFather": 1001,
      "levelNode": 2,
      "description": "Caso morte",
      "fullDescription": "Caso morte",
      "fullPath": "Vita / Caso morte",
      "descriptionuk": "Death case",
      "fullPathuk": "Life/death Case"
    }, {
      "idInterestArea": 1003,
      "idFather": 1002,
      "idMainFather": 1001,
      "levelNode": 3,
      "description": "Temporanee",
      "fullDescription": "Temporanee",
      "fullPath": "Vita / Caso morte / Temporanee",
      "descriptionuk": "Temporary",
      "fullPathuk": "Life/death/Temporary Case"
    }, {
      "idInterestArea": 1004,
      "idFather": 1002,
      "idMainFather": 1001,
      "levelNode": 3,
      "description": "A vita intera",
      "fullDescription": "A vita intera",
      "fullPath": "Vita / Caso morte / A vita intera",
      "descriptionuk": "Whole life",
      "fullPathuk": "Life/death/whole life Case"
    }, {
      "idInterestArea": 1005,
      "idFather": 1001,
      "idMainFather": 1001,
      "levelNode": 2,
      "description": "Capitalizzazione",
      "fullDescription": "Capitalizzazione",
      "fullPath": "Vita / Capitalizzazione",
      "descriptionuk": "Capitalization",
      "fullPathuk": "Life/Capitalization"
    }, {
      "idInterestArea": 1006,
      "idFather": 1005,
      "idMainFather": 1001,
      "levelNode": 3,
      "description": "Unit",
      "fullDescription": "Unit",
      "fullPath": "Vita / Capitalizzazione / Unit",
      "descriptionuk": "Unit",
      "fullPathuk": "Life/Compounding/Unit"
    }, {
      "idInterestArea": 1007,
      "idFather": 1005,
      "idMainFather": 1001,
      "levelNode": 3,
      "description": "Index",
      "fullDescription": "Index",
      "fullPath": "Vita / Capitalizzazione / Index",
      "descriptionuk": "Index",
      "fullPathuk": "Life/Compounding/Index"
    }, {
      "idInterestArea": 1008,
      "idFather": 1005,
      "idMainFather": 1001,
      "levelNode": 3,
      "description": "Pip",
      "fullDescription": "Pip",
      "fullPath": "Vita / Capitalizzazione / Pip",
      "descriptionuk": "PIP",
      "fullPathuk": "Life/Compounding/Pip"
    }, {
      "idInterestArea": 1009,
      "idFather": 1005,
      "idMainFather": 1001,
      "levelNode": 3,
      "description": "Tradizionali",
      "fullDescription": "Tradizionali",
      "fullPath": "Vita / Capitalizzazione / Tradizionali",
      "descriptionuk": "Traditional",
      "fullPathuk": "Natural/Traditional/Capitalization"
    }, {
      "idInterestArea": 1010,
      "idFather": 0,
      "idMainFather": 1010,
      "levelNode": 1,
      "description": "Infortuni",
      "fullDescription": "Infortuni",
      "fullPath": "Infortuni",
      "descriptionuk": "Injuries",
      "fullPathuk": "Injuries"
    }, {
      "idInterestArea": 1011,
      "idFather": 1010,
      "idMainFather": 1010,
      "levelNode": 2,
      "description": "Individuale",
      "fullDescription": "Individuale",
      "fullPath": "Infortuni / Individuale",
      "descriptionuk": "Individual",
      "fullPathuk": "Accident/Individual"
    }, {
      "idInterestArea": 1012,
      "idFather": 1011,
      "idMainFather": 1010,
      "levelNode": 3,
      "description": "Semplice(morte+ip)",
      "fullDescription": "Semplice(morte+ip)",
      "fullPath": "Infortuni / Individuale / Semplice(morte+ip)",
      "descriptionuk": "Simple (death + ip)",
      "fullPathuk": "Accident/individual/single (death + ip)"
    }, {
      "idInterestArea": 1013,
      "idFather": 1011,
      "idMainFather": 1010,
      "levelNode": 3,
      "description": "Complessa(morte+ip+daria+spese mediche+assistenza ecc...)",
      "fullDescription": "Complessa(morte+ip+daria+spese mediche+assistenza ecc...)",
      "fullPath": "Infortuni / Individuale / Complessa(morte+ip+daria+spese mediche+assistenza ecc...)",
      "descriptionuk": "Complex (death + ip + daria + medical expenses + services etc.)",
      "fullPathuk": "Accident/individual/complex (death + ip + daria + medical expenses + services etc.)"
    }, {
      "idInterestArea": 1014,
      "idFather": 1010,
      "idMainFather": 1010,
      "levelNode": 2,
      "description": "Collettiva",
      "fullDescription": "Collettiva",
      "fullPath": "Infortuni / Collettiva",
      "descriptionuk": "Collective",
      "fullPathuk": "Accidents/Collective"
    }, {
      "idInterestArea": 1015,
      "idFather": 1014,
      "idMainFather": 1010,
      "levelNode": 3,
      "description": "Semplice(morte+ip)",
      "fullDescription": "Semplice(morte+ip)",
      "fullPath": "Infortuni / Collettiva / Semplice(morte+ip)",
      "descriptionuk": "Simple (death + ip)",
      "fullPathuk": "Accidents/collective/single (death + ip)"
    }, {
      "idInterestArea": 1016,
      "idFather": 1014,
      "idMainFather": 1010,
      "levelNode": 3,
      "description": "Complessa(morte+ip+daria+spese mediche+assistenza+rischio guerra ecc...)",
      "fullDescription": "Complessa(morte+ip+daria+spese mediche+assistenza+rischio guerra ecc...)",
      "fullPath": "Infortuni / Collettiva / Complessa(morte+ip+daria+spese mediche+assistenza+rischio guerra ecc...)",
      "descriptionuk": "Complex (death + ip + daria + medical expenses + service + risk war etc.)",
      "fullPathuk": "Accidents/collective/complex (death + ip + daria + medical expenses + service + risk war etc.)"
    }, {
      "idInterestArea": 1017,
      "idFather": 1014,
      "idMainFather": 1010,
      "levelNode": 3,
      "description": "Multinational(copertura del rischio anche a favore delle controllate all'estero)",
      "fullDescription": "Multinational(copertura del rischio anche a favore delle controllate all'estero)",
      "fullPath": "Infortuni / Collettiva / Multinational(copertura del rischio anche a favore delle controllate all'estero)",
      "descriptionuk": "Multinational (also risk coverage in favour of its subsidiaries abroad)",
      "fullPathuk": "Accidents/collective/Multinational (also risk coverage in favour of its subsidiaries abroad)"
    }, {
      "idInterestArea": 1018,
      "idFather": 0,
      "idMainFather": 1018,
      "levelNode": 1,
      "description": "Malattia",
      "fullDescription": "Malattia",
      "fullPath": "Malattia",
      "descriptionuk": "Disease",
      "fullPathuk": "Disease"
    }, {
      "idInterestArea": 1019,
      "idFather": 1018,
      "idMainFather": 1018,
      "levelNode": 2,
      "description": "Individuale",
      "fullDescription": "Individuale",
      "fullPath": "Malattia / Individuale",
      "descriptionuk": "Individual",
      "fullPathuk": "Disease/Individual"
    }, {
      "idInterestArea": 1020,
      "idFather": 1019,
      "idMainFather": 1018,
      "levelNode": 3,
      "description": "A rimborso(sanitaria)",
      "fullDescription": "A rimborso(sanitaria)",
      "fullPath": "Malattia / Individuale / A rimborso(sanitaria)",
      "descriptionuk": "A refund (health)",
      "fullPathuk": "Disease/individual/A refund (health)"
    }, {
      "idInterestArea": 1021,
      "idFather": 1019,
      "idMainFather": 1018,
      "levelNode": 3,
      "description": "Indennitaria(malattie gravi e/o interventi chirurgici e/o dentali)",
      "fullDescription": "Indennitaria(malattie gravi e/o interventi chirurgici e/o dentali)",
      "fullPath": "Malattia / Individuale / Indennitaria(malattie gravi e/o interventi chirurgici e/o dentali)",
      "descriptionuk": "Indemnity (major and/or surgery and/or dental implants)",
      "fullPathuk": "Disease/individual/Indemnity (major and/or surgery and/or dental implants)"
    }, {
      "idInterestArea": 1022,
      "idFather": 1019,
      "idMainFather": 1018,
      "levelNode": 3,
      "description": "Perdita autosufficienza(a ripartizione o a capitalizzazione)",
      "fullDescription": "Perdita autosufficienza(a ripartizione o a capitalizzazione)",
      "fullPath": "Malattia / Individuale / Perdita autosufficienza(a ripartizione o a capitalizzazione)",
      "descriptionuk": "Losing self-sufficiency (a distribution or capitalisation)",
      "fullPathuk": "Disease/individual/loss self-sufficiency (a distribution or capitalisation)"
    }, {
      "idInterestArea": 1023,
      "idFather": 1018,
      "idMainFather": 1018,
      "levelNode": 2,
      "description": "Collettiva",
      "fullDescription": "Collettiva",
      "fullPath": "Malattia / Collettiva",
      "descriptionuk": "Collective",
      "fullPathuk": "Disease/Collective"
    }, {
      "idInterestArea": 1024,
      "idFather": 1023,
      "idMainFather": 1018,
      "levelNode": 3,
      "description": "A rimborso(sanitaria)",
      "fullDescription": "A rimborso(sanitaria)",
      "fullPath": "Malattia / Collettiva / A rimborso(sanitaria)",
      "descriptionuk": "A refund (health)",
      "fullPathuk": "Disease/collective/A refund (health)"
    }, {
      "idInterestArea": 1025,
      "idFather": 1023,
      "idMainFather": 1018,
      "levelNode": 3,
      "description": "Indennitaria(malattie gravi e/o interventi chirurgici)",
      "fullDescription": "Indennitaria(malattie gravi e/o interventi chirurgici)",
      "fullPath": "Malattia / Collettiva / Indennitaria(malattie gravi e/o interventi chirurgici)",
      "descriptionuk": "Indemnity (major and/or surgery)",
      "fullPathuk": "Disease/collective/Indemnity (major and/or surgery)"
    }, {
      "idInterestArea": 1026,
      "idFather": 1023,
      "idMainFather": 1018,
      "levelNode": 3,
      "description": "Perdita autosufficienza(a ripartizione o a capitalizzazione)",
      "fullDescription": "Perdita autosufficienza(a ripartizione o a capitalizzazione)",
      "fullPath": "Malattia / Collettiva / Perdita autosufficienza(a ripartizione o a capitalizzazione)",
      "descriptionuk": "Losing self-sufficiency (a distribution or capitalisation)",
      "fullPathuk": "Illness/loss/collective self-sufficiency (a distribution or capitalisation)"
    }, {
      "idInterestArea": 1027,
      "idFather": 0,
      "idMainFather": 1027,
      "levelNode": 1,
      "description": "Assistenza",
      "fullDescription": "Assistenza",
      "fullPath": "Assistenza",
      "descriptionuk": "Assistance",
      "fullPathuk": "Assistance"
    }, {
      "idInterestArea": 1028,
      "idFather": 1027,
      "idMainFather": 1027,
      "levelNode": 2,
      "description": "Individuale",
      "fullDescription": "Individuale",
      "fullPath": "Assistenza / Individuale",
      "descriptionuk": "Individual",
      "fullPathuk": "Assistance/Individual"
    }, {
      "idInterestArea": 1029,
      "idFather": 1028,
      "idMainFather": 1027,
      "levelNode": 3,
      "description": "Assistenza in viaggio",
      "fullDescription": "Assistenza in viaggio",
      "fullPath": "Assistenza / Individuale / Assistenza in viaggio",
      "descriptionuk": "Travel assistance",
      "fullPathuk": "Assistance/individual/travel assistance"
    }, {
      "idInterestArea": 1030,
      "idFather": 1028,
      "idMainFather": 1027,
      "levelNode": 3,
      "description": "Assistenza auto",
      "fullDescription": "Assistenza auto",
      "fullPath": "Assistenza / Individuale / Assistenza auto",
      "descriptionuk": "Car maintenance",
      "fullPathuk": "Assistance/individual/car service"
    }, {
      "idInterestArea": 1031,
      "idFather": 1028,
      "idMainFather": 1027,
      "levelNode": 3,
      "description": "Assistenza all'abitazione",
      "fullDescription": "Assistenza all'abitazione",
      "fullPath": "Assistenza / Individuale / Assistenza all'abitazione",
      "descriptionuk": "Housing assistance",
      "fullPathuk": "Assistance/individual/home care"
    }, {
      "idInterestArea": 1032,
      "idFather": 1028,
      "idMainFather": 1027,
      "levelNode": 3,
      "description": "Assistenza alla persona",
      "fullDescription": "Assistenza alla persona",
      "fullPath": "Assistenza / Individuale / Assistenza alla persona",
      "descriptionuk": "Personal assistance",
      "fullPathuk": "Assistance/individual/personal care"
    }, {
      "idInterestArea": 1033,
      "idFather": 1027,
      "idMainFather": 1027,
      "levelNode": 2,
      "description": "Collettiva",
      "fullDescription": "Collettiva",
      "fullPath": "Assistenza / Collettiva",
      "descriptionuk": "Collective",
      "fullPathuk": "Assistance/Collective"
    }, {
      "idInterestArea": 1034,
      "idFather": 1033,
      "idMainFather": 1027,
      "levelNode": 3,
      "description": "Assistenza in viaggio",
      "fullDescription": "Assistenza in viaggio",
      "fullPath": "Assistenza / Collettiva / Assistenza in viaggio",
      "descriptionuk": "Travel assistance",
      "fullPathuk": "Assistance/collective/travel assistance"
    }, {
      "idInterestArea": 1035,
      "idFather": 1033,
      "idMainFather": 1027,
      "levelNode": 3,
      "description": "Assistenza auto",
      "fullDescription": "Assistenza auto",
      "fullPath": "Assistenza / Collettiva / Assistenza auto",
      "descriptionuk": "Car maintenance",
      "fullPathuk": "Car care service/Collective/"
    }, {
      "idInterestArea": 1036,
      "idFather": 1033,
      "idMainFather": 1027,
      "levelNode": 3,
      "description": "Assistenza all'abitazione",
      "fullDescription": "Assistenza all'abitazione",
      "fullPath": "Assistenza / Collettiva / Assistenza all'abitazione",
      "descriptionuk": "Housing assistance",
      "fullPathuk": "Collective housing assistance/Support/"
    }, {
      "idInterestArea": 1037,
      "idFather": 1033,
      "idMainFather": 1027,
      "levelNode": 3,
      "description": "Assistenza alla persona",
      "fullDescription": "Assistenza alla persona",
      "fullPath": "Assistenza / Collettiva / Assistenza alla persona",
      "descriptionuk": "Personal assistance",
      "fullPathuk": "Assistance/collective/personal care"
    }, {
      "idInterestArea": 1038,
      "idFather": 0,
      "idMainFather": 1038,
      "levelNode": 1,
      "description": "Programmi affinity",
      "fullDescription": "Programmi affinity",
      "fullPath": "Programmi affinity",
      "descriptionuk": "Affinity programs",
      "fullPathuk": "Affinity programs"
    }, {
      "idInterestArea": 1039,
      "idFather": 1038,
      "idMainFather": 1038,
      "levelNode": 2,
      "description": "Promosso da un'azienda",
      "fullDescription": "Promosso da un'azienda",
      "fullPath": "Programmi affinity / Promosso da un'azienda",
      "descriptionuk": "Promoted by a company",
      "fullPathuk": "Affinity programs/promoted by a company"
    }, {
      "idInterestArea": 1040,
      "idFather": 1039,
      "idMainFather": 1038,
      "levelNode": 3,
      "description": "Inclusivo",
      "fullDescription": "Inclusivo",
      "fullPath": "Programmi affinity / Promosso da un'azienda / Inclusivo",
      "descriptionuk": "Inclusive",
      "fullPathuk": "Affinity programs/promoted by a company/Inclusive"
    }, {
      "idInterestArea": 1041,
      "idFather": 1039,
      "idMainFather": 1038,
      "levelNode": 3,
      "description": "Ad adesione",
      "fullDescription": "Ad adesione",
      "fullPath": "Programmi affinity / Promosso da un'azienda / Ad adesione",
      "descriptionuk": "Such accession",
      "fullPathuk": "Affinity programs/promoted by a company/membership"
    }, {
      "idInterestArea": 1042,
      "idFather": 1038,
      "idMainFather": 1038,
      "levelNode": 2,
      "description": "Promosso da un'associazione",
      "fullDescription": "Promosso da un'associazione",
      "fullPath": "Programmi affinity / Promosso da un'associazione",
      "descriptionuk": "Sponsored by an association",
      "fullPathuk": "Affinity programs/Promoted by an association"
    }, {
      "idInterestArea": 1043,
      "idFather": 1042,
      "idMainFather": 1038,
      "levelNode": 3,
      "description": "Inclusivo",
      "fullDescription": "Inclusivo",
      "fullPath": "Programmi affinity / Promosso da un'associazione / Inclusivo",
      "descriptionuk": "Inclusive",
      "fullPathuk": "Affinity programs/Promoted by an association/Inclusive"
    }, {
      "idInterestArea": 1044,
      "idFather": 1042,
      "idMainFather": 1038,
      "levelNode": 3,
      "description": "Ad adesione",
      "fullDescription": "Ad adesione",
      "fullPath": "Programmi affinity / Promosso da un'associazione / Ad adesione",
      "descriptionuk": "Such accession",
      "fullPathuk": "Affinity programs/Promoted by an association/membership"
    }, {
      "idInterestArea": 1045,
      "idFather": 0,
      "idMainFather": 1045,
      "levelNode": 1,
      "description": "Incendio e furto",
      "fullDescription": "Incendio e furto",
      "fullPath": "Incendio e furto",
      "descriptionuk": "Fire and theft",
      "fullPathuk": "Fire and theft"
    }, {
      "idInterestArea": 1046,
      "idFather": 1045,
      "idMainFather": 1045,
      "levelNode": 2,
      "description": "Privato(abitazione)",
      "fullDescription": "Privato(abitazione)",
      "fullPath": "Incendio e furto / Privato(abitazione)",
      "descriptionuk": "Private (home)",
      "fullPathuk": "Fire and theft/private (home)"
    }, {
      "idInterestArea": 1047,
      "idFather": 1046,
      "idMainFather": 1045,
      "levelNode": 3,
      "description": "Primo rischio",
      "fullDescription": "Primo rischio",
      "fullPath": "Incendio e furto / Privato(abitazione) / Primo rischio",
      "descriptionuk": "First risk",
      "fullPathuk": "Fire and theft/private (home)/first risk"
    }, {
      "idInterestArea": 1048,
      "idFather": 1046,
      "idMainFather": 1045,
      "levelNode": 3,
      "description": "Valore intero",
      "fullDescription": "Valore intero",
      "fullPath": "Incendio e furto / Privato(abitazione) / Valore intero",
      "descriptionuk": "Integer value",
      "fullPathuk": "Fire and theft/private (home)/integer value"
    }, {
      "idInterestArea": 1049,
      "idFather": 1046,
      "idMainFather": 1045,
      "levelNode": 3,
      "description": "Estensione catastrofali",
      "fullDescription": "Estensione catastrofali",
      "fullPath": "Incendio e furto / Privato(abitazione) / Estensione catastrofali",
      "descriptionuk": "Catastrophic events extension",
      "fullPathuk": "Fire and theft/private (home)/Extension catastrophic events"
    }, {
      "idInterestArea": 1050,
      "idFather": 1045,
      "idMainFather": 1045,
      "levelNode": 2,
      "description": "Condominio",
      "fullDescription": "Condominio",
      "fullPath": "Incendio e furto / Condominio",
      "descriptionuk": "Condo",
      "fullPathuk": "Fire and theft/condominium"
    }, {
      "idInterestArea": 1051,
      "idFather": 1050,
      "idMainFather": 1045,
      "levelNode": 3,
      "description": "Primo rischio",
      "fullDescription": "Primo rischio",
      "fullPath": "Incendio e furto / Condominio / Primo rischio",
      "descriptionuk": "First risk",
      "fullPathuk": "Fire and theft/condo/first risk"
    }, {
      "idInterestArea": 1052,
      "idFather": 1050,
      "idMainFather": 1045,
      "levelNode": 3,
      "description": "Valore intero",
      "fullDescription": "Valore intero",
      "fullPath": "Incendio e furto / Condominio / Valore intero",
      "descriptionuk": "Integer value",
      "fullPathuk": "Fire and theft/condo/integer value"
    }, {
      "idInterestArea": 1053,
      "idFather": 1050,
      "idMainFather": 1045,
      "levelNode": 3,
      "description": "Estensione catastrofali",
      "fullDescription": "Estensione catastrofali",
      "fullPath": "Incendio e furto / Condominio / Estensione catastrofali",
      "descriptionuk": "Catastrophic events extension",
      "fullPathuk": "Fire and theft/condo/Extension catastrophic events"
    }, {
      "idInterestArea": 1054,
      "idFather": 1045,
      "idMainFather": 1045,
      "levelNode": 2,
      "description": "Business(fabbricati e contenuto)",
      "fullDescription": "Business(fabbricati e contenuto)",
      "fullPath": "Incendio e furto / Business(fabbricati e contenuto)",
      "descriptionuk": "Business (buildings and contents)",
      "fullPathuk": "Fire and theft/Business (buildings and contents)"
    }, {
      "idInterestArea": 1055,
      "idFather": 1054,
      "idMainFather": 1045,
      "levelNode": 3,
      "description": "Primo rischio",
      "fullDescription": "Primo rischio",
      "fullPath": "Incendio e furto / Business(fabbricati e contenuto) / Primo rischio",
      "descriptionuk": "First risk",
      "fullPathuk": "Fire and theft/Business (buildings and contents)/first risk"
    }, {
      "idInterestArea": 1056,
      "idFather": 1054,
      "idMainFather": 1045,
      "levelNode": 3,
      "description": "Valore intero",
      "fullDescription": "Valore intero",
      "fullPath": "Incendio e furto / Business(fabbricati e contenuto) / Valore intero",
      "descriptionuk": "Integer value",
      "fullPathuk": "Fire and theft/Business (buildings and contents)/integer value"
    }, {
      "idInterestArea": 1057,
      "idFather": 1054,
      "idMainFather": 1045,
      "levelNode": 3,
      "description": "Estensione catastrofali",
      "fullDescription": "Estensione catastrofali",
      "fullPath": "Incendio e furto / Business(fabbricati e contenuto) / Estensione catastrofali",
      "descriptionuk": "Catastrophic events extension",
      "fullPathuk": "Fire and theft/Business (buildings and contents)/Extension catastrophic events"
    }, {
      "idInterestArea": 1058,
      "idFather": 1054,
      "idMainFather": 1045,
      "levelNode": 3,
      "description": "Estensione catastrofali e danni indiretti",
      "fullDescription": "Estensione catastrofali e danni indiretti",
      "fullPath": "Incendio e furto / Business(fabbricati e contenuto) / Estensione catastrofali e danni indiretti",
      "descriptionuk": "Catastrophic and consequential extension",
      "fullPathuk": "Fire and theft/Business (buildings and contents)/Extension catastrophic events and indirect"
    }, {
      "idInterestArea": 1059,
      "idFather": 1054,
      "idMainFather": 1045,
      "levelNode": 3,
      "description": "Multinational(copertura del rischio anche a favore delle controllate all'estero)",
      "fullDescription": "Multinational(copertura del rischio anche a favore delle controllate all'estero)",
      "fullPath": "Incendio e furto / Business(fabbricati e contenuto) / Multinational(copertura del rischio anche a favore delle controllate all'estero)",
      "descriptionuk": "Multinational (also risk coverage in favour of its subsidiaries abroad)",
      "fullPathuk": "Fire and theft/Business (buildings and contents)/Multinational (also risk coverage in favour of its subsidiaries abroad)"
    }, {
      "idInterestArea": 1060,
      "idFather": 0,
      "idMainFather": 1060,
      "levelNode": 1,
      "description": "Responsabilità civile",
      "fullDescription": "Responsabilità civile",
      "fullPath": "Responsabilità civile",
      "descriptionuk": "Civil responsibility",
      "fullPathuk": "Civil responsibility"
    }, {
      "idInterestArea": 1061,
      "idFather": 1060,
      "idMainFather": 1060,
      "levelNode": 2,
      "description": "Privato(rc capofamiglia)",
      "fullDescription": "Privato(rc capofamiglia)",
      "fullPath": "Responsabilità civile / Privato(rc capofamiglia)",
      "descriptionuk": "Private (rc breadwinner)",
      "fullPathuk": "Private liability/(rc breadwinner)"
    }, {
      "idInterestArea": 1062,
      "idFather": 1060,
      "idMainFather": 1060,
      "levelNode": 2,
      "description": "Business",
      "fullDescription": "Business",
      "fullPath": "Responsabilità civile / Business",
      "descriptionuk": "Business",
      "fullPathuk": "Civil liability/Business"
    }, {
      "idInterestArea": 1063,
      "idFather": 1062,
      "idMainFather": 1060,
      "levelNode": 3,
      "description": "Rct",
      "fullDescription": "Rct",
      "fullPath": "Responsabilità civile / Business / Rct",
      "descriptionuk": "RCT",
      "fullPathuk": "Civil liability/Business/Rct"
    }, {
      "idInterestArea": 1064,
      "idFather": 1062,
      "idMainFather": 1060,
      "levelNode": 3,
      "description": "Rct+rco",
      "fullDescription": "Rct+rco",
      "fullPath": "Responsabilità civile / Business / Rct+rco",
      "descriptionuk": "RCT + rco",
      "fullPathuk": null
    }, {
      "idInterestArea": 1065,
      "idFather": 1062,
      "idMainFather": 1060,
      "levelNode": 3,
      "description": "Rct+rco+rcp",
      "fullDescription": "Rct+rco+rcp",
      "fullPath": "Responsabilità civile / Business / Rct+rco+rcp",
      "descriptionuk": "RCT + rco + rcp",
      "fullPathuk": null
    }, {
      "idInterestArea": 1066,
      "idFather": 1062,
      "idMainFather": 1060,
      "levelNode": 3,
      "description": "Multinational(copertura del rischio anche a favore delle controllate all'estero)",
      "fullDescription": "Multinational(copertura del rischio anche a favore delle controllate all'estero)",
      "fullPath": "Responsabilità civile / Business / Multinational(copertura del rischio anche a favore delle controllate all'estero)",
      "descriptionuk": "Multinational (also risk coverage in favour of its subsidiaries abroad)",
      "fullPathuk": "Civil liability/Business/Multinational (also risk coverage in favour of its subsidiaries abroad)"
    }, {
      "idInterestArea": 1067,
      "idFather": 0,
      "idMainFather": 1067,
      "levelNode": 1,
      "description": "Rc sanitaria",
      "fullDescription": "Rc sanitaria",
      "fullPath": "Rc sanitaria",
      "descriptionuk": "RC sanitaria",
      "fullPathuk": "RC sanitaria"
    }, {
      "idInterestArea": 1068,
      "idFather": 1067,
      "idMainFather": 1067,
      "levelNode": 2,
      "description": "Individuale(professionista)",
      "fullDescription": "Individuale(professionista)",
      "fullPath": "Rc sanitaria / Individuale(professionista)",
      "descriptionuk": "Individual (Professional)",
      "fullPathuk": "RC/individual health (Professional)"
    }, {
      "idInterestArea": 1069,
      "idFather": 1068,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Infermiere",
      "fullDescription": "Infermiere",
      "fullPath": "Rc sanitaria / Individuale(professionista) / Infermiere",
      "descriptionuk": "Nurse",
      "fullPathuk": "Health/individual RC (Professional)/nurse"
    }, {
      "idInterestArea": 1070,
      "idFather": 1068,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Medico generico",
      "fullDescription": "Medico generico",
      "fullPath": "Rc sanitaria / Individuale(professionista) / Medico generico",
      "descriptionuk": "General practitioner",
      "fullPathuk": "RC/individual health (Professional)/general practitioner"
    }, {
      "idInterestArea": 1071,
      "idFather": 1068,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Chirurgo",
      "fullDescription": "Chirurgo",
      "fullPath": "Rc sanitaria / Individuale(professionista) / Chirurgo",
      "descriptionuk": "Surgeon",
      "fullPathuk": "Health/individual RC (Professional)/Surgeon"
    }, {
      "idInterestArea": 1072,
      "idFather": 1068,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Anestesista",
      "fullDescription": "Anestesista",
      "fullPath": "Rc sanitaria / Individuale(professionista) / Anestesista",
      "descriptionuk": "Anesthesiologist",
      "fullPathuk": "RC/individual health (Professional)/Anesthesiologist"
    }, {
      "idInterestArea": 1073,
      "idFather": 1068,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Ginecologo",
      "fullDescription": "Ginecologo",
      "fullPath": "Rc sanitaria / Individuale(professionista) / Ginecologo",
      "descriptionuk": "Gynecologist",
      "fullPathuk": "RC/individual health (Professional)/Gynecologist"
    }, {
      "idInterestArea": 1074,
      "idFather": 1068,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Ortopedico",
      "fullDescription": "Ortopedico",
      "fullPath": "Rc sanitaria / Individuale(professionista) / Ortopedico",
      "descriptionuk": "Topper",
      "fullPathuk": "Health/individual RC (Professional)/Orthopedic"
    }, {
      "idInterestArea": 1075,
      "idFather": 1068,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Altre professioni mediche",
      "fullDescription": "Altre professioni mediche",
      "fullPath": "Rc sanitaria / Individuale(professionista) / Altre professioni mediche",
      "descriptionuk": "Other medical professions",
      "fullPathuk": "RC/individual health (Professional)/other medical professions"
    }, {
      "idInterestArea": 1076,
      "idFather": 1067,
      "idMainFather": 1067,
      "levelNode": 2,
      "description": "Collettiva(associazioni/ordini)",
      "fullDescription": "Collettiva(associazioni/ordini)",
      "fullPath": "Rc sanitaria / Collettiva(associazioni/ordini)",
      "descriptionuk": "Collective (associations/orders)",
      "fullPathuk": "RC/collective (associations/orders)"
    }, {
      "idInterestArea": 1077,
      "idFather": 1076,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Infermiere",
      "fullDescription": "Infermiere",
      "fullPath": "Rc sanitaria / Collettiva(associazioni/ordini) / Infermiere",
      "descriptionuk": "Nurse",
      "fullPathuk": "RC/collective (associations/orders)/nurse"
    }, {
      "idInterestArea": 1078,
      "idFather": 1076,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Medico generico",
      "fullDescription": "Medico generico",
      "fullPath": "Rc sanitaria / Collettiva(associazioni/ordini) / Medico generico",
      "descriptionuk": "General practitioner",
      "fullPathuk": "RC/collective (associations/orders)/general practitioner"
    }, {
      "idInterestArea": 1079,
      "idFather": 1076,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Chirurgo",
      "fullDescription": "Chirurgo",
      "fullPath": "Rc sanitaria / Collettiva(associazioni/ordini) / Chirurgo",
      "descriptionuk": "Surgeon",
      "fullPathuk": "Health/collective (associations/order) RC/Surgeon"
    }, {
      "idInterestArea": 1080,
      "idFather": 1076,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Anestesista",
      "fullDescription": "Anestesista",
      "fullPath": "Rc sanitaria / Collettiva(associazioni/ordini) / Anestesista",
      "descriptionuk": "Anesthesiologist",
      "fullPathuk": "Health/collective (associations/order) RC/Anesthesiologist"
    }, {
      "idInterestArea": 1081,
      "idFather": 1076,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Ginecologo",
      "fullDescription": "Ginecologo",
      "fullPath": "Rc sanitaria / Collettiva(associazioni/ordini) / Ginecologo",
      "descriptionuk": "Gynecologist",
      "fullPathuk": "Health/collective (associations/order) RC/Gynecologist"
    }, {
      "idInterestArea": 1082,
      "idFather": 1076,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Ortopedico",
      "fullDescription": "Ortopedico",
      "fullPath": "Rc sanitaria / Collettiva(associazioni/ordini) / Ortopedico",
      "descriptionuk": "Topper",
      "fullPathuk": "RC/collective (associations/orders)/Orthopedic"
    }, {
      "idInterestArea": 1083,
      "idFather": 1076,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Altre professioni mediche",
      "fullDescription": "Altre professioni mediche",
      "fullPath": "Rc sanitaria / Collettiva(associazioni/ordini) / Altre professioni mediche",
      "descriptionuk": "Other medical professions",
      "fullPathuk": "RC/collective (associations/orders)/other medical professions"
    }, {
      "idInterestArea": 1084,
      "idFather": 1067,
      "idMainFather": 1067,
      "levelNode": 2,
      "description": "Strutture",
      "fullDescription": "Strutture",
      "fullPath": "Rc sanitaria / Strutture",
      "descriptionuk": "Facilities",
      "fullPathuk": "Health/RC Structures"
    }, {
      "idInterestArea": 1085,
      "idFather": 1084,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Asl",
      "fullDescription": "Asl",
      "fullPath": "Rc sanitaria / Strutture / Asl",
      "descriptionuk": "ASL",
      "fullPathuk": "RC/Facilities/Asl"
    }, {
      "idInterestArea": 1086,
      "idFather": 1084,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Azienda ospedaliera",
      "fullDescription": "Azienda ospedaliera",
      "fullPath": "Rc sanitaria / Strutture / Azienda ospedaliera",
      "descriptionuk": "Hospital",
      "fullPathuk": "Sanitary Facilities/RC hospital"
    }, {
      "idInterestArea": 1087,
      "idFather": 1084,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Ospedale",
      "fullDescription": "Ospedale",
      "fullPath": "Rc sanitaria / Strutture / Ospedale",
      "descriptionuk": "Hospital",
      "fullPathuk": "Sanitary Facilities/RC Hospital"
    }, {
      "idInterestArea": 1088,
      "idFather": 1084,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Casa di cura",
      "fullDescription": "Casa di cura",
      "fullPath": "Rc sanitaria / Strutture / Casa di cura",
      "descriptionuk": "Nursing home",
      "fullPathuk": "RC/facilities/nursing home"
    }, {
      "idInterestArea": 1089,
      "idFather": 1084,
      "idMainFather": 1067,
      "levelNode": 3,
      "description": "Altro",
      "fullDescription": "Altro",
      "fullPath": "Rc sanitaria / Strutture / Altro",
      "descriptionuk": "Other",
      "fullPathuk": "RC/Facilities/other"
    }, {
      "idInterestArea": 1090,
      "idFather": 0,
      "idMainFather": 1090,
      "levelNode": 1,
      "description": "Rc professionale",
      "fullDescription": "Rc professionale",
      "fullPath": "Rc professionale",
      "descriptionuk": "Professional indemnity",
      "fullPathuk": "Professional indemnity"
    }, {
      "idInterestArea": 1091,
      "idFather": 1090,
      "idMainFather": 1090,
      "levelNode": 2,
      "description": "Individuale(professionista)",
      "fullDescription": "Individuale(professionista)",
      "fullPath": "Rc professionale / Individuale(professionista)",
      "descriptionuk": "Individual (Professional)",
      "fullPathuk": "Professional indemnity/individual (Professional)"
    }, {
      "idInterestArea": 32,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Avvocati",
      "fullDescription": "Avvocati",
      "fullPath": "Rc professionale / Individuale(professionista) / Avvocati",
      "descriptionuk": "Lawyers",
      "fullPathuk": "Professional indemnity/individual (Professional)/lawyers"
    }, {
      "idInterestArea": 7,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Ingegneri",
      "fullDescription": "Ingegneri",
      "fullPath": "Rc professionale / Individuale(professionista) / Ingegneri",
      "descriptionuk": "Engineers",
      "fullPathuk": "Professional indemnity/individual (Professional)/engineers"
    }, {
      "idInterestArea": 6,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Architetti",
      "fullDescription": "Architetti",
      "fullPath": "Rc professionale / Individuale(professionista) / Architetti",
      "descriptionuk": "Architects",
      "fullPathuk": "Professional indemnity/individual (Professional)/architects"
    }, {
      "idInterestArea": 1095,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Notai",
      "fullDescription": "Notai",
      "fullPath": "Rc professionale / Individuale(professionista) / Notai",
      "descriptionuk": "Notaries",
      "fullPathuk": "Professional indemnity/individual (Professional)/notary public"
    }, {
      "idInterestArea": 1,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Commercialisti",
      "fullDescription": "Commercialisti",
      "fullPath": "Rc professionale / Individuale(professionista) / Commercialisti",
      "descriptionuk": "Accountants",
      "fullPathuk": "Professional indemnity/individual (Professional)/Accountants"
    }, {
      "idInterestArea": 1097,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Altre categorie regolamentate(ordini)",
      "fullDescription": "Altre categorie regolamentate(ordini)",
      "fullPath": "Rc professionale / Individuale(professionista) / Altre categorie regolamentate(ordini)",
      "descriptionuk": "Other regulated categories (orders)",
      "fullPathuk": "Professional indemnity/individual (Professional)/Other regulated categories (orders)"
    }, {
      "idInterestArea": 1098,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Altre categorie non regolamentate(prive di ordini)",
      "fullDescription": "Altre categorie non regolamentate(prive di ordini)",
      "fullPath": "Rc professionale / Individuale(professionista) / Altre categorie non regolamentate(prive di ordini)",
      "descriptionuk": "Other categories are not regulated (without orders)",
      "fullPathuk": "Professional indemnity/individual (Professional)/other categories not regulated (without orders)"
    }, {
      "idInterestArea": 1099,
      "idFather": 1090,
      "idMainFather": 1090,
      "levelNode": 2,
      "description": "Collettiva(associazioni/ordini)",
      "fullDescription": "Collettiva(associazioni/ordini)",
      "fullPath": "Rc professionale / Collettiva(associazioni/ordini)",
      "descriptionuk": "Collective (associations/orders)",
      "fullPathuk": "Professional indemnity/collective (associations/orders)"
    }, {
      "idInterestArea": 1100,
      "idFather": 1099,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Avvocati",
      "fullDescription": "Avvocati",
      "fullPath": "Rc professionale / Collettiva(associazioni/ordini) / Avvocati",
      "descriptionuk": "Lawyers",
      "fullPathuk": "Professional indemnity/collective (associations/orders)/lawyers"
    }, {
      "idInterestArea": 1101,
      "idFather": 1099,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Ingegneri",
      "fullDescription": "Ingegneri",
      "fullPath": "Rc professionale / Collettiva(associazioni/ordini) / Ingegneri",
      "descriptionuk": "Engineers",
      "fullPathuk": "Professional indemnity/collective (associations/orders)/engineers"
    }, {
      "idInterestArea": 1102,
      "idFather": 1099,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Architetti",
      "fullDescription": "Architetti",
      "fullPath": "Rc professionale / Collettiva(associazioni/ordini) / Architetti",
      "descriptionuk": "Architects",
      "fullPathuk": "Professional indemnity/collective (associations/orders)/architects"
    }, {
      "idInterestArea": 1103,
      "idFather": 1099,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Notai",
      "fullDescription": "Notai",
      "fullPath": "Rc professionale / Collettiva(associazioni/ordini) / Notai",
      "descriptionuk": "Notaries",
      "fullPathuk": "Professional indemnity/collective (associations/orders)/notary public"
    }, {
      "idInterestArea": 1104,
      "idFather": 1099,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Commercialisti",
      "fullDescription": "Commercialisti",
      "fullPath": "Rc professionale / Collettiva(associazioni/ordini) / Commercialisti",
      "descriptionuk": "Accountants",
      "fullPathuk": "Professional indemnity/collective (associations/orders)/Accountants"
    }, {
      "idInterestArea": 1105,
      "idFather": 1099,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Altre categorie regolamentate(ordini)",
      "fullDescription": "Altre categorie regolamentate(ordini)",
      "fullPath": "Rc professionale / Collettiva(associazioni/ordini) / Altre categorie regolamentate(ordini)",
      "descriptionuk": "Other regulated categories (orders)",
      "fullPathuk": "Professional indemnity/collective (associations/orders)/Other regulated categories (orders)"
    }, {
      "idInterestArea": 1106,
      "idFather": 1099,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Altre categorie non regolamentate(prive di ordini)",
      "fullDescription": "Altre categorie non regolamentate(prive di ordini)",
      "fullPath": "Rc professionale / Collettiva(associazioni/ordini) / Altre categorie non regolamentate(prive di ordini)",
      "descriptionuk": "Other categories are not regulated (without orders)",
      "fullPathuk": "Professional indemnity/collective (associations/orders)/other categories not regulated (without orders)"
    }, {
      "idInterestArea": 1107,
      "idFather": 1090,
      "idMainFather": 1090,
      "levelNode": 2,
      "description": "Società",
      "fullDescription": "Società",
      "fullPath": "Rc professionale / Società",
      "descriptionuk": "Society",
      "fullPathuk": "Professional indemnity/Society"
    }, {
      "idInterestArea": 1108,
      "idFather": 1107,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Progettazione",
      "fullDescription": "Progettazione",
      "fullPath": "Rc professionale / Società / Progettazione",
      "descriptionuk": "Design",
      "fullPathuk": "Professional indemnity/company/Design"
    }, {
      "idInterestArea": 1109,
      "idFather": 1107,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Impiantistica",
      "fullDescription": "Impiantistica",
      "fullPath": "Rc professionale / Società / Impiantistica",
      "descriptionuk": "Plant engineering",
      "fullPathuk": "Professional indemnity/company/plant design"
    }, {
      "idInterestArea": 1110,
      "idFather": 1107,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Consulenza",
      "fullDescription": "Consulenza",
      "fullPath": "Rc professionale / Società / Consulenza",
      "descriptionuk": "Consulting",
      "fullPathuk": "Professional Indemnity/Company/consulting"
    }, {
      "idInterestArea": 1111,
      "idFather": 1107,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Altro",
      "fullDescription": "Altro",
      "fullPath": "Rc professionale / Società / Altro",
      "descriptionuk": "Other",
      "fullPathuk": "Professional indemnity/Society/other"
    }, {
      "idInterestArea": 1112,
      "idFather": 0,
      "idMainFather": 1112,
      "levelNode": 1,
      "description": "Rc auto",
      "fullDescription": "Rc auto",
      "fullPath": "Rc auto",
      "descriptionuk": "RC car",
      "fullPathuk": "RC car"
    }, {
      "idInterestArea": 1113,
      "idFather": 1112,
      "idMainFather": 1112,
      "levelNode": 2,
      "description": "Individuale",
      "fullDescription": "Individuale",
      "fullPath": "Rc auto / Individuale",
      "descriptionuk": "Individual",
      "fullPathuk": "RC car/individual"
    }, {
      "idInterestArea": 1114,
      "idFather": 1113,
      "idMainFather": 1112,
      "levelNode": 3,
      "description": "Comparatore RCA (Solo autovetture)",
      "fullDescription": "Comparatore RCA (Solo autovetture)",
      "fullPath": "Rc auto / Individuale / Comparatore RCA (Solo autovetture)",
      "descriptionuk": "Car",
      "fullPathuk": "RC car/individual/Self"
    }, {
      "idInterestArea": 1115,
      "idFather": 1113,
      "idMainFather": 1112,
      "levelNode": 3,
      "description": "Moto",
      "fullDescription": "Moto",
      "fullPath": "Rc auto / Individuale / Moto",
      "descriptionuk": "Bike",
      "fullPathuk": "RC car/individual/Motorcycles"
    }, {
      "idInterestArea": 1116,
      "idFather": 1113,
      "idMainFather": 1112,
      "levelNode": 3,
      "description": "Camion",
      "fullDescription": "Camion",
      "fullPath": "Rc auto / Individuale / Camion",
      "descriptionuk": "Truck",
      "fullPathuk": "RC car/Truck/Individual"
    }, {
      "idInterestArea": 1117,
      "idFather": 1113,
      "idMainFather": 1112,
      "levelNode": 3,
      "description": "Trattative personalizzate",
      "fullDescription": "Trattative personalizzate",
      "fullPath": "Rc auto / Individuale / Trattative personalizzate",
      "descriptionuk": "Other",
      "fullPathuk": "RC car/individual/others"
    }, {
      "idInterestArea": 1118,
      "idFather": 1112,
      "idMainFather": 1112,
      "levelNode": 2,
      "description": "Collettiva",
      "fullDescription": "Collettiva",
      "fullPath": "Rc auto / Collettiva",
      "descriptionuk": "Collective",
      "fullPathuk": "RC cars/collective"
    }, {
      "idInterestArea": 1119,
      "idFather": 1118,
      "idMainFather": 1112,
      "levelNode": 3,
      "description": "Auto",
      "fullDescription": "Auto",
      "fullPath": "Rc auto / Collettiva / Auto",
      "descriptionuk": "Car",
      "fullPathuk": "RC cars/collective/Auto"
    }, {
      "idInterestArea": 1120,
      "idFather": 1118,
      "idMainFather": 1112,
      "levelNode": 3,
      "description": "Moto",
      "fullDescription": "Moto",
      "fullPath": "Rc auto / Collettiva / Moto",
      "descriptionuk": "Bike",
      "fullPathuk": "RC cars/collective/Moto"
    }, {
      "idInterestArea": 1121,
      "idFather": 1118,
      "idMainFather": 1112,
      "levelNode": 3,
      "description": "Camion",
      "fullDescription": "Camion",
      "fullPath": "Rc auto / Collettiva / Camion",
      "descriptionuk": "Truck",
      "fullPathuk": "RC car/Truck/Collective"
    }, {
      "idInterestArea": 1122,
      "idFather": 1118,
      "idMainFather": 1112,
      "levelNode": 3,
      "description": "Altro",
      "fullDescription": "Altro",
      "fullPath": "Rc auto / Collettiva / Altro",
      "descriptionuk": "Other",
      "fullPathuk": "RC cars/collective/other"
    }, {
      "idInterestArea": 1123,
      "idFather": 1112,
      "idMainFather": 1112,
      "levelNode": 2,
      "description": "Flotte",
      "fullDescription": "Flotte",
      "fullPath": "Rc auto / Flotte",
      "descriptionuk": "Fleets",
      "fullPathuk": "RC car/Fleets"
    }, {
      "idInterestArea": 1124,
      "idFather": 1123,
      "idMainFather": 1112,
      "levelNode": 3,
      "description": "Auto",
      "fullDescription": "Auto",
      "fullPath": "Rc auto / Flotte / Auto",
      "descriptionuk": "Car",
      "fullPathuk": "RC car/fleet/Car"
    }, {
      "idInterestArea": 1125,
      "idFather": 1123,
      "idMainFather": 1112,
      "levelNode": 3,
      "description": "Moto",
      "fullDescription": "Moto",
      "fullPath": "Rc auto / Flotte / Moto",
      "descriptionuk": "Bike",
      "fullPathuk": "RC car/Motorcycle/Fleets"
    }, {
      "idInterestArea": 1126,
      "idFather": 1123,
      "idMainFather": 1112,
      "levelNode": 3,
      "description": "Camion",
      "fullDescription": "Camion",
      "fullPath": "Rc auto / Flotte / Camion",
      "descriptionuk": "Truck",
      "fullPathuk": "RC car/Truck fleet"
    }, {
      "idInterestArea": 1127,
      "idFather": 1123,
      "idMainFather": 1112,
      "levelNode": 3,
      "description": "Altro",
      "fullDescription": "Altro",
      "fullPath": "Rc auto / Flotte / Altro",
      "descriptionuk": "Other",
      "fullPathuk": "RC car/Fleets/other"
    }, {
      "idInterestArea": 1128,
      "idFather": 0,
      "idMainFather": 1128,
      "levelNode": 1,
      "description": "Trasporti",
      "fullDescription": "Trasporti",
      "fullPath": "Trasporti",
      "descriptionuk": "Transport",
      "fullPathuk": "Transport"
    }, {
      "idInterestArea": 1129,
      "idFather": 1128,
      "idMainFather": 1128,
      "levelNode": 2,
      "description": "Merci",
      "fullDescription": "Merci",
      "fullPath": "Trasporti / Merci",
      "descriptionuk": "Goods",
      "fullPathuk": "Transport/Freight"
    }, {
      "idInterestArea": 1130,
      "idFather": 1129,
      "idMainFather": 1128,
      "levelNode": 3,
      "description": "Diretta(azienda)",
      "fullDescription": "Diretta(azienda)",
      "fullPath": "Trasporti / Merci / Diretta(azienda)",
      "descriptionuk": "Live (company)",
      "fullPathuk": "Transport/freight/direct (company)"
    }, {
      "idInterestArea": 1131,
      "idFather": 1129,
      "idMainFather": 1128,
      "levelNode": 3,
      "description": "Di responsabilità(trasportatore)",
      "fullDescription": "Di responsabilità(trasportatore)",
      "fullPath": "Trasporti / Merci / Di responsabilità(trasportatore)",
      "descriptionuk": "Of responsibility (transporter)",
      "fullPathuk": "Transport/freight/liability (transporter)"
    }, {
      "idInterestArea": 1132,
      "idFather": 1128,
      "idMainFather": 1128,
      "levelNode": 2,
      "description": "Corpi",
      "fullDescription": "Corpi",
      "fullPath": "Trasporti / Corpi",
      "descriptionuk": "Bodies",
      "fullPathuk": "Transport/Bodies"
    }, {
      "idInterestArea": 1133,
      "idFather": 1132,
      "idMainFather": 1128,
      "levelNode": 3,
      "description": "Terrestri",
      "fullDescription": "Terrestri",
      "fullPath": "Trasporti / Corpi / Terrestri",
      "descriptionuk": "Earthlings",
      "fullPathuk": "Transport/Bodies/Land"
    }, {
      "idInterestArea": 1134,
      "idFather": 1132,
      "idMainFather": 1128,
      "levelNode": 3,
      "description": "Aerei",
      "fullDescription": "Aerei",
      "fullPath": "Trasporti / Corpi / Aerei",
      "descriptionuk": "Planes",
      "fullPathuk": "Transport/Bodies/Planes"
    }, {
      "idInterestArea": 1135,
      "idFather": 1132,
      "idMainFather": 1128,
      "levelNode": 3,
      "description": "Ferroviari",
      "fullDescription": "Ferroviari",
      "fullPath": "Trasporti / Corpi / Ferroviari",
      "descriptionuk": "By rail",
      "fullPathuk": "Transportation/Rail/Bodies"
    }, {
      "idInterestArea": 1136,
      "idFather": 1132,
      "idMainFather": 1128,
      "levelNode": 3,
      "description": "Marittimi",
      "fullDescription": "Marittimi",
      "fullPath": "Trasporti / Corpi / Marittimi",
      "descriptionuk": "Seafarers",
      "fullPathuk": "Transport/Bodies/Maritime"
    }, {
      "idInterestArea": 1137,
      "idFather": 0,
      "idMainFather": 1137,
      "levelNode": 1,
      "description": "Credito",
      "fullDescription": "Credito",
      "fullPath": "Credito",
      "descriptionuk": "Credit",
      "fullPathuk": "Credit"
    }, {
      "idInterestArea": 1138,
      "idFather": 1137,
      "idMainFather": 1137,
      "levelNode": 2,
      "description": "Credito tradizionale",
      "fullDescription": "Credito tradizionale",
      "fullPath": "Credito / Credito tradizionale",
      "descriptionuk": "Traditional credit",
      "fullPathuk": "Traditional credit/credit"
    }, {
      "idInterestArea": 1139,
      "idFather": 1137,
      "idMainFather": 1137,
      "levelNode": 2,
      "description": "Cpi",
      "fullDescription": "Cpi",
      "fullPath": "Credito / Cpi",
      "descriptionuk": "CPI",
      "fullPathuk": "Credit/Cpi"
    }, {
      "idInterestArea": 1140,
      "idFather": 1137,
      "idMainFather": 1137,
      "levelNode": 2,
      "description": "Ppi",
      "fullDescription": "Ppi",
      "fullPath": "Credito / Ppi",
      "descriptionuk": "PPI",
      "fullPathuk": "Credit/Ppi"
    }, {
      "idInterestArea": 1141,
      "idFather": 1137,
      "idMainFather": 1137,
      "levelNode": 2,
      "description": "Cessione quinto",
      "fullDescription": "Cessione quinto",
      "fullPath": "Credito / Cessione quinto",
      "descriptionuk": "Cessione quinto",
      "fullPathuk": "Credit/transfer fifth"
    }, {
      "idInterestArea": 1142,
      "idFather": 0,
      "idMainFather": 1142,
      "levelNode": 1,
      "description": "Danno ambientale",
      "fullDescription": "Danno ambientale",
      "fullPath": "Danno ambientale",
      "descriptionuk": "Environmental damage",
      "fullPathuk": "Environmental damage"
    }, {
      "idInterestArea": 1143,
      "idFather": 1142,
      "idMainFather": 1142,
      "levelNode": 2,
      "description": "Privato",
      "fullDescription": "Privato",
      "fullPath": "Danno ambientale / Privato",
      "descriptionuk": "Private",
      "fullPathuk": "Environmental damage/private"
    }, {
      "idInterestArea": 1144,
      "idFather": 1142,
      "idMainFather": 1142,
      "levelNode": 2,
      "description": "Azienda",
      "fullDescription": "Azienda",
      "fullPath": "Danno ambientale / Azienda",
      "descriptionuk": "Company",
      "fullPathuk": null
    }, {
      "idInterestArea": 1145,
      "idFather": 1142,
      "idMainFather": 1142,
      "levelNode": 2,
      "description": "Ente pubblico",
      "fullDescription": "Ente pubblico",
      "fullPath": "Danno ambientale / Ente pubblico",
      "descriptionuk": "Public body",
      "fullPathuk": null
    }, {
      "idInterestArea": 1146,
      "idFather": 0,
      "idMainFather": 1146,
      "levelNode": 1,
      "description": "Cyber risk",
      "fullDescription": "Cyber risk",
      "fullPath": "Cyber risk",
      "descriptionuk": "Cyber risk",
      "fullPathuk": "Cyber risk"
    }, {
      "idInterestArea": 1147,
      "idFather": 1146,
      "idMainFather": 1146,
      "levelNode": 2,
      "description": "Privato/professionista",
      "fullDescription": "Privato/professionista",
      "fullPath": "Cyber risk / Privato/professionista",
      "descriptionuk": "Private/professional",
      "fullPathuk": "Cyber risk/private/professional"
    }, {
      "idInterestArea": 1148,
      "idFather": 1146,
      "idMainFather": 1146,
      "levelNode": 2,
      "description": "Azienda",
      "fullDescription": "Azienda",
      "fullPath": "Cyber risk / Azienda",
      "descriptionuk": "Company",
      "fullPathuk": "Cyber risk/Company"
    }, {
      "idInterestArea": 1149,
      "idFather": 1146,
      "idMainFather": 1146,
      "levelNode": 2,
      "description": "Ente pubblico",
      "fullDescription": "Ente pubblico",
      "fullPath": "Cyber risk / Ente pubblico",
      "descriptionuk": "Public body",
      "fullPathuk": "Cyber risk/public body"
    }, {
      "idInterestArea": 1150,
      "idFather": 0,
      "idMainFather": 1150,
      "levelNode": 1,
      "description": "Car/ear",
      "fullDescription": "Car/ear",
      "fullPath": "Car/ear",
      "descriptionuk": "Car/ear",
      "fullPathuk": "Car/ear"
    }, {
      "idInterestArea": 1151,
      "idFather": 1150,
      "idMainFather": 1150,
      "levelNode": 2,
      "description": "Costruzioni civili",
      "fullDescription": "Costruzioni civili",
      "fullPath": "Car/ear / Costruzioni civili",
      "descriptionuk": "Civil constructions",
      "fullPathuk": "Car/ear/civil construction"
    }, {
      "idInterestArea": 1152,
      "idFather": 1150,
      "idMainFather": 1150,
      "levelNode": 2,
      "description": "Costruzioni industriali",
      "fullDescription": "Costruzioni industriali",
      "fullPath": "Car/ear / Costruzioni industriali",
      "descriptionuk": "Industrial constructions",
      "fullPathuk": "Car/ear/industrial constructions"
    }, {
      "idInterestArea": 1153,
      "idFather": 1150,
      "idMainFather": 1150,
      "levelNode": 2,
      "description": "Altre costruzioni",
      "fullDescription": "Altre costruzioni",
      "fullPath": "Car/ear / Altre costruzioni",
      "descriptionuk": "Other buildings",
      "fullPathuk": "Car/ear/other buildings"
    }, {
      "idInterestArea": 1154,
      "idFather": 1150,
      "idMainFather": 1150,
      "levelNode": 2,
      "description": "Montaggi",
      "fullDescription": "Montaggi",
      "fullPath": "Car/ear / Montaggi",
      "descriptionuk": "Montages",
      "fullPathuk": "Car/ear/fittings"
    }, {
      "idInterestArea": 1155,
      "idFather": 0,
      "idMainFather": 1155,
      "levelNode": 1,
      "description": "D&o",
      "fullDescription": "D&o",
      "fullPath": "D&o",
      "descriptionuk": "D&o",
      "fullPathuk": "D&o"
    }, {
      "idInterestArea": 1156,
      "idFather": 1155,
      "idMainFather": 1155,
      "levelNode": 2,
      "description": "Individuale",
      "fullDescription": "Individuale",
      "fullPath": "D&o / Individuale",
      "descriptionuk": "Individual",
      "fullPathuk": "D&o/individual"
    }, {
      "idInterestArea": 1157,
      "idFather": 1155,
      "idMainFather": 1155,
      "levelNode": 2,
      "description": "Aziendale",
      "fullDescription": "Aziendale",
      "fullPath": "D&o / Aziendale",
      "descriptionuk": "Corporate",
      "fullPathuk": "D&o/business"
    }, {
      "idInterestArea": 1158,
      "idFather": 0,
      "idMainFather": 1158,
      "levelNode": 1,
      "description": "Financial institution",
      "fullDescription": "Financial institution",
      "fullPath": "Financial institution",
      "descriptionuk": "Financial institution",
      "fullPathuk": "Financial institution"
    }, {
      "idInterestArea": 1159,
      "idFather": 1158,
      "idMainFather": 1158,
      "levelNode": 2,
      "description": "Bbb",
      "fullDescription": "Bbb",
      "fullPath": "Financial institution / Bbb",
      "descriptionuk": "BBB",
      "fullPathuk": "Financial institution/Bbb"
    }, {
      "idInterestArea": 1160,
      "idFather": 1158,
      "idMainFather": 1158,
      "levelNode": 2,
      "description": "Infedeltà delle reti",
      "fullDescription": "Infedeltà delle reti",
      "fullPath": "Financial institution / Infedeltà delle reti",
      "descriptionuk": "Infidelity of networks",
      "fullPathuk": "Financial institution/Infidelity of networks"
    }, {
      "idInterestArea": 1161,
      "idFather": 1158,
      "idMainFather": 1158,
      "levelNode": 2,
      "description": "Altre assicurazioni(posi)",
      "fullDescription": "Altre assicurazioni(posi)",
      "fullPath": "Financial institution / Altre assicurazioni(posi)",
      "descriptionuk": "Other insurance (posi)",
      "fullPathuk": "Financial institution/other insurance (posi)"
    }, {
      "idInterestArea": 1162,
      "idFather": 0,
      "idMainFather": 1162,
      "levelNode": 1,
      "description": "Fine art",
      "fullDescription": "Fine art",
      "fullPath": "Fine art",
      "descriptionuk": "Fine art",
      "fullPathuk": "Fine art"
    }, {
      "idInterestArea": 1163,
      "idFather": 1162,
      "idMainFather": 1162,
      "levelNode": 2,
      "description": "Privati(collezioni)",
      "fullDescription": "Privati(collezioni)",
      "fullPath": "Fine art / Privati(collezioni)",
      "descriptionuk": "Private (collections)",
      "fullPathuk": "Fine art/private (collections)"
    }, {
      "idInterestArea": 1164,
      "idFather": 1162,
      "idMainFather": 1162,
      "levelNode": 2,
      "description": "Musei",
      "fullDescription": "Musei",
      "fullPath": "Fine art / Musei",
      "descriptionuk": "Museums",
      "fullPathuk": "Fine art/museums"
    }, {
      "idInterestArea": 1165,
      "idFather": 1162,
      "idMainFather": 1162,
      "levelNode": 2,
      "description": "Mostre",
      "fullDescription": "Mostre",
      "fullPath": "Fine art / Mostre",
      "descriptionuk": "Exhibitions",
      "fullPathuk": "Fine art/exhibitions"
    }, {
      "idInterestArea": 1166,
      "idFather": 0,
      "idMainFather": 1166,
      "levelNode": 1,
      "description": "Cauzioni",
      "fullDescription": "Cauzioni",
      "fullPath": "Cauzioni",
      "descriptionuk": "Bail bonds",
      "fullPathuk": "Bail bonds"
    }, {
      "idInterestArea": 1167,
      "idFather": 1166,
      "idMainFather": 1166,
      "levelNode": 2,
      "description": "Iva",
      "fullDescription": "Iva",
      "fullPath": "Cauzioni / Iva",
      "descriptionuk": "VAT",
      "fullPathuk": "Securities/Vat"
    }, {
      "idInterestArea": 1168,
      "idFather": 1166,
      "idMainFather": 1166,
      "levelNode": 2,
      "description": "Doganali",
      "fullDescription": "Doganali",
      "fullPath": "Cauzioni / Doganali",
      "descriptionuk": "Customs",
      "fullPathuk": "Securities/Customs"
    }, {
      "idInterestArea": 1169,
      "idFather": 1166,
      "idMainFather": 1166,
      "levelNode": 2,
      "description": "Performance bond",
      "fullDescription": "Performance bond",
      "fullPath": "Cauzioni / Performance bond",
      "descriptionuk": "Performance bond",
      "fullPathuk": "Securities/Performance bond"
    }, {
      "idInterestArea": 1170,
      "idFather": 1166,
      "idMainFather": 1166,
      "levelNode": 2,
      "description": "Altro",
      "fullDescription": "Altro",
      "fullPath": "Cauzioni / Altro",
      "descriptionuk": "Other",
      "fullPathuk": "Securities/Other"
    }, {
      "idInterestArea": 1171,
      "idFather": 0,
      "idMainFather": 1171,
      "levelNode": 1,
      "description": "Programmi multinazionali",
      "fullDescription": "Programmi multinazionali",
      "fullPath": "Programmi multinazionali",
      "descriptionuk": "Multinational programs",
      "fullPathuk": "Multinational programs"
    }, {
      "idInterestArea": 1172,
      "idFather": 1171,
      "idMainFather": 1171,
      "levelNode": 2,
      "description": "Property",
      "fullDescription": "Property",
      "fullPath": "Programmi multinazionali / Property",
      "descriptionuk": "Property",
      "fullPathuk": "Multinational programs/Property"
    }, {
      "idInterestArea": 1173,
      "idFather": 1171,
      "idMainFather": 1171,
      "levelNode": 2,
      "description": "Casualty",
      "fullDescription": "Casualty",
      "fullPath": "Programmi multinazionali / Casualty",
      "descriptionuk": "Casualty",
      "fullPathuk": "Multinational programs/Casualty"
    }, {
      "idInterestArea": 1174,
      "idFather": 1171,
      "idMainFather": 1171,
      "levelNode": 2,
      "description": "Marine",
      "fullDescription": "Marine",
      "fullPath": "Programmi multinazionali / Marine",
      "descriptionuk": "Marine",
      "fullPathuk": "Multinational programs/Marine"
    }, {
      "idInterestArea": 1175,
      "idFather": 1171,
      "idMainFather": 1171,
      "levelNode": 2,
      "description": "Altro",
      "fullDescription": "Altro",
      "fullPath": "Programmi multinazionali / Altro",
      "descriptionuk": "Other",
      "fullPathuk": "Multinational programs/other"
    }, {
      "idInterestArea": 1176,
      "idFather": 0,
      "idMainFather": 1176,
      "levelNode": 1,
      "description": "Travel insurance",
      "fullDescription": "Travel insurance",
      "fullPath": "Travel insurance",
      "descriptionuk": "Travel insurance",
      "fullPathuk": "Travel insurance"
    }, {
      "idInterestArea": 1177,
      "idFather": 1176,
      "idMainFather": 1176,
      "levelNode": 2,
      "description": "Individuale",
      "fullDescription": "Individuale",
      "fullPath": "Travel insurance / Individuale",
      "descriptionuk": "Individual",
      "fullPathuk": "Travel insurance/individual"
    }, {
      "idInterestArea": 1178,
      "idFather": 1177,
      "idMainFather": 1176,
      "levelNode": 3,
      "description": "Business",
      "fullDescription": "Business",
      "fullPath": "Travel insurance / Individuale / Business",
      "descriptionuk": "Business",
      "fullPathuk": "Travel insurance/individual/Business"
    }, {
      "idInterestArea": 1179,
      "idFather": 1177,
      "idMainFather": 1176,
      "levelNode": 3,
      "description": "Leisure",
      "fullDescription": "Leisure",
      "fullPath": "Travel insurance / Individuale / Leisure",
      "descriptionuk": "Leisure",
      "fullPathuk": "Travel insurance/individual/Leisure"
    }, {
      "idInterestArea": 1180,
      "idFather": 1176,
      "idMainFather": 1176,
      "levelNode": 2,
      "description": "Aziendale(business travel)",
      "fullDescription": "Aziendale(business travel)",
      "fullPath": "Travel insurance / Aziendale(business travel)",
      "descriptionuk": "Corporate (business travel)",
      "fullPathuk": "Travel insurance/corporate (business travel)"
    }, {
      "idInterestArea": 1181,
      "idFather": 1180,
      "idMainFather": 1176,
      "levelNode": 3,
      "description": "Domestic",
      "fullDescription": "Domestic",
      "fullPath": "Travel insurance / Aziendale(business travel) / Domestic",
      "descriptionuk": "Domestic",
      "fullPathuk": "Travel insurance/corporate (business travel)/Domestic"
    }, {
      "idInterestArea": 1182,
      "idFather": 1180,
      "idMainFather": 1176,
      "levelNode": 3,
      "description": "Multinational",
      "fullDescription": "Multinational",
      "fullPath": "Travel insurance / Aziendale(business travel) / Multinational",
      "descriptionuk": "Multinational",
      "fullPathuk": "Travel insurance/corporate (business travel)/Multinational"
    }, {
      "idInterestArea": 1183,
      "idFather": 1176,
      "idMainFather": 1176,
      "levelNode": 2,
      "description": "Student",
      "fullDescription": "Student",
      "fullPath": "Travel insurance / Student",
      "descriptionuk": "Student",
      "fullPathuk": "Travel insurance/Student"
    }, {
      "idInterestArea": 1184,
      "idFather": 1183,
      "idMainFather": 1176,
      "levelNode": 3,
      "description": "Incoming e/o outgoing",
      "fullDescription": "Incoming e/o outgoing",
      "fullPath": "Travel insurance / Student / Incoming e/o outgoing",
      "descriptionuk": "Incoming and/or outgoing",
      "fullPathuk": "Travel insurance/Student/Incoming and/or outgoing"
    }, {
      "idInterestArea": 1185,
      "idFather": 0,
      "idMainFather": 1185,
      "levelNode": 1,
      "description": "Tutela legale",
      "fullDescription": "Tutela legale",
      "fullPath": "Tutela legale",
      "descriptionuk": "Legal protection",
      "fullPathuk": "Legal protection"
    }, {
      "idInterestArea": 1186,
      "idFather": 1185,
      "idMainFather": 1185,
      "levelNode": 2,
      "description": "Privati",
      "fullDescription": "Privati",
      "fullPath": "Tutela legale / Privati",
      "descriptionuk": "Private individuals",
      "fullPathuk": "Legal/private protection"
    }, {
      "idInterestArea": 1187,
      "idFather": 1185,
      "idMainFather": 1185,
      "levelNode": 2,
      "description": "Professionisti",
      "fullDescription": "Professionisti",
      "fullPath": "Tutela legale / Professionisti",
      "descriptionuk": "Professionals",
      "fullPathuk": "Legal/Professionals"
    }, {
      "idInterestArea": 1188,
      "idFather": 1185,
      "idMainFather": 1185,
      "levelNode": 2,
      "description": "Aziende",
      "fullDescription": "Aziende",
      "fullPath": "Tutela legale / Aziende",
      "descriptionuk": "Companies",
      "fullPathuk": "Legal/businesses"
    }, {
      "idInterestArea": 1189,
      "idFather": 0,
      "idMainFather": 1189,
      "levelNode": 1,
      "description": "Terrorismo & political violence",
      "fullDescription": "Terrorismo & political violence",
      "fullPath": "Terrorismo & political violence",
      "descriptionuk": "Terrorism and political violence",
      "fullPathuk": "Terrorism and political violence"
    }, {
      "idInterestArea": 1190,
      "idFather": 0,
      "idMainFather": 1190,
      "levelNode": 1,
      "description": "Reputational risk",
      "fullDescription": "Reputational risk",
      "fullPath": "Reputational risk",
      "descriptionuk": "Reputational risk",
      "fullPathuk": "Reputational risk"
    }, {
      "idInterestArea": 1191,
      "idFather": 0,
      "idMainFather": 1191,
      "levelNode": 1,
      "description": "Supply chain",
      "fullDescription": "Supply chain",
      "fullPath": "Supply chain",
      "descriptionuk": "Supply chain",
      "fullPathuk": "Supply chain"
    }, {
      "idInterestArea": 1192,
      "idFather": 0,
      "idMainFather": 1192,
      "levelNode": 1,
      "description": "Machinery breakdown",
      "fullDescription": "Machinery breakdown",
      "fullPath": "Machinery breakdown",
      "descriptionuk": "Machinery breakdown",
      "fullPathuk": "Machinery breakdown"
    }, {
      "idInterestArea": 1193,
      "idFather": 0,
      "idMainFather": 1193,
      "levelNode": 1,
      "description": "Miscellaneous",
      "fullDescription": "Miscellaneous",
      "fullPath": "Miscellaneous",
      "descriptionuk": "Miscellaneous",
      "fullPathuk": "Miscellaneous"
    }, {
      "idInterestArea": 1194,
      "idFather": 1166,
      "idMainFather": 1166,
      "levelNode": 2,
      "description": "Locazioni",
      "fullDescription": "Locazioni",
      "fullPath": "Cauzioni / Locazioni",
      "descriptionuk": "Rentals",
      "fullPathuk": "Securities/Rentals"
    }, {
      "idInterestArea": 16,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Agenti & Broker Assicurativi",
      "fullDescription": "Agenti & Broker Assicurativi",
      "fullPath": "Rc professionale / Individuale(professionista) / Agenti & Broker Assicurativi",
      "descriptionuk": "Agenti & Broker Assicurativi",
      "fullPathuk": "Rc professionale / Individuale(professionista) / Agenti & Broker Assicurativi"
    }, {
      "idInterestArea": 14,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Agenti Finanziari",
      "fullDescription": "Agenti Finanziari",
      "fullPath": "Rc professionale / Individuale(professionista) / Agenti Finanziari",
      "descriptionuk": "Agenti Finanziari",
      "fullPathuk": "Rc professionale / Individuale(professionista) / Agenti Finanziari"
    }, {
      "idInterestArea": 10,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Agronomi Agrotecnici e Periti Agrari",
      "fullDescription": "Agronomi Agrotecnici e Periti Agrari",
      "fullPath": "Rc professionale / Individuale(professionista) / Agronomi Agrotecnici e Periti Agrari",
      "descriptionuk": "Agronomi, Agrotecnici e Periti Agrari",
      "fullPathuk": "Rc professionale / Individuale(professionista) / Agronomi, Agrotecnici e Periti Agrari"
    }, {
      "idInterestArea": 4,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Amministratori di Condominio",
      "fullDescription": "Amministratori di Condominio",
      "fullPath": "Rc professionale / Individuale(professionista) / Amministratori di Condominio",
      "descriptionuk": "Amministratori di Condominio",
      "fullPathuk": "Rc professionale / Individuale(professionista) / Amministratori di Condominio"
    }, {
      "idInterestArea": 21,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Colpa Grave",
      "fullDescription": "Colpa Grave",
      "fullPath": "Rc professionale / Individuale(professionista) / Colpa Grave",
      "descriptionuk": "Colpa Grave",
      "fullPathuk": "Rc professionale / Individuale(professionista) / Colpa Grave"
    }, {
      "idInterestArea": 3,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Consulenti del Lavoro",
      "fullDescription": "Consulenti del Lavoro",
      "fullPath": "Rc professionale / Individuale(professionista) / Consulenti del Lavoro",
      "descriptionuk": "Consulenti del Lavoro",
      "fullPathuk": "Rc professionale / Individuale(professionista) / Consulenti del Lavoro"
    }, {
      "idInterestArea": 5,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "EDP",
      "fullDescription": "EDP",
      "fullPath": "Rc professionale / Individuale(professionista) / EDP",
      "descriptionuk": "EDP",
      "fullPathuk": "Rc professionale / Individuale(professionista) / EDP"
    }, {
      "idInterestArea": 8,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Geometri",
      "fullDescription": "Geometri",
      "fullPath": "Rc professionale / Individuale(professionista) / Geometri",
      "descriptionuk": "Geometri",
      "fullPathuk": "Rc professionale / Individuale(professionista) / Geometri"
    }, {
      "idInterestArea": 52,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Infortuni Professionisti",
      "fullDescription": "Infortuni Professionisti",
      "fullPath": "Rc professionale / Individuale(professionista) / Infortuni Professionisti",
      "descriptionuk": "Infortuni Professionisti",
      "fullPathuk": "Rc professionale / Individuale(professionista) / Infortuni Professionisti"
    }, {
      "idInterestArea": 17,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Mediatori Creditizi",
      "fullDescription": "Mediatori Creditizi",
      "fullPath": "Rc professionale / Individuale(professionista) / Mediatori Creditizi",
      "descriptionuk": "Mediatori Creditizi",
      "fullPathuk": "Rc professionale / Individuale(professionista) / Mediatori Creditizi"
    }, {
      "idInterestArea": 50,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Miscellaneous",
      "fullDescription": "Miscellaneous",
      "fullPath": "Rc professionale / Individuale(professionista) / Miscellaneous",
      "descriptionuk": "Miscellaneous",
      "fullPathuk": "Rc professionale / Individuale(professionista) / Miscellaneous"
    }, {
      "idInterestArea": 12,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Periti Industriali",
      "fullDescription": "Periti Industriali",
      "fullPath": "Rc professionale / Individuale(professionista) / Periti Industriali",
      "descriptionuk": "Periti Industriali",
      "fullPathuk": "Rc professionale / Individuale(professionista) / Periti Industriali"
    }, {
      "idInterestArea": 91,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Temporanea Caso Morte",
      "fullDescription": "Temporanea Caso Morte",
      "fullPath": "Rc professionale / Individuale(professionista) / Temporanea Caso Morte",
      "descriptionuk": "Temporanea Caso Morte",
      "fullPathuk": "Rc professionale / Individuale(professionista) / Temporanea Caso Morte"
    }, {
      "idInterestArea": 26,
      "idFather": 1091,
      "idMainFather": 1090,
      "levelNode": 3,
      "description": "Yacht",
      "fullDescription": "Yacht",
      "fullPath": "Rc professionale / Individuale(professionista) / Yacht",
      "descriptionuk": "Yacht",
      "fullPathuk": "Rc professionale / Individuale(professionista) / Yacht"
    }
  ],
  ...commonRes,
};
