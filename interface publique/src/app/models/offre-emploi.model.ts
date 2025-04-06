export interface OffreEmploi {
    id: number;
    titre: string;
    description: string;
    entreprise: string;
    localisation: string;
    salaire: number;
    typeContrat: string;
    competences: string[];
    datePublication: string;
    dateExpiration: string;
}
