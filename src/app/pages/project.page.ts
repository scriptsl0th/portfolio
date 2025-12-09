import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideExternalLink } from '@ng-icons/lucide';
import { radixLockClosed } from '@ng-icons/radix-icons';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
  selector: 'app-projects',
  imports: [HlmCardImports, HlmButtonImports, HlmBadgeImports, HlmIconImports],
  providers: [
    provideIcons({
      lucideExternalLink,
      radixLockClosed,
    }),
  ],
  template: `
    <section class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div class="flex flex-col gap-8">
        <!-- Section Header -->
        <div class="text-center">
          <div
            class="inline-flex items-center gap-2 text-lg font-mono text-zinc-600 dark:text-zinc-400"
          >
            <span class="w-8 h-px bg-zinc-300 dark:bg-zinc-700"></span>
            <span>Projects</span>
            <span class="w-8 h-px bg-zinc-300 dark:bg-zinc-700"></span>
          </div>
        </div>

        <!--  Projects Grid -->
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          @for (item of projects(); track $index) {
          <!--  Project Card -->
          <div hlmCard class="p-6">
            <!-- Project Type Badge -->
            <span hlmBadge class="bg-blue-500 text-white dark:bg-blue-600">
              {{ item.type }}
            </span>

            <!-- Project Title -->
            <h3 class="text-xl font-bold">
              {{ item.name }}
            </h3>

            <!-- Project Description -->
            <p
              class="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed grow"
            >
              {{ item.description }}
            </p>

            <!-- Key Highlights -->
            @if(item.highlights && item.highlights.length > 0) {

            <h4
              class="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"
            >
              Key Features
            </h4>
            <ul class="flex flex-col gap-2 mb-4">
              @for (highlight of item.highlights.slice(0, 4); track $index) {
              <li
                class="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400"
              >
                <div
                  class="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0"
                ></div>
                <span>{{ highlight }}</span>
              </li>
              }
            </ul>
            }

            <!-- Technologies -->

            <h4
              class="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"
            >
              Technologies
            </h4>
            <div class="flex flex-wrap gap-2">
              @for (technology of item.techs; track $index) {
              <span variant="secondary" hlmBadge>
                {{ technology }}
              </span>
              } @if(item.techs.length > 6) {
              <span hlmBadge> +{{ item.techs.length - 6 }} </span>
              }
            </div>

            <!-- Action Button -->
            <div hlmCardAction class="w-full">
              @if(item.website){
              <a
                [href]="item.website"
                target="_blank"
                rel="noopener noreferrer"
                hlmBtn
                size="lg"
                class="w-full"
              >
                <ng-icon name="lucideExternalLink" hlm size="sm" />
                Explore
              </a>
              } @else {
              <button
                hlmBtn
                size="lg"
                class="w-full"
                [disabled]="true"
                variant="outline"
              >
                <ng-icon name="radixLockClosed" hlm size="sm" />
                Private Project
              </button>
              }
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Projects {
  projects = signal([
    {
      name: 'PeoplMap',
      type: 'Collaboration platform',
      description:
        'Immersive video conferencing platform transforming remote work with 3D virtual offices and lifelike avatars. Features AI-powered meeting transcription, seamless calendar integration, and secure sovereign hosting to foster authentic human connection.',
      techs: [
        'React.js',
        'Redux',
        'Node.js',
        'PostgreSQL',
        'Docker',
        'Keycloak',
        'Socket.IO',
        'LiveKit',
      ],
      website: 'https://www.peoplmap.com/',
      highlights: [
        'Immersive 3D Virtual Offices',
        'AI Meeting Transcription',
        'Sovereign & Secure Hosting',
        'LiveKit & Socket.IO Integration',
      ],
    },
    {
      name: 'PeoplMap Administration',
      type: 'PeoplMap Management System',
      description:
        'PeoplMap Administration is a management system for PeoplMap platform. It allows admin to manage users, realms, domains, and virtual offices.',
      techs: ['Angular', 'Django', 'Django REST Framework', 'PostgreSQL', 'Docker', 'Bash', 'Apache'],
      website: '',
      highlights: [
        'User management',
        'Realm and Domain management',
        'Virtual office management',
        'Reduced virtual office creation time by 40%',
      ],
    },
    {
      name: 'BerryChron',
      type: 'Monitoring System',
      description:
        'BerryChron is a monitoring system for DigitalBerry. It allows admin to monitor tasks(Certificates, Certificate Signing Request(CSR), and more) and their status and system status such as microservices.',
      techs: ['Django', 'Django REST Framework', 'Angular', 'Redis', 'Celery', 'PostgreSQL', 'GitLab', 'Docker',],
      website: '',
      highlights: [
        'Real-time monitoring',
        'Task management',
        'System status monitoring',
        'Improved monitoring efficiency by 30%',
      ],
    },
    // {
    //   name: 'Konnect Spring Boot Starter',
    //   type: 'Open Source Library',
    //   description:
    //     'A robust Spring Boot starter for integrating with the Konnect Payment Gateway. Handles low-level HTTP communication, authentication, and error handling with production-grade features like auto-configuration, webhook handling, and resilience patterns.',
    //   techs: ['spring', 'maven', 'resilience4j', 'junit', 'java'],
    //   website: 'https://github.com/scriptsl0th/konnect-spring-boot-starter',
    //   highlights: [
    //     'Auto-configuration for Spring Boot',
    //     'Secure webhook handling',
    //     'Payment verification utilities',
    //     'Built-in rate limiting & retries',
    //     'Published to Maven Central',
    //   ],
    // },
    // {
    //   name: 'Keycloak Custom Theme with Keycloakify',
    //   type: 'Authentication UI Customization',
    //   description:
    //     'Custom Keycloak login theme built with Keycloakify and Tailwind CSS. Modernizes the default Keycloak interface with responsive design, dark mode support, and customized email templates for enhanced user experience.',
    //   techs: ['react', 'typescript', 'tailwindcss', 'keycloakify', 'keycloak'],
    //   website:
    //     'https://github.com/scriptsl0th/keycloak-react-custom-theme-keycloakify',
    //   highlights: [
    //     'Modern React-based login interface',
    //     'Responsive design with Tailwind CSS',
    //     'Dark mode support',
    //     'Custom email templates',
    //     'Keycloakify integration',
    //   ],
    // },
  ]);
}