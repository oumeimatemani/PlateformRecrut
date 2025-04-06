import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MillionsOfJobComponent } from '../../components/millions-of-job/millions-of-job.component';
import { CounterComponent } from '../../components/counter/counter.component';
import { QueAnsComponent } from '../../components/que-ans/que-ans.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ExploreJobComponent } from '../../components/explore-job/explore-job.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    MillionsOfJobComponent,
    CounterComponent,
    QueAnsComponent,
    FooterComponent,
    ExploreJobComponent
  ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {

  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
  
  featureData = [
    {
      icon: 'uil uil-cog', // Icône alternative pour les solutions IT sur mesure
      title: 'Solutions IT sur mesure',
      desc: 'Développement de solutions personnalisées pour répondre aux besoins spécifiques de chaque secteur d’activité.'
    },
    {
      icon: 'uil uil-credit-card', // Icône pour les solutions de paiements électroniques
      title: 'Solutions de Paiements Électroniques (Monétique)',
      desc: 'Systèmes intelligents de paiement électronique pour accompagner la transformation digitale des entreprises.'
    },
    {
      icon: 'uil uil-sitemap', // Icône alternative pour l'intégration IT
      title: 'Intégration IT',
      desc: 'Mise en place de solutions IT complètes avec une approche de bout en bout (Plan-Build-Run).'
    },
    {
      icon: 'uil uil-wrench', // Icône pour la maintenance des plateformes
      title: 'Maintenance des plateformes',
      desc: 'Contrats de maintenance informatique adaptés aux besoins spécifiques des entreprises (ponctuels ou réguliers).'
    },
    {
      icon: 'uil uil-shield-check', // Icône pour les réseaux informatiques et sécurité
      title: 'Réseaux Informatique & Sécurité',
      desc: 'Solutions complètes de réseautique et sécurité pour protéger votre infrastructure IT.'
    },
    {
      icon: 'uil uil-video', // Icône pour les solutions de sécurité / vidéosurveillance
      title: 'Solutions de Sécurité & Vidéosurveillance',
      desc: 'Systèmes avancés de vidéosurveillance et de sécurité pour protéger vos installations.'
    },
    {
      icon: 'uil uil-server', // Icône pour l'infrastructure informatique
      title: 'Infrastructure Informatique',
      desc: 'Collaboration avec les leaders du marché pour fournir des infrastructures robustes et fiables.'
    },
    {
      icon: 'uil uil-users-alt', // Icône pour les partenariats stratégiques
      title: 'Expertise & Partenariats Stratégiques',
      desc: 'Partenariats avec des acteurs majeurs du marché pour offrir des solutions innovantes et globales.'
    }
];


}