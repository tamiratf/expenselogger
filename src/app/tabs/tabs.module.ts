import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { BudgetModule } from '../pages/budget/budget.module';
import { ActivityModule } from '../pages/activity/activity.module';
import { LoginModule } from '../auth/login/login.module';
import { SignupModule } from '../auth/signup/signup.module';
import { ForgotpasswordModule } from '../auth/forgotpassword/forgotpassword.module';
import { AccountModule } from '../pages/account/account.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    DashboardModule,
    AccountModule,
    BudgetModule,
    ActivityModule,
    LoginModule,
    SignupModule,
    ForgotpasswordModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
