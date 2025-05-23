export interface OffreEmploi {
    id?: number;
    titrePoste: string;
    nomEntreprise: string;
    typeContrat: string;
    pays: string;
    ville: string;
    nombreCandidats: string;
    nombrePostes: string;
    salaire: string;
    duree: string;
    tauxHoraire: string; 
  
    descriptionCourte: string; 
    descriptionLongue: string; 
  
    datePub: string;
    dateExpiration: string; 
    image: string;
    badge: boolean;
    competences: string[];
  }
  