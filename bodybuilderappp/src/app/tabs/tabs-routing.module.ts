import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'excercise',
        loadChildren: () => import('../excercise/excercise.module').then(m => m.ExcercisePageModule)
      },
      {
        path: 'nutrition',
        loadChildren: () => import('../nutrition/nutrition.module').then(m => m.NutritionPageModule)
      },
      {
        path: 'logout',
        loadChildren: () => import('../logout/logout.module').then( m => m.LogoutPageModule)
      },
      
      {
        path: '',
        redirectTo: '/tabs/excercise',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/excercise',
    pathMatch: 'full'
  },
  {
    path: 'excercise',
    loadChildren: () => import('../excercise/excercise.module').then( m => m.ExcercisePageModule)
  },
  {
    path: 'nutrition',
    loadChildren: () => import('../nutrition/nutrition.module').then( m => m.NutritionPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('../logout/logout.module').then( m => m.LogoutPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}