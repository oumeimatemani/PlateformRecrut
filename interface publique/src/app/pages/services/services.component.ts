import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AccordianComponent } from '../../components/accordian/accordian.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ExploreJobComponent } from '../../components/explore-job/explore-job.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    AccordianComponent,
    FooterComponent,
    ExploreJobComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  servicesData = [
    {
      icon: 'uil uil-cloud', 
      title: 'Cloud Computing', 
      desc: 'Déploiement et gestion d’infrastructures cloud sécurisées et évolutives.'
    },
    {
      icon: 'uil uil-desktop-cloud-alt', 
      title: 'Développement Logiciel', 
      desc: 'Solutions logicielles personnalisées adaptées aux besoins des entreprises.'
    },
    {
      icon: 'uil uil-lock-access', 
      title: 'Sécurité IT', 
      desc: 'Protection des données et sécurisation des infrastructures informatiques.'
    },
    {
      icon: 'uil uil-server-network', 
      title: 'Infrastructure & Réseau', 
      desc: 'Mise en place et gestion d’architectures réseau performantes.'
    },
    {
      icon: 'uil uil-robot', 
      title: 'Automatisation & IA', 
      desc: 'Développement de solutions basées sur l’intelligence artificielle et l’automatisation.'
    },
    {
      icon: 'uil uil-users-alt', 
      title: 'Conseil en IT', 
      desc: 'Accompagnement stratégique pour la transformation digitale des entreprises.'
    },
    {
      icon: 'uil uil-database', 
      title: 'Gestion des Données', 
      desc: 'Optimisation et sécurisation des bases de données et infrastructures Big Data.'
    },
    {
      icon: 'uil uil-headphones-alt', 
      title: 'Support & Maintenance', 
      desc: 'Assistance technique 24/7 pour assurer la continuité des services informatiques.'
    }
  ];

  isOpen: any = false;

  togggleModal(e: any) {
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
