import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { NebularThemeModule } from 'src/app/shared/modules/nebular-theme.module';
import { Routes, RouterModule } from '@angular/router';
import { HomepageHeaderComponent } from 'src/app/shared/components/homepage-header/homepage-header.component';
import { CacksComponent } from 'src/app/shared/components/cacks/cacks.component';
import { ProductDetialsComponent } from 'src/app/shared/components/product-detials/product-detials.component';
const routes: Routes = [
  {path: '', component: HomepageComponent,
      children: [
        {path: '', component: CacksComponent},
        {path: 'product/:id', component: ProductDetialsComponent}
      ]
  },
  {path: '**', redirectTo: ''}
]
@NgModule({
  declarations: [HomepageComponent, HomepageHeaderComponent, CacksComponent, ProductDetialsComponent],
  imports: [
    CommonModule,
    NebularThemeModule,
    RouterModule.forChild(routes)
  ]
})
export class HomepageModule { }
