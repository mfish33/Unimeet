import { query, style, animate, group } from '@angular/animations';

export const left = [
    query(':enter, :leave', style({ position: 'absolute', width: '100%', top:'50%' }), { optional: true }),
    group([
        query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
            optional: true,
        }),
        query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(100%)' }))], {
            optional: true,
        }),
    ]),
  ];
  
  export const right = [
    query(':enter, :leave', style({ position: 'absolute', width: '100%', top:'50%' }), { optional: true }),
    group([
        query(':enter', [style({ transform: 'translateX(100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
            optional: true,
        }),
        query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))], {
            optional: true,
        }),
    ]),
  ];