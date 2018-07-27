import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from './modules/auth/auth.component';
import { TaskComponent } from './modules/task/task.component';
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
//import { FormComponent } from "./core/form.component";
//import { NotFoundComponent } from "./core/notFound.component";
//import { ProductCountComponent } from "./core/productCount.component";
//import { CategoryCountComponent } from "./core/categoryCount.component";
//import { ModelResolver } from "./model/model.resolver";
//import { TermsGuard } from "./terms.guard";
//import { UnsavedGuard } from "./core/unsaved.guard";
//import { LoadGuard } from "./load.guard";

const routes: Routes = [
    //{ path: "", redirectTo: "home", pathMatch: "full" },
    //{ path: "task", component: TaskComponent },
    //{ path: "**", component: DashboardComponent }
]
export const routing = RouterModule.forRoot(routes);
