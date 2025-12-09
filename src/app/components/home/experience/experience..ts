import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmCardImports } from '@spartan-ng/helm/card';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, HlmCardImports, HlmBadgeImports],
  templateUrl: './experience.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  experience = signal([
    {
      title: 'Software Developer',
      date: 'Oct. 2024– Jul. 2025',
      company: 'AdvyTeam, Lac 1, Tunisia',
      current: false,
      gotBulletPoints: true,
      projects: [
        {
          name: 'PeoplMap',
          description: [
            'Engineered a modular React.js frontend with real-time collaboration using WebSocket, Socket.IO, and LiveKit.',
            'Implemented backend synchronization and REST APIs with Node.js/Express for consistent multi-user sessions (Node.js,Express, Redis).',
            'Integrated JWT-based authentication and middleware to secure client-server communication (JWT, Node.js).',
            'Optimized Redis caching and Socket.IO event handling for low-latency performance under high load.',
            'Refactored Redux with selective re-rendering, enhancing frontend responsiveness.',
          ]
        },
        {
          name: 'PeoplMap Administration',
          description: [
            'Engineered Django backend for admin dashboard to manage tenants and clients, with secure REST APIs (Django, DRF,Redis).',
            'Implemented RBAC and Angular routing guards, reducing access issues (Angular, Django).',
            'Automated admin workflows with Django/Apache and optimized caching, API endpoints, and DNS for high-performance tenant management.',
            'Configured Keycloak for centralized authentication and role-based access management.',
          ]
        }
      ],
      skills: [
        'Django',
        'Django REST Framework',
        'keycloak',
        'JavaScript',
        'websockets',
        'React.js',
        'Redux',
        'Angular',
        'docker',
        'git',
        'postgresql',
        'Node.js',
        'Apache',
        'Bash',
        'LiveKit'
      ],
    },
    {
      title: 'Backend Developer Intern',
      date: 'Feb. 2024– Jun. 2024',
      company: "Digitalberry, Lac 2, Tunisia",
      current: false,
      gotBulletPoints: true,
      description: [
        'Architected and deployed 5+ Django microservices with independent scaling and service isolation (Django, PostgreSQL,Redis, Docker)',
        'Containerized the entire application stack with Docker and Docker Compose, reducing deployment time',
        'Built a WebSocket-based chat system with image sharing across distributed microservices (WebSocket, Django, Redis).',
        'Implemented Celery task scheduling with Redis broker and real-time monitoring via Flower dashboard (Celery, Redis,Django).',
        'Designed JWT-based authentication with RBAC to secure all APIs, adhering to OWASP principles.',
        'Developed a multi-database architecture applying database-per-service patterns and optimized queries for performance.',
        'Created RESTful APIs for 5 business domains (Auth, Tasks, Chat, Cryptography, Notifications) ensuring inter-service data consistency',
        'Integrated Prometheus, RedisInsight, and custom metrics for real-time system monitoring.',
      ],
      skills: [
        'Django',
        'Django REST Framework',
        'postgresql',
        'angular',
        'Redis',
        'docker',
        'git',
        'Celery',
      ],
    },
  ]);
}
